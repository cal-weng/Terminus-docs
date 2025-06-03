---
outline: [2, 3]
---
# `olares backups restore`
:::warning
The `olares-cli olares backups download` command must be run first to install Restic. Otherwise, this command will return an error.
:::
## Synopsis
The `restore` subcommand allows you to restore data from a specified backup repository and snapshot to a target directory.

```bash
olares-cli olares backups restore <backend> --path <path> --repo-name <name> --snapshot-id <id> [options]
```

## Common options
These options apply to all backends:

| Name            | Shorthand | Usage                                                        |
|-----------------|-----------|--------------------------------------------------------------|
| `--help`        | `-h`      | Displays help information.                                   |
| `--path`        |           | Specifies the directory to which data will be restored.      |
| `--repo-name`   |           | Specifies the name of the backup repository to restore from. |
| `--snapshot-id` |           | Specifies the snapshot ID to restore.                        |


## Backend-specific options

### Options for `cos`

| Name                    | Shorthand | Usage                                                                                            |
|-------------------------|-----------|--------------------------------------------------------------------------------------------------|
| `--access-key`          |           | Specifies the Access Key for Tencent COS.                                                        |
| `--endpoint`            |           | Specifies the Tencent COS endpoint, e.g., `https://cos.{region}.myqcloud.com/{bucket}/{prefix}`. |
| `--limit-download-rate` |           | Limits the download speed to a maximum rate in KiB/s (default: unlimited).                       |
| `--secret-access-key`   |           | Specifies the Secret Access Key for Tencent COS.                                                 |

### Options for `fs`

| Name          | Shorthand | Usage                                                     |
|---------------|-----------|-----------------------------------------------------------|
| `--endpoint`  |           | Specifies the local directory where the backup is stored. |
| `--olares-id` |           | Specifies the Olares ID.                                  |

### Options for `s3`

| Name                    | Shorthand | Usage                                                                                       |
|-------------------------|-----------|---------------------------------------------------------------------------------------------|
| `--access-key`          |           | Specifies the Access Key for Amazon S3.                                                     |
| `--endpoint`            |           | Specifies the Amazon S3 endpoint, e.g., `https://{bucket}.{region}.amazonaws.com/{prefix}`. |
| `--limit-download-rate` |           | Limits the download speed to a maximum rate in KiB/s (default: unlimited).                  |
| `--secret-access-key`   |           | Specifies the Secret Access Key for Amazon S3.                                              |

### Options for `space`

| Name                          | Shorthand | Usage                                                                                                                                    |
|-------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------|
| `--access-token` <sup>1</sup> |           | Specifies the access token for Olares Space.                                                                                             |
| `--cloud-api-mirror`          |           | Specifies the cloud API mirror.                                                                                                          |
| `--cloud-name`                |           | Specifies the cloud name of the Olares Space instance. <br/> The cloud name can be retrieved using the [`region`](region.md) subcommand. |
| `--cluster-id` <sup>2</sup>   |           | Specifies the cluster ID where the backup will be stored.                                                                                |
| `--limit-download-rate`       |           | Limits the download speed to a maximum rate in KiB/s (default: unlimited).                                                               |
| `--olares-did` <sup>1</sup>   |           | Specifies the Olares DID.                                                                                                                |
| `--region-id`                 |           | Specifies the region ID of the Olares Space instance. <br/> The region ID can be retrieved using the [`region`](region.md) subcommand.   |

1. To retrieve the access token and Olares DID, inspect the payload of the network requests made by the Olares Space web interface after logging in. The `token` field corresponds to the access token, and the `userid` field corresponds to the Olares DID.

2. To retrieve the cluster ID, use the following command:
  ```bash
  kubectl get terminus -o jsonpath='{.items[*].metadata.labels.bytetrade\.io/cluster-id}'
  ```

## Example
```bash
# Restore the data from Tencent COS
olares-cli olares backups restore cos --path /data_restore --repo-name my_repo \
  --snapshot-id snapshot_12345 \
  --access-key YOUR_KEY \
  --secret-access-key YOUR_SECRET \
  --endpoint https://cos.region.myqcloud.com/bucket/prefix
  
# Restore the data from local filesystem
olares-cli olares backups restore fs --path /data_restore --repo-name my_repo \
  --snapshot-id snapshot_12345 --endpoint /backup_repo
```