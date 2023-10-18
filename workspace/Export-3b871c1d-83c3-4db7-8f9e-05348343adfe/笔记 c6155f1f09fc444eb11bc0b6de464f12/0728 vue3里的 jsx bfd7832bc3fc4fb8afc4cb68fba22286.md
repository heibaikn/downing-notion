# 0728 vue3里的 jsx

[组件封装](0728%20vue3%E9%87%8C%E7%9A%84%20jsx%20bfd7832bc3fc4fb8afc4cb68fba22286/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85%20cd7d67e48c5e4d91bf00126ce83765d7.md)

```bash
## 安装
npm i @vitejs/plugin-vue-jsx

## vite.config.js 中开启
# ...
# plugins: [
#      vue(),
#      vueJsx()
# ]
```

## class

```jsx
return (
    <div
      class={{
        'log-title': true,
        'log-empty': !rowData.stackTrace
      }}></div>
		
  )

return  <div  class={!rowData.stackTrace&&'log-empty'}></div>
 
```

## slot

```jsx
<VirtualList
          data={rowData.data}
          options={rowData.options}
          v-slots={{
            default: ({ item, ansi, className }) => {
              return (
                <div class='expand-row'>
                  <div class={className.log} title={item.txt} v-html={ansi(item.txt)}></div>
                </div>
              )
            }
          }}></VirtualList>
```

```bash
<ElFormItem key={props.block.id + propName}>
              {{
                label: () => {
                  return  <>
                      <span class="span-box">
                        <span>{propConfig.label}</span>
                        {propConfig.tips && (
                          <el-tooltip
                            class="item"
                            effect="dark"
                            content={propConfig.tips}
                            placement="bottom">
                            <el-button link>
                              <svg-icon name="ask" />
                            </el-button>
                          </el-tooltip>
                        )}
                      </span>
                    </>
                },
                default: () => {
                  return <>1234</>
                }
              }}
            </ElFormItem>
```

## 指令v-directives

```bash
render() {
    return (
      <div v-myDirective="'red'">
      </div>
    );
 }

const myDirective = ()=>{
   mounted(el, binding, vnode) {
    el.style.color = binding.value; // Set the text color to the directive value
  },
}
```