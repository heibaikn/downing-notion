# go template

[0614 go template 对象下某个属性值str to json](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/0614%20go%20template%20%E5%AF%B9%E8%B1%A1%E4%B8%8B%E6%9F%90%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%80%BCstr%20to%20json%202e1cf4103be64d36a63019b9b4ed922a.md)

## if else

```go
// 值比较
{{if eq .view.f3198 "是"}} 1 {{else}} 0 {{end}}
// 值为空判断且默认值
{{if index .view "f2970"}} {{.view.f2970}}{{else}}1{{end}}

```

online template [https://gotemplate.io/](https://gotemplate.io/)

## range 中的 if else

```tsx
$data = { "planet": [{"a":1},{"a":2},{"a":3},{"a":4}] }

// go template
 [
{{range $key,$val := .planet}}
 {{if eq $key 0}}
		{{$val.a}}
	{{else}}
		,{{$val.a}}
	{{end}} 
{{end}}
]
```

![Untitled](go%20template%20c6d2e195029f4fc6b67aba69a7fbf272/Untitled.png)