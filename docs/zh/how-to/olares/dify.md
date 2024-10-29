---
outline: [2, 3]
---

# Dify

 
我们将 Dify.ai 和 Olares OS 进行了整合，在保留 Dify.ai 原有功能的基础上：

- 打通了两个系统的账号，从而避免需要用户自己创建账号和登陆
- 为每个账号创建了专属的 Agent：Ashia
- 打通了 Dify.ai 和模型管理系统，Agent 可以直接使用本地模型
- 打通了 Market 和 Dify.ai，用户可以直接安装 Agent
- 打通了 LarePass 和 Dify.ai 的 Agent 的接口，用户可以在 LarePass 里调用 Agent
- 将 Dify.ai 的 Dataset 和 [Knowledge Base](../../how-to/olares/settings/knowledge.md) 进行了整合， Agent 可以基于本地的文件回答用户的问题。

更多 Dify.ai 功能，可以参考 Dify.ai 的[官方文档](https://docs.dify.ai/)

## Ashia 的设置

Ashia是你在Olares中的个人AI助理。在 Dify 的页面上，选取“Studio”，选取“Ashia”，即可以进入 Ashia 的设置页面。

![alt text](/images/how-to/olares/dify/01.jpg)

首次使用时，你会在在右侧看到 Agent 所用的模型还没有配置好，因而无法进行下一步的操作。此时，我们需要为其指定一个大语言模型。你可以调用[Remote Model](#using-remote-model) or [Self-hosted Model](#using-self-hosted-model)。


在左侧，你可以通过UI设置提示词、变量、上下文，以及为 Agent 添加工具。工具是可以附加在 Agent 中的辅助功能，dify.ai 提供了大量的可选工具。

![alt text](/images/how-to/olares/dify/02.jpg)

:::tip
即使没有配置任何模型，新建的 Agent 也会默认写入 OpenAI 的 GPT-4 作为模型名, 但此时Agent并不能正常工作。
:::

## Using Remote Model

我们以使用 GPT4 为例，介绍如何设置远程模型。

你首先需要点击右上角的用户名，点击“Settings”，进入设置界面。在设置界面点击“Model Provider”，选择远程模型的供应商。

![alt text](/images/how-to/olares/dify/04.jpg)

鼠标悬停在 OpenAI 上，点击显示的“Setup”按钮，进入 OpenAI 的配置界面。在这里输入 API Key 及其它必要的信息，即可以配置好 OpenAI 的一系列模型的权限。

![alt text](/images/how-to/olares/dify/05.jpg)

之后，就可以在 Ashia 的设置页面选择模型，并进行模型参数设置。点击右上角的“Publish”按钮即可以发布更新，加载了模型的 Ashia Agent 就可以投入使用了。

![alt text](/images/how-to/olares/dify/18.jpg)

## Using Self-hosted Model

### Install from Market

你可以在 Market 中选择合适的本地（Self-hosted）模型。点击 “Get” 按钮即可一键在Olares中安装一个大语言模型. 
![alt text](/images/how-to/olares/dify/08.jpg)

待安装进度完成后，你可以进入左下角的“My Olares”页来“Load”已安装的模型。加载成功后模型状态会变为“Running”，之后你可以在这个页面上“Unload”一个已加载的模型。你可以[在此](../olares/market/index.md#models)查看在Market中安装和管理模型的更多信息。

![alt text](/images/how-to/olares/dify/09.jpg)

::: tip
只有当你的 Olares 拥有可访问的 GPU 时，才能看到相关页面和执行相关操作。
:::

::: warning
一时间至多可能存在一个处于 Running 状态的模型.
:::


### 本地选择模型

在模型加载后，回到 Dify 页面的 Model Provider 界面，可以看到已经自动配置好了一个系统级的 OpenAI-API-compatible 模型，名叫 nitro。

![alt text](/images/how-to/olares/dify/10.jpg)

之后进入 Ashia Agent 的配置页面，可以看到模型也已经自动配置成了 nitro，并可以调整 nitro 的细节参数。

![alt text](/images/how-to/olares/dify/13.jpg)

::: tip
在模型停止加载后，自动配置的nitro也会被移除。如需要改用其它模型，你需要在Agent配置页面手动调整。
:::

## 创建 Konwledge 

你可以为Agent添加knowledge来针对性地回答问题。在 Dify 的页面上方，有“Knowledge”选项卡. 点击进入，可以看到已经设置了一个名为 **_YourOlaresName_**'s Document的默认Knowledge。该 Knowledge 默认监听 Olares 的 Files 中的 Documents 文件夹。

![alt text](/images/how-to/olares/dify/14.jpg)

我们在 Documents 文件夹中上传一些文件, 然后回到 Knowledge，可以看到上传的文件已经自动同步并进行 indexing 处理。等待一段时间，当所有文档变为Available后，就可以为Agent配置Context了。

![alt text](/images/how-to/olares/dify/15.jpg)
![alt text](/images/how-to/olares/dify/16.jpg)

回到 Ashia Agent 的配置页面，在左侧的“Context”的位置点击 "Add" ，你就可以使用 Knowledge 为 Agent 添加定制化的上下文了。

![alt text](/images/how-to/olares/dify/17.jpg)

结合知识库数据管理功能，你可以自行建立更多的知识库，并设置各知识库监听的文件夹，从而用不同的知识库为不同的 Agent 提供支持。

## Explore Dify

你可以参考 Dify 的官方手册进一步了解如何[创建一个Dify应用](https://docs.dify.ai/user-guide/creating-dify-apps/creating-an-application)
