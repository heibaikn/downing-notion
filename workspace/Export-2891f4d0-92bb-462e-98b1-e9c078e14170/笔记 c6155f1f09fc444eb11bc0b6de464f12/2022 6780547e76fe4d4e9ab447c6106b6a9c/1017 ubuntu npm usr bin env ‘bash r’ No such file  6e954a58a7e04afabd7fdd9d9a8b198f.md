# 1017 ubuntu npm /usr/bin/env: ‘bash\r’: No such file or directory

## 环境

window 和 wsl 中 都使用了  nvm管理node，

发现是wls中使用了window的环境变量，导致wsl的 npm 命令 命中window的npm

![Untitled](1017%20ubuntu%20npm%20usr%20bin%20env%20%E2%80%98bash%20r%E2%80%99%20No%20such%20file%20%206e954a58a7e04afabd7fdd9d9a8b198f/Untitled.png)

## 解决方式1

每次 启动新命令终端都需要 使用 `nvm use XX` 

## 解决方式2

莫名解决了

```bash
nvm install node --lts
```

## nvm 命令

```jsx
nvm list-remote --lts
```