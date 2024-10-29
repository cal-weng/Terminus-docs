# 命名空间

Control Hub 的 Namespace 功能，是提供用户以 Namespace 出发，观测 Olares OS 上的资源占用和负载情况。

![namespace](/images/how-to/olares/controlhub/namespace/01.jpg)

## Usage Ranking

Usage Ranking，是将系统的资源消耗，以 namespace 维度聚合，提供用户按不同的指标进行统计查看的功能。

### 指定排序维度

`Usage Ranking` 提供了多个指标维度的排序。每个指标维度都可以顺序、倒序两种方式排序。
- CPU Usage
- Memory Usage
- Pods
- Outbound Traffic
- Inbound Traffic


### 按用户筛选

如上图所示，用户可以在界面右上方的下拉框中，按用户进行 namespace 的筛选。

### 搜索特定 Namespace

此外，同样是页面的右上方，还可以输入关键字搜索特定的 namespaces.

### Namespace 详情

点击某一个 Namespace，可以进入 Namespace 详情页面

![pod list](/images/how-to/olares/controlhub/namespace/02.jpg)

在详情页，可以看到这个 Namespace 下所有的 Pods 列表。你可以查看每个 Pods 的资源用量情况，并根据4种资源用量进行排序。详情页同样支持按关键字搜索`搜索特定Pod`

在这个页面，点击某个 Pod，可以再进一步进入`Pod详情`，里面是 Pod 里所有容器的列表。展示每个容器的资源用量情况。

![container list](/images/how-to/olares/controlhub/namespace/03.jpg)


## Resources

Resources是从Namespace角度对当前和历史的系统物理资源的用量的统计图表。你可以查看所有用户的资源消耗汇总，也可以在页面右上角，选择特定用户，单独查看其消耗的系统物理资源。

![resources](/images/how-to/olares/controlhub/namespace/04.jpg)

