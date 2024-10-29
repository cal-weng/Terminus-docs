---
outline: [2, 3]
---

# 账户

:::info
Admin 才能看到这个页面。
:::

可以在列表中查看用户属于 Admin 还是 Member。

如果账户有红色的‘Not activated’标记，代表账户虽然完成了创建，但没有完成 [Wizard](../setup/wizard.md) 流程，此时账户还不能正常使用。

![alt text](/images/how-to/olares/settings_users.png)

## Create Account

创建用户的过程分为 3 步：

![alt text](/images/how-to/olares/settings_create_account.png)

1. 确认 Olares ID

   - 确认新用户的 Olares ID，如果他还没有 Olares ID，请让他参考 [Getting Started](../../../overview/introduction/getting-started/index.md)进行申请
     :::info
     请确保用户的 Olares ID 的 Domain 和这台 Olares 的 Domain 一致
     :::

2. 创建账号

   - 点击“创建用户”按钮
   - 输入新用户的 Olares ID
     :::info
     输入 Olares ID 的 Local 部分即可，例如:

     'alice@olares.com'输入'alice'

     'bob@helloworld.com'输入'bob'
     :::

   - 输入用户 CPU 和内存的使用限额，你可以之后在[用户详情](#set-resource-limit)调整
     :::info
     我们推荐 CPU 最小设置为 1，内存最小设置为 3Gi
     :::

3. 将 Wizard URL 和首次登录 One Time Password 发送给用户

   - 创建成功之后收到一个弹窗，里面显示了用户的 Olares ID、初始密码、以及 Wizard 引导激活链接。你可以复制这些信息，发送给新用户去激活这个账号。
     :::info
     如果用户没记住激活链接或者初始密码，请在这个未激活的账号详情页底部查看激活链接，以及重置初始密码
     :::

## Account Detail

根据账号的类型，详情页的内容也略微有些区别。

![alt text](/images/how-to/olares/settings_user_info.png)

具体差别如下：

- 管理员的详情页，可以重设自己的账号密码

- 已激活成员用户的详情页，管理员可以重置用户密码，调整和配置用户 CPU、内存的使用额度，删除用户

- 未激活成员用户的详情页，管理员可以重置用户密码，显示 Wizard URL，调整和配置用户 CPU、内存的使用额度，删除用户

### Reset User Password

如果你的成员用户不小心忘记了密码，你可以在此帮助他重置密码。重置密码是一串随机字符。

- 如果成员用户尚未激活，请收到重置密码之后，请立即访问激活 url 地址，[立即激活](../setup/wizard.md)。

- 如果成员用户已经完成激活，请使用新密码登录 Olares，并[修改密码](../settings/home.md#修改密码)。

### Set Resource Limit

你可以在此调整和配置这个用户的 CPU、内存的使用额度。

请注意单个用户的 CPU、内存的使用额度，不得超过集群的 CPU、内存的上限。

### Delete User

点击「删除用户」即可将这个用户删除。提交删除之后，请等待删除完成，这可能需要耗费一些时间。

请注意：如果这个用户已经激活，删除用户将导致他在 Olares 的数据丢失。但保存在 LarePass 上的 Vault 数据不会丢失。
