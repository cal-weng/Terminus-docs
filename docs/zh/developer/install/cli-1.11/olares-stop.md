# `olares stop`

## 命令说明
`olares stop` 命令用于停止已安装（或部分安装）的 Olares 系统中的各个组件。

```bash
olares-cli olares stop [选项]
```

## 选项

| 名称	                | 简写   | 用途                                                                 |
|--------------------|------|--------------------------------------------------------------------|
| `--check-interval` |      | 设置关闭过程中检查剩余进程的时间间隔（如 `5s`、`2m`、`3h`）。<br/>默认值：`10s`。               |
| `--help`           | `-h` | 显示命令帮助信息。                                                          |
| `--timeout`        |      | 设置等待优雅关闭的最长时间，超时后将使用 SIGKILL 强制终止（如 `5s`、`2m`、`3h`）。<br/>默认值：`1m`。 |

## 使用示例
```bash
# 停止 Olares 系统
olares-cli olares stop

# 调整关闭超时时间
olares-cli olares stop --timeout 2m

# 自定义检查间隔时间
olares-cli olares stop --check-interval 5s
```