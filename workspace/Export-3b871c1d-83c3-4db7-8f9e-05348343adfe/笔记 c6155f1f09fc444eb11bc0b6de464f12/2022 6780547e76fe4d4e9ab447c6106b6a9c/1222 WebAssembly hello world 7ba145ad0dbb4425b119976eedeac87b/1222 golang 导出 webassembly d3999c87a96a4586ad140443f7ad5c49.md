# 1222 golang 导出 webassembly

[Golang WebAssembly 前端开发 - 1. Hello world.md](https://studygolang.com/articles/17320)

源码

```html
package main

func main() {
    println("Hello, world!")
}
```

执行命令，构建wasm 文件

```html
GOOS=js GOARCH=wasm go build -o go_main.wasm
```

使用 [https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js](https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js) wasmSDK

```html
<head>
  <meta charset="utf-8">
  <script src="./wasm_exec.js"></script>
  <script>
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch("go_main.wasm"), go.importObject).then((result) => {
      go.run(result.instance);
    });
  </script>
</head>
```