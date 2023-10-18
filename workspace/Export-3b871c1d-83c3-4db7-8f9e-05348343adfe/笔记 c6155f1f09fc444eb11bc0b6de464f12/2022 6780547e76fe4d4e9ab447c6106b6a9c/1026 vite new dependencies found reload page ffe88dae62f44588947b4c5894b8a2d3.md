# 1026 vite new dependencies found reload page

dev 环境是，发现新依赖，导致reload页面

![Untitled](1026%20vite%20new%20dependencies%20found%20reload%20page%20ffe88dae62f44588947b4c5894b8a2d3/Untitled.png)

****vite-plugin-optimize-persist，可以前置需要被vite编译的依赖****

[GitHub - antfu/vite-plugin-optimize-persist: Persist dynamically analyzed dependencies optimization](https://github.com/antfu/vite-plugin-optimize-persist)

![Untitled](1026%20vite%20new%20dependencies%20found%20reload%20page%20ffe88dae62f44588947b4c5894b8a2d3/Untitled%201.png)

```json
// package.json
{
  // ...
  "vite": {
    "optimizeDeps": {
      "include": [
        // managed by `vite-plugin-optimize-persist`
       "@chenfengyuan/vue-qrcode",
        "@element-plus/icons",
        "@element-plus/icons-vue",
        "ansi-to-html",
        "axios",
        "camelcase",
        "core-js/es/array/find-last-index",
        "cron-parser",
        "echarts",
        "echarts/charts",
        "echarts/components",
        "echarts/core",
        "echarts/renderers",
        "element-plus",
        "js-cookie",
        "linkify-string",
        "linkifyjs",
        "lodash",
        "luxon",
        "mockjs",
        "moment",
        "nanoid",
        "nprogress",
        "qrcode",
        "screenfull",
        "showdown",
        "vue-echarts"
      ]
    }
  }
}
```

## 问题

echarts无法完全被前置编译

```json
[1] 2:36:08 PM [vite] new dependencies found: 
echarts/core, echarts/renderers, echarts/charts, echarts/components, updating...
```