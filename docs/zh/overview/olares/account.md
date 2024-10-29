---
outline: [2, 3]
---

# 用户

## 动机

Olares 在研发之初是一个逻辑上的单用户系统，这样每个用户的 Olares 在物理上都是独立的，每个人都拥有自己的数据。但随着研发推进，我们很快发现这么做的劣势：

- 硬件资源开销大，并且会随着用户数的增长而线性增长。因为每个用户都需要独立的部署重复的系统软件和中间件，这些软件几乎没有负载，但占据大量的内存。
- 无法处理需要协同的场景。由于单用户系统的应用不支持[集群应用](./application.md#集群应用)，这会导致放弃过去开源社区里大量协同软件的积累。

其次，我们期望用户只需要在桌面登录一次，就可以访问系统里所有的应用。对比之下，手机里每一个应用都需要我们单独登录。

我们认为，统一的账号体系不仅有助于打破不同应用间的数据孤岛，也可以通过统一的鉴权流程提高系统整体的安全性。

最后，我们希望应用在迁移到 Olares 时，为兼容新的账号系统，所需的改动尽可能地少。

## 统一的账号

![统一的账号](/images/overview/olares/account.jpg)

我们设计了多用户体系下的应用鉴权流程，上图是流程示意图：

1. 用户在[登录页面](../../how-to/olares/setup/login.md)完成登录后，后续的所有请求都会自动附带鉴权信息。
2. 用户每次发送请求，请求都会首先经过 Authelia 服务进行鉴权。
3. 请求附带的的鉴权信息如果没有通过，应用会自动跳转到[登录页面](../../how-to/olares/setup/login.md)，用户需要重新登录获取验证信息。
4. 对于通过 Authelia 的请求，[BFL](https://github.com/beclab/bfl) 会附带上用户的基本信息后，将它转发给应用，应用无需自己处理鉴权。
5. 对于[集群应用](./application.md#集群应用) 需要开发者额外开发 `Auth Server` 将应用的账号和 BFL 的账号绑定。

:::info
你可以参考 Olares 团队开发的一些`Auth Server`：
- [wordpress-proxy](https://github.com/beclab/wordpress-proxy)
- [bytebase-proxy](https://github.com/beclab/bytebase-proxy)
- [gitlab-client-proxy](https://github.com/beclab/gitlab-client-proxy)
- [gitlab-server-proxy](https://github.com/beclab/gitlab-server-proxy)
:::

## 多因素验证

当前，单纯采用密码进行身份认证的系统，往往都会受到大量的攻击。MFA 认证已成为越来越多系统和服务的选择。Olares 采用了多种不同安全程度认证因素叠加的方式来保证系统用户身份认证的安全。

- 密码

  在用户创建之初，Olares OS 会为用户生成随机密码，用于完成用户的初始化流程。在完成用户的身份识别认证后，会要求用户修改初始密码。采用安全性更高的自定义密码。

- 一次性二次认证码

  在[激活 Olares](../../how-to/olares/setup/wizard.md) 的过程中，LarePass 会存储 Olares OS 的一次性二次认证码（Time-Based One-Time Password, TOTP）。

  在用户进行登录等敏感操作时，Olares OS 会要求用户输入 LarePass 中生成的一次性二次认证码。

## Multiple Accounts

### 角色

在 Olares OS 中存在两种角色：

- **Admin**：创建 Olares 的用户会自动成为 Admin，拥有以下权限：
  - [管理用户](../../how-to/olares/settings/account.md)
  - [管理集群应用](./application.md#集群应用)
  - 管理硬件
- **Member**：除 Admin 外的用户。

:::info
Admin 拥有查看和修改所有账户资源使用情况的权利，但无法查看其他账户的数据。
:::

### 账号

因为每个 Olares OS 的账号都对应了一个 [Olares ID](../../developer/contribute/snowinning/olares-id.md)。

同时每一台 Olares OS 都属于一个 [Domain](../../developer/contribute/snowinning/olares-id.md#概述)。

所以，Olares 的用户在 Olares OS 中会使用`Local Name`。如`alice@olares.com`会使用`alice`。

## 资源限制

Olares OS 在创建新用户时，需要给每个用户分配 CPU 和内存资源。

当新用户安装新应用时，Olares OS 会检查用户的可用资源。如果所剩资源不够，将不允许安装。

如果新用户使用过程中，实时消耗资源超过了分配资源的 90%，Olares OS 将启动保护机制，暂停用户消耗资源最高的两个 Community Application。

在用户的实时消耗资源下降到合理水平之后，可以手动在 [Control Hub](../../how-to/olares/controlhub/browse.md#修改部署运行状态) 中，重启被暂停的应用。

## 更多

### 用户

- [通过 LarePass 管理账号](../../how-to/larepass/account/index.md)
- [通过设置管理自身账号安全](../../how-to/olares/settings/home.md)
- [通过设置管理系统账号](../../how-to/olares/settings/account.md)

### 开发者

- [账号系统回调](../../developer/develop/advanced/account.md)
