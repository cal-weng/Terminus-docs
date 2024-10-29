---
outline: [2, 3]
---

# 仪表盘

Dashboard 的定位类似于 Windows 的资源管理器。这里集中展示了系统的物理资源使用情况、用户剩余的资源配额，以及用户名下资源占用较高的应用等。它让你无需了解技术细节，就可以查看系统的资源使用情况，时刻观察 Olares 的运行状态。

## Overview

Dashboard 提供了你的 Olares 系统的概览。你可以在这里看到你 Olares 所在的集群的[物理资源使用情况](#physic-resources)，你剩余的[用户资源配额](#user-usage)，资源消耗最最多的[应用榜单](#application-usage), 以及[网络流量分析](#analytics)。

### Physic Resources

[Olares OS](/overview/olares/overview.md) 以 Kubernetes 为底层基础来管理各类物理资源，这使你可以使用多个虚拟机或物理机组成一个集群来运行 Olares OS。通过 Dashboard 的物理资源监控功能，你可以总览你的设备集群运行情况，并建立常规资源消耗和集群性能的标准。

你可以在 Overview 页面上看到 4 项最重要的物理资源的当前和历史用量: CPU 、内存、磁盘和容器组。下方的曲线图内容展示了最近 10 分钟的资源变化趋势。点击资源卡片，可以切换曲线图内容。

![alt text](/images/how-to/olares/dashboard/overview.jpg)

#### Usage Details

点击 More Details 可以进入各类物理资源的使用详情页。点击右上角的下拉菜单可切换不同时间范围的历史监控数据。点击刷新按钮按钮可以立即刷新监控数据。

![alt text](/images/how-to/olares/dashboard/resource-detail.jpg)

你可以在此查看最近 7 天的集群监控数据，包括 CPU 用量，内存用量, CPU 平均负载, 磁盘用量, Inode 用量, 磁盘吞吐, IOPS, 网络带宽和容器组状态。以下是每个监控指标的简要介绍：

**CPU 用量**<br>
CPU 用量显示一段时间内 CPU 资源的用量。如果某一时间段的 CPU 用量急剧上升，可能导致集群运行速度缓慢。你需要尽快定位占用 CPU 资源较多的应用并及时停用它。

**内存用量**<br>
内存使用情况以内存占用百分比来表示。可用内存的大小决定了程序能否正常运行以及如何运行，当内存不足时，应用的数据加载、线程并发和 I/O 缓冲都可能受到影响。

**CPU 平均负载**<br>
CPU 平均负载表示活动进程的平均数量，与 CPU 利用率无直接关系。理想情况下，平均负载应该等于 CPU 的数量。当平均负载大于 CPU 数量时，表明系统处于超载状态中。<br>
Dashboard 为你提供了 1 分钟、5 分钟和 15 分钟三个不同间隔到平均负载。你可以通过比较不同曲线之间的差异，来更全面了解系统工作情况。

**磁盘用量**<br>
Olares 上的许多应用程序依赖持久卷，此类后端存储依赖于磁盘。因此，实时磁盘用量监控对保证数据可靠性至关重要。你需及时关注磁盘用量，避免文件系统用尽或被滥用。当磁盘用量较高时，你需要清理不必要的镜像或容器来释放空间。

**Inode 用量**<br>
每个文件都有一个 inode，用于存储文件的创建者和创建日期等元信息。inode 也会占用磁盘空间，众多的小缓存文件很容易导致 inode 资源耗尽，此时即使磁盘未满，也无法在磁盘上创建新文件。<br>
使用 Dashboard 监控 inode 的使用率可以帮助你提前检测到此类情况，从而及时清理临时文件，防止集群因 inode 耗尽而无法工作。

**磁盘吞吐**<br>
磁盘吞吐和 IOPS 监控是磁盘监控不可或缺的一部分。磁盘吞吐量是指磁盘传输数据流（包括读写数据）的速度，单位为 MB/s。当传输大块非连续数据时，该指标具有重要的参考意义。

**IOPS**<br>
IOPS 的全称为 Input/Output Operations Per Second，用于表示磁盘每秒的读写次数。当传输小块非连续数据时，该指示器具有重要的参考意义。

**网络带宽**<br>
网络带宽是网络数据传输速率或容量的度量。这是了解网络速度和质量的关键指标。Dashboard 会监测当前系统每秒接收或发送数据速率，单位是 Mbps。

**容器组状态**<br>
容器组是运行各类应用程序的载体。Dashboard 显示了不同状态的容器组的总数，包括运行中、已完成和异常状态。标记为已完成的容器组通常为任务（Job）或定时任务（CronJob）。<br>
如果出现大量异常的容器组，你应当及时排查集群运行情况。

### User Usage

Olares 支持多人共用一个集群的物理资源，由集群管理员为每个人[分配资源配额](/how-to/olares/settings/account.md#set-resource-limit)。

在 Overview 页面上，你可以查看你名下资源的当前和历史用量。当你的用户资源配额不足时，你的 Olares 可能运行缓慢，无法安装新的应用，甚至一些运行中的高资源开销应用也会被 Suspended。
因此，除了集群资源外，你还需定期关注你的个人资源配额使用情况。

![alt text](/images/how-to/olares/dashboard/user-usage.jpg)

### Application Usage

在 Overview 页面上，你可以看到当前 CPU 和内存用量最高的 5 个应用，从而快速定位大量消耗资源的应用程序。点击 More 可以查看完整的应用用量列表。

![alt text](/images/how-to/olares/dashboard/usage-ranking.jpg)

### Analytics

Overview 页面的 Analytics 区域汇总了所有接入 Analytics 应用 24 小时内的访问量变化情况。点击 More 可以查看各应用详细的[Analytic 统计](#analytics)。

![alt text](/images/how-to/olares/dashboard/analytics.jpg)

## Applications

### Application Status

你可以在 Applications 页面以卡片形式查看你 Olares 上所有应用的运行状态。

- **Application Entrance**: 展示了应用的入口，标题 和运行状态。A [public entrance](https://docs.olares.com/overview/olares/network.html#public-entrance) will be indicated with a **public** tag. 如果一个应用有多个入口，你可以点击图标进行切换.

- **Resource Usage**: 卡片上的图表提供了该应用的物理资源使用情况，包括 CPU 用量、内存用量、网络用量和容器组数量。Hover 在图表上，可以查看该时刻具体 CPU 和内存用量数值。

![Application](/images/how-to/olares/dashboard/applications.jpg)

### Search & Sort

Applications 页面支持按照 **CPU Usage**, **Memory Usage**, **Inbound Traffic** and **Outbound Traffic**对应用进行排序，从而帮助你快速定位大量消耗资源的应用。你可以使用右上角的下拉列表选择资源，并按升序或降序排列。

当应用数量过多时，你可以使用页面上方的搜索框来查找特定名称的应用。

## Analytics

:::tip Prerequisites
只有在 [OlaresManifest.yaml](../../../developer/develop/package/manifest.md#analytics) 中声明了 analytics 功能的应用才能在 Dashboard 里看到 Analytic Data。
:::

Olares OS 提供了基于 [umami](https://umami.is/) 开发的内置网站分析功能。Analytics 页面区域显示了应用 24 小时内的 Page View, Unique Visitors 和 Average Visit Time 的统计。你可以点击应用卡片进入分析详情页。

![alt text](/images/how-to/olares/dashboard/analytics-2.jpg)

你可以在详情页查看 1 年内的 analytic 数据。点击右上角的下拉列表即可按照不同周期对数据进行统计。点击刷新按钮可以立即刷新分析数据。以下是详情页上的分析指标的简要介绍：

**Views**<br>
Page view 通常指网页被用户调用浏览的次数，如果同一位用户多次浏览时会累计计入。该指标可用于分析哪些网页的流量最大，从而有针对性的改进网站内容。

**Visitor**<br>
Unique Visitors 是指至少访问过网站一次的人。如果用户在统计周期内多次访问网站，也只算作一个访客。该指标是网站流量统计分析中另一个重要的指标，可以帮助你分析网站推广效果，了解网站的用户群体规模。

**Average visit time**<br>
也称为 Average visit duration，该指标是指用户在会话期间在网站上花费的平均时间，是衡量参与度的关键指标。

**Referrer**<br>
统计了访问者是从哪些链接点击进入你的网站的，it’s the webpage that a person was on right before they landed on your page. 你可以利用该指标来了解你网站流量的来源。

**Visitor info**<br>
Analytic 会统计来访问者的基本信息，like their device, browser, OS and location. 你可以利用这些信息来构建网站的用户画像。

![alt text](/images/how-to/olares/dashboard/analytics-3.jpg)
