# 1220 vue iscomponet 实现局部 h函数的居然渲染

## case

```html
<template>
	<div>
		<component :is='infoRender()'></component>
	</div>
</template>

const infoRender = ()=>{
  return h('div','hello world')
}
```