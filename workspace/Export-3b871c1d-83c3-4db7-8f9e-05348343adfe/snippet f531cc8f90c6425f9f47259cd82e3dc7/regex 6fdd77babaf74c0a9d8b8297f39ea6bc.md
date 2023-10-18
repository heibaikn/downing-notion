# regex

## 替换正则关键字

```tsx
let searched = string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
```