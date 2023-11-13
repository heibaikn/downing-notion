# github issue : vue-flow

[https://github.com/bcakmakoglu/vue-flow/discussions/1143](https://github.com/bcakmakoglu/vue-flow/discussions/1143)

我的项目中使用了vue-flow, 需求是期望导出流程图片

我的实现方式是在项目中引入 html2canvas, html2canvas 中需要一个 dom参数

如果我传出 div.vue-flow__pane  导出的图片如下

如果我传入div.flow__transformationpane 导出的图片如下

现在我是通过 动态修改div.flow__transformationpane 宽高的方式实现了 图片的完成导出，但感觉这种方式不优雅

I use vue-flow in my project, and the requirement is to export vue-flow pictures.

 I idea  is to import html2canvas into the project. And html2canvas requires a dom parameter.

```jsx
const canvas = await html2canvas(el)
```

If  params is div.vue-flow__pane the exported image is as follows

If params is div.flow__transformationpane, the exported image is as follows

Now I realize the complete export of the picture by dynamically modifying the width and height of div.flow__transformationpane, but I feel that this method is not elegant.

add an export feature to @vue-flow/controls

**reason:**
When the flow becomes too complex, the canvas cannot display the entire flow, and reducing the image size makes it difficult to read. so I would like to add an export image feature to @vue-flow/controls

**implementation steps:**

1. Import **html2canvas**.
2. Add width and height to the **`div.vue-flow__transformationpane`** element
    
    [https://github.com/bcakmakoglu/vue-flow/assets/17714507/6fea734b-9738-409e-9ce7-add4e3ce2600](https://github.com/bcakmakoglu/vue-flow/assets/17714507/6fea734b-9738-409e-9ce7-add4e3ce2600)
    
3. The width and height values should be configurable through parameters
4. Expose an "export" method to enable image downloads.

```
  const el = contianer.querySelector(".vue-flow__transformationpane")
  const canvas = await html2canvas(el)
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob!);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'screenshot.png'; // 可以指定下载的文件名
    a.click();
    URL.revokeObjectURL(url);
  })

```