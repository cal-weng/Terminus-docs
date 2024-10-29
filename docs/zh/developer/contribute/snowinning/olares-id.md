---
outline: [2, 3]
---

# Olares ID

尽管分布式身份标识（DID）为身份验证提供了解决方案，它们却不易于记忆和识别。Olares ID 旨在解决这一问题。

:::info
为了更好地理解 DID、Olares ID 和账户之间的关系，请参阅[相关文档](../../../how-to/larepass/account/index.md#stage-of-account)。
:::


## 概述

一个完整的 Olares ID 包括**本地名称**和**域名**。例如：

`alice@olares.com` 是一个 Olares ID，其中 **alice** 是本地名称，**olares.com** 是域名。

每个域名内的本地名称是唯一的，因此 Olares ID 也具有唯一性。

## 域名类型

Olares 系统中存在三种类型的域名：

### 个人域名

这类域名供个人使用，类似于 `gmail.com` 后缀的电子邮件地址。目前，Olares 默认为个人用户提供 **olares.com** 后缀。

### 组织域名

这类域名供组织使用，如公司电子邮件地址。用户加入组织后，可以申请属于该组织的 Olares 名称；离开组织时，管理员可以回收该名称。

组织管理员可以通过现有的 Web2 域名申请组织域名，详细过程请参阅[创建组织域名](../../../how-to/space/domain/host-domain.md)。域名注册完成后，可进行[组织用户管理](contract-manager.md)。

### 实体域名

根据 DID 的定义，DID 可以代表任何实体，如人、组织、物体、数据模型、抽象实体等。对于无法归类为个人或组织的实体，如电影、应用程序、自动化市场制造商，我们为这些实体设计了实体域名。

实体域名主要用于帮助协议构建[声誉系统](concepts.md#声誉)，期望看到更多的协议使用实体域名来创建类似 IMDb、Yelp、LinkedIn 的 Web3 版本。

目前，实体域名的注册需经 Olares 团队批准，申请人负责后续管理。

## DomainName

将 Olares ID 中的 "@" 替换为 "."，你将得到对应的 DomainName。<br>
例如，`alice@olares.com` 的 DomainName 是 **alice.olares.com**。

这个规则适用于个人和组织的 Olares ID。

通过在浏览器中输入 Domain Name，你可以访问用户激活的 Olares。<br>
例如，输入 `https://alice.olares.com` 可以访问 Alice 的 [个人主页](../../../how-to/olares/profile.md)。

## 个人 Olares ID

申请个人 Olares ID 可能存在公平性问题，因为严格遵循先到先得的原则可能会导致账户预注册，这可能引起：

1. 欺诈。例如 elonmusk@olares.com 可能不是由 [Elon Musk](https://twitter.com/elonmusk) 注册的
2. 虽然在早期阶段可能有效促进网络活动，但也可能导致 Olares ID 的注册投机。

基于 [VC Service](vc.md)，我们设计了发行者和验证者流程，帮助用户申请 Olares ID：

![alt text](/images/overview/snowinning/image1.jpeg)

### Gmail 发行者服务

考虑到短期内不会有来自 Google 的官方发行者服务，我们目前使用 Google 的 OAuth 流程来完成 VC 的发行。简化的流程如下：

1. Alice 通过 OAuth 在 LarePass 登录她的 Gmail 账户。
2. Google 将 OAuth 凭证返回给 LarePass 客户端。
3. LarePass 将 OAuth 凭证提交给发行者。
4. 发行者确认凭证的有效性，并从 Google 的服务器检索 Alice 账户的基本信息（如电子邮件名称）。
5. 发行者向 Alice 发行一个与她 Gmail 地址的本地部分匹配的 VC。

Alice 现在可以将发行的 VC 存储到 LarePass。

:::tip 提示
在整个过程中，Alice 只在授权范围内向 LarePass 和发行者服务透露基本账户数据，密码和隐私保护由 Google 的 OAuth 协议确保。
:::

我们已经开源了构建发行者服务所需的所有代码，允许任何人设置 Gmail 发行者服务或其他 Web2 服务发行者服务。

### Olares ID 验证者服务

这是 Olares 端的验证者服务的工作方式：

1. Alice 将她的 DID、Olares ID 和 Gmail VC 打包成一个 VP，并将 VP 及其签名提交给验证者服务。
2. 验证者服务检查签名、VP 中 VC 的有效性以及 Olares ID 是否可以在区块链上注册（当使用 Gmail 和 Twitter 等多个渠道用于 VC 信息时可能会发生冲突）。
3. 所有检查通过后，验证者服务将用户信息提交到区块链，并帮助 Alice 支付 Gas 费用。

此时，Alice 成功获得了她的 Olares ID。

:::tip 提示
例如，如果你使用 Gmail 地址 "hello@gmail.com" 申请，一旦所有检查通过，你将获得 Olares ID "hello@olares.com"。
:::

## 组织 Olares ID

使用 **组织 Olares ID** 本质上与使用 **个人 Olares ID** 相同。唯一的区别是管理员需要首先[申请自定义 Domain](../../../how-to/space/domain/host-domain.md)。更多详情，请参考[快速开始](../../../overview/introduction/getting-started/index.md)。