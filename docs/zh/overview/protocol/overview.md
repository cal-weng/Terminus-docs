---

outline: deep

---

# 概述

大概 5 年前，MIKE MASNICK 发表了一篇文章 [Protocols, Not Platforms: A Technological Approach to Free Speech](https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech), 向我们阐述了协议对于未来的重要性。

我们欣喜地看到，有识之士们已经意识到这点，越来越多基于协议的应用被开发出来，例如：

- 基于 ActivityPub 开发的 Mastodon
- 基于 Matrix 开发的 Element，
- 基于 [AT Protocol](https://atproto.com/) 的 BlueSky
- Nostr
- Farcaster

但客观来说，这些协议离被广泛使用还有一段路要走。

本文想尝试分析下，为什么以及未来怎么办。

## 协议的问题

通常理解，协议生态有四个角色：

- **Protocol**：项目的发起者，标准的制定者，核心服务的开发者.
- **Provider**：提供硬件运行协议的核心服务，保证协议网络的运转。

  - 在区块领域，这类角色被称为 Miner.
  - 在联邦网络，例如 Mastodon，它们被称为 Relay.
  - 在 BT 网络，Tracker 承担了类似的角色.

  我们统一称呼它们为 Provider，服务的提供者.

- **Application**：基于 Protocol 开发的应用，应用见通过 Provider 进行通信，或者 P2P 通信.
- **User**：使用上述服务，并为生态注入资金（资源）.

Protocol 生态是在和 已有的 Web2 Platform，对用户有限的注意力，时间和金钱进行争夺。

如果海量的用户选择了 Protocol 生态，那么原先在 Platform 里流转的资金就会以各种方式流入 Protocol 生态，剩下的一切纷至沓来。

所以，我认为当前协议的困境是：没有用户。在有了用户后，才需要考虑是否有可持续的经济体系或商业模式。

## 用户为什么会迁移？

理解了协议的问题，我们就能意识到，协议的复兴是在做一件将用户从 Web2 Platform 迁移到 Protocol 生态的事。类似的事在过去 20 年间，在大量的 Web2 Platform 间发生过，参考历史，用户迁移会在以下不等式成立时出现：

> 迁移成本 < “新产品体验 - 旧产品体验” ~ Yu Jun

迁移成本和体验差的的差距越大，迁移的速度就会越快。

### 迁移成本

用户运行服务器的成本是确定的：

- 运行服务器需要专业的知识。
- 运行服务器需要初期硬件的投入。
- 运行服务器需要持续投入时间进行运维和支付维护费用。

对于以太坊的存档节点这样的服务，甚至对于小企业都难以接受。

### 产品体验

去中心化的产品通常并不比他们的中心化同类好。互联网 20 年的历史，就是一部从去中心化软件到中心化平台过渡的历史。（讽刺的是，这个潮流符合上述的不等式。）

如果你有软件开发的背景，就容易理解，在相同资源投入的情况下，中心化系统往往比去中心化系统的体验更容易优化。

时至今日，去中心化系统只存在于 CDN，区块链 等极少数场景。

### 用户为什么不迁移

总结下不等式两边：

1. 左边：从 Web2 Platform 迁移到 Protocol 生态，用迁移成本高
2. 右边：体验的提升为负

不等式离成立差的很远，所以当下并没有用户产生大规模迁移的迹象。

## Olares 带来的改变

- 迁移成本变得足够低，Olares 的出现让迁移成本变成和购买一台新手机一样，不再无法逾越。

- AI 变革带来了个人和企业对数据隐私和主权的空前关注，这是 Web2 Platform 在根本上无法满足的。

所以在未来涉及到数据隐私的场景，Olares 带来的体验的提升是可以超过迁移成本的。

## Olares + Protocol

简单的说，Olares 需要通过和 Protocol 协作，在除隐私保护外的更多场景为用户带来体验的提升。我认为有两类场景：

- **在 Web2 Platform 服务边际用户成本不为 0 的场景**

  Web2 Platform 的一大特点就是前期投入一个巨大的固定成本，之后用户服务的边际成本非常的低，所以用户可以免费使用，服务提供商通过广告盈利。

  但在 AI 时代，由于 GPU 成本，用户要想获得持续稳定的服务，就需要付费。它们通常是与物理资源有关，例如，GPU，网盘，带宽。

  我们将这些资源的提供者统称为 Provider。

  过去 Provider 由 Web2 Platform 担任，现在我们希望将这些协议化这些资源。

- **用户在 Web2 Platform 为边际服务支付费用的场景**

  例如，SAAS，产品按照人头收取的费用。

  虽然 SAAS 公司需要为增量的用户支付硬件成本，但考虑到 SAAS 公司的平均毛利是 80%，而 IAAS 公司的毛利有 50%，所以用户支付费用中只有 10% 是支付给边际成本的。

  由于采用 Olares 后，硬件由用户自己支付，我们希望通过协议，让 Application 的开发者获得公平报酬的同时，用户可以减少支付费用。

  请注意，我们支持 [fair code](https://faircode.io/)，反对通过 Open Source 简单粗暴的摧毁应用开发者生态。

## 可持续的协议生态

我们希望设计一套范式，让协议的设计者们通过参考范式，就能比较容易的设计出一套可大规模使用并可持续的协议。

让基于这个范式的协议比较容易构建。

1. 在软件架构层面，我们认为协议网络是基于 信誉和 RFQ 的
2. 在激励层面，我们希望遵循价值是由用户付费确定的原则

### 基于信誉和 RFQ 的 Protocol 网络

通过前面的分析，我们已经知道 Application 和 Provider 在协议生态中承担的角色。

这里我想讨论一下 Relay，这是一个有争议的话题，因为 Relay 让一个去中心化网络看上去依赖了半中心化的服务。

但我的观点是，Relay 是协议生态不可或缺的一部分。因为：

- Relay 服务器是基于 Protocol 标准搭建的，任何人都可以搭建它。用户可以自由的选择 Relay 服务器而不会被锁定。
- 在一个有成千上万分布式的 Application 和 Provider 的协议生态里，我们需要依赖 Relay 让它们能够互相发现。

虽然 BitTorrent 网络依赖类似 Relay 的 Tracker 服务器，但这并不削弱 BitTorrent 是去中心化网络的事实。

最后，结合一张图，介绍下我们设想的协议网络是如何运作的：

![RFQ](/images/overview/protocol/rfq.jpeg)

1. Application 发送 ASK 给 Relay。
2. Relay 将 ASK 广播给 Provider。
3. Provider 将 Bid 返回给 Relay。
4. Relay 将 Bid 返回给 Application。
5. Application 根据 Bid 和 Provider 的 Reputation 进行挑选，并完成付款。
6. Provider 为 Application 提供服务。
7. Application 对 Provider 的服务进行评价。

电商生态就是基于这个框架建立的，它是被证明过可以在真实场景被大规模采用的。

更多详情可以了解 [Snowinning Protocol](../../developer/contribute/snowinning/overview.md) 和 [Otmoic Protocol](./otmoic.md)。

### 价值分配

我们希望给 Public goods with a fair price。

我认为 Tokenized 化协议不能解决公平分配的问题。因为 Tokenized 的前提是，能找到一种[工作量证明](../introduction/faq.md#什么是工作量证明)的方式，但绝大部分场景并不存在一个[工作量证明](../introduction/faq.md#什么是工作量证明)。

我认为持续且通用的协议经济体系有以下几个特点：

1. 基于用户付费。用户对 Application 和 Provider 的付费，代表了真实的认可，付费可以是一次性的或是基于订阅的。
2. 公开透明的信誉体系。交易双方能看到对方的信誉，这样可以显著降低交易成本。
3. 通缩。Relay 或 Protocol 对每笔付费进行抽成或燃烧，这样做可以一定程度遏制住为了提高信誉而伪造交易记录，同时解决“协议的价值捕捉”问题。
4. 非必要不引入新的代币。大部分场景，都可以直接使用法定稳定币作为价值交换的媒介。通过 DAO 管理的协议，对于管理币的发型和价值捕捉需要慎重。

## Olares 准备的协议

[Snowinning Protocol](../../developer/contribute/snowinning/overview.md) 是一个为去中心化身份和公开透明信誉体系准备的协议，也是 Olares BEC 架构的三个组件之一。

[Otmoic Protocol](./otmoic.md) 是一个无需第三方信任的，为 Depin，AI Agent，Crypto Trading 打造的自动化价值交换网络。

[Market Protocol](./market.md) 是一个为解决应用的无许可分发问题创建的协议，它的核心是规定了 TAC 结构。

[Recommend Protocol](./recommend.md) 是一个尝试帮助用户打破信息茧房的实验性协议。我们会在这个协议上实验很多新想法，例如通过这个协议尝试搭建经济系统去激励多样性的算法和内容提供商。
