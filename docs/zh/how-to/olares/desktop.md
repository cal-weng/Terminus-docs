---
outline: [2, 3]
---

# 桌面

你可以通过 Desktop 使用和管理在 Olares OS 里安装的应用。

![alt text](/images/how-to/olares/desktop.jpg)

## Dock & Launchpad

当点击 Dock 上的“LaunchPad”图标后，你安装的所有就应用会呈现出来。

![alt text](/images/how-to/olares/desktop_lauchpad.jpg)

你可以采用跟电脑一样的交互方式

- 点击图标打开应用
- 拖动图标改变在它们 Launchpad 里的排序
- 将图标拖动到 Dock 上，以方便以后得打开

### 编辑模式

当你长按应用图标后，会进入编辑模式，在这个模式下，你可以删除应用。

![alt text](/images/how-to/olares/desktop_application2.jpg)

:::info
如果一个应用图标的右上角没有“X”，则说明此应用是系统的内置应用，无法删除。
:::

### 应用图标

如图所示，应用在不同的状态下，将呈现出不同的效果。

- Dev 应用，显示了应用的名称以及专用的 icon
- 安装中的应用，在应用 icon 上显示了一个动态转圈的效果
- 安装完成的应用，仅显示应用 icon
- 可卸载的应用，这类应用将会在应用的左上角显示“X”图标，点击即可删除此应用。

![alt text](/images/how-to/olares/desktop_application.jpg)

### 应用窗口

应用默认采用“窗口”模式打开，它是一个嵌入在桌面的`iframe`页面，你基本可以像操作电脑窗口一样操作它们：

- 通过点击标题栏，来拖动窗口位置
- 通过拖动窗口的边缘，来缩放窗口的大小
- 通过点击标题栏里的“最小化”按钮，来最小化窗口，并通过点击 Dock 上的图标重新唤起
- 通过点击标题栏里的“最大化”按钮，来最大化窗口
- 通过点击标题栏里的“关闭”按钮，来关闭化窗口

特色的功能是，可以通过点击标题栏里的“浏览器”按钮，在浏览器里新建一个 Tab 打开当前应用。

![alt text](/images/how-to/olares/desktop_window.jpg)

:::info

除了”窗口“模式，我们还提供了“Tab”模式，来打开应用，该模式将在浏览器新建一个 Tab 打开应用，而不是通过 iframe 在桌面打开一个“窗口”。

开发者可以通过[Entrance](../../developer/develop/package/manifest.md#entrances)的 openMethod 属性进行设置，对于部分禁止了前端 iframe 方式访问的[社区应用](../../overview/olares/application.md#社区应用)，建议使用设置属性。
:::

### 更换壁纸

你可以在设置里 [更换壁纸](./settings/wallpaper.md)

## Search

在交互和能力上，我们借鉴了 [Raycast](https://www.raycast.com/)，虽然目前暂时只能支持打开 Application，但我们很很快添加文件搜索和 Agent 沟通的功能，并开放第三方扩展。

![alt text](/images/how-to/olares/desktop_search.jpg)

## 下一步工作

我们深知与用户的期待相比，桌面当下还很简陋，我们接下去将：

1. 对桌面的前后端分离，方便开发者开发自定义桌面
2. 对搜索功能进行扩展
3. 集成通知系统
4. 支持手机版本
5. 支持开发者自定义 Widget
6. 支持自定义主题
