---
title: 在Termux启动前添加指纹识别
date: 2023-8-15
categories:
    - Termux-topic
tags:
    - Termux-topic
---

# Termux启动时添加指纹识别

在使用Termux终端模拟器时，我们可以通过以下步骤为其添加指纹识别功能。这样，在每次启动Termux时，用户需要进行指纹验证才能进入终端环境。

**1. 安装依赖和Termux API**

首先，我们需要安装一些必要的软件包和Termux API。打开Termux并执行以下命令：

```shell
pkg in jq termu​x-api -y
```

这将安装`jq`（一个用于处理JSON数据的命令行工具）和`termu​x-api`（提供与设备API交互的库）。

**2. 修改执行login所用的shell**

接下来，我们需要修改执行登录操作所使用的shell脚本文件。在Terminal中运行以下命令以编辑该文件：

```shell
nano $PREFIX/bin/login
```

此命令将打开Nano文本编辑器，并加载名为"login" 的脚本文件。

**3. 在login头部添加代码块**

现在，在打开的Nano编辑器中，请按照下面给出示例内容，在 "## termu​x locker start" 和 "## termu​x locker end" 之间插入如下代码块：

```bash
## termu​​​​​​x locker start 
export LOGIN_STATUS=termui-fingerprint | jq '.auth_result'
if [ $LOGIN_STATUS == '"AUTH_RESULT_SUCCESS"' ];then 
     # 验证成功后要执行的操作 
     readonly LOGIN_STATUS 
else 
     # 验证失败后要执行的操作
     unset LOGIN_STATUS
     exit
fi 
## termu​​​​​x locker end
```

这段代码块首先将`LOGIN_STATUS`变量设置为通过指纹验证的结果。如果验证成功（即返回AUTH_RESULT_SUCCESS），则继续执行登录操作，并将`LOGIN_STATUS`标记为只读。否则，如果验证失败，则取消设置该变量并退出登录。

**4. 保存并退出**

完成以上步骤后，请按Ctrl+X键组合保存修改，并在提示时选择"Y"以确认更改。

**5. 安装TermuxAPI软件**

现在，我们需要安装一个名为TermuxAPI的应用程序来提供与设备API进行交互所需的支持。您可以从Google Play商店或其他可靠来源下载和安装此应用程序。

**6. 体验指纹识别功能**

重新启动Termux终端模拟器，在启动过程中会触发指纹识别功能。请使用注册过的有效指纹进行身份验证，如果通过了认证，则可以进入Termux环境；否则，您将无法进入终端环境。

现在您已经成功地添加了指纹识别功能到Termux启动流程中！每次打开Termux时都会要求进行身份验证，以增加额外层面的安全性和保护用户数据。
