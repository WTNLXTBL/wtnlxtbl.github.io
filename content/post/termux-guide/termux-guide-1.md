---
title: Termux基本使用指南
tags:
    - Termux-topic
---

# Termux 使用指南

## 什么是 Termux？

Termux 是一个在 Android 设备上运行的终端模拟器，它允许你在手机上运行 Linux 命令和应用程序，从而扩展了手机的功能和灵活性。

## 安装与配置

1. 打开 Google Play 商店，搜索并安装 Termux 应用。
2. 打开 Termux，等待安装完成，系统将创建一个基本的 Linux 文件系统。
3. 运行 `pkg update` 和 `pkg upgrade` 命令更新软件包列表和软件包。
4. 使用 `pkg install` 命令安装需要的软件，例如 `pkg install git` 安装 Git。

## 基本操作

- 使用 `pkg install` 安装软件，如 `pkg install nano` 安装文本编辑器 Nano。
- 使用 `cd` 命令切换目录，如 `cd Downloads` 进入 Downloads 文件夹。
- 使用 `ls` 命令列出目录内容，如 `ls -l` 显示详细列表。
- 使用 `pwd` 命令显示当前工作目录的路径。
- 使用 `cp` 命令复制文件，如 `cp file.txt /sdcard` 复制文件到内部存储。
- 使用 `mv` 命令移动或重命名文件，如 `mv old.txt new.txt` 重命名文件。
- 使用 `rm` 命令删除文件，如 `rm file.txt` 删除文件。

## 高级操作

- 使用 `apt` 命令安装更多软件，如 `apt install python` 安装 Python。
- 使用 `su` 命令切换到超级用户模式以执行需要管理员权限的任务。
- 使用 `wget` 或 `curl` 命令下载文件，如 `wget URL` 下载文件。
- 使用 `chmod` 命令更改文件权限，如 `chmod +x script.sh` 添加执行权限。
- 使用 `top` 命令查看系统进程和资源占用情况。
- 使用 `vim` 或 `nano` 命令编辑文本文件，如 `vim file.txt` 打开 Vim 编辑器。
- 使用 `ssh` 命令连接远程服务器，如 `ssh user@hostname`。

## 自定义与扩展

- 编写和运行 Shell 脚本，如创建一个 `myscript.sh` 文件，使用 `chmod +x myscript.sh` 添加执行权限，然后运行 `./myscript.sh` 执行脚本。
- 探索 Termux 社区提供的插件和工具，如 Termux API 插件，让你访问设备功能。

## 注意事项

- Termux 是一个强大的工具，但在使用时请小心，避免执行危险操作或安装未经验证的软件。
- 始终保持软件包更新以获取安全性和功能改进。
- 可以查阅 [Termux 官方文档](https://wiki.termux.com) 获取更多详细信息。

这是一个基本的 Termux 使用指南，希望能帮助你入门。如需更多信息，请查阅官方文档或社区资源。