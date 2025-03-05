# 在 PVE 上安装 Olares
Olares 主要运行在基于 Linux 的系统上。目前以验证可运行的系统有：

- **Linux 发行版**：Debian、Ubuntu、Raspbian（基于 Debian 的树莓派系统）。
- **虚拟化平台**：Proxmox VE（PVE，基于 Debian）、PVE LXC（PVE 上运行的 Linux 容器）。

## 系统要求
请确保设备满足以下配置要求：

- CPU：4 核及以上
- 内存：不少于 8GB 可用内存
- 存储：建议使用 SSD，且可用磁盘空间不少于 64GB
- 支持的系统版本：PVE 8.2.2

::: tip 版本兼容性
虽然以上版本已经过验证，但其他版本也可能正常运行 Olares。根据你的环境可能需要进行调整。如果你在这些平台安装时遇到任何问题，欢迎在 [GitHub](https://github.com/beclab/Olares/issues/new) 上提问。
:::

## 安装 Olares

在 PVE 命令行中，执行以下命令：

<!--@include: ./reusables.md{4,28}-->

<!--@include: ./activate-olares.md-->

<!--@include: ./log-in-to-olares.md-->

<!--@include: ./reusables.md{30,34}-->

::: 为 PVE 启用显卡直通
如果你想为 PVE 中的 Olares 启用 GPU 加速功能，需在安装 Olares 前完成 PVE 的 GPU 直通配置。详情请参考[教程](../tutorials/set-gpu-passthrough.md)。
:::