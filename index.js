const axios = require(`axios`);
const extract = require(`extract-zip`);
const { createWriteStream } = require(`fs`);
const { rm, mkdir, unlink } = require(`fs/promises`);
const { join } = require(`path`);

const unofficialNotionAPI = `https://www.notion.so/api/v3`;
// const { NOTION_TOKEN, NOTION_SPACE_ID, NOTION_USER_ID } = process.env;
const NOTION_TOKEN = "v02%3Auser_token_or_cookies%3AcaajaXUB6rMNKOY1yxIQrzj_wH46beRG6c2zNjf_9UPqLInvI3qwC1t5eH1YQ0ZZS_DpVug54ui_HpUEoOHGXa-B9KI2nQKYJYNKBCddWQRkrjgRNSvr_R0pHTx8yAhqy_Mu"
const NOTION_SPACE_ID = "54fdf465-3d1a-4b96-bedc-6e19dab04cdf"
const NOTION_FOLDER_ID = "c6155f1f-09fc-444e-b11b-c0b6de464f12"
const NOTION_USER_ID = "957a795a-484a-4db1-8fec-cdbe66701569"
const client = axios.create({
  baseURL: unofficialNotionAPI,
  headers: {
    Cookie: `token_v2=${NOTION_TOKEN};`,
    "x-notion-active-user-header": NOTION_USER_ID,
  },
});

if (!NOTION_TOKEN || !NOTION_SPACE_ID || !NOTION_USER_ID) {
  console.error(
    `Environment variable NOTION_TOKEN, NOTION_SPACE_ID or NOTION_USER_ID is missing. Check the README.md for more information.`
  );
  process.exit(1);
}

const sleep = async (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const round = (number) => Math.round(number * 100) / 100;

const exportFromNotion = async (destination, format) => {
  const task = {
    eventName: `exportSpace`,
    request: {
      spaceId:NOTION_SPACE_ID,
      // block: {
      //   id: NOTION_FOLDER_ID,
      //   spaceId: NOTION_SPACE_ID
      //   // id: 'c6155f1f-09fc-444e-b11b-c0b6de464f12',
      //   // spaceId: "54fdf465-3d1a-4b96-bedc-6e19dab04cdf"
      // },
      exportOptions: {
        exportType: format,
        timeZone: `Europe/Berlin`,
        locale: `en`,
      },
      // recursive: true,
      shouldExportComments:false
    },
  };
  const {
    data: { taskId },
  } = await client.post(`enqueueTask`, { task });

  console.log(`Started Export as task [${taskId}].\n`);

  let exportURL;
  let fileTokenCookie;
  while (true) {
    await sleep(2);
    const {
      data: { results: tasks },
      headers: { 'set-cookie': getTasksRequestCookies },
    } = await client.post(`getTasks`, { taskIds: [taskId] });
    const task = tasks.find((t) => t.id === taskId);

    if (task.error) {
      console.error(`❌ Export failed with reason: ${task.error}`);
      process.exit(1);
    }

    console.log(`Exported ${task.status.pagesExported} pages.`);

    if (task.state === `success`) {
      exportURL = task.status.exportURL;
      fileTokenCookie = getTasksRequestCookies.find((cookie) =>
        cookie.includes("file_token="),
      );
      console.log(`\nExport finished.`);
      break;
    }
  }

  const response = await client({
    method: `GET`,
    url: exportURL,
    responseType: `stream`,
    headers: {
      Cookie: fileTokenCookie,
    },
  });

  const size = response.headers["content-length"];
  console.log(`Downloading ${round(size / 1000 / 1000)}mb...`);

  const stream = response.data.pipe(createWriteStream(destination));
  await new Promise((resolve, reject) => {
    stream.on(`close`, resolve);
    stream.on(`error`, reject);
  });
};

const run = async () => {
  const workspaceDir = join(process.cwd(), `workspace`);
  const workspaceZip = join(process.cwd(), `workspace.zip`);

  await exportFromNotion(workspaceZip, `markdown`);
  await rm(workspaceDir, { recursive: true, force: true });
  await mkdir(workspaceDir, { recursive: true });
  await extract(workspaceZip, { dir: workspaceDir });
  await unlink(workspaceZip);

  console.log(`✅ Export downloaded and unzipped.`);
};

run();
