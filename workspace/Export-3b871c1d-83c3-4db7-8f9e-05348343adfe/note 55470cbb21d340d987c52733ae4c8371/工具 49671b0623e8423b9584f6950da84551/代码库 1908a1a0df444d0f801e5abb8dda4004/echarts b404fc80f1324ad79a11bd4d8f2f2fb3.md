# echarts

## vue

- vue-echarts ,  setOption中 notMerge默认为false，导致动态更新数据，存在脏数据
    
    ```jsx
    import VChart, { UPDATE_OPTIONS_KEY } from "vue-echarts";
    const config = reactive({
      notMerge: true
    })
    provide(UPDATE_OPTIONS_KEY, config)
    ```
    

## echarts

- treemap 数据展示存在 白色块
    
    ```jsx
    option.upperLabel 显示 bug, 解决方案 ，仅仅在第二层展示 upperLabel
    ```