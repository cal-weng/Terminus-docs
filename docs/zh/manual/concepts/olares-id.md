---
description: Olares ID 的定义、结构和用途说明。包括个人 ID 类型、不同域名类型以及与去中心化标识符 DID 的关系原理。
---
# Olares ID

本文档将帮助你了解 Olares ID 的重要性。

## 什么是 Olares ID？

Olares ID 是 Olares 生态系统中的独一无二的标识符，它是你数字身份的核心，也是你使用各种服务和功能的门户。每个 Olares 账户都会有一个对应的 Olares ID。

## 为什么需要 Olares ID？

每个 Olares ID 都会自动获得一个**专属子域名**，具有以下优势：

* **便捷访问**：系统会自动为你分配个人子域名，并配置相应的访问策略。通过这个子域名，你可以随时随地访问 Olares 上的应用和服务。
* **免费 HTTPS 证书加持的安全性**：所有子域名都自带免费 HTTPS 证书，确保安全性。
* **个性化且易记**：无论是 Olares ID 还是对应的子域名，都便于记忆和分享，打造你独一无二的数字身份。

例如，如果你的 Olares ID 是 `alic123e@olares.cn`，系统会自动为你分配子域名 `alice.olares.cn`。基于这个子域名，你的各项服务会获得相应的访问地址：
- `alice123.olares.cn`：用于访问个人主页。
- `desktop.alice123.olares.cn`：用于访问个人 Olares 桌面。
- `files.alice123.olares.cn`：用于访问文件管理器。

## Olares ID 的组成
Olares ID 的格式与电子邮件地址相同，由两部分组成：
- 本地名称（前缀部分）
- 域名（后缀部分）

例如， `alic123e@olares.cn` 中， **`alice123`** 是本地名称，**`olares.cn`** 是域名。

每个域名下的本地名称都是唯一的，这确保了所有 Olares ID 都不会重复。

### 域名类型
Olares 支持三种类型的域名：

* 个人域名：供个人使用，类似个人邮箱。目前 Olares 为个人用户提供默认域名 `olares.cn` 或 `olares.com`。
* 组织域名：供组织使用，如公司电子邮件地址。用户加入组织后，可以申请该组织域名下的 Olares ID。离开组织后，管理员可以收回该 Olares ID。
* 实体域名：供应用程序等无法归类为个人或组织的实体使用。

### 个人 Olares ID 创建
创建个人 Olares ID 有两种方式：
- **快速创建**<br>直接选择一个未被使用的前缀，按要求完成注册即可获得 Olares ID。
- **高级创建**<br>
  将现有的可信身份（如邮箱账号）与 Olares ID 绑定，通过验证凭证（VC）建立关联。
  在验证过程中，系统会：
  * 通过认证过的 OAuth 服务商验证你的身份
  * 在你的社交身份与 Olares DID 之间建立加密链接

:::tip 如何创建带有验证凭证（VC）的 Olares ID
打开 LarePass，在账户创建页面的右上角点击 <i class="material-symbols-outlined">display_settings</i>，在“**创建带有 VC 的 Olares ID**”下，选择**个人 Olares ID**。

目前支持通过 Google OAuth 进行身份验证。
:::

## Olares ID 和 DID 的关系是什么？
去中心化标识符（DID）是一种无需依赖中心化机构就能验证的唯一标识符。虽然 DID 解决了去中心化网络中的身份问题，但对普通用户来说较难记忆和使用。

![DID](/images/manual/concepts/did.png){width=70%}

Olares ID 使 DID 更友好。因为使用了电子邮箱地址的熟悉格式，既方便记忆，又能充分利用 DID 的安全特性。
每个 Olares ID 都会绑定一个 DID。用户创建 Olares 账户时，系统会同步创建对应的 DID。要深入了解两者关系，请参考[Olares 账户的状态说明](./account#账户的状态)。

## 了解更多

* [创建 Olares ID](../get-started/create-olares-id)
* [Snowinning 协议](https://docs.snowinning.com/protocol/overview.html)
* [去中心化标识符（DID）](https://docs.snowinning.com/protocol/did.html)
* [Gmail 签发服务](https://docs.snowinning.com/verifiable-credential/terminus-name.html#gmail-issuer-service)
