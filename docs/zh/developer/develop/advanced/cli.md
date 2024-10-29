# 命令行

## Olares 安装脚本的命令行参数

```sh

# 环境变量参数
export KUBE_TYPE="k8s"                          # k8s / k3s 可选择安装不同的版本，默认 k3s
export REGISTRY_MIRRORS="http://dockermirror/"  # 设置 docker registry的 mirror 地址
export LOCAL_GPU_ENABLE=1                       # 安装本地 GPU 到集群，如果节点上安装了GPU
export LOCAL_GPU_SHARE=1                        # 启用 GPU 共享

# 执行安装
curl -fsSL https://olares.sh |  bash -

```
## Olares 卸载脚本

- 对于安装在 Linux、Raspberry Pie 和 Windows（Windows 子系统 Linux）上的 Olares：

  ```sh
  cd install-wizard && bash uninstall_cmd.sh
  ```

- 对于安装在 Mac 上的 Olares：

  ```sh
  bash uninstall_macos.sh
  ```

## 解决 IP 变更问题

Kubernetes 集群内的服务依赖于稳定的 IP 和由集群内部 DNS 提供的 DNS 解析。当你更改 Olares 的位置时，其 IP 地址会发生变化。这可能会破坏集群的正确 DNS 解析，并使 Olares 无法访问。

要解决此问题，请在新网络环境中的 Ubuntu 上运行以下命令：

```sh
cd install-wizard && bash change_ip.sh
```

:::info
此命令尚不适用于 macOS 上的 Olares。
:::

## 在本地增加一个新的 Olares 节点

安装前准备

- 查询 Master 节点的内网 ip
- 添加当前机器的公钥到 master 节点登录用户的 authorized_keys 中

```sh
VERSION="1.3.0"      # master节点安装的Olares版本
curl -LO https://github.com/beclab/olares/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash ./publicAddnode.sh

```

安装过程需要输入 Master 节点的相关信息，按提示输入即可。

## 在本地增加一块新的硬盘

安装前准备

- 添加硬盘，并在操作系统中完成硬盘的格式化和文件系统创建，推荐采用 XFS
- 创建一个新的空目录，空目录要求与之前的数据目录是连续的.例如，之前系统安装数据目录 /olares/data/minio/vol1。则新加第一个目录是 /olares/data/minio/vol2
- 将新的硬盘，mount 到 /olares/data/minio/vol2

```sh
VERSION="1.3.0"      # master节点安装的Olares版本
curl -LO https://github.com/beclab/olares/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash scale_minio.sh -a driver -v /olares/data/minio/vol2

```

如果一次添加了多个硬盘，分别 mount 到了

/olares/data/minio/vol2

/olares/data/minio/vol3

...

/olares/data/minio/voln

则添加时可以一次性添加

```sh
bash scale_minio.sh -a driver -v /olares/data/minio/vol{2...n}
```

## 增加一块新的硬盘节点

Olares 除了可以在 Master 节点本地增加硬盘，也可以单独准备一个新的节点机器，将其硬盘增加到集群中。

前提条件

- Master 节点为多硬盘模式（也可以挂载多个分区）
- 新增节点也必须是多硬盘或者多分区模式

安装前准备

- 查询 Master 节点的内网 ip, 例如，192.168.1.100
- 查询当前节点的内网 ip，例如，192.168.1.101
- 添加当前机器的公钥到 master 节点登录用户的 authorized_keys 中, 例如，登录用户 ubuntu
- 格式化硬盘，创建文件系统 XFS
- 创建连续的数据存储目录，mount 到多个硬盘或者多个分区上。例如，

  /olares/data/minio/vol1

  /olares/data/minio/vol2

  /olares/data/minio/vol3

  /olares/data/minio/vol4

```sh
VERSION="1.3.0"      # master节点安装的Olares版本
curl -LO https://github.com/beclab/olares/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash scale_minio.sh -a node -v /olares/data/minio/vol{1...4} \
    -u ubuntu \
    -s 192.168.1.100 \
    -n 192.168.1.101

```

## 在本地 Olares 安装自定义的 Olares

当你需要调试的程序涉及到 Olares 启动时的行为时，就需要在本地构建一个临时的 Olares 版本，并替换掉你需要调试的服务

在其它场景下，你可以优先考虑使用 [ControlHub](../../../how-to/olares/controlhub/index.md) 或 kubectl 来更新服务

```sh
# Clone
git clone https://github.com/beclab/olares

# Build
cd olares
bash scripts/build.sh

# Modify your application/service yaml

# Install
pkg_path=$(pwd)
mkdir -p ~/install-wizard && cd ~/install-wizard
tar zxvf ${pkg_path}/install-wizard-debug.tar.gz

# 任意一个版本号即可, 例如0.0.0-DEBUG
make install VERSION=0.0.0-DEBUG

# Uninstall
cd ~/install-wizard
make uninstall
```

https://w8wvyn24o5.feishu.cn/wiki/AYeJwOaxKisaODksh3CcEZ8FnVb

## 在本地用一个备份快照还原 Olares

如果你在使用过程中，启用了 Olares 的备份功能，并将系统数据备份到了 S3 的存储中。

那么，你可以选择某一个时间点的快照来还原一个 Olares

```sh
export KUBE_TYPE=k8s                                  # k8s / k3s
export REGISTRY_MIRRORS="http://dockermirror/"

export TERMINUS_BACKUP_NAME=<backup name>
export BACKUP_S3_REPOSITORY=<s3 repository url>
export BACKUP_SNAPSHOT_ID=<snapshot id>

export AWS_ACCESS_KEY_ID=<aws s3 access key>
export AWS_SECRET_ACCESS_KEY=<aws s3 secret key>

export CLUSTER_ID=<cluster id>

VERSION="1.3.0"      # master节点安装的Olares版本
curl -LO https://github.com/beclab/olares/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

mkdir -p install_wizard
cd install_wizard && tar zxvf ../install-wizard-${VERSION}.tar.gz

bash publicRestoreInstaller.sh

```

如果你之前选择了备份到 Olares cloud。可以直接到 Olares Cloud 中下载还原脚本进行还原

![restore](images/restore.jpg)
