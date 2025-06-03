---
outline: [2, 3]
---
# `olares backups snapshots`
:::warning
The `olares-cli olares backups download` command must be run first to install Restic. Otherwise, this command will return an error.
:::
## Synopsis
The `snapshots` subcommand lists all available snapshots for a specific backup repository. It supports multiple storage backends and provides the necessary options to authenticate and query snapshots.

```bash
olares-cli olares backups snapshots <backend> --repo-name <name> [options]
```
## Common options
These options apply to all backends:

| Name          | Shorthand | Usage                                                  |
|---------------|-----------|--------------------------------------------------------|
| `--help`      | `-h`      | Displays help information.                             |
| `--repo-name` |           | 	Specifies the name of the backup repository to query. |

## Backend-specific options

### Options for `cos`

| Name                  | Shorthand | Usage                                                                                            |
|-----------------------|-----------|--------------------------------------------------------------------------------------------------|
| `--access-key`        |           | Specifies the Access Key for Tencent COS.                                                        |
| `--endpoint`          |           | Specifies the Tencent COS endpoint, e.g., `https://cos.{region}.myqcloud.com/{bucket}/{prefix}`. |
| `--secret-access-key` |           | Specifies the Secret Access Key for Tencent COS.                                                 |

### Options for `fs`

| Name         | Shorthand | Usage                                                          |
|--------------|-----------|----------------------------------------------------------------|
| `--endpoint` |           | Specifies the local directory where the backup will be stored. |

### Options for `s3`

| Name                  | Shorthand | Usage                                                                                       |
|-----------------------|-----------|---------------------------------------------------------------------------------------------|
| `--access-key`        |           | Specifies the Access Key for Amazon S3.                                                     |
| `--endpoint`          |           | Specifies the Amazon S3 endpoint, e.g., `https://{bucket}.{region}.amazonaws.com/{prefix}`. |
| `--secret-access-key` |           | Specifies the Secret Access Key for Amazon S3.                                              |

### Options for `space`

| Name                          | Shorthand | Usage                                                                                                                                    |
|-------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------|
| `--access-token` <sup>1</sup> |           | Specifies the access token for Olares Space.                                                                                             |
| `--cloud-api-mirror`          |           | Specifies the cloud API mirror.                                                                                                          |
| `--cloud-name`                |           | Specifies the cloud name of the Olares Space instance. <br/> The cloud name can be retrieved using the [`region`](region.md) subcommand. |
| `--cluster-id` <sup>2</sup>   |           | Specifies the cluster ID where the backup will be stored.                                                                                |
| `--olares-did` <sup>1</sup>   |           | Specifies the Olares DID.                                                                                                                |
| `--region-id`                 |           | Specifies the region ID of the Olares Space instance. <br/> The region ID can be retrieved using the [`region`](region.md) subcommand.   |

1. To retrieve the access token and Olares DID, inspect the payload of the network requests made by the Olares Space web interface after logging in. The `token` field corresponds to the access token, and the `userid` field corresponds to the Olares DID.

2. To retrieve the cluster ID, use the following command:
  ```bash
  kubectl get terminus -o jsonpath='{.items[*].metadata.labels.bytetrade\.io/cluster-id}'
  ```

## Example
```bash
# List snapshots for Tencent COS
olares-cli olares backups snapshots cos --repo-name my_repo \
  --access-key YOUR_KEY \
  --secret-access-key YOUR_SECRET \
  --endpoint https://cos.region.myqcloud.com/bucket/prefix
  
# List snapshots for local filesystem
olares-cli olares backups snapshots fs --repo-name my_repo --endpoint /backup_repo
```