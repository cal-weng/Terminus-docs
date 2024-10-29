# Vault

![image](/images/how-to/olares/vault2.jpg)

## Introduction

Vault 是 Web3 时代的密码管理器，它基于 Padloc 开发。

你可以将私钥和网站、应用的账户密码存储在这里，可以在这里管理自己 DID，Olares ID，OTP 和日常使用的密码。它支持在家庭、企业或任何其他类型的组织内轻松共享和管理敏感数据。也支持多种类型的快速搜索和过滤，按标签、按收藏、最近使用等快速查找 Vault Item。

## 架构

Vault 在架构上分为两个部分：

- 服务器：

  运行在 Olares 上，同一用户的不同客户端会通过 Olares 同步数据。

  简单的说，传输过程中的数据是经过私钥加密的，在 Olares 上保存的数据也是一样。在这两个环节即使加密数据被劫持，用户的秘密数据也不会被泄露。

  在我们撰写安全白皮书前，你可以先可以参考 [Padloc Security Whitepaper](https://docs.padloc.app/docs/security/)

  Vault 同时是一个[集群应用](../../../overview/olares/application.md#集群应用)。这样可以做到同一台 Olares 上的不同用户间可以通过 Shared Vault 共享数据。

- 客户端：

  分为网页，手机，电脑和浏览器插件 4 种平台 6 个版本。其中手机，电脑和浏览器版都跟随 LarePass 发行，Web 版作为一个默认系统应用跟随 Olares 发行。

  不同版本的客户端在日常使用和交互上保持了一致的体验，主要区别在于各平台在原生的密码自动填充的流程上不一致。你可以在本章节了解：

  1. Web 版 Vault 的激活
  2. 常见的概念
  3. Vault 的日常使用
  4. 团队内 Vault 的管理和使用

  你可以通过 [Password Autofill](../../larepass/password-autofill.md) 章节了解如何通过 LarePass 进行密码填充

## 名词解释

### Vault

Vault 应用名字的由来。用户的秘密数据被加密存储在这里，就像金库一样安全。

每个用户会有一个或多个 Vault：

- **Main Vault**，用户在账户激活时就生成的 Vault。可以理解为用户的私人 Vault，它使用用户的助记词进行加密。
- **Shared Vault**，Olares 里用户共享的金库，可以参考 [Padloc Security Whitepaper](https://docs.padloc.app/docs/security/) 了解加密机制

每个用户都有一个 Main Vault 和多个 Shared Vault。

### Vault Item

每个 Vault 里有多个 Vault Item 组成。每条 Vault Item 就是一个秘密。

每条 Vault Item 由：Name，Tags，Field，History，Attachment，Expiration，History 组成。

### Field

在每条 Vault Item 中，有不同的 Field，你可以通过增加不同的 Field 来保存不同的数据。

我们目前支持添加的 Field 类型有：Username，Password，Mnemonic、Email Address、URL、Date、Mouth、Credit Card Number、Phone Number、PIN、Plain Text、One-Time Password。

![image](/images/how-to/olares/vault_add_fields.jpg)

后续我们还将持续增加新的Field 类型，以及支持Field 类型名称的自定义等功能。