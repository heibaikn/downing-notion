# 0831 npm install 知识

## ENV NODE_ENV production

当设置 `ENV NODE_ENV production` 是 `npm install` 不会安装**`devDependencies`**的依赖，

可以通过 `npm install --production=false` 参数控制