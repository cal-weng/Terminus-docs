---
description: 通过 Olares 控制面板修改系统资源配置。学习编辑 YAML 文件、调整 Pod 副本数量、查看容器状态。
---
# 通过控制面板修改系统资源

本文档介绍如何编辑 Olares 环境中的资源配置。

:::warning 警告
修改系统资源可能会显著影响系统的稳定性和性能。请谨慎操作，在专业指导下进行修改。
:::

## 编辑 YAML 文件

要编辑 Olares 工作负载的 YAML 配置文件：

1. 在**控制面板**中，进入应用的**部署**列表，点击资源以展开其详细信息视图。
2. 在页面右上角，点击 **<i class="material-symbols-outlined">more_vert</i>** > **编辑 YAML** 打开 YAML 编辑器。
3. 根据需要编辑工作负载的 YAML 配置。
4. 点击**确认**保存更改并应用配置。

   ![编辑 YAML](/images/how-to/olares/controlhub/browse/10.jpg#bordered)

## 修改 Pod 副本数

要修改运行中的 Pod 副本数量：

1. 在**控制面板**中，进入 Pod 资源详情页，查看顶部显示的 Pod 副本数量。
2. 点击 **<i class="material-symbols-outlined">add</i>** 或 **<i class="material-symbols-outlined">remove</i>** 调整 Pod 副本数量。

   ![副本数量](/images/how-to/olares/controlhub/browse/09.jpg#bordered)

:::warning 警告
Olares 中的许多应用不支持多副本模式。增加这些 Pod 的副本数量可能会导致异常。因此，请务必仔细阅读文档，并谨慎调整副本数量。
:::

## 查看容器状态

Pods 页面提供了 Olares 环境中所有 Pod 的全面视图，允许你在 Kubernetes 提供的最小粒度上进行管理。

点击列表中的 Pod 可进入其详情页，你可以：

- 查看容器日志。
- 访问容器环境。
- 查看容器端口和环境变量。
- 在只读模式下查看 Pod 的 YAML 配置。

  :::tip 提示
  无法从该视图直接编辑 YAML 配置。YAML 配置由 Olares 通过应用负载模板和 Webhook 管理。
  :::

![Pod 详情](/images/how-to/olares/controlhub/pods/02.jpg#bordered)