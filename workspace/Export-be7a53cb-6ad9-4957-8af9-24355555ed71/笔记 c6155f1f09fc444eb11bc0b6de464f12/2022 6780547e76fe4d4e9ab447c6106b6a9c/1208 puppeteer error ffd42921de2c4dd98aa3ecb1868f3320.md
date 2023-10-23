# 1208 puppeteer error

## Set "PUPPETEER_SKIP_DOWNLOAD" env variable

[Configuration.skipDownload property | Puppeteer](https://pptr.dev/api/puppeteer.configuration.skipdownload)

根路径下创建 `.puppeteerrc.json`, 配置忽略

```jsx
{
  "skipDownload":true
}
```

忽略下载 puppeteer

```jsx
pnpm i --ignore-scripts puppeteer
```

设置全局变量

```jsx
export PUPPETEER_SKIP_DOWNLOAD='true'
```

## 设置镜像源

Failed to set up Chrome r116.0.5845.96! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download.

```jsx
export PUPPETEER_DOWNLOAD_HOST="[https://npm.taobao.org/mirrors](https://npm.taobao.org/mirrors)"

unset PUPPETEER_SKIP_DOWNLOAD
```

## ubuntu安装 chromium