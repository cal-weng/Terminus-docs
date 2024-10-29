---
outline: [2, 3]
---

# 应用

## 动机

我们希望为 Olares OS 的应用设计一种类似于 Android 和 iOS 系统一样的沙盒，这样可以做到：

- 用户应用和系统应用的隔离
- 不同应用间的网络和存储可以做到隔离
- 对应用的资源使用情况进行控制

由于沙盒机制，恶意程序作恶的范围被有效控制，所以让无许可的社区应用生态成为可能。

在 Kubernetes 中，命名空间（namespace）是一种将集群资源划分为多个独立的部分的机制。

我们基于“每个社区应用都属于一个独立的命名空间”的基础概念，衍生了以下机制：

- 社区应用和系统间的[调用机制](#service-provider)
- 社区应用间的[通讯机制](#service-provider)
- 不同用户使用同一个社区应用时的[协作机制](#cluster-scoped-application)

## 应用标识符

Olares OS 里的应用有两种标识符：应用名和应用 ID。

### 应用名

在 [Market Protocol](../protocol/market.md) 下，应用名由 Indexer 分配。

例如 Olares 官方团队维护的 Indexer 的地址是 [apps](https://github.com/beclab/apps)，它规定应用在仓库下的目录名就是应用名。

### 应用 ID

应用 ID 是应用名 MD5 哈希值的前 8 位，例如一个应用的应用名是“hello”，则应用 ID 是“b1946ac9”。

应用 ID 会在 [Endpoint](./network.md#endpoint) 中出现。

由于应用名是由开发者自己提交，Indexer 主要解决冲突问题，可能会带来潜在的不公平和欺诈，所以我们考虑引入无语义的应用 ID 解决这个问题。

## 应用分类

你可以通过 [ControlHub](../../how-to/olares/controlhub/browse.md) 查看系统中存在的应用，并根据 `namespace` 区分应用类型：

### 系统应用

系统包含了 Kubernetes、Kubesphere 和 Olares OS 自身的组件，以及必要的硬件驱动。以下`namespace`属于系统应用：

```
os-system
kubesphere-monitoring-federated
kubesphere-controls-system
kubesphere-system
kubesphere-monitoring-system
kubekey-system
default
kube-system
kube-public
kube-node-lease
gpu-system
```

`os-system`是 Olares OS 开发的组件。集群级的应用以及系统提供的各种数据库中间件都安装在这个`namespace`下。

它只允许被用户的`user-space`下的应用访问，不允许任何社区应用有访问权限。

### 用户系统应用

Olares OS 是多用户的系统，不管是 Admin 还是 Member, 都有两个用户系统应用的命名空间，分别是：

```
user-system-'Local Name'
user-space-'Local Name'
```

:::info
关于 Local Name 的定义，参考 [Olares ID](../../developer/contribute/snowinning/olares-id.md)。
:::

**user-space**

`user-space`命名空间安装了用户日常使用的系统应用，例如：
- [Files](../../how-to/olares/files/index.md)
- [Settings](../../how-to/olares/settings/index.md)
- [Control Hub](../../how-to/olares/controlhub/index.md)
- [Dashboard](../../how-to/olares/dashboard/index.md)
- [Market](../../how-to/olares/market/index.md)
- [Profile](../../how-to/olares/profile.md)
- [Vault](../../how-to/olares/vault/index.md)

我们把这些应用放到一个特殊的命名空间里的原因是：

- 这些应用需要有一部分对系统底层接口的调用权限。比如，调用 Kubernetes 的`api-server`接口。
- 应用之间存在很多互相调用。
- 在沙盒机制下，需要保护这些应用不受恶意程序的攻击。

**user-system**

系统应用以及用户的内置应用是不允许三方 APP 直接访问的。但数据库集群，以及内置 APP 如果提供某些接口的 [Provider](../../developer/develop/advanced/provider.md)。那么社区应用[申明需要获得这些访问权限](../../developer/develop/package/manifest.md#sysdata)之后，就可以访问到这些资源。

这种情况下，系统在`user-system`的 `namespace`下，提供了这些资源的网络代理，并对这些来自三方的应用的网络请求调用进行鉴权。

### 社区应用

社区应用的命名空间由两部分组成：[应用名](#应用名) 和用户的 [Local Name](../../../developer/contribute/snowinning/olares-id.md)，例如：

```
n8n-alice
gitlab-client-bob
```

Olares OS 完整继承了现有 Web 软件生态：开发应用所需的技术栈和传统 Web 软件完全一致。因此，开发者不仅可以开发全新的应用，还可以将现有的 Web 软件稍加修改集成进 Olares OS。

开发者可以参考[开发者文档](../../developer/develop/index.md) 开发应用，再按照[协议](../protocol/market.md)制定的标准[提交](../../developer/develop/submit/index.md) 后，其它用户就可以通过[应用市场](../../how-to/olares/market/index.md) 查看并安装。

同开发者一起打造 Olares 生态，会一直是我们最重要的事。

### 集群应用

集群应用是一种特殊类型的社区应用。这个类型的应用：

- 只有 Admin 可以安装。
- 在整个集群中，每个集群应用只能安装一个实例。
- 用户需要通过被集群应用授权的 `Reference Application` 来使用集群应用。

集群应用通常会：

1. 监听[用户事件回调](../../developer/develop/advanced/account.md)，来同步系统中的用户。
2. 实现 [Auth Server](./account.md#统一的账号)，让用户不用额外登录。

你可以参考 Olares 团队做的一些移植：
- [Gitlab Fusion Client](https://github.com/beclab/apps/tree/main/gitlabfusionclient)
- [Gitlab Fusion](https://github.com/beclab/apps/tree/main/gitlabfusion)

## 应用间调用

### Service Provider

我们提供了一套 Service Provider 机制，供社区应用调用系统应用或其它社区应用提供的服务。

![Service Provider](/images/overview/olares/image3.jpeg)

如图所示:

- 开发者需要将应用的一个服务接口[申明为 Provider](../../developer/develop/advanced/provider.md#申明-provider)，同时系统也内置了一些 Provider。
- 其它应用想要调用这个接口时，需要[申请 Provider 的权限](../../developer/develop/advanced/provider.md#申请-privder-的访问权限)。
- 调用实际发生时，`user-system`下的`system-server`服务会服务负责请求的代理并进行权限的检查。

## 应用市场

在 Olares 的[应用市场](../../how-to/olares/market/index.md) 中，不仅可以安装应用，同时也包含了丰富的智能推荐、AI 模型供用户选择。

在应用市场中，无论是安装应用、智能推荐还是 AI 模型，其安装体验完全一致。用户都只需要在应用市场中，点击**获取**，等待系统完成安装，就可以打开使用。而系统在处理这些安装，都基于 Helm 的安装 [Chart](../../developer/develop/package/chart.md) 包进行扩展，实现完全统一的安装流程。

对于开发者来说，提交三方的应用、智能推荐、AI 模型到 Olares 的应用市场，也都采用相同的[提交审核流程](../../developer/develop/submit/index.md)。

对于系统的深度用户，应用市场提供了自定义安装的入口。用户完全可以参照我们的[ TAC 格式](../../developer/develop/package/chart.md)，自行打包任意一个应用手动上传到系统中。

## 应用状态

一个应用的生命周期会有以下的状态：

- `pending`：排队等待。
- `installing`：正在安装。
- `running`：应用安装完成。
- `suspend`：应用被暂停，副本数被设置为`0`。
- `uninstalling`：正在卸载。
- `upgrading`：正在升级。

状态的变化流程图如下：

```
+---------+     +------------+     +--------------+     +---------+     +----------+
| pending | --> | installing | --> |              | --> | suspend | --> | resuming |
+---------+     +------------+     |              |     +---------+     +----------+
                                   |              |                       |
                  +--------------> |   running    | <---------------------+
                  |                |              |
                +------------+     |              |
                | upgrading  | <-- |              |
                +------------+     +--------------+
                                     |
                                     |
                                     v
                                   +--------------+
                                   | uninstalling |
                                   +--------------+

```

## 资源限制

应用开发者应在 TAC 的 [OlaresManifest.yaml](../../developer/develop/package/manifest.md#spec) 中填写应用合理的资源消耗限制。

- requiredMemory: 内存最低要求，单位 Mi / Gi
- limitedMemory: 内存上限，单位 Mi / Gi
- requiredDisk: 硬盘最低占用量, 单位 Mi / Gi
- limitedDisk: 硬盘占用上限，单位 Mi / Gi
- requiredCpu: CPU 最低核数要求，可用小数
- limitedCpu: CPU 核数上限，可用小数

开发者提交应用审核时，会审核 TAC 模版中配置的所有容器的资源占用总和是否超过`OlaresManifest.yaml`中的申明。

用户在安装应用时，Olares OS 会检查当前剩余的资源是否满足应用申明的资源需求。如果不满足，将会拒绝安装。

## 更多

### 用户

- [通过应用市场管理应用](../../how-to/larepass/account/index.md)
- [通过设置管理应用](../../how-to/olares/settings/application.md)

### 开发者

- [学习在 Olares 上开发应用](../../developer/develop/index.md)<br>
