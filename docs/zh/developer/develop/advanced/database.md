# 数据库

Terminus 系统中为所有 APP 提供了三种最流行的数据存储集群，覆盖 RDS、NoSQL、Cache 三种数据存储场景。

## RDS

系统部署了 PostgreSQL，并且提供两种模式的数据库。

- 单机模式的 PostgreSQL，提供最常用的 RDS 数据库层的功能。
- 分布式 PostgreSQL 扩展，Citus。提供数据库的分布式横向扩展能力。

APP 在设置数据库申请的时候，可以方便地指定说要采用数据库类型。

```yaml
middleware:
postgres:
  username: postgres
  databases:
    - name: db
      distributed: true # 是否需要分布式数据库
```

当 APP 选用了 Citus，在系统对 PostgreSQL 做横向扩展副本时，会自动将数据库表做 sharding，并且执行 rebalance。

## NoSQL

Terminus 默认不部署 NoSQL 集群，但可以从 Market 轻松安装。要建立 NoSQL 集群，管理员需要安装 [**MongoDB**](https://market.jointerminus.com/middleware/mongodb) 中间件。安装后，[Percona Operator for MongoDB](https://github.com/percona/percona-server-mongodb-operator) 会自动管理 **MongoDB** 集群。用户可以对 MongoDB Cluster 进行横向的副本扩展，以及数据库的备份和还原。

你可以在 [TerminusManifest.yaml](../package/manifest.md#middleware) 中按如下方式指定 MongoDB 的详细配置：

```yaml
middleware:
  mongodb:
    username: mongodb
    databases:
      - name: db0
      - name: db1
options:
  dependencies:
  - name: terminus
    type: system
    version: '>=1.6.0-0'
  - name: mongodb
    version: ">=6.0.0-0"
    type: middleware      
```

## Cache

在 Cache 的集群方面，Terminus 选用了 Redis Cluster。并通过定制化的[Redis Cluster Operator](https://github.com/beclab/redis-cluster-operator)对集群进行管理，实现其云原生化。可以做到很方便简单的横向副本扩展。

同时，为了保证 Redis 集群数据，用户与用户之间，APP 与 APP 之间数据隔离无干扰，系统还增加了一个 Redis 集群代理，实现数据的`命名空间`隔离，并且对 APP 开发者来说，完全无感知，无需关心。
此外，这个集群代理还提供方便的集群连接功能，在 APP 中无需移植单例版的 Redis Client 到 Redis Cluster client。大大的简化了 APP 的代码修改工作。

```Yaml
middleware:
  redis:
    password: password
    namespace: db0
```

**_注意_**

由于 Terminus 采用的是 Redis Cluster 版本，所以开发者在使用时需详细了解 Redis Cluster 的使用限制。
