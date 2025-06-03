# `olares install`

## 命令说明
`olares install` 命令用于在系统上安装 Olares。通过各种选项可以自定义安装过程，比如指定安装目录、Kubernetes 类型或 Minikube 配置文件等。

```bash
olares-cli olares install [选项]
```

## 选项

| 名称                 | 简写 | 用途                                                                                                                                                 |
|--------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`         | `-b`      | 设置 Olares 的基础目录。<br>默认为 `$HOME/.olares`。                                                                                                           |
| `--help`             | `-h`      | 显示帮助信息。                                                                                                                                            |
| `--kube`             |           | 指定 Kubernetes 类型。<br支持 `k3s`（默认）和 `k8s`。                                                                                                           |
| `--profile`  | `-p`      | 设置 Minikube 配置文件名称，仅适用于 macOS。<br> 默认为 `olares-0`。                                                                                                 |
| `--version`          | `-v`      | 指定 Olares 版本。<br>版本号格式为 `x.y.z`（如 `1.10.0`）或包含构建日期（如 `1.10.0-20241109`）。<br> 可用版本请参考 [GitHub Releases](https://github.com/beclab/Olares/releases)。 |

