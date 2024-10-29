---
outline: [2, 4]
---

# 数据

## 动机

由于数据具有“状态”，需要投入额外的精力进行运维，所以过往开发者往往会考虑优先使用公有云提供的基础服务，例如: S3，RDS 等。

Kubernetes 是一个优秀的容器编排工具，它能很好地处理无状态的应用的编排问题，但长久以来对它是否能管好有“有状态”的数据，一直存在争议。

考虑到在 Kubernetes 上管好数据是一件麻烦的事，Olares 希望能承担起这个责任，站在系统角度进行优化，提供给开发者和公有云一样的数据托管服务，开发者只要关注业务逻辑即可。

## 介绍

用户的数据通常会被存储在：文件系统和数据库内，这其中数据库又是基于文件系统搭建的。因此，Olares 的设计理念是：

对于文件系统：

- 因为 Olares 是为多节点集群设计的，所以开发者在开发应用时，需要考虑程序被调度到不同节点时对文件系统的访问。我们希望为开发者屏蔽掉这些细节。

对于数据库：

- 对于常见的数据库，开发者只需要修改配置就可以完成集成。
- 不同用户和应用可以间共享数据库物理实例，节省资源开销。

对于两者：

- 不同用户和不同应用间的数据互相隔离。
- 能尽可能做到可扩展和高可用。
- 能够在系统层面进行统一的备份和恢复。

## 文件系统类型

### JuiceFS

Olares OS 采用 [JuiceFS](https://juicefs.com) 作为底层多物理节点共享文件系统的解决方案。这样，应用可以用最简单 HostPath PV 的方式，获得跨节点的文件访问。从而使 Pod 在集群中可以自由调度。

而对于 JuiceFS 的后端对象存储方案，我们也提供了 S3 和 MinIO 两种方案。

在本地 Selfhosted 安装时，Olares OS 默认采用 MinIO 作为对象存储。初始安装以 [SNSD（Single Node Single Driver）](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-single-drive.html)的模式安装。同时，在安装包中我们提供了 Scale 工具，可以自由[扩展你的 MinIO 存储](../../developer/develop/advanced/cli.md#在本地增加一块新的硬盘)。

### Local Disk

在某些应用系统中，可能会出现密集的文件系统读写操作。而这些密集的文件系统读写操作，往往又都是碎片化的随机读写。在现有的各种分布式存储集群方案中，对于这种密集的碎片化随机读写操作，都很可能出现 I/O 或者 CPU 消耗过高（通常由于 I/O Wait 过高而占用）的情况。

Olares 提供的最佳实践方案，是充分利用节点的本地硬盘作为一个文件缓冲。节点的本地硬盘虽然容量有限，但因为其基本都会采用 SSD 硬盘，所以具有高速读写性能。如果应用将文件读写，在节点本地硬盘做一次缓冲，再批量异步写入分布式文件系统。这样可以将绝大部分的碎片化随机读写，变为少数几次顺序读写。从而大大的提高系统 I/O 效率。

## 应用存储路径

对应用来说，有 3 种不同的存储路径，以应对不同的使用场景。可以通过[文件](../../how-to/olares/files/index.md#introduction)访问。

### UserData

`UserData`存储路径不经常变化，但有跨应用访问需求的文件，例如文档，照片和视频。

应用可以通过在`OlaresManifest.yaml`里申请 [UserData](../../developer/develop/package/manifest.md#userdata) 权限, 获得`Home`目录下某个目录的访问权限。例如你可以给 [PhotoPrism](https://market.olares.com/app/photoprism) 应用`Picture`目录的权限，给 [qBittorrent](https://market.olares.com/app/qbittorrent) 和 [Jefflyn](https://market.olares.com/app/jellyfin) 应用`Downloads`目录的权限。

### AppData

`AppData`存储路径不经常变化但需要数据跨节点。例如配置文件。

应用可以通过在`OlaresManifest.yaml`里申请 [AppData](../../developer/develop/package/manifest.md#appdata) 权限.

### AppCache

`AppCache`存储路径是为直接操作磁盘且性能良好的应用程序分配的。缺点是不能跨节点访问。例如系统的数据库，应用程序日志和缓存。

应用可以通过在`OlaresManifest.yaml`里申请 [AppCache](../../developer/develop/package/manifest.md#appcache) 权限.

## [PostgreSQL](../../developer/develop/advanced/database.md#rds)

作为最流行的开源关系型数据库之一，PostgreSQL 有优异的性能、丰富的插件功能。Olares OS 在系统中部署了 PostgreSQL 以及流行的 Citus 分布式数据库插件。同时，通过 TAPR 组件中的 PG Operator，对其集群进行管理。用户可以轻松的扩展 PostgreSQL 的节点数量。并可跟随整个 Olares 系统一起，备份和还原数据。

如果开发者在应用者申明的 PostgreSQL 数据库申请是`Distributed`分布式的，那 Olares 会将其数据库建立在 Citus 之上，让应用可以充分利用分布式 PG 数据库的能力。

- 版本：`11.3.0`

## [MongoDB](../../developer/develop/advanced/database.md#nosql)

MongoDB 作为 NoSQL 的代表，有其广泛的应用场景。Olares OS 在系统中部署了[Percona Operator for MongoDB](https://github.com/percona/percona-server-mongodb-operator)。为开发者提供了一套云原生版的 MongoDB Cluster。

与 PostgreSQL 一样，Olares 也统一化的管理了 MongoDB 的备份与还原。无需系统用户具备任何 DBA 的技术能力，都可以轻松实现定时备份、增量备份、定点还原等功能。

- 版本： `6.0.4`

## [Redis](../../developer/develop/advanced/database.md#cache)

毋庸置疑，Redis 可以算是当前最流行的内存 Cache 软件。其有丰富的指令，在 Key-Value 数据的基础上衍生出多种多样的数据类型。很多系统甚至把它作为了 KV 数据存储。Olares OS 同样在系统中部署了定制化的 [Redis Cluster Operator](https://github.com/beclab/redis-cluster-operator)，提供了云原生版本的 Redis Cluster。

Olares 也同样接管了 Redis Cluster 的备份与还原。无需用户单独再对 Redis Cluster 提供任何运维操作。

除此以外，由于 Redis Cluster 本身缺乏数据隔离的机制，Olares OS 还开发了一个代理层工具来实现数据的 `namespace` 机制。而这个隔离机制对开发者来说，完全透明。开发者在代码中无需对数据的 Key 做任何特殊处理。只需要在 TAC 中简单配置就可以实现多个应用间、多个用户间的数据隔离。

- 版本：`6.2.13`

:::tip
系统采用的是 Redis Cluster 版本，与单机版本的 Redis 有差异。开发者需仔细了解 Redis 官方文档。
:::

## Backup

Backup 是 Olares OS 的备份与还原模块。

可以帮助用户将整个 Olares 备份至 Olares Space，同时也支持用户自定义存储位置。

备份操作可每日、每周定期执行。每一个备份计划首次备份均为全量备份，并作为该备份计划的第一份快照，之后创建的快照均为增量备份。

Backup 组件备份内容包括：

- Kubernetes 配置数据，如用户信息、应用信息等。
- 数据库数据，如 Redis、MongoDB、PostgreSQL 等。
- 文件系统数据，如 用户通过 Files 应用上传的视频、图片以及各类文档。

Backup 组件也具备数据还原功能。可以将一个备份快照下载到本地服务器或 Olares Space，通过重建 Kubernetes、数据库以及用户个人信息，还原一个完整的 Olares。

## 更多

- 用户

  [文件管理器](../../how-to/olares/files/index.md)<br>
  [通过设置进行备份](../../how-to/olares/settings/backup.md)<br>
  如何使用 Olares Space 的[备份及恢复](../../how-to/space/backup.md)功能：查看备份记录、通过备份还原 Olares 到本地的机器和 Olares Space 上

- 开发者

  [文件上传](../../developer/develop/advanced/file-upload.md)<br>
