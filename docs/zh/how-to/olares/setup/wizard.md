---
outline: [2, 3]
---

# 激活向导

## Open Wizard in Browser

:::info
你可以在 [Getting Started](../../../overview/introduction/getting-started/index.md) 了解什么是 Admin 和 Member。
:::

### Admin

如果你是 Admin，根据 Olares 不同的安装方式，可以在各自对应的地方找到 Wizard URL 和 首次登录 One Time Password:

- [自有服务器](./install/index.md)，请参考文档中的提示，确认是否使用的是内网的 Wizard URL
- [Host on Olares Space](../../space/host/create-olares.md#one-time-password)

### Member

如果你是 Member，请向 Admin 询问你的 Wizard URL 和 首次登录 One Time Password

### Enter URL in Browser

在浏览器输入 Wizard URL 后，你就可以看到下图的欢迎页面，按任意键即可继续。

![alt text](/images/how-to/olares/open_wizard_in_browser.jpg)

## Enter Password

1. 检查 Olares ID 是否正确
2. 输入在第一步和 Wizard URL 一起获得的首次登录 One Time Password

![alt text](/images/how-to/olares/enter_password.png)

如果密码输入不正确，请参考上一步再次确认。

如果输入密码错误次数达到 3 次，会导致账号被暂时锁定，你需要等待 5 分钟之后方可再次输入密码进行登录。


## Select Language

![alt text](/images/how-to/olares/select_language.png)

## Select A Reverse Proxy(Optional)

如果你是**自有服务器**，可能会看到这个选项。

![alt text](/images/how-to/olares/select_a_reverse_proxy.jpeg)

如果你使用的是**内网的 Wizard URL**，请选择一个物理位置离你最近的 [FRP 节点](../../../overview/olares/network.md#setup-reverse-proxy)。

如果你使用的是**公网的 Wizard URL**，可以选择不设置。

## Activate Olares

如果你是**自有服务器**，同时是**管理员**，还使用了**内网的 Wizard URL**，那么一定要 LarePass 和 Olares 在同一内网，这样 LarePass 才能访问到 Olares

![alt text](/images/how-to/olares/activate_olares.jpg)

请打开 LarePass，LarePass 在正常情况下将进入到该页面

点击此页面的按钮「Scan the QR code」 扫描 Wizard 页面上的二维码，完成激活流程。

如果你的 Olares ID 是之前已经拥有并已经妥善保存了助记词的，可以通过导入助记词来进入上面的界面，点击页面的按钮「Scan the QR code」 扫描 Wizard 页面上的二维码，完成激活流程。

如果你的 Olares ID 之前已经激活过 Olares，而 Olares 现在已不可用。你需要重新激活 Olares。LarePass 将提示并引导你进行重新激活。

### Initialize Olares

此时系统在进行初始化设置，理论上这里不会出现错误。

![alt text](/images/how-to/olares/initialize_olares.png)

### Network Configuration

此时系统在进行 DNS 设置， Https 证书申请。

如果出现错误，请在 LarePass 重试。

![alt text](/images/how-to/olares/network_configuration.png)

### DNS Resolution

此时系统正在等待 DNS 生效。

如果出现错误，请在 LarePass 重试。

![alt text](/images/how-to/olares/dns_resolution.png)

### Reset Password

请在 LarePass 手机端重新设置 Olares 的登录密码。

![alt text](/images/how-to/olares/reset_password.png)

:::warning
请注意新设置的密码不能跟首次登录 One Time Password 一样。
:::

设置成功后，首次登录 One Time Password 就会失效。请妥善保存你刚刚设置的 Olares 登录密码。

设置成功后，LarePass 端将自动进入首页。而 Wizard 将自动跳转至 [登录页面](../setup/login.md)。
