# 1024 vue components api 下 父组件调用子组件方法

父组件使用`ref` 获取实例， 子组件使用 `defineExpose` 暴露方法

```html
//parents.vue
<template>
  <div >
    <div @click="callChild">click</div>
    <section-child ref="child"></section-child>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import SectionChild from './child.vue';
const child = ref()
const callChild=()=>{
  child.value.func()
}
</script>
```

```html
//child.vue

<template>
  <div >
    <div>son</div>
  </div>
</template>

<script setup lang="ts">
const func =()=>{
  console.log('call by parent.vue');
}
defineExpose({
  func:func
})
</script>

```