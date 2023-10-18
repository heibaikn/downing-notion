# npm

[0610 npm 命令](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/0610%20npm%20%E5%91%BD%E4%BB%A4%204225fb02ae70477d98156e3416e83e65.md)

[0419 npm 缓存管理](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/0419%20npm%20%E7%BC%93%E5%AD%98%E7%AE%A1%E7%90%86%205c9408caca9a416e96758b159810500f.md)

[1010 npm 镜像源快速切换](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/2022%206780547e76fe4d4e9ab447c6106b6a9c/1010%20npm%20%E9%95%9C%E5%83%8F%E6%BA%90%E5%BF%AB%E9%80%9F%E5%88%87%E6%8D%A2%20fe80456fb057428386d39f57e98c60f6.md)

## 镜像源

```jsx
**pnpm config set registry http://registry.npm.taobao.org
pnpm config set registry http://registry.npm.bilibili.co/
npm config  set registry https://registry.npmjs.org/**

```

## nrm 使用

```bash
npm i -g nrm
## 查看各镜像响应时间
nrm test

## nrm use 

```