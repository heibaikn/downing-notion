# 1018 github workflow

[问题](1018%20github%20workflow%20b8bd8a5bca8946c1bcff82300c6e3c2e/%E9%97%AE%E9%A2%98%209eb2c470321440f38d42bf82d56aab4c.md)

[1018 yaml 格式](1018%20yaml%20%E6%A0%BC%E5%BC%8F%20c45dd9a3436f40558af29d8c680ae677.md)

## 基本结构

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