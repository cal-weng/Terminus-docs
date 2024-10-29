---
outline: [2, 3]
---

# 浏览


![alt text](/images/how-to/olares/controlhub/browse/01.jpg)


## Namespace

在`Browse`中，第一栏是`Namespace`，以系统和用户为维度，将不同的项目（Namespace）进行了聚类。

`User projects` 下是每个用户独立的 Namespace。以`user-space`为前缀的是用户内建应用。以`user-system`为前缀的，是用户相关的系统程序或组件，通常是一些 TAPR 的组件，用户自己的应用间跨应用交互的调度和代理的程序等等。

`System projects` 下则是 Olares OS 系统集群的底层程序，以及系统级的服务程序。比如，在`os-system`下有为整个集群服务的 Middleware 数据库，有系统级的 Vault，也有集群统一的 SSO 服务 Authelia，等等。

:::tip
普通用户只能看到自己`User projects`下的项目，而管理员可以看到`System projects`下的项目，以及所有用户命名空间下的项目。
:::

## 项目资源

点击一个`Namespace`,就会展开进入中间一栏，也就是第二栏。这一栏里包含了这个 Namespace 所有类型的资源, 包括应用的`Workload` `Service` `ConfigMap` `Secret` `ServiceAccount`。

点击任一资源，就可以在第三栏看到资源的详细信息。不同类型的资源详情在内容上有所不同。

## Workloads

`Workloads` 是一个在 Olares OS 中运行的应用程序单元。它是在 Olares OS 中最常被用到的视图，对应 kubernetes 中的三种资源形态:

- **Deployment**<br>
  部署，是 k8s 中最常用的工作负载形式，它会自动生成 ReplicaSet （副本集），又副本集来调度生成 Pod，并生成更多的 Pod 副本达到横向扩展的目的。

- **Statefulset**<br>
  状态集，通常用来部署`有状态的Pod`,例如，数据库的 Pod，分布式文件存储的 Pod，内存 Cache 的 Pod。也就是说采用 StatefulSet 部署的 Pod，每个 Pod 可能会持有不同的数据，形成不同状态的 Pod。因此，状态集在调度 Pod 时，往往是有顺序的逐个调度。

- **Daemonset**<br>
  守护应用集，与其他两个不同，一个守护应用集会在每个节点调度一个且只有一个 Pod。换句话说，守护应用集生成的 Pod 数一般都等于节点数。因此，Daemonset 也尝尝被用来完成节点硬件相关的操作。

### View Resource Details
![alt text](/images/how-to/olares/controlhub/browse/02.jpg)

打开一个部署的详情视图，其内容依次为

- #### Details
  工作负载的一些基础信息，包括副本数量、Namespace 名称、部署创建时间等等

- #### Pods
  工作负载调度生成的 Pod 情况。在这里，你可以看到 Pod 的名称，运行状态，所在节点名称，Pod 的 IP 地址，近期的 CPU 和内存监控图表。

  你可以这个 section 右上角的 **Revision records** 按钮来查看 Pod 的调度历史差异。点击另一个刷新按钮，可以手动刷新 pod 的实时状态

  ![revision records](/images/how-to/olares/controlhub/browse/03.jpg)

  点击 pod 的名称，可进入 Pod 的详情页面。

  ![containers](/images/how-to/olares/controlhub/browse/04.jpg)
  - **Details**<br>
    包含 Pod 的基础信息，包含 Namespace、运行状态、重启次数、IP 地址，创建时间，等等

  - **Containers**<br>
    Pod 中容器的列表。每个列表里有容器的名字、运行状态、暴露的对外端口、近期的 CPU 和内存监控图表。这里的容器列表包含了工作负载中的初始化容器和运行容器全部集合。

    容器名称的右边，有两个按钮。一个可以查看容器的日志，一个可以打开一个容器内的终端环境，方便查看容器内的情况。容器日志右上角的 4 个操作按钮分别是: 进入日志实时更新状态, 刷新最新的日志,下载日志, 在新的浏览器窗口打开这个容器日志页面

    ![container log](/images/how-to/olares/controlhub/browse/05.jpg)
 

    :::tip
    你只能查看自己Namespace下容器的日志, 以及打开该容器的终端环境
    :::

  - **Volumes**<br>
    这里的内容是 Pod 配置的持久卷列表。在列表中可以看到每个 Volume 的名字，对应的持久卷申明，对应的本地路径等内容。
    
    ![pod volumes](/images/how-to/olares/controlhub/browse/06-1.jpg)


  - **Environment variables**<br>
    环境变量列表，展示不同容器引入的容器环境变量内容。
  
    ![workload env](/images/how-to/olares/controlhub/browse/06-2.jpg)

  - **Events**<br>
    展示 Pod 相关事件。如果 Pod 有什么调度安装异常，可在这里查询。

- #### Ports

  ports 列表，展示的是在 workfload 里 pod 所有容器的暴露端口集合。内容包括他们的名称、协议类型，以及端口号

- #### Environment variables

  Ports 的下面是 workload 给 pod 模版配置环境变量，内容与 pod 详情里的内容相似



- #### Labels

  接下来是 workload 元数据中配置的 Labels。这些 Labels 通常是 Olares OS 中各个 controller 程序用来协同处理的状态标签。

  Labels 的另外一个重要用途就是在 k8s 的管理中，常常会用 Label 作为筛选匹配的索引。其中，蓝色背景是标签的 Key，后面对应这个标签的内容。

  ![workload labels](/images/how-to/olares/controlhub/browse/07.jpg)

- #### Annotations
  Labels 下方是 workload 的 Annotations。与 Labels 类似，Annotations 的作用也是 controllers 用来维护管理 workload 的一个工具。

  与 Labels 不同之处，Annotation 对于 value 字段的长度、字符范围都更加灵活一些。但是 Annotation 不具备 Labels 那样的筛选匹配功能。

- #### Events
  最后一个 section 是 Events。与 Pod 详情中的 Events 类似，这里的 Events 也是可以查看一些与 workload 相关的最新 Events。通常内容会是 Pod 的调度情况。

  section 的右上角有一个刷新按钮，点击可以刷新获取最新的 Events。
  
  ![workload events](/images/how-to/olares/controlhub/browse/08.jpg)

  :::tip
  k8s 默认只保留 1 小时内的 Events，所以这里只能看到 1 小时内的 Events
  :::

### 修改部署运行状态

在上面提到的部署详情的 Details 中，最显眼的地方可以看到 Pod 的副本数量。在右边，有`+` `-`，两个按钮。在这里你可以改变 Pod 副本的数量。


![replicas](/images/how-to/olares/controlhub/browse/09.jpg)

:::warning
Olares OS 中有很多应用不支持多副本模式，将这类 Pod 增加到超过 1 个副本时，可能引起异常。用户需仔细阅读文档说明，谨慎修改副本数。
:::

### 编辑 YAML

在 workload 的详情栏，最右上角，有一个功能展开按钮。点击展开后，可以选择`Edit Yaml`。你可以在弹出的文本编辑对话框里查看以yaml 格式编写的资源配置详情。你可以在此修改当前 workload 的yaml 配置，然后点击`OK`，保存生效。

![edit yaml](/images/how-to/olares/controlhub/browse/10.jpg)


## Secrets

Secrets 是用来保存一些应用中会用的敏感数据内容。常用来记录，密码、凭证、关键配置等信息。这类数据在 k8s 中以非明文的方式保存（默认采用 Base64 转码后存放）。

![secrets](/images/how-to/olares/controlhub/browse/11.jpg)

在页面的第二栏展开`Secrets`后，可以看到这个应用的 Namespace 下所有的 Secrets。点击可以在详情栏里看到这个 Secret 的Details 和 Data
- **Details**: 展示 Secret 的基础信息，包括所属的 Namespace、创建时间等
- **Data**: 分别展示了 Secret 的 Data Key和 Data Value。

::: tip
默认显示的 data value 是`非明文转码`后的内容。section 的右上角有一个`预览`按钮。点击可以查看解码后的原文。
:::

## 配置字典

配置字典（ConfigMap）, 具有与 Secrets 相似的结构，不同之处在于存储在配置字典里的内容，以明文的方式保存。

![configmaps](/images/how-to/olares/controlhub/browse/12.jpg)

同样, 你可以在页面的第二栏展开`ConfigMaps`，查看这个应用的 Namespace 下所有的配置字典。点击可以在详情栏里看到这个 ConfigMap 的Details 和 Data
- **Details**: 展示 ConfigMap 的基础信息，包括所属的 Namespace、创建时间等
- **Data**: 分别展示了 ConfigMap 的 Data Key和 Data Value。

## 服务账户

服务账户（Service Account）是 k8s 授权认证集群中容器应用访问 k8s 所管理资源的一种机制。应用中的 k8s 客户端程序，可通过服务账号注入的配置，创建客户端，访问 k8s 接口。k8s 则根据服务账户绑定的角色对请求进行鉴权。

每一个 ServiceAccount 都对应一个 Secret。在这个 Secret 里保存 ServiceAccount 的 CA 证书，Namespace，以及 Token。

![Service accounts](/images/how-to/olares/controlhub/browse/13.jpg)

你可以在页面的第二栏展开`ServiceAccounts`，查看这个应用的 Namespace 下所有的ServiceAccounts。点击可以在详情栏里看到这个 ServiceAccounts 的Details, Data 和 Kubeconfig Settings
- **Details**: 展示 ServiceAccount 的基础信息，包括所属的 Namespace、创建时间等
- **Data**: 分别展示这个 ServiceAccount 对应的 Secret 的 Data Key和 Data Value
- **Kubeconfig Settings**: <br>
  则是用这个 ServiceAccount 自动生成的 kubeconfig 配置。开发者可以下载这个配置添加到容器中的某个应用。也可以在容器中的某个应用读取 k8s 为容器注入的 ServiceAccount 配置`/var/run/secrets/kubernetes.io/serviceaccount/`。

## 服务

`Service` 是 k8s 中将运行在一个或一组 Pod 上的网络应用程序公开为网络服务的方法。通常 Service 所对应的 Pod 集合由你定义的`Selector`来确定。

`Selector`一般会是 labels 的组合。根据选择算符的逻辑，可以从 Pods 资源中筛选出一个或一组 Pods. 所以，从某种意义上讲，Service 是一个`虚拟IP(VIP)`的服务。它通过一个 VIP，根据`Selector`将流量请求分发到一个或一组 Pod 上。

![service1](/images/how-to/olares/controlhub/browse/14.jpg)

你可以在页面的第二栏展开`Services`，查看这个应用的 Namespace 下所有的 `Services`。点击可以在详情栏里看到这个 `Services` 的Details, Workloads, Ports, Pods, Labels, Annotations和Events。
- **Details**: <br>
  展示 Service 的基础信息，包括所属的 Namespace、创建时间、选择算符、虚拟 IP、类型，以及这个 service 在集群 DNS 中的地址等信息。

- **Workloads**: <br>
  这里是根据 Service 的选择算符筛选出的 Pods 所对应的 Workloads。展示内容包括 workload 的名称和状态等。

- **Ports**: <br>
  展示这个 Service 暴露的 Ports 列表。内容包括每个 Port 的端口号，以及它允许的协议和上游目的的端口号。

- **Pods**: <br>
  这里是根据 Service 的选择算符筛选出的 Pods 列表。内容包括 Pod 的名称，节点，IP 地址，以及最近的 CPU、内存监控图表。

  从这个列表可以清楚的了解 Service 的流量请求将去向哪里。如果列表为空，则说明这个 Service 可能存在异常。

- **Labels**: <br>

  这里是 Service 的标签

- **Annotations**: <br>

  这里是这个 Service 的 Annotations 信息

- **Events**: <br>
  展示 Service 相关的 Events
