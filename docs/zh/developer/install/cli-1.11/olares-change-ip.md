# `olares change-ip`
:::warning IP 地址需要手动更新的情况
当 Olares 部署在虚拟化环境中时（如 macOS 上的 Minikube 或 Windows 上的 WSL），如果宿主系统的 IP 地址发生变化（比如切换 Wi-Fi 网络），可能会导致 Olares 无法访问。这是因为 NAT 网关和 DNS 配置与新的 IP 地址不匹配。此时需要手动更新 IP 地址，以确保 Olares 能够正确路由流量。
:::

## 命令说明
更新所有 Olares 组件使用的本地 IP 地址。

```bash
olares-cli olares change-ip [选项]
```

## 选项

| 名称               | 简写   | 用途                                                                                                                                                 |
|------------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`     | `-b` | 设置 Olares 的基础目录。<br>默认为 `$HOME/.olares`。                                                                                                           |
| `--distribution` | `-d` | 指定 WSL 发行版名称，仅适用于 Windows。<br>默认为 `Ubuntu`。                                                                                                        |
| `--help`         | `-h` | 显示帮助信息。                                                                                                                                            |
| `--profile`      | `-p` | 设置 Minikube 配置文件名称，仅适用于 macOS。<br> 默认为 `olares-0`。                                                                                                 |
| `--version`      | `-v` | 指定 Olares 版本。<br>版本号格式为 `x.y.z`（如 `1.10.0`）或包含构建日期（如 `1.10.0-20241109`）。<br> 可用版本请参考 [GitHub Releases](https://github.com/beclab/Olares/releases)。 |

## 使用示例
- macOS:
```bash
# 指定 Minikube 配置文件名称并更新 IP
olares-cli olares change-ip --profile olares-0
```
- Windows WSL:
```bash
# 指定 WSL 发行版并更新 IP
olares-cli olares change-ip --distribution Ubuntu
```