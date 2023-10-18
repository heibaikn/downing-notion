# 0524 vue url 生成

## router.resolve

```bash
const location = this.$router.resolve({ name: 'routeName' }); // 通过路由名称生成URL
const url = location.href;
```