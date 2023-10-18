# 0531 monaco editor 展示json

`editor.create(dom,options)`

[IStandaloneEditorConstructionOptions | Monaco Editor API](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html)

`readOnly: true` 属性设置后， `editor?.getAction('editor.action.formatDocument').run()` 不生效

需要延迟 设置 readOnly

```jsx
const self = reactive({
  monaco: {
    height: '40vh',
    theme: 'vs-dark',
    defaultLanguage: 'json',
    options: {
      automaticLayout: true,
      // readOnly: true,
      minimap: {
        enabled: false
      },
      scrollBeyondLastLine: false,
      contextmenu: false
    },
    format: true,
    defaultValue: ''
  }
})
const handleMount = (editor: any) => {
  console.log(editor);
  editor?.getAction('editor.action.formatDocument').run()
}
```