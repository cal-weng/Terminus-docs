# `olares logs`

## Synopsis
The `olares logs` command retrieves logs from Olares components and services found on the local machine. It searches for each component listed below, collects logs if the component is found, and skips it if not:

* K3s/Kubelet logs
* Containerd logs
* JuiceFS logs
* Redis logs
* MinIO logs
* etcd logs
* olaresd logs
* Kubernetes pod info and logs
* Kubernetes node info

```bash
olares-cli olares logs [option]
```

## Options

| Name                   | Shorthand | Usage                                                                                                                                                                                                                                               |
|------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--components`         |           | Collects logs from specific components (comma-separated).<br/>Supported values: `k3s`, `containerd`, `olaresd`, `kubelet`, `juicefs`, `redis`, `minio`, `etcd`, `NetworkManager`. <br/> Defaults to collecting logs from all detectable components. |
| `--help`               | `-h`      | Displays help information.                                                                                                                                                                                                                          |
| `--ignore-kube-errors` |           | Ignores errors from `kubectl` commands (e.g., when Kubernetes API is unreachable) and continues collecting logs. <br/> Default: `false`.                                                                                                            |
| `--max-lines`          |           | Limits the maximum number of lines for each component's logs to prevent large log files. <br/> Defaults to `3000`.                                                                                                                                  |
| `--output-dir`         |           | Saves logs to the specified directory. Creates the directory if it does not exist. <br/> Defaults to `./olares-logs`.                                                                                                                               |
| `--since`              |           | Fetches logs newer than a specified relative duration (e.g., `5s`, `2m`, `3h`). <br/> Defaults to `7d`.                                                                                                                                             |

## Example
```bash
# Collect all logs with default settings
olares-cli olares logs

# Collect logs for specific components
olares-cli olares logs --components k3s,redis,minio

# Collect logs for the last 3 hours only
olares-cli olares logs --since 3h
```