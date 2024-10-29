---
outline: [2, 3]
---

# 资源

这里汇集的是一些 Olares OS 中软硬件相关的资源。从软件上讲，这里包涵的是 Olares OS 的集群描述、某些功能定义、对集群状态的申明等等资源信息。从硬件上看，这里可能包涵网络、存储、设备等等。

在`Control Hub`中，我们把他们统称为`Resources`。

:::tip
只有管理员可以查看资源的管理界面。
:::

## Network

![networks](/images/how-to/olares/controlhub/resources/01.jpg)

### Network Policies

网络策略，是目前 Olares OS 最重要的网络资源。它定义了网络的连通性。Olares OS 的沙盒机制，在网络策略上以 Namespace 维度作限制。在用户与用户之间网络隔离，在应用与应用之间网络隔离。

如上图所示，`Crontrol Hub`里展示的网络策略视图页面分为两部分。

- **Ingress Rule**<br>
  展示一个规则列表，表示满足规则的`进入流量`,允许进入 Namespace<br>
  **1.** 规则的匹配条件为 Namespace 是的 label 选择算符<br>
  **2.** 一条规内的各个 label 为 `And` 关系<br>
  **3.** 列表中多条规则为 `Or` 的关系<br>

- **Egress Rule**<br>
  与 Ingress Rule 相同，同样是一个规则列表，表示满足规则的`出口流量`,允许流出 Namespace

## CRDs

![CRDs](/images/how-to/olares/controlhub/resources/02.jpg)

CRDs 罗列了 Olares OS 中所有基于 k8s 的 CRD（ Custom Resource Definition ）。Olares OS 中诸多基于 k8s 的云原生功能都依赖于`CRD`。

以 `Application` 为例，看看`Control Hub`展示的内容

### Details

展示 CRD 的名称，group，Scope 级别，创建时间等等. 其中CRD的Scope 分为两类
- **Namespace**<br>
  表示每一条`自定义资源`属于一个 Namespace。

- **Cluster**<br>
  表示每条`自定义资源`都必须全局唯一，不属于任何 Namespace。比如，namespace 本身，就是一个 Cluster 级别的资源。

### Custom Resource

列出这个 CRD 下所有的 `自定义资源`。内容包括名称和创建时间。每条`自定义资源`右侧都有两个操作按钮。

- **Delete**<br>
  表示删除该条资源

- **Edit Yaml**<br>
  表示手动编辑 Yaml 格式的`自定义资源`。点击后打开编辑对话框。  完成编辑，点击`OK`后，即可保存修改后内容到系统中。

  ![Edit yaml](/images/how-to/olares/controlhub/resources/03.jpg)

