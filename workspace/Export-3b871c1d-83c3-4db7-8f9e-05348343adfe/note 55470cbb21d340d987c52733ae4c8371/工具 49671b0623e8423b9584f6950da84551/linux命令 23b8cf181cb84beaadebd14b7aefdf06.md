# linux命令

```bash
# 设置root密码
sudo passwd root
# 切换用户
su - [root]
# 查看当前用户
whoami
#查看系统版本

cat /proc/version
cat /etc/os-release
uname -a
lsb_release -a

# 刷选
ll |grep xxx
ls -l | grep vue

# 查看进程id
ps -ef|grep node
lsof -i:8080

# 查看激活链接
netstat -ntlp

#   修改文件立即生效
source ~/.bashrc
```

## net

```bash
# 查看ip
ip addr show
ifconfig
```