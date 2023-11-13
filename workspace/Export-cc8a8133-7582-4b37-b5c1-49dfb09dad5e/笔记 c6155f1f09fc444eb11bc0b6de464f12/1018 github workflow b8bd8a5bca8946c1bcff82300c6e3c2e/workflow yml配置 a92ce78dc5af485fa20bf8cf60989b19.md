# workflow.yml配置

## 触发方式

- workflow
- 手动`workflow_dispatch`
- 定时`schedule`

`pull_request`默认的行为是在`merge`完成后处理`merge`后的那次提交中的代码

## 示例

[了解 GitHub Actions - GitHub 文档](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)

```jsx
name: Sync Notion Notes to GitHub
on:
  push:
    branches:
      - doc
  workflow_dispatch: 

jobs:
  sync:
    runs-on: ubuntu-latest
    environment: development 
    steps:
    - name: Check out repository
      uses: actions/checkout@v3
      with:
        ref: 'doc'

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18

    - name: Install dependencies
      run: npm install 

    - name: Sync Notion Notes
      run: npm run backup
        # 在这里编写同步脚本，使用 Notion API 获取笔记内容并推送到GitHub

    - name: Commit and push changes
      env:
        GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
      run: |
        git config --global user.email "heibaikn@163.com"
        git config --global user.name "heibaikn"
        git add .
        git commit -m "Sync Notion notes"
        git push
```