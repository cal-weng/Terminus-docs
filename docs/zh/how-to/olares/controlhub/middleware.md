# 中间件

中间件展示的是 Olares OS 中部署的中间件的管理界面。

:::tip
只有管理员可以查看中间件的管理界面。
:::

## Postgres

![postgres](/images/how-to/olares/controlhub/middleware/01.jpg)

详细信息中，展示了集群的信息，包括集群名称，部署 namespace，访问地址，以及管理员密码。下方的Databases 列表展示了 Olares OS 中各应用申请的 PG 数据库，包括数据库名、用户、密码。

## MongoDB

![mongodb](/images/how-to/olares/controlhub/middleware/02.jpg)

详细信息中，展示了集群的信息，包括集群名称，部署 namespace，访问地址，以及管理员密码。下方的Databases 列表展示了 Olares OS 中各应用申请的 MongoDB 数据库，包括数据库名、用户、密码。

## Redis

![redis](/images/how-to/olares/controlhub/middleware/03.jpg)

详细信息中，展示了 Redis 集群的信息，包括集群名称，部署 namespace，访问地址，以及管理员密码和 Redis 代理的访问地址。下方的Databases 列表展示了 Olares OS 中各应用申请的 Redis 信息，包括 Namespace 和密码。

## Zinc

![zinc](/images/how-to/olares/controlhub/middleware/04.jpg)

Zinc 详情，展示了 Olares OS 中各应用申请建立的索引列表。列表中显示了索引名称，文档数、占用存储大小等。最右侧分别是Schema配置和测试搜索的操作按钮。

点击Schema配置按钮后，打开 Schema 的配置对话框。对话框显示了 JSON 格式的 Schema 配置信息。

![schema](/images/how-to/olares/controlhub/middleware/05.jpg)


点击测试搜索按钮，会打开 Zinc Search 的测试搜索对话框。在这里可根据 zinc search 的搜索语法，自主搜索索引里的信息。

![zinc search](/images/how-to/olares/controlhub/middleware/06.jpg)


## Bytebase

你可以使用第三方应用来查看数据库中的内容。例如，Bytebase是一款通用的数据库客户端工具。下面我们以它为例，介绍如何访问数据库中间件。

### 在应用商店安装

在应用商店里，找到 Bytebase，点击 Get，然后再点击 Install 进行安装。

![bytebase](/images/how-to/olares/controlhub/middleware/07.jpg)


### 添加 PG 数据库
`打开`Bytebase后，点击`Add Instance`，选择 PostgreSQL
- Instance Name 可以填写 `Olares` 或其他。
- Environment 选择 PROD，TEST 其中一个。
- HOST，USERNAME，PASSWORD 可在 [Control Hub 的 Middleware](#postgres)中查看。

![alt text](/images/how-to/olares/controlhub/middleware/09.jpg)

保存后连接数据库，即可以看到 PostgreSQL 中的数据

![alt text](/images/how-to/olares/controlhub/middleware/10.jpg)

### 添加 Mongo 数据库
`打开`Bytebase后，点击`Add Instance`，选择 MongoDB
- Instance Name 可以填写 `Olares` 或其他。**_注意_** 不能使用重复的 instance name
- Environment 选择 PROD，TEST 其中一个。
- HOST，USERNAME，PASSWORD 可在 [Control Hub 的 Middleware](#mongodb)中查看。

![bytebase1](/images/how-to/olares/controlhub/middleware/11.jpg)

保存后连接数据库，即可以看到 MongoDB 中的数据

![alt text](/images/how-to/olares/controlhub/middleware/12.jpg)

### 使用数据库

在 Bytebase 的界面右上角，点击`SQL Editor`, 就可以跳转到 Editor 界面进行操作

![bytebase1](/images/how-to/olares/controlhub/middleware/13.jpg)
