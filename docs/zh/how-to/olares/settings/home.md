---
outline: [2, 3]
---

# 主页

Home 是用户的安全中心。

## Device Management

![alt text](/images/how-to/olares/home01.png)

该列表里显示了当前所有能访问 Olares 的设备，这些设备被分成两类：

1. LarePass，包括手机，电脑和浏览器插件版的 LarePass。这类设备在访问 Olares 时需要经过 Vault，Account 两套系统的授权，在开启 VPN 后还要获得额外的授权。
2. Desktop，通过浏览器里打开的桌面访问。这类设备只有 Account 一套授权。

列表中会显示每个设备的名称、连接的方式、设备 IP、最后连接的时间等信息。

## Safety

![alt text](/images/how-to/olares/home02.png)

### 修改密码

在安全设置中，你可以修改 Olares 的登录密码。

### Forcing VPN access to private entrance (Only VPN Mode)

当这个功能启用后，系统会要求所有对 [Private Entrance](../../../overview/olares/network.md#private-entrance) 的访问都必须通过 VPN。

需要注意的是，我们要求满足至少 2 台装有 LarePass 的设备启用了 VPN，才能激活这个开关。典型的场景是，电脑和手机都安装了 LarePass 并激活了 VPN 访问。

你可以在 [HeadScale 连接状态](#headscale-connection-status) 查看启用了 VPN 功能的 LarePass 列表。<br>

了解如何在 LarePass 客户端使用 VPN 连接，请查看这里 [VPN connection](../../larepass/manage-olares.md#vpn-connection)。

### Network Authority Policy

默认情况下，用户在 [Login](../setup/login.md) 需要输入登录密码和二次验证码才能完成登录，对应了`Two Factor`模式。

当调整为`One Factor`模式后，用户在 [Login](../setup/login.md) 只需要输入登录密码就可以完成登录。
:::info
我们非常不推荐在这里采用`One Factor`模式
:::

![alt text](/images/how-to/olares/network_authority_policy.png)

### Active Session Of The Vault

这里显示了对 Olares 有访问权限的 LarePass 列表。

与 Login 的登录方式不同，LarePass 在获得授权时额外需要私钥，安全等级更高。

![alt text](/images/how-to/olares/active_session_of_the_vault.png)

### HeadScale Connection Status

这里显示了所有在 LarePass 激活了 VPN 访问的设备。

![alt text](/images/how-to/olares/headScale_connection_status.png)

### List Of SSO Authorization Tokens

显示了 Account 系统内，当前所有的有效令牌，这些令牌可能是通过 [Login](../setup/login.md) 登录获取的，也可能是通过 LarePass 登录获取的。

你可以在这里对令牌进行撤销。令牌撤销后，持有令牌的设备需要重新输入登录密码和二次验证码才能再次访问 Olares。

![alt text](/images/how-to/olares/list_of_sso_authorization_tokens.png)

### Login History

显示了最近通过密码尝试登录 Olares 的记录，用户可能是通过 [Login](../setup/login.md)，也可能是通过 LarePass 登录 。

:::info
当用户的密码输入正确后，无论是否正确输入了二次验证码，这里都会显示成功。
:::

![alt text](/images/how-to/olares/login_history.png)
