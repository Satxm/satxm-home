---
title: "Debian / Ubuntu 一些设置"
description: "Debian / Ubuntu 一些设置"
pubDate: "2024/8/2 13:45"
image: "/imgs/home.jpg"
categories:
  - 技术
tags:
  - Debian
  - Ubuntu
---

## Debian启用ll命令

`ll` 是 `ls -l` 这个命令的别名

让Debian支持ll命令的话则需要修改用户目录下面的.bashrc 配置文件

```bash
cd ~  #进入当前用户目录
vim .bashrc  #使用vim 编辑.bashrc配置文件
```

找到这样几行

```vim
# You may uncomment the following lines if you want `ls' to be colorized:
# export LS_OPTIONS='--color=auto'
# eval "`dircolors`"
# alias ls='ls $LS_OPTIONS'
# alias ll='ls $LS_OPTIONS -l'
# alias l='ls $LS_OPTIONS -lA' 
```

把相关行前面的#号去掉，如下

```vim
# You may uncomment the following lines if you want `ls' to be colorized:
export LS_OPTIONS='--color=auto'
eval "`dircolors`"
alias ls='ls $LS_OPTIONS'
alias ll='ls $LS_OPTIONS -l'
alias l='ls $LS_OPTIONS -lA'
```

然后```wq!```保存退出执行命令重新载入

```bash
source ~/.bashrc
```

## 将硬件时钟设置为本地时区

```bash
timedatectl set-timezone "Asia/Shanghai" # 设置时区为中国标准时间（CTS）
timedatectl set-local-rtc 1 # 设置硬件时钟使用本地时区
```

## 修改 SSH 连接后显示欢迎语

最先显示内容，例如打印系统信息、内核信息等，可以运行自定义脚本，数字越小运行越早

```bash
vim /etc/update-motd.d/00-header 
```

```vim
#!/bin/sh

[ -r /etc/lsb-release ] && . /etc/lsb-release

if [ -x /usr/bin/lsb_release ]; then
        # Fall back to using the very slow lsb_release utility
        LSBI=$(lsb_release -s -i)
        LSBR=$(lsb_release -s -r)
fi

printf "Welcome to %s %s (%s %s %s)\n" "$LSBI" "$LSBR" "$(uname -o)" "$(uname -r)" "$(uname -m)"
```

输出结果（以 Debian 12 为示例）

```bash
Welcome to Debian 12 (GNU/Linux 6.1.0-23-amd64 x86_64)
```

自定义内容可修改以下内容，不可运行脚本，仅显示文本

```bash 
vim /etc/motd
```

## 修改语言

```bash
vim /etc/default/locale
```

```vim
# en_US
LANG="en_US.UTF-8"
LANGUAGE="en_US:en" 
# zh_CN
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh" 
```

## SSH连接时更换为中文

修改 ```/etc/locale.gen```

```bash
vim /etc/locale.gen
```

添加以下内容或取消以下内容前注释符号

```vim
en_US.UTF-8 UTF-8
zh_CN.GB18030 GB18030
zh_CN.GBK GBK
zh_CN.UTF-8 UTF-8
``` 

之后运行 ```locale-gen``` 重新生成语言

修改 ```.bashrc``` 或 ```/etc/bash.bashrc``` 添加以下内容，以便SSH连接后切换中文

```vim 
# Change Language to zh-CN when SSH connected:
if [[ -n $SSH_CONNECTION ]] ; then
    export LANG="zh_CN.UTF-8"
    export LANGUAGE="zh_CN:zh"
fi
```

## 配置SSH配置文件

修改 ```/etc/ssh/sshd_config``` 文件，添加

```bash
sudo vim /etc/ssh/sshd_config
```

```vim
PermitRootLogin yes # 允许 root 登录
PasswordAuthentication yes # 允许密码登录
PubkeyAuthentication yes # 允许证书登录
```

## 编辑 sudoers 文件限制 sudo 权限

我们需要编辑 sudoers 文件。

```bash
sudo visudo
```
在编辑器中向下滚动，直到您看到```User privilege specification```部分。

在该部分下方添加这些行。

```vim
# User privilege specification
root    ALL=(ALL:ALL) ALL
username    ALL=(ALL:ALL) ALL
```

**或**在编辑器中向下滚动，直到您看到```Allow members of group sudo to execute any command```部分。

在该部分下方添加这些行。

```vim
# Allow members of group sudo to execute any command
%sudo	ALL=(ALL:ALL) ALL
%wheel	ALL=(ALL:ALL) ALL
```

## Tab键不能自动补全问题解决

1、安装 ```bash-completion``` 软件包

```bash
sudo apt install bash-completion
```

2、修改 ```/etc/bash.bashrc``` 文件（需要root权限）

```bash
sudo vim /etc/bash.bashrc  
```
寻找以下内容

```vim
# enable bash completion in interactive shells
# if ! shopt -oq posix; then
#   if [ -f /usr/share/bash-completion/bash_completion ]; then
#     . /usr/share/bash-completion/bash_completion
#   elif [ -f /etc/bash_completion ]; then
#     . /etc/bash_completion
#   fi
# fi
```
将注释符号#去掉，即改成

```vim
# enable bash completion in interactive shells
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi
```

**或**修改用户目录 ```.bashrc``` 文件

```bash 
cd ~ 
vim .bashrc
```

找到文件中的下列代码

```vim
# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
# if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
#     . /etc/bash_completion
# fi
```
将注释符号#去掉，即改成

```vim
# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
    . /etc/bash_completion
fi
```

3、最后 source 重载 ```/etc/bash.bashrc``` 文件或用户目录 ```.bashrc``` 文件

```bash
source /etc/bash.bashrc
source .bashrc
```
## Ubuntu卸载旧内核

Ubuntu查看已安装内核

```bash
dpkg --get-selections | grep linux 
```

Ubuntu卸载旧内核

```bash
sudo apt-get remove 需要卸载的内核
```

Ubuntu卸载旧内核配置文件

```bash
sudo apt-get purge 需要卸载的内核 
```

更新系统引导

```bash
sudo update-grub 
```
