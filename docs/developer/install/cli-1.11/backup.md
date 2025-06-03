---
outline: [2, 3]
---
# `olares backups backup`
:::warning
The `olares-cli olares backups download` command must be run first to install Restic. Otherwise, this command will return an error.
:::
## Synopsis
The `backup` subcommand allows you to back up data to the specified storage backend. It ensures your data is securely stored and can be restored whenever needed.

```bash
olares-cli olares backups backup <backend> --path <path> --repo-name <name> [options]
```

## Common options
These options apply to all backends:

| Name          | Shorthand | Usage                                        |
|---------------|-----------|----------------------------------------------|
| `--help`      | `-h`      | Displays help information.                   |
| `--path`      |           | Specifies the directory to back up.          |
| `--repo-name` |           | Specifies the name of the backup repository. |

## Backend-specific options
### Options for `cos`

| Name                  | Shorthand | Usage                                                                                            |
|-----------------------|-----------|--------------------------------------------------------------------------------------------------|
| `--access-key`        |           | Specifies the Access Key for Tencent COS.                                                        |
| `--endpoint`          |           | Specifies the Tencent COS endpoint, e.g., `https://cos.{region}.myqcloud.com/{bucket}/{prefix}`. |
| `--limit-upload-rate` |           | Limits the upload speed to a maximum rate in KiB/s (default: unlimited).                         |
| `--secret-access-key` |           | Specifies the Secret Access Key for Tencent COS.                                                 |

### Options for `fs`

| Name         | Shorthand | Usage                                                          |
|--------------|-----------|----------------------------------------------------------------|
| `--endpoint` |           | Specifies the local directory where the backup will be stored. |

### Options for `s3`

| Name                  | Shorthand | Usage                                                                                       |
|-----------------------|-----------|---------------------------------------------------------------------------------------------|
| `--access-key`        |           | 	Specifies the Access Key for Amazon S3.                                                    |
| `--endpoint`          |           | Specifies the Amazon S3 endpoint, e.g., `https://{bucket}.{region}.amazonaws.com/{prefix}`. |
| `--limit-upload-rate` |           | 	Limits the upload speed to a maximum rate in KiB/s (default: unlimited).                   |
| `--secret-access-key` |           | 	Specifies the Secret Access Key for Amazon S3.                                             |

### Options for `space`

| Name                          | Shorthand | Usage                                                                                                                                    |
|-------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------|
| `--access-token` <sup>1</sup> |           | Specifies the access token for Olares Space.                                                                                             |
| `--cloud-api-mirror`          |           | Specifies the cloud API mirror.                                                                                                          |
| `--cloud-name`                |           | Specifies the cloud name of the Olares Space instance. <br/> The cloud name can be retrieved using the [`region`](region.md) subcommand. |
| `--cluster-id` <sup>2</sup>   |           | Specifies the cluster ID where the backup will be stored.                                                                                |
| `--limit-upload-rate`         |           | Limits the upload speed to a maximum rate in KiB/s (default: unlimited).                                                                 |
| `--olares-did` <sup>1</sup>   |           | Specifies the Olares DID.                                                                                                                |
| `--region-id`                 |           | Specifies the region ID of the Olares Space instance. <br/> The region ID can be retrieved using the [`region`](region.md) subcommand.   |

1. To retrieve the access token and Olares DID, inspect the payload of the network requests made by the Olares Space web interface after logging in. The `token` field corresponds to the access token, and the `userid` field corresponds to the Olares DID.

2. To retrieve the cluster ID, use the following command:
  ```bash
  kubectl get terminus -o jsonpath='{.items[*].metadata.labels.bytetrade\.io/cluster-id}'
  ```

## Example
```bash
# Backup to Tencent COS
olares-cli olares backups backup cos --path /data --repo-name my_repo \
  --access-key YOUR_KEY \
  --secret-access-key YOUR_SECRET \
  --endpoint https://cos.region.myqcloud.com/bucket/prefix
  
# Backup to Olares Space
olares-cli olares backups backup space --path /data --repo-name my_repo \
  --access-token YOUR_ACCESS_TOKEN \
  --cloud-api-mirror https://api-mirror.example.com \
  --cloud-name my_cloud \
  --region-id region_1 \
  --cluster-id cluster_12345 \
  --olares-did did:xyz123
```