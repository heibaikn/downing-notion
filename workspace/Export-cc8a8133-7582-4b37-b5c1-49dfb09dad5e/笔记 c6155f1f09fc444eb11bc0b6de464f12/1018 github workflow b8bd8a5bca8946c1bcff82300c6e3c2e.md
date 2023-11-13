# 1018 github workflow

[act ](1018%20github%20workflow%20b8bd8a5bca8946c1bcff82300c6e3c2e/act%20673596fe96aa43da868e37fd1dc8f9dc.md)

[ github Runers](1018%20github%20workflow%20b8bd8a5bca8946c1bcff82300c6e3c2e/github%20Runers%20f9b607e91a654649b49745f792de44fa.md)

[问题](1018%20github%20workflow%20b8bd8a5bca8946c1bcff82300c6e3c2e/%E9%97%AE%E9%A2%98%209eb2c470321440f38d42bf82d56aab4c.md)

[1018 yaml 格式](1018%20yaml%20%E6%A0%BC%E5%BC%8F%20c45dd9a3436f40558af29d8c680ae677.md)

[workflow.yml配置](1018%20github%20workflow%20b8bd8a5bca8946c1bcff82300c6e3c2e/workflow%20yml%E9%85%8D%E7%BD%AE%20a92ce78dc5af485fa20bf8cf60989b19.md)

[workflow 上下文](1018%20github%20workflow%20b8bd8a5bca8946c1bcff82300c6e3c2e/workflow%20%E4%B8%8A%E4%B8%8B%E6%96%87%20aa636899927a4040905f28bef2ecb71c.md)

## 实现功能

1. 创建 release_v_XX版本时
    1. 自动创建 v_XX tag 并推送
    2. release push时 更新 tag标签
2. 从release merge 到 master 时，
    1. 自动升级 version
    2. 生成 changelog 
    3. 生成一条commit
    4. git push
    5. 自动 发布 github release
    6. npm run build
    7. npm publish