---
outline: [2, 3]
---

# 控制面板

Control Hub 是 Olares OS 的系统控制台。

对于 Olares OS 的用户特别是开发者来说，可以在这里对系统的运作和底层环境做更精细，更自主的控制。

## Features

我们提供了 3 种不同的视角，帮助你查看程序运行情况：

- [Browse](./browse.md)，从应用角度出发，快速定位应用的各种资源使用情况。各种与应用相关的资源汇集在一个视图，查看、管理，一目了然。
- [Namespace](./namespace.md)，从用户角度出发，详细掌握系统中应用的资源消耗占用情况。
- [Pods](./pods.md)，从节点角度出发，最细颗粒度的 Pod 列表
- [Resource](./resource.md)，查看系统资源的使用情况
  - [Networks](./resource.md#network)，查看系统中网络安全策略，了解各个 Namespace 的网络连通性
  - [CRDs](./resource.md#crds)，管理系统中各种自定义资源申明。
- [Middleware](./middleware.md)，查看 Olares OS 内各种中间件的使用情况
  - [Postgres](./middleware.md#postgres)，展示 PostgreSQL 数据库集群的详细情况
  - [MongoDB](./middleware.md#mongodb)，展示 MongoDB 数据库集群的详细情况
  - [Redis](./middleware.md#redis)，展示 Redis Cluster 的详细情况
  - [Zinc](./middleware.md#zinc)，展示 Zinc Search 为系统中应用建立的索引服务
