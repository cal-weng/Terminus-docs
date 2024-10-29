---
outline: [2, 3]
---

# AI 框架

## 动机

AI 在过去两年里获得了长足的进步，但中心化的 AI 服务在隐私、费用和可组合性方面收到了一定的挑战，开源社区也涌现了很多帮助用户在本地搭建 AI 服务的项目。

旨在让用户重新拥有数据，并能够对硬件和软件进行管理的 Olares OS 正是为这个时代而生。Olares OS 作为用户的身份化身或第二大脑的优势在于：

对于用户：

- 用户的数据真正收到了保护。
- 在数据收到保护的同事，Agent 可以基于你本地的文档，照片，视频，聊天记录，健康记录等私有数据回答问题。
- 通过 UI（[Dify.ai](../../how-to/olares/dify.md)）和 [Market](../../how-to/olares/market/index.md)，用户无需编码即可搭建和使用 Agent。
- 通过和 Agent 和 [LarePass](../../how-to/larepass/overview.md) 高度集成，用户随时随地可以触达服务。
- 低成本，用户自己购买 GPU 而不是租用云厂商的 GPU。

对于开发者：

- 基于 Kubernetes，Olares OS 对 AI 服务链条上的不同模块有良好的编排能力，包括内外部的模型、知识库、向量数据库、RUG 系统，从而达到不同模块间的可组合。
- Olares OS 内置了账户系统，网页抓取，内容抽取，秘密管理等功能，组件不用再自己去实现类似功能。
- 通过和 [Snowinning Protocol](../../developer/contribute/snowinning/overview.md)和 [Otmoic Protocol](../protocol/otmoic.md) 相结合，探索将 Agent，硬件资源服务化和货币化。


## GPU 管理

Olares 在安装时，用户可根据节点机器的情况 [设置是否启用 GPU](../../developer/develop/advanced/cli.md#olares-安装脚本的命令行参数)。

系统的安装程序会自动安装 GPU 的驱动程序，以及在系统的集群中启用集群节点。

:::info
目前系统只支持 NVIDIA 的 GPU 显卡。

同时，Olares 的 GPU 节点启用了虚拟共享能力。在集群中可多达 10 个 Pod 共享使用。
:::

## 模型管理

用户和开发者可以在本地环境中无缝集成开源的 LLM、Image、Vision 和 Speech 模型。

用户可以通过 [Market](../../how-to/olares/market/index.md) 安装模型，模型在本地通过 [Nitro](https://nitro.jan.ai/) 进行管理。

开发者可以通过 [Model OlaresManifest](../../developer/develop/package/model.md) 提交新的模型，也可以通过 [API](../../developer/develop/advanced/ai.md) 调用本地模型。

## 中间件管理

我们将 [Dify.ai](https://docs.dify.ai/) 和 Olares OS 进行了整合，在保留 Dify.ai 原有功能的基础上：

- 打通了两个系统的账号，从而避免需要用户自己创建账号和登陆
- 为每个账号创建了专属的 Agent：Ashia
- 打通了 Dify.ai 和模型管理系统，Agent 可以直接使用本地模型
- 打通了 Market 和 Dify.ai，用户可以直接安装 Agent
- 打通了 LarePass 和 Dify.ai 的 Agent 的接口，用户可以在 LarePass 里调用 Agent

## 数据管理

将 Dify.ai 的 Dataset 和 [Knowledge Base](../../how-to/olares/settings/knowledge.md) 进行了整合， Agent 可以基于本地的文件回答用户的问题。

## Developer Friendly

开发者可以通过 [API](../../developer/develop/advanced/ai.md) 调用系统提供的接口。

例如，笔记软件可以通过调用本地模型的接口，提供类似 Notion AI 一样的能力。
