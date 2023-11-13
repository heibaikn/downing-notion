# 0907 ducusourus 部署

## 路由

有文档，blog，插件，页面路由 几种， 在dyte project 中， 使用插件管理文档，

所以修改 plugin-doc 的 routeBasePath 可实现

tips: 浏览器 `.docusaurus/routes.js` 可查看react组装后的路由

![Untitled](0907%20ducusourus%20%E9%83%A8%E7%BD%B2%2068ad519ad1c14f1e8298cdc3b8cf457c/Untitled.png)

## 打包输出路径

webpack 配置

![Untitled](0907%20ducusourus%20%E9%83%A8%E7%BD%B2%2068ad519ad1c14f1e8298cdc3b8cf457c/Untitled%201.png)

静态资源输出路径

```json
{
"script":{
"build:local": "docusaurus build --out-dir='../dist/docs'",
}
}
```

## 静态资源访问路径

修改 baseUrl

![Untitled](0907%20ducusourus%20%E9%83%A8%E7%BD%B2%2068ad519ad1c14f1e8298cdc3b8cf457c/Untitled%202.png)

## history路由修改为hash 路由

修改 `@docusaurus/router`