# wsl使用

[0419 linux 命令](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/0419%20linux%20%E5%91%BD%E4%BB%A4%2003cc0803d5634bf5a91db39fc77f3c36.md)

[1128 wsl 固定ip](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/2022%206780547e76fe4d4e9ab447c6106b6a9c/1128%20wsl%20%E5%9B%BA%E5%AE%9Aip%20ec4a1645267346c0a3f9ef68f54f0501.md)

[1017 wsl常用命令](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/2022%206780547e76fe4d4e9ab447c6106b6a9c/1017%20wsl%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%209a5a953dd4bf4818883b2ed44cf5fe0c.md)

[1014 wsl服务无法被本机访问](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/2022%206780547e76fe4d4e9ab447c6106b6a9c/1014%20wsl%E6%9C%8D%E5%8A%A1%E6%97%A0%E6%B3%95%E8%A2%AB%E6%9C%AC%E6%9C%BA%E8%AE%BF%E9%97%AE%202529ad1d5ccc4542bc469eb9274e126e.md)

[1014 wsl mysql 访问](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/2022%206780547e76fe4d4e9ab447c6106b6a9c/1014%20wsl%20mysql%20%E8%AE%BF%E9%97%AE%2071786fea423344eaadbdb4f505905ccd.md)

[0905 wsl nginx 使用](../../%E7%AC%94%E8%AE%B0%20c6155f1f09fc444eb11bc0b6de464f12/2022%206780547e76fe4d4e9ab447c6106b6a9c/0905%20wsl%20nginx%20%E4%BD%BF%E7%94%A8%205a75c4e3bf9e421e9f9b5b64a3b7ef9d.md)

## 初始化

```bash
# 1. 打开/关闭windows 功能 → linux子系统
# 2. microsoft store 下载 ubuntu
# 3. 打开ubuntu 设置用户密码

wsl --set-default-version 2
wsl --update
wsl --set-version Ubuntu-22.04 2
wsl --list --verbose

# 参考的对象类型不支持尝试的操作
# cmd管理员执行命令 netsh winsock reset。

wsl --export Ubuntu-18.04 d://wslubuntu//ubuntu-18.04.tar
wsl --unregister Ubuntu-18.04
wsl --import Ubuntu-18.04 d://wslubuntu d://wslubuntu//ubuntu-18.04.tar

```

## ubuntu 安装 docker

```bash
# 安装 docker desktop /设置 Integration wsl
https://www.docker.com/products/docker-desktop/

# 迁移 库位置 docker-desktop docker-desktop-data
wsl --export 
wsl --import

## 迁移后 重新设置 wsl 版本为2

## 重启 docker

```

## node/前端环境

```bash
# 安装 curl & nvm 
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm ls
nvm install --lts

# 安装 yarn
npm install -g yarn

sudo apt install make

# 安装项目
# 打开vscode 
code .
# 重新安装 vscode 依赖

```