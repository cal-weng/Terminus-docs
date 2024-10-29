---
outline: [2, 3]
---

# 应用市场

应用市场建立在去中心化和无许可的[应用分发协议](/overview/protocol/market.md)之上。这是一个开放的应用平台，你可以在这里一键安装来自 Olares 和第三方开发者的各类应用程序、内容推荐算法、大语言模型等等。

![Discover](/images/how-to/olares/market/discover.jpg)

## Discover

#### **Applications Lists**

你可以通过页面上的排行榜来发现可能感兴趣的应用，点击 See All 按钮就可以查看完整的应用列表。在 Discover 页上你可以看到多个榜单，在每个应用分类下，还有按各类别分组的排行榜。商店中共包含 4 类榜单，分别是推荐应用榜，社区精选榜，热门榜，最新榜

- **推荐应用榜**: 我们的编辑团队在 Olares Market 中策划精选内容，来展示那些优秀的 Olares 应用。该榜单重点推荐新的应用，以及有重大更新或具有季节性时刻的内容
- **社区精选榜**: 这里收录了 Olares 社区用户最为喜爱和推荐的应用。不知道从哪开始使用你的 Olares 系统？不妨试试这个列表里的应用！
- **热门榜**: 这里是近期下载安装增长数名列前茅的应用。该榜单按最近一个月内 DockerHub 的下载数量，对所有 Olares 应用由多到少进行排序。
- **最新榜**: 这里是最近上架的 Olares 应用。该榜单根据应用提交或更新的时间，对所有 Olares 应用由新到旧进行排序。

#### **Categories**

左侧的菜单栏根据类型和用途对应用进行了分类，你可以根据使用场景快捷的从各个子类别中寻找需要的应用。应用共分为以下几个类别：

- **Productivity**: 包含了各类工作场景使用的应用，以及那些让特定流程或任务更有组织或效率的应用，例如: [OnlyOffice](https://market.olares.com//app/onlyoffice), [Gitlab](https://market.olares.com//app/gitlabfusion), [Nocodb](https://market.olares.com//app/nocodb), [Bytebase](https://market.olares.com//app/bytebase), [AFFiNE](https://market.olares.com//app/affine)

- **Utility**: 那些能帮助用户解决问题或完成特定任务的应用。例如: [Home Assistant](https://market.olares.com//app/homeassistant), [qBittorrent
  ](https://market.olares.com//app/qbittorrent), [Radicale](https://market.olares.com//app/radicale), [Obsidian LiveSync](https://market.olares.com//app/obsidian), [ShowDoc](https://market.olares.com//app/showdoc).

- **Entertainment**: 包含了那些具有互动性，满足用户娱乐或资讯需求的文字、图片、音频、视频或其他内容的应用。例如: [Jellyfin](https://market.olares.com//app/jellyfin), [Lidarr](https://market.olares.com//app/lidarr), [Navidrome](https://market.olares.com//app/navidrome), [PhotoPrism](https://market.olares.com//app/photoprism), [Calibre](https://market.olares.com//app/calibre).

- **Social Network**: 包含那些通过文本、声音、照片、视频来连接人们，以及那些帮助社区发展的的应用。例如: [Mastodon](https://market.olares.com//app/mastodon), [WordPress](https://market.olares.com//app/wordpress), [Ghost](https://market.olares.com//app/ghost), [SealCaster](https://market.olares.com//app/sealcaster).

- **Blockchain**: 包含那些利用区块链技术的应用。例如: [Ethereum](https://market.olares.com//app/geth), [IPFS](https://market.olares.com//app/ipfs), [Otmoic LP](https://market.olares.com//app/otmoiclp).

- **Recommendation**: 包含可运行在 Olares 上的去中心化推荐的算法，这些算法可能涵盖不同的内容主题。例如: [World New](https://market.olares.com//recommend/r4world), [Sport](https://market.olares.com//recommend/r4sport), [Busniness](https://market.olares.com//recommend/r4business), [Entertainment](https://market.olares.com//recommend/r4entertainment).

- **Model**: 包含可运行在 Olares 上的大语言模型. 例如: [Mistral Instruct](https://market.olares.com//model/mistralins7bq4), [Llama 2](https://market.olares.com//model/llama2chat7bq4), [Openchat-3.5](https://market.olares.com//model/openchat7b).

## Install Application

**安装**：点击应用 Get 按钮，出现 Install 字样后，再次点击即可。当有多个应用同时安装时，会按点击顺序进行排队等待。

**取消安装**：在应用排队等待或安装中时，鼠标 Hover 到操作按钮上会出现 Cancel 字样。点击即可取消安装。

你可以在 My Olares 页面查看所有安装中和已安装应用的状态。

## Application Details

你可以通过浏览应用详情来深入了解一个应用。点击 Market 页面上的应用卡片，既可跳转到该应用的详情页。

![alt text](/images/how-to/olares/market/application-details.jpg)

### Basics

你可以在页面的最上看到应用的 icon, 标题, 简要描述, 基本情况。包括了

- 开发者：应用程序的开发者。
- 语言：应用 UI 支持的语言。
- 资源需求：安装应用所需的内存、硬盘、CPU、GPU 资源
- 应用类型：[集群应用](/overview/olares/application.md#cluster-application)会在此处有额外的类型标识。

### Operation Button

应用的标题下方是应用的操作按钮。你可以通过它了解应用当前的状态和可以采取的操作。

- A **"Get"** button indicates that you can [install this application](#install-application).
- A **Spinning Symbol** button indicates that the operation is awaiting processing, such as queuing for installation. When you hover your mouse over the operation button, it changes to a 'Cancel'. Click on it to cancel the operation.
- An **Installing/Updating/Uninstalling** button indicates that the operation is in progress. If an operation, like installation, can be interrupted, the operation button will change to 'Cancel' when you hover your mouse over it.
- An **Installed** button indicates that the applcation has been installed.
- A **Running/Open** button indicates that the applcation is functioning.
- If the button is grayed out, it indicates that the application cannot be installed. You can find the [specific reasons](#unable-to-install-issues) below.

### Screenshots

你可以在此浏览应用的宣传截图，从而快速了解应用的功能特点和界面风格。
当有多张图片时，你可以点击左右箭头来滑动查看，点击图片可以查看大图。

### Descriptions

**ABOUT THIS APP** 中包含了应用的详细介绍，通常有应用的特点以及简短的功能列表。而当开发者更新应用后，你可以在 **WHATS NEW** 板块看到此次新增的功能、内容，修复的 bug 等信息。

![alt text](/images/how-to/olares/market/application-details-2.jpg)

### Permissions

你可以权限板块看到应用所需的系统权限。应用所需的权限共分为以下几类：

| 权限类型                | 说明                                                                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Files               | 应用的目录访问权限                                                                                                                                |
| Internet            | 应用安装和运行时是否需要连接互联网                                                                                                                        |
| Entrance            | 统计应用不同类型入口的个数。<br> - 可见入口指在 Olares 桌面上显示图标的入口<br> - 不可见入口指在后台运行的接口，通常被用于和其他应用协作 <br> - 公共入口可被互联网上的任何人访问 <br> - 私有入口需要激活 tailscale 才能访问 |
| Notifications       | 应用是否可以向你发送通知                                                                                                                             |
| Analytics           | 应用是否开启了[网页分析功能](/developer/develop/advanced/analytic.md)                                                                                 |
| Websocket           | 应用是否使用了 [Websocket 功能](/developer/develop/advanced/websocket.md)                                                                         |
| Secret              | 应用是否使用 Olares 的[秘密管理功能](/overview/olares/secret.md)来保存其敏感信息                                                                          |
| Knowledgebase       | 应用是否会使用你[本地的知识库](/how-to/olares/settings/knowledge.md)来增强使用体验。                                                                         |
| Search              | 应用是否使用 Olares 系统的 [Zinc 中间件](/overview/olares/data.md#es-zincsearch)进行全文搜索                                                           |
| Relational Database | 应用是否使用 Olares 系统的 [PostgreSQL 中间件](/overview/olares/data.md#postgresql)作为关系型数据库                                                      |
| Document Database   | 应用是否使用 Olares 系统的 [MongoDB 中间件](/overview/olares/data.md#mongodb)作为文档型数据库                                                            |
| Key-Value Database  | 应用是否使用 Olares 系统的 [Redis 中间件](/overview/olares/data.md#redis)作为 KV 数据库                                                               |
| Cluster App         | 应用是否为集群应用                                                                                                                                |

### Information

这里显示应用的额外信息。

- 你可以从应用的 Documents 和开发者的 Website 进一步获取的产品介绍和使用帮助。对于开源的应用，你可以通过 Source Code 查看其源代码。
- App Version 表示包含在 Chart 中的应用程序版本，而 Chart Version 则表示该应用 TAC 的版本。这两个版本号可以是不相关的，也可以同步增加。你可以在 Version History 中查看应用 Chart Version 的历史。
- 这里还会显示应用的类别，开发者和提交者名称，应用 License，法律文件等信息

### Client

一些 Olares 应用可以配合移动和电脑上的客户端实现多端同步、影音串流等功能，如 [Mastodon](https://market.olares.com//app/mastodon), [Home Assistant](https://market.olares.com//app/homeassistant), [Jellyfin](https://market.olares.com//app/jellyfin)等。你可以从 GET A CLIENT 板块直达这些应用的官方客户端。

### Dependency

一些应用需要依赖其他前置应用才能正常的工作。在安装这类应用前，你必须先安装该列表中的全部应用。

### Reference App

[集群应用](/overview/olares/application.md#cluster-application)常常会授权一些可信任的客户端 APP，对其有网络访问连通权限。如果想要使用一个集群应用，你可以安装该列表中的 App。

### Unable to Install Issues

Market 可能因为以下情况而无法安装某些应用

- **系统资源不足**：当你的 Olares 集群资源或你的用户户的资源配额低于该应用所需资源时，你将无法安装。你可以尝试释放占用的资源、扩容集群资源或增加资源配额后再尝试安装。

- **缺少依赖**：该应用依赖的应用尚未安装。你可以安装应用依赖的全部前置应用后再尝试安装。

- **系统版本不兼容**：该应用不兼容当前的 Olares OS 版本。你可以升级 Olares OS 到最新版本后再尝试安装。

- **集群应用**：该应用属于集群应用，一般用户无法安装集群应用。你可以联系你的管理员安装该应用。

## Manage Application

你可以在 My Olares 页面上查看你 Olares 上所有应用的状态和基本信息。根据应用的安装来源，这里分为 Market 和 Custom 两个 Tab，分别表示从 Market 安装的应用和[自定义应用](#custom-application)
![alt text](/images/how-to/olares/market/myolares.jpg)

### Apps

你可以在 MyOlares 页面看到 app 的状态并对其进行管理。点击 Open 按钮可直接打开应用。

要**卸载应用**时，你可以采用以下任一方式：<br> 1.在 MyOlares 页面：点击应用按钮边的扩展箭头，在下拉菜单中选择卸载<br> 2.在 桌面的 Launchpad：长按应用图标，点击 x 图标

### Recommends

你可以在 MyOlares 页面看到推荐算法的状态并对其进行管理。

- 推荐算法安装完成后会自动启动，进入 Running 状态。

要**卸载推荐算法**时，你只需在 MyOlares 页面上点击算法按钮上的扩展箭头，在下拉菜单中选择卸载。

### Models

:::info
只有管理员用户才能安装和管理模型

一个 Olares 集群同时只能加载一个大语言模型。加载模型时，会自动 Unload 先前加载的模型。
:::

你可以在 My Olares 页面看到大语言模型的状态并对其进行管理。

- 安装中的模型会显示安装进度。安装完成时按钮会显示为 Installed。
- 你需要加载一个模型才能使用它，点击按钮上的扩展箭头,在下拉菜单中选择 Load 即可完成模型加载。
- 你可以 Unload 不需要使用的模型来释放资源。点击 Running 状态模型的按钮上的扩展箭头，在下拉菜单中选择 Unload 即可。

要**卸载模型**时，你只需在 MyOlares 页面上点击模型按钮上的扩展箭头，在下拉菜单中选择卸载。

> 你可以[在此](/overview/olares/ai.md)了解更多在 Olares 中使用 AI 的细节

## Update Application

当开发者更新应用后，你会在侧边栏的 MyOlares 处看到提示气泡。进入 MyOlares，点击 Available Updates 就能看到所有可更新的应用。你可以使用右上方的 Update All 按钮更新所有应用，也可以点击 Update 按钮来逐个更新。

![alt text](/images/how-to/olares/market/update.jpg)

## Custom Application

### Install

如果你想要测试自己开发的 Olares 应用，又或是想要使用尚未发布到应用商店的测试版应用。你可以使用自定义的方式来安装应用。

- 前置条件

需要准备好符合规范的[Olares Application Chart (TAC)](/developer/develop/package/chart.md)。该 TAC 必须使用.zip, .tgz 或 tar.gz 格式进行打包。

- 安装步骤

1.  打开 Market，进入 MyOlares 页面
2.  切换到 Custom Tab
3.  点击右上角的 Upload Custom Chart 按钮，从本地上传 TAC 压缩包
4.  上传完成后，Market 会对 TAC 进行检查。如 TAC 符合格式规范，Market 就会开始安装流程。如 TAC 未通过检查，Market 会 toast 错误提示。

![Upload Custom Chart](/images/how-to/olares/market/upload-custom-chart.jpg)

### Manage

Custom 应用的管理与从 Market 安装的应用一致。你可以参考[Manage Applications](#manage-application)上的相关介绍。

### Update

自定义应用无法通过推送进行更新。如果你需要更新一个 Custom Application，请上传该应用的新 TAC 压缩包。Market 检查通过后，会根据新 TAC 包的配置去更新该应用。

:::tip
注意：Olares 会区分不同安装来源的应用。因此，当你自定义安装了一个应用后，即使 Market 中存在同名的应用，你也无法通过 Market 进行升级。同理，你也无法通过上传 TAC 压缩包去更新一个从 Market 中安装的应用。
:::

## Logs

你可以通过 MyOlares 右上角的 Log 按钮来查看应用的操作日志。应用日志记录了应用的操作类型、操作时间、操作状态和返回的结果。

![alt text](/images/how-to/olares/market/logs.jpg)

常见的应用操作异常包括：

1.  **应用安装超时**：这表示应用的容器无法在时限内完成初始化。这通常是由于无法连接镜像服务或下载镜像网速较慢导致的，你可以在确认镜像服务的可用性和网络稳定性后再尝试安装。
2.  **资源不足**：这表示应用在安装时，集群资源不足以完成容器的初始化。你可以尝试释放占用的资源、扩容集群资源或增加资源配额后再尝试安装。
3.  **配置错误**：这表示应用的配置文件存在一定问题，Olares 无法正确安装应用。你可以在社区向应用提交者反馈错误信息，请求开发人员及时修复配置文件问题。
