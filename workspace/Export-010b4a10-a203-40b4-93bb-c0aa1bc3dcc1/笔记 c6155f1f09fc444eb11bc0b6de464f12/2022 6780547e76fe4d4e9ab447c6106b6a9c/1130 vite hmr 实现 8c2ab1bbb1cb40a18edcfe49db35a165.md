# 1130 vite hmr 实现

## 服务器

在预编译阶段即开发服务器创建时

使用ws库来基于开发服务器（HTTP服务）创建WebSocket服务端
使用`chokidar`创建监听器，监听相关文件变动，针对新增、删除、修改做对应处理

在按需编译阶段即开发服务器运Á行时

监听到的修改文件，通过监听器触发change事件，其回调函数会被执行：

对于js、vue、html、vite配置文件等不同文件的更改会通知浏览器做相关操作，通知的机制就是通过WebSocket连接来实现的
vite配置文件的更改会重启服务器
client目录下文件和html文件会触发full-load类型的操作，该操作浏览器直接是location.reload， 即重新加载
其他文件更改触发update类型操作，而update类型下又细分js-update和css-update子类型，其中对于js模块的更新，会构建?import&t=时间戳形式的地址使用import动态加载模块，加载后的内容会存入队列中批量更新

## 客户端

在按需编译阶段即开发服务器运行时，

接受Websocket通知类型，加载 相应的 修改文件

## plugin-vue

编译vue源码文件，追加 `import.meta.hot.accept` 触发渲染

```jsx
// import.meta.hot 是vite 对外暴露的对象，目的实现 client的hmr
export const _rerender_only = true;
import.meta.hot.accept(({default: updated, _rerender_only: _rerender_only2})=>{
    if (_rerender_only2) {
        __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
    } else {
        __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
    }
}
);

```

![Untitled](1130%20vite%20hmr%20%E5%AE%9E%E7%8E%B0%208c2ab1bbb1cb40a18edcfe49db35a165/Untitled.png)

[Vite](https://vitejs.dev/guide/api-hmr.html#hot-data)