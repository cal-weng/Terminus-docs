# Pods

这里展示了Olares OS 中所有 Pods 的列表。提供用户从 k8s 最小颗粒维度进行查看和操作。

## Pod List

![pod list](/images/how-to/olares/controlhub/pods/01.jpg)

### 按用户筛选

可以通过列表都右上方的下拉框选择用户名，查看特定用户命名空间下的 Pods 进行查看。

### 搜索名称

可以通过列表都右上方的搜索框，输入关键字对 Pods 进行模糊匹配搜索。

### 查看容器状态

点击某一个 Pod，会进入 Pod 的详细信息界面，可以在此查看容器的日志、进入容器环境、查看容器的端口、环境变量等等。此处与Browse 中的 [Pod 详情栏视图](./browse.md#view-resource-details)功能相似。

![pod detail](/images/how-to/olares/controlhub/pods/02.jpg)



另外，在视图的右上角，还可以打开`view yaml`，以yaml 格式查看 Pod 的配置。

![pod yaml](/images/how-to/olares/controlhub/pods/03.jpg)

:::tip
此处对话框中不能修改 yaml。因为 pod 的 yaml 配置实际有 workload 中的 template 以及 Olares OS 对 pod 管理的 webhook 决定，所以手工修改 Pod 的 yaml，可能并不会起作用。
:::

## Resources

Resources是从Pod角度对当前和历史的系统物理资源的用量的统计图表。你可以查看所有节点上运行的Pod的资源消耗汇总，也可以在页面右上角，选择特定节点，单独查看其上面运行的Pod消耗的系统物理资源。

![resources](/images/how-to/olares/controlhub/pods/04.jpg)

