# Olares 对 Helm 进行的字段扩展

Olares 在每个 [TAC](chart.md) 安装时，会根据 TAC 中 [OlaresManifest.yaml](manifest.md) 的 metadata 信息，为 APP 注入一些扩展字段信息。

这些扩展字段信息，可以在模版中直接引用，而无需再 values.yaml 中事先定义 （如果 values.yaml 中有相同的定义，会被系统覆盖）。

- 用户信息

  | 变量                   | 类型     | 说明            |
  |----------------------|--------|---------------|
  | .Values.bfl.username | String | 当前安装 APP 的用户名 |
  | .Values.user.zone    | String | 当前用户的域名       |

- 地址信息

  | 变量             | 类型                 | 说明                                     |
  |----------------|--------------------|----------------------------------------|
  | .Values.domain | Map<String,String> | APP 定义的入口地址 URL, 每个 Entry 为：入口名 => URL |

- 存储信息

  | 变量                         | 类型     | 说明              |
  |----------------------------|--------|-----------------|
  | .Values.userspace.appData  | String | APP 可用的集群存储地址   |
  | .Values.userspace.appCache | String | APP 可用的本地节点缓存地址 |
  | .Values.userspace.userData | String | 用户的数据存储目录       |

- 集群信息

  | 变量                   | 类型     | 说明         |
  |----------------------|--------|------------|
  | .Values.cluster.arch | String | 集群的 CPU 架构 |

  暂不支持在混合架构（AMD64 和 ARM）下部署集群。

- 应用依赖

  | 变量           | 类型                 | 说明                       |
  |--------------|--------------------|--------------------------|
  | .Values.deps | Map<String, Value> | APP 所依赖的应用当前的地址和端口       |
  | .Values.svcs | Map<String, Value> | APP 所依赖的应用其他 service 和端口 |

  当应用设置了依赖的另一个应用时，会通过`deps`这个参数传入。
  例如，APP 设置依赖一个名叫 A-Server 的应用，A-Server 设置的入口名为 aserver, 入口 host 配置了 aserver-svc，Map<String, Value> 的值为

  ```
  {
    "aserver_host": "aserver-svc.<A-Server namespce>",
    "aserver_port": 80
  }
  ```

  同时，`svcs`会传入 A-Server 的所有 service

  ```
  {
    "aserver-svc_host": "aserver-svc.<A-Server namespce>",
    "aserver-svc_port": [80]    # 如果 service 有多个端口会一起传入
  }
  ```

- 数据库信息

  | 变量                         | 类型                 | 说明                                                                                 |
  |----------------------------|--------------------|------------------------------------------------------------------------------------|
  | .Values.postgres.host      | String             | PostgreSQL 数据库地址                                                                   |
  | .Values.postgres.port      | Number             | PostgreSQL 数据库端口                                                                   |
  | .Values.postgres.username  | String             | PostgreSQL 数据库用户名                                                                  |
  | .Values.postgres.password  | String             | PostgreSQL 数据库密码                                                                   |
  | .Values.postgres.databases | Map<String,String> | PostgreSQL 数据库名称，以申请数据库名作为 key，例如， 申请 app_db, 变量为.Values.postgres.databases.app_db |
  | .Values.mongo.host         | String             | MongoDB 数据库地址                                                                      |
  | .Values.mongo.port         | Number             | MongoDB 数据库端口                                                                      |
  | .Values.mongo.username     | String             | MongoDB 数据库用户名                                                                     |
  | .Values.mongo.password     | String             | MongoDB 数据库密码                                                                      |
  | .Values.mongo.databases    | Map<String,String> | MongoDB 数据库名称，以申请数据库名作为 key，例如， 申请 app_db, 变量为.Values.mongo.databases.app_db       |
  | .Values.redis.host         | String             | Redis 数据库地址                                                                        |
  | .Values.redis.port         | Number             | Redis 数据库端口                                                                        |
  | .Values.redis.password     | String             | Redis 数据库密码                                                                        |
  | .Values.redis.namespaces   | Map<String,String> | Redis 命名空间名称，以申请命名空间作为 key，例如， 申请 app_ns, 变量为.Values.redis.namespaces.app_ns       |
