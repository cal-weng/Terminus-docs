---
outline: [2, 3]
---
# `olares backups snapshots`
:::warning
必须先运行 `olares-cli olares backups download` 命令来安装 Restic，否则直接运行此命令将返回错误。
:::
## 命令说明
`snapshots` 子命令用于列出指定备份仓库中的所有可用快照。它支持多种存储后端，并提供必要的选项来进行身份验证和查询快照。
```bash
olares-cli olares backups snapshots <存储后端> --repo-name <仓库名称> [选项]
```
## 通用选项
以下选项适用于所有后端：

| 名称	           | 简写   | 用途            |
|---------------|------|---------------|
| `--help`      | `-h` | 显示命令帮助信息。     |
| `--repo-name` |      | 设置要查询的备份仓库名称。 |

## 存储后端配置选项

### 腾讯云对象存储（`cos`）选项

| 名称	                   | 简写 | 用途                                                                         |
|-----------------------|----|----------------------------------------------------------------------------|
| `--access-key`        |    | 设置腾讯云 COS 的访问密钥。                                                           |
| `--endpoint`          |    | 设置腾讯云 COS 的终端节点，格式如：`https://cos.{region}.myqcloud.com/{bucket}/{prefix}`。 |
| `--secret-access-key` |    | 设置腾讯云 COS 的密钥。                                                             |

### 本地文件系统（`fs`）选项

| 名称	          | 简写 | 用途             |
|--------------|----|----------------|
| `--endpoint` |    | 设置存储备份的本地目录路径。 |

### Amazon S3 选项（`s3`）

| 名称	                   | 简写 | 用途                                                                         |
|-----------------------|----|----------------------------------------------------------------------------|
| `--access-key`        |    | 设置 Amazon S3 的访问密钥。                                                        |
| `--endpoint`          |    | 设置 Amazon S3 的终端节点，格式如：`https://{bucket}.{region}.amazonaws.com/{prefix}`。 |
| `--secret-access-key` |    | 设置 Amazon S3 的密钥。                                                          |

### Olares Space 选项（`space`）

| 名称	                           | 简写 | 用途                                                              |
|-------------------------------|----|-----------------------------------------------------------------|
| `--access-token` <sup>1</sup> |    | 设置 Olares Space 的访问令牌。                                          |
| `--cloud-api-mirror`          |    | 设置云 API 镜像地址。                                                   |
| `--cloud-name`                |    | 设置 Olares Space 实例的云名称。<br/> 可通过 [`region`](region.md) 子命令获取。   |
| `--cluster-id` <sup>2</sup>   |    | 设置用于存储备份的集群 ID。                                                 |
| `--olares-did` <sup>1</sup>   |    | 设置 Olares DID。                                                  |
| `--region-id`                 |    | 设置 Olares Space 实例的区域 ID。<br/> 可通过 [`region`](region.md) 子命令获取。 |

1. 要获取访问令牌和 Olares DID，请在登录 Olares Space 后检查页面网络请求的负载。`token` 字段对应访问令牌，`userid` 字段对应 Olares DID。

2. 要获取集群 ID，请运行以下命令：
   ```bash
   kubectl get terminus -o jsonpath='{.items[*].metadata.labels.bytetrade\.io/cluster-id}'
   ```
## 使用示例
```bash
# 列出腾讯云对象存储中的快照
olares-cli olares backups snapshots cos --repo-name my_repo \
  --access-key YOUR_KEY \
  --secret-access-key YOUR_SECRET \
  --endpoint https://cos.region.myqcloud.com/bucket/prefix
  
# 列出本地文件系统中的快照
olares-cli olares backups snapshots fs --repo-name my_repo --endpoint /backup_repo
```