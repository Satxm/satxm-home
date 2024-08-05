---
title: "Python pip 使用国内源"
description: "Python pip 使用国内源"
pubDate: "2024/8/2 13:48"
image: "/imgs/home.jpg"
categories:
  - 技术
tags:
  - Makrdown
---

## 常用国内源：

清华：https://pypi.tuna.tsinghua.edu.cn/simple/

阿里云：http://mirrors.aliyun.com/pypi/simple/

北京外国语大学开源软件镜像站：https://mirrors.bfsu.edu.cn/pypi/web/simple

## 临时使用
可以在使用pip的时候加参数```-i https://pypi.tuna.tsinghua.edu.cn/simple```
例如：```pip install -i http://mirrors.aliyun.com/pypi/simple/ hjson```
这样就会从阿里云这边的镜像去安装hjson库。

## 永久使用
### 在Linux下
新建```~/.pip/pip.conf``` 。
文件夹要加 ```.``` 表示是隐藏文件夹。
```bash
cd ~
mkdir .pip
vim .pip/pip.conf
```
写入内容后，输入```:wq```保存。

### Windows下
直接在user目录中创建一个pip目录，再新建文件pip.ini。
例如在```C:\Users\Admin\pip\pip.ini```写入上述内容。

### pip.conf pip.ini 写入的内容

```vim
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host = mirrors.aliyun.com
```