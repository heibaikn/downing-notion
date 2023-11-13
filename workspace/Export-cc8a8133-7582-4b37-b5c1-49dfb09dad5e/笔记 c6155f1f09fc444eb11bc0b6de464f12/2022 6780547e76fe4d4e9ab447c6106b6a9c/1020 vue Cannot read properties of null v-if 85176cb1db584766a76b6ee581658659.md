# 1020 vue Cannot read properties of null v-if

封装更细的 components ，将v-if 区域抽象为单独 render function

```jsx
<template>
  <div class="build-info-item submodule" v-if="submodule.length">
    <!-- {{info.submodule}} -->
    <span class="title">子模块</span>
    <div class="submodule-info">
      <span class="content" v-for="(item,idx) in submodule">
        <el-tooltip class="item" effect="dark" :content="item.join('  ')"
                    placement="top" :key="idx">
          <span>{{item[1]}} {{item[2].substring(0,8)}}</span>
        </el-tooltip>
      </span>
    </div>
  </div>
</template>
```

![Untitled](1020%20vue%20Cannot%20read%20properties%20of%20null%20v-if%2085176cb1db584766a76b6ee581658659/Untitled.png)

[TypeError: Cannot read properties of null (reading 'insertBefore') · Issue #5657 · vuejs/core](https://github.com/vuejs/core/issues/5657#issuecomment-1286375808)