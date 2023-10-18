# 1207 input的blur 事件和其他click事件优先级

## 使用mousedown让其优先执行，将click事件改为mousedown

## click 事件的模板，推迟隐藏

```jsx
<input type="text" class="filtered-search-item-input" ref="inputDom" autofocus
           @blur="inputBlur">
<my-target v-if='this.showTarget'></my-target>

const inputBlur = () => {
  setTimeout(() => {
	   this.showTarget = false;
  }, 200)
}
```