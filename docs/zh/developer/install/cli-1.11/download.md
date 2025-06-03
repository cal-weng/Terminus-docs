# `olares backups download`

## 命令说明
`download` 子命令用于下载 Restic 工具。Restic 是执行备份和恢复操作的必需工具，该命令可确保系统上已安装此工具。

```bash
olares-cli olares backups download [选项]
```
## 选项

| 名称	                  | 简写   | 用途                      |
|----------------------|------|-------------------------|
| `--download-cdn-url` |      | 设置下载 Restic 工具的 CDN 地址。 |
| `--help`             | `-h` | 显示命令帮助信息。               |

## 使用示例
```bash
# 通过自定义 CDN 地址下载 Restic
olares-cli olares backups download --download-cdn-url https://custom-cdn.example.com/restic
```