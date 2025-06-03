# `node`

## 命令说明

`node` 命令用于管理节点相关的操作。

```bash
olares-cli node <子命令> [选项]
```

## 子命令

| 子命令          | 描述                                                 |
|--------------|----------------------------------------------------|
| `masterinfo` | 获取主节点的系统信息，并检查当前节点是否满足作为从节点加入集群的条件。                |
| `add`        | 将当前节点添加到已有的 Olares 集群中。该节点的环境必须已满足 Olares 的所有前置条件。 |

## 选项

| 名称                              | 简写   | 描述                                                                                                                                                         |
|---------------------------------|------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`                    | `-b` | 指定安装的基础目录。通常是 Olares 的默认安装目录 `$HOME/.olares`。                                                                                                              |
| `--master-host`                 |      | 指定主节点的 IP 地址。<br>此选项为必填项。                                                                                                                                  |
| `--master-node-name`            |      | 指定主节点的 Kubernetes 节点名称。                                                                                                                                    |
| `--master-ssh-user`             |      | 设置主节点 SSH 登录的 Linux 用户名。<br>默认为 root。                                                                                                                      |
| `--master-ssh-password`         |      | 设置 Linux 用户的密码。<br>当指定非 root 用户时必填。                                                                                                                        |
| `--master-ssh-private-key-path` |      | 指定 Linux 用户 SSH 认证的私钥路径。<br>默认为 `/root/.ssh/id_rsa`。                                                                                                       |
| `--master-ssh-port`             |      | 设置主节点 SSH 服务的监听端口。<br>默认为 `22`。                                                                                                                            |
| `--version`                     | `-v` | 安装指定 Olares 版本的 GPU 驱动及组件。版本号格式为 `x.y.z`（如 `1.10.0`）或包含构建日期（如 `1.10.0-20241109`）。<br>可用版本请参考 [GitHub Releases](https://github.com/beclab/Olares/releases)。 | |
| `--help`                        | `-h` | 显示命令帮助信息。                                                                                                                                                  |

## 使用示例

```bash
# 获取 IP 为 192.168.1.15 的主节点系统信息
olares-cli node masterinfo --master-host 192.168.1.15

# 如需使用指定的 SSH 密钥进行认证
olares-cli node masterinfo --master-host 192.168.1.15 --master-ssh-private-key-path /home/olares/.ssh/id_rsa

# 使用非 root 用户时，需指定用户名和密码
olares-cli node masterinfo --master-host 192.168.1.15 --master-ssh-user olares --master-ssh-password password123

# 将当前节点添加到主节点 IP 为 192.168.1.15 的集群中
olares-cli node add --master-host 192.168.1.15

# 指定自定义的安装基础目录
olares-cli node add --base-dir /custom/path --master-host 192.168.1.15
```


