---
outline: [2, 3]
---

# 开始使用 Olares

欢迎使用 Olares！本文档会帮助你在偏好的平台上快速启动并运行 Olares。除了基本的设置步骤，你还将了解一些高级配置技巧。

:::info
- 后文将以管理员（Admin）角色为例展开说明。管理员用户有权访问 Olares 全部功能。
- 本文档主要介绍 Olares 的自托管安装方式。如果想尝试云服务版本，请查看 [Olares Space 文档](../../../how-to/space/host/create-olares.md)。
:::

## 硬件与系统要求

请确认你的系统符合以下基本要求。为了获得更好的性能，建议选择更高的配置。

|            | Linux                              | 树莓派                            | macOS                         | Windows                                         |
|------------|------------------------------------|--------------------------------|-------------------------------|-------------------------------------------------|
| 操作系统       | Ubuntu 20.04 或更高版本，Debian 11 或更高版本 | Raspbian 12                    | macOS Monterey (12) 或更高版本     | Windows 10, 11                                  |
| 架构/型号      | x86-64, amd64                      | Raspberry Pi 4B，Raspberry Pi 5 | x86-64, ARM64                 | x86-64, amd64                                   |
| 内存         | 8GB                                | 8GB                            | 8GB                           | 8GB                                             |
| 磁盘空间       | 64GB                               | 64GB SSD                       | 64GB                          | -                                               |
| 其他         | -                                  | 建议使用以太网线                       | 需安装 Docker Desktop 和 Minikube | 需启用 WSL2 并安装 Ubuntu 20.04 或更高版本；Debian 11 或更高版本 |

:::info
- 此表将持续更新。如果你在未列出的系统版本上成功安装了 Olares，或在安装过程中遇到任何问题，请及时联系我们。
- 为保证最佳性能和兼容性，建议在 Linux 上安装 Olares。
:::

## 快速开始

选择你的操作系统以开始安装：

- [在 Linux 上开始](linux.md)
- [在 MacOS 上开始](mac.md)
- [在 Windows 上开始](windows.md)
- [在 Raspberry Pi 上开始](raspberry.md)

:::tip
安装之前，建议你先了解以下几个概念：

- [什么是 Olares](../../introduction/what-is-olares.md)
- [Olares 名称解释](../../olares/olares-id.md)
- [LarePass 介绍](../../../how-to/larepass/overview.md)
:::