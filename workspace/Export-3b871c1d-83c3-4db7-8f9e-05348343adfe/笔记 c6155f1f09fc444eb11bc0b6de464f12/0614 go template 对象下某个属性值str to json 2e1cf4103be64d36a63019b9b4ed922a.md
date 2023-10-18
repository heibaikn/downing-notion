# 0614 go template 对象下某个属性值str to json

将 `.itemInfo` 转换为 对象

```jsx
{
  "iteminfo":[{"itemId":"1","itemInfo":"{\"itemuid\":0,\"item_id\":0}}","num":"2"},{"itemId":"1","itemInfo":"{\"itemuid\":0,\"item_id\":0}}","num":"2"}]
}
```

```jsx

{
	"iteminfo":[
{{range $key,$val := .iteminfo}} {{if eq $key 0}}{{else}},{{end}} { "itemId":{{$val.itemId}}, "num":{{$val.num}},"itemInfo":{{$val.itemInfo}} } 
{{end}}
]
}
```