# 1025 流程化工具changeset使用

## 安装

```jsx
pnpm install @changesets/cli -wD
pnpm changeset init
```

## 使用

```bash
# 添加需要发布的包 和日志
npx changeset add
# 更新version
npx changeset version
## 发布
npx changeset publish
```

发布测试版本

```jsx
pnpm changeset pre enter alpha   # 发布 alpha 版本
pnpm changeset pre enter beta    # 发布 beta 版本
pnpm changeset pre enter rc      # 发布 rc 版本

```