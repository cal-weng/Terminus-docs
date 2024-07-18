# CLI


## Terminus Installation Script in Command Line

```sh
# Environment variable
export KUBE_TYPE="k8s"                          # Choose between k8s / k3s, k3s being the default.
export REGISTRY_MIRRORS="http://dockermirror/"  # Set the Docker registry mirror URL
export LOCAL_GPU_ENABLE=1                       # Install local GPU to the cluster if GPU is installed on the node
export LOCAL_GPU_SHARE=1                        # Enable GPU sharing

# Execute installation
curl -fsSL https://terminus.sh | bash -
```

## Terminus Uninstallation Script

- For Terminus installed on Linux, Raspberry Pie, and Windows (Windows Subsystem for Linux):

  ```sh
  cd install-wizard && bash uninstall_cmd.sh
  ```

- For Terminus Installed on Mac:

  ```sh
  bash uninstall_macos.sh
  ```

## Resolve IP Change Issue

Services within the Kubernetes cluster rely on stable IPs and DNS resolution provided by the cluster's internal DNS. When you change the location of your Terminus, its IP address changes. This can disrupt proper DNS resolution for your cluster and make Terminus inaccessible.

To resolve this issue, run the following command in Ubuntu in your new network environment:

```sh
cd install-wizard && bash change_ip.sh
```

:::info
This command is not applicable to Terminus on macOS yet.
:::

## Add a Terminus Node Locally

**Before Install**
- Get the `internal IP address` of the **Master** node.
- Add the current machine's `public key` to the `authorized_keys` of the user who logged into the **Master** node.

```sh
VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash ./publicAddnode.sh
```

During the installation process, you will be asked to enter relevant information about the **Master node**. Please input as instructed.

## Add a Hard Drive Locally

**Before Install**
- Insert the hard drive, then format it and create a filesystem in the operating system. The recommended filesystem is `XFS`.
- Create a new empty directory that aligns with the previous data directory. For example, if the previous system installation data directory was `/terminus/data/minio/vol1`, the new directory should be `/terminus/data/minio/vol2`.
- Mount the new hard drive at `/terminus/data/minio/vol2`.

```sh
VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash scale_minio.sh -a driver -v /terminus/data/minio/vol2
```

If you are adding multiple hard drives, you can do it simultaneously. For instance, you mounted hard drives at:
```
/terminus/data/minio/vol2
/terminus/data/minio/vol3
...
/terminus/data/minio/voln
```
you can add them all with
```sh
bash scale_minio.sh -a driver -v /terminus/data/minio/vol{2...n}
```

## Add a Hard Drive Node

You can also add hard drives to a new node machine separately from the Master node.

**Prerequisites**
- The master node must be in multi-hard drive mode or have multiple partitions mounted. 
- The new node should also be in multi-hard drive or multi-partition mode.

**Before Install**
- Get the `internal IP address` of the **Master** node, e.g., 192.168.1.100
- Get the `internal IP address` of the **Target** node, e.g., 192.168.1.101
- Add the **Target** node machine's `public key` to the `authorized_keys` of the user who logged into the master node, e.g., ubuntu
- Format the hard drives, create `XFS` filesystem
- Create contiguous data storage directories and mount them to multiple hard drives or partitions. e.g.<br>
  `/terminus/data/minio/vol1`<br>
  `/terminus/data/minio/vol2`<br>
  `/terminus/data/minio/vol3`<br>
  `/terminus/data/minio/vol4`<br>

```sh
VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash scale_minio.sh -a node -v /terminus/data/minio/vol{1...4} \
    -u ubuntu \
    -s 192.168.1.100 \
    -n 192.168.1.101
```

## Install a Custom Version of Terminus

To debug a program that involves the startup process of Terminus, you may need to build a temporary local version of Terminus and replace the service you're debugging.

In other scenarios, consider using [ControlHub](../../../how-to/terminus/controlhub/) or kubectl to update services.

```sh
# Clone
git clone https://github.com/beclab/terminus

# Build
cd terminus
bash scripts/build.sh

# Modify your application/service yaml

# Install
pkg_path=$(pwd)
mkdir -p ~/install-wizard && cd ~/install-wizard
tar zxvf ${pkg_path}/install-wizard-debug.tar.gz

# Any version number will do, for example 0.0.0-DEBUG
make install VERSION=0.0.0-DEBUG

# Uninstall
cd ~/install-wizard
make uninstall
```

## Restore Terminus from a Snapshot

If you have enabled the backup feature of **Terminus** and have backed up system data to **S3 storage**, you can select a snapshot from a specific point in time to restore Terminus.


```sh
export KUBE_TYPE=k8s                                  # k8s / k3s
export REGISTRY_MIRRORS="http://dockermirror/"

export TERMINUS_BACKUP_NAME=<backup name>
export BACKUP_S3_REPOSITORY=<s3 repository url>
export BACKUP_SNAPSHOT_ID=<snapshot id>

export AWS_ACCESS_KEY_ID=<aws s3 access key>
export AWS_SECRET_ACCESS_KEY=<aws s3 secret key>

export CLUSTER_ID=<cluster id>

VERSION="1.3.0"      # Version of Terminus installed on the master node
curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash publicRestoreInstaller.sh
```

If you backup your data to the **Terminus Space**, you can directly download the restoration script from **Terminus Space**.

![restore](images/restore.jpg)