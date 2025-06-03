# `olares prepare`

## 命令说明
`olares prepare` 命令用于配置 Olares 运行所需的环境，包括安装依赖项、导入容器镜像和启动 Olares 守护进程（`olaresd`）。

```bash
olares-cli olares prepare [选项]
```

## 选项

| 名称                   | 简写   | 用途                                                                                                                                     |
|----------------------|------|----------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`         | `-b` | 设置 Olares 的基础目录。<br>默认为 `$HOME/.olares`。                                                                                               |
| `--help`             | `-h` | 显示帮助信息。                                                                                                                                |
| `--kube`             | `-k` | 指定 Kubernetes 类型。支持 `k3s`（默认）和 `k8s`。                                                                                                  |
| `--profile`          | `-p` | 设置 Minikube 配置文件名称，仅适用于 macOS。<br>默认为 `olares-0`。                                                                                      |
| `--registry-mirrors` | `-r` | 设置 Docker 容器镜像仓库的镜像源。多个镜像源之间使用英文逗号分隔。                                                                                                  |
| `--with-juicefs`     | `-j` | 将 JuiceFS 配置为 Olares 工作负载的根文件系统（rootfs），替代本地磁盘。                                                                                        |
| `--version`          | `-v` | 指定 Olares 版本。版本号格式为 `x.y.z`（如 `1.10.0`）或包含构建日期（如 `1.10.0-20241109`）。<br>可用版本请参考 [GitHub Releases](https://github.com/olares/releases)。 |

## 使用示例
```bash
# 使用 JuiceFS 作为根文件系统
olares-cli olares prepare --with-juicefs=true
```