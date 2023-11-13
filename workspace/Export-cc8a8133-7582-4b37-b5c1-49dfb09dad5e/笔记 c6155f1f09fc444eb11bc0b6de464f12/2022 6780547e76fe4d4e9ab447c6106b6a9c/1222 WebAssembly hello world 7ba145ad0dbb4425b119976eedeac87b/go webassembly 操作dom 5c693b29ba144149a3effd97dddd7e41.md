# go webassembly 操作dom

## syscall/js

 `syscall/js`   获取在 webassembly 宿主环境

[js](https://pkg.go.dev/syscall/js#FuncOf)

```go
func say() {
	var cb js.Func
	cb = js.FuncOf(func(this js.Value, args []js.Value) any {
		fmt.Println("button clicked", args)
		return nil
	})
	js.Global().Get("document").Call("querySelector", "body").Call("append", "go program work in js")
	js.Global().Get("document").Call("querySelector", "body").Call("addEventListener", "click", cb)

}
```

```go
// 依旧收到同源策略影响
func getData() string {
	resp, err := http.Get("http://127.0.0.1:8081/")
	if err != nil {
		return "error"
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "error"
	}
	// Convert the body to type string
	res := string(body)
	return res
}
```