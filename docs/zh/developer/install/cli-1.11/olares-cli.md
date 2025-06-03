---
outline: [2, 3]
---
# Olares 命令行工具

:::warning 版本兼容信息
此 Olares CLI 版本适用于 Olares 1.11.X。
:::

Olares 命令行工具（Olares CLI）面向开发者和系统管理员，用于管理和排查 Olares 系统，提供从安装配置到资源管理和诊断等多种功能。

使用 Olares 命令行工具，你可以简化系统兼容性验证、资源下载、节点管理、日志收集等任务。本文档将介绍命令行工具的语法，并详细说明各类操作的可用命令。

:::info 需要 root 权限
大多数 `olares-cli` 命令都需要 root 权限。请使用 root 用户执行命令，或在命令前加上 `sudo`。
:::

:::info 在 WSL 中使用 Olares CLI
如果通过 WSL（Windows Subsystem for Linux）方式安装了 Olares，需要在 WSL 环境中使用 `olares-cli`。

在 PowerShell 中执行以下命令进入 WSL：

```powershell
wsl -d Ubuntu
```
:::

## 语法
Olares 命令行工具使用如下语法：

> `olares-cli 命令 [子命令] [选项]`

其中：
- `命令`：指定要执行的主要操作，例如 `olares download`。
- `子命令`：进一步指定命令的具体任务，适用于支持子操作的命令。例如 `wizard` 或 `component`。
- `选项`：可选参数，用于修改命令的行为。包括标志（flags）和带参数的选项。

通过 Olares 命令行工具，你可以临时覆盖某些 Olares 默认设置。每个选项仅对当前执行的命令生效。

例如，在执行 `olares-cli olares download wizard` 时使用 `--base-dir` 选项，只会影响向导的下载过程，而不会改变其他命令（如“安装”阶段）的基础目录。

如需查看任何命令的详细帮助信息，请运行 `olares-cli help`。

## 可用命令列表

| 操作                 | 语法                                      | 说明                             |
|--------------------|-----------------------------------------|--------------------------------|
| `gpu`              | `olares-cli gpu <子命令> [选项]`             | 管理 GPU 相关的操作。                  |
| `info`             | `olares-cli olares info <子命令> [选项]`     | 显示当前设备的操作系统信息。                 |
| `node`             | `olares-cli node <子命令> [选项]`            | 管理节点相关的操作。                     |
| `olares backups`   | `olares-cli olares backups <子命令> [选项]`  | 管理备份相关操作。                      |
| `olares change-ip` | `olares-cli olares change-ip [选项]`      | 修改 Olares OS 的 IP 地址。          |
| `olares download`  | `olares-cli olares download <子命令> [选项]` | 下载指定资源。                        |
| `olares info`      | `olares-cli olares info [选项]`           | 显示已下载的 Olares OS 的常规信息。        |
| `olares install`   | `olares-cli olares install [选项]`        | 部署 Olares 的系统级和用户级组件。          |
| `olares logs`      | `olares-cli olares logs [选项]`           | 收集 Olares 系统组件的日志，用于调试和故障排查。   |
| `olares precheck`  | `olares-cli olares precheck [选项]`       | 检查系统环境是否满足 Olares 安装要求。        |
| `olares prepare`   | `olares-cli olares prepare [选项]`        | 为安装过程准备环境，包括设置 Olares 的基础服务和配置 |
| `olares release`   | `olares-cli olares release [选项]`        | 打包 Olares 安装资源以供分发或部署。         |
| `olares start`     | `olares-cli olares start [选项]`          | 启动 Olares 服务和组件。               |
| `olares stop`      | `olares-cli olares stop [选项]`           | 停止 Olares 服务和组件。               |
| `olares uninstall` | `olares-cli olares uninstall [选项]`      | 完全卸载 Olares，或将安装回滚到特定阶段。       |

