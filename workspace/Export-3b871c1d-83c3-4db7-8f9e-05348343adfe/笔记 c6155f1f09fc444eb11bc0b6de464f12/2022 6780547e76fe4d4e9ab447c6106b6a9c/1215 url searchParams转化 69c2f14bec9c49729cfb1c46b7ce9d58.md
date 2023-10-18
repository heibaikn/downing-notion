# 1215 url searchParams转化

## obj 2 string

```jsx
new URLSearchParams(obj).toString()
```

## string 2 obj

```jsx
Object.fromEntries((new URLSearchParams('a=1&b=2')).entries())
```