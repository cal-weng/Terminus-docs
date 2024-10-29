---
outline: [2, 3]
---

# Wise

Wise 是你的数字后花园。它是一款本地优先且 AI 原生的现代化阅读器，它能帮助你收集，阅读和管理来自各个平台的信息。你可以在 Wise 中运行自托管的推荐算法，帮助你筛选和排序各类互联网上的内容，打破信息茧房。结合 LarePass 浏览器插件，你可以一键将有价值的文章保存到 Olares 上，从而快速构建个人知识库

**Key Features** <br>
[Decentralized Recommendation](#recommend)<br>
[RSS Subscription](#subscribe-feed)<br>
[Feed Management](#manage-feeds)<br>
[Save Articles and Read It Later ](#articles)<br>
[PDF support](#pdfs)<br>
[Note and Tag](#note-and-tag)<br>

## Recommend

从 Market 中安装推荐算法是开始构建你的数字后花园的最快捷的途径。Olares 使用去中心化的、保护隐私的、无许可和可组合的[推荐协议](/overview/protocol/market.md)来帮助用户从科技巨头公司手中夺回自己的信息流。了解更多[推荐算法的工作原理](/overview/protocol/market.md)。

### Install Recommendation

你可以从 Market 的 Recommendation 类别下选择最感兴趣的推荐算法进行安装. 安装推荐算法和[安装应用的方法](/how-to/olares/market/index.md#install-application)是一样的. 点击 Get 按钮安装算法后，稍等一会让算法在本地完成推荐工作流后，就能在 Wise 中看到算法推荐的内容了。

![Install Recommendation](/images/how-to/olares/wise/recommend/install-recommendation.jpg)

### View Result

想要查看推荐的内容，你只需进入 Wise 的 For You 页面。这里汇聚了所有已安装的推荐算法的结果，你可以通过顶部的 Tab 按钮切换算法。

![alt text](/images/how-to/olares/wise/recommend/view-result.jpg)

**Result List**<br>
所有的推荐内容以列表的形式呈现，你可以通过滚动结果列表来浏文章封面、标题、概要、来源、作者、发布时间和标签等信息。未读的文章会在封面图的左上角显示绿色提示。点击文章即可进入阅读页查看。

**Info**<br>
列表右侧的 Info 栏展示会展示当前选中文章的基本信息，包括原始地址，来源，TAGS，NOTE 和 METADATA。你可以点击 **Subscribe this Feed** 按钮将该文章的来源添加到你的 **Feeds** 中。右上角的按钮，可以用于收起或展开 **Info** 侧边栏

**Quick Buttons**<br>
当鼠标 Hover 在一篇文章上时，你可以通过右侧的快捷按钮将文章收藏到 Inbox、ReadLater 或是从列表中移除。

### Recommendation in Action

你可以在 Manage 下的 Recommendations 页面上看到当前推荐引擎内所有工作流的任务计划。点击一个工作流，就可以查看该工作流的运行记录，再点击记录可以查看运行详情和日志。

在一个工作流的例子如下所示。在详情页上，你可以清楚清晰地看到推荐过程是如何编排的。点击图表上的节点就可以查看每个步骤的运行 Summary 和 Container 设置。点击 Logs 按钮可以进一步查看，下载或分享该步骤的运行日志。

![Recommendation log](/images/how-to/olares/wise/recommend/recommendation-log.jpg)

## Feed

Feeds 可以帮助你创建更为个性化的阅读体验。如果你不想错过一个内容来源的任何内容，你可以将其订阅到你的 Feeds 中。Wise 的 Feed 订阅功能与当前主流的 RSS 阅读器基本一致，你可以轻松上手。

### Subscribe Feed

- **Subscribe from For You**. For You 中的推荐算法是发现有价值 Feed 的捷径。Here is how:

  > - 点击 Info 栏上的 Subscribe this Feed 按钮，订阅该篇文章的内容来源。
  > - 点击文章阅读页上 Toolbar 中的订阅按钮，订阅该篇文章的内容来源。

- **Add RSS Link**. 你也可以手动添加 RSS link 完成订阅。Here is how:

  > - 在菜单栏，点击“添加”按钮，在下拉菜单中选择 Subscribe to RSS Feed，在弹出的菜单中输入 RSS link。
  > - 在 Manage Feed 页，点击右上角的“Add Feed”按钮，在弹出的菜单中输入 RSS link。

  ![alt text](/images/how-to/olares/wise/feed/add-rss.jpg)

- **Use LarePass Browser Extension**. LarePass Browser Extension 为你提供了一种简单而便捷的发现 RSS Feeds 的方式。如果当前页面包含可订阅的 RSS 源或是 RSSHub 路由，你可以通过 LarePass 将其一键订阅到 Wise。

  ![alt text](/images/how-to/olares/wise/feed/extension-rss.jpg)

  > - 打开 LarePass, 点击 Collect，在 RSS Tab 下选择想要订阅的 Feed link, 点击订阅将其添加到 Wise

### Manage Feeds

你可以在“RSS Feeds”页浏览所有已订阅的 Feeds 详情，包括 Feed Name，描述，该 Feed 的文章数量，Feed 最近一篇文章添加的时间等信息。你可以使用顶部的搜索功能来快速筛选出特定 Feed。列表右侧的操作按钮为你提供了“**复制 Feed RSS Link**”，“**编辑 Feed Name 和 Description**”，以及“**退订 Feed**”的功能

![alt text](/images/how-to/olares/wise/feed/manage-feeds.jpg)

### Unsubscribe Feeds

你可以采用以下 3 种方式来退订 Feeds

1. 从 Manage Feed 页退订：点击“RSS Fees”页进入管理页，在列表上找到要退订的 Feed，点击列表右侧的 “退订 Feed” 按钮。
2. 从 Info 侧边栏退订：选择要退订 Feed 的任意一篇文章，在点击 Info 栏上的 Unsubscribe 按钮
3. 从文章阅读页退订：在要退订 Feed 的任意一篇文章的阅读页，点击上方的 Toolbar 中的“退订”按钮

:::warning
退订 RSS Feed 将同时删除该 Feed 下所有未被添加到 Library 的文章。此操作不可恢复。
:::

## Read

为了帮助你更高效的管理你的阅读流，Wise 的 Library 提供了 Inbox 和 ReadLater 两个存放文档的位置。保存的文档会默认进入 Inbox。From there, triage documents you want to defer into ReadLater.

除了不同位置外，你还可以通过文档的已读/未读状态来快速筛选想要阅读的内容。点击结果列表右上角的按钮可以将当前列表上的所有文档标记为已读或未读。

### Articles

你可以采用以下 4 种方式将网页文章加到 Library:

1. **从 Subscription 添加**：在 For You 或 Feeds 的列表页上，点击 Quick Buttons 里的 Inbox 或 ReadLater 按钮即可收藏该文章到对应位置 2.** 从文章阅读页添加**：在任意一篇文章的文章阅读页，点击上方 Toolbar 中的 Inbox 或 ReadLater 按钮即可收藏该文章到对应位置
2. **从菜单添加**：点击菜单栏的“添加”按钮，在下拉菜单中选择"Add Page" 按钮，在弹出的菜单中输入网页 URL。
3. **从 LarePass Browser Extension 添加**：在想要收藏的网页上打开 LarePass 插件，点击 Collect，在 Page Tab 下点击 Add 按钮即可将当前页面添加到 Wise 的 Inbox。

![alt text](/images/how-to/olares/wise/read/extension-articles.jpg)

#### Articles Reader

点击任意一篇文章的卡片，即可进入文章阅读器。页面上方的 Toolbar 包含了你在阅读时常用的一些操作，侧边的 Info 栏显示了文章的基本信息。

![alt text](/images/how-to/olares/wise/read/view-articles.jpg)

以下是 Toolbar 上各个按钮的功能简介：

- Previous：跳到结果列表中上一篇文章
- Next：跳到结果列表中下一篇文章
- Next Unread：跳到结果列表中下一篇 Unread 的文章
- Mark as Read/Unread ：切换文章是否已读的状态
- Inbox：将文章添加或移动到 Inbox
- Read Later：将文章添加或移动到 Read Later
- Open Origin：在新窗口中打开文章的原始网页
- Subscribe/Unsubscribe Feed：For Your 和 Feeds 中的文章有此功能，你可以点击该按钮订阅或取消订阅 RSS Feed

### PDFs

你可以采用以下 2 种方式将 PDF 添加到 Library:

1. **从菜单添加**：点击菜单栏的“添加”按钮，在下拉菜单中选择"Add Download Link" 按钮，在弹出的菜单中输入 PDF 的下载地址、文件名称和下载位置信息。
2. **从 LarePass Browser Extension 添加**：在 PDF 页面上打开 LarePass 插件，点击 Collect，在 PDF Tab 下点击 Add 按钮即可将当前 PDF 页面添加到 Wise 的 Inbox。

![alt text](/images/how-to/olares/wise/read/extension-pdf.jpg)

你收藏的 PDF 以列表的形式呈现在 PDFs 页面下，每个 PDF 卡片显示了 PDF 的标题、概要、下载状态、作者、添加时间和标签等信息。

![alt text](/images/how-to/olares/wise/read/pdf-list.jpg)

#### PDF Reader

Wise 的 PDF 阅读页布局和 Article 基本一致。PDF 阅读页上的各个按钮的功能如下：

- 页面跳转：输入要跳转的页码后即可以立即跳转到对应页面
- 页面缩放：可以点击“—”和“+”对页面进行缩放，也可输入自定义缩放的比例。
- 旋转页面：可以对当前页面进行顺时针或逆时针旋转
- Previous：跳到结果列表中上一篇 PDF
- Next：跳到结果列表中下一篇 PDF
- Next Unread：跳到结果列表中下一篇 Unread 的 PDF
- Mark as Read/Unread ：切换 PDF 是否已读的状态
- Inbox：将 PDF 添加或移动到 Inbox
- Read Later：将 PDF 添加或移动到 Read Later
- 页面预览: 阅读器左侧是页面预览，点击上方按钮可以打开或关闭页面预览

![alt text](/images/how-to/olares/wise/read/view-pdf.jpg)

## Note and Tag

想要记录阅读时涌现的灵感？Wise 为你提供了 Note 和 Tag 功能，助你随时记录想法，将文档整理的井井有条。

### Note

**添加 Note**: 点击 Info 栏上的 Note 区域即可为当前文档添加笔记。

**修改和删除 Note**: 将鼠标 Hover 到 Info 栏的 Note 区域，点击 Edit 按钮后即可修改 Note。

![alt text](/images/how-to/olares/wise/note/note.jpg)

### Tag

**添加 Tag**: 在结果列表页，点击文档卡片上的 Tag 按钮，在输入框中选择或创建 tag。
![alt text](/images/how-to/olares/wise/note/tags.jpg)

**删除 Tag**:你可以通过两种方式删除文章的 Tag。

> - 删除单篇文档的某 Tag：在结果列表页，点击文档卡片上的 Tag 按钮，在输入框中点 x 移除不需要的 tag
> - 删除所有文档的某 Tag：在 Tags 页面，删除一个 Tag。此操作会移除所有文档中的这个 Tag。

**管理 Tag**: 你可以在 Tags 页面**查看**、**编辑**和**删除** Tag。你可以在页面上浏览所有 Tag 的标记的文字数量和最后使用该 Tag 的时间。点击列表右侧的“编辑”按钮可以修改 Tag 名称。页面顶部的搜索功能可用于快速筛选特定 tag。

![alt text](/images/how-to/olares/wise/note/manage-tags.jpg)
