---
outline: [2,3]
description: 了解如何使用设置在 Olares 上配置 VPN，包括强制 VPN 访问、SSH 远程连接与子网路由。
---
# 配置 Olares 的专用网络

借助 LarePass 专用网络，你可以从不同网段或远程位置访问 Olares 设备及其局域网内的设备。启用 SSH 访问和子网路由后，就能远程管理 Olares 局域网中的电脑、打印机或 NAS 等设备。

:::info
只有 Olares 管理员才能通过 LarePass 专用网络启用局域网设备的远程访问。
:::

## 强制使用专用网络

为确保安全性，Olares 支持强制使用专用网络，确保所有连接到你的私有 Olares 应用的流量均通过专用网络，无论使用的设备或网络。

启用强制专用网络模式的方法：

1. 先在两台设备的 LarePass 上（建议一台电脑和一部手机）上开启专用网络。参考[开启专用网络](../../larepass/private-network.md#)。
2. 打开设置应用，点击左上角的个人头像，滚动至安全设置。
3. 打开强制通过 VPN 访问私有入口开关。
启用成功后，屏幕底部会显示确认消息。

## 允许通过专用网络建立 SSH 连接
启用此功能后，即使在不同网络或远程工作时，也可以通过 LarePass 专用网络使用 SSH 访问 Olares 设备。

1. 打开设置应用，选择**系统** > **VPN**。
2. 开启**允许通过 VPN 进行 SSH 连接**。端口 **22**（SSH）会自动添加到配置中。

   ![通过 VPN 使用 SSH](/images/zh/manual/tasks/ssh-via-vpn.png#bordered)

## 允许子网路由
启用此功能后，你可以访问与 Olares 位于同一局域网的其他设备。

1. 打开设置应用，选择**系统** > **VPN**。
2. 开启**允许子网路由**。

## 配置端口访问的访问控制规则
启用子网路由后，你可以通过配置访问控制列表（ACL）规则来允许访问特定端口，以便使用所需的网络服务。

例如，要通过远程桌面访问 Windows 服务器：
1. 点击 <i class="material-symbols-outlined">add</i> 打开**添加 ACL**对话框。
2. 输入 `3389`（远程桌面协议的默认端口），然后点击**确认**。
3. 点击**应用**使更改生效。

   ![添加 ACL 端口](/images/zh/manual/tasks/add-acl-port.png#bordered)

完成配置后，你就可以使用 Windows 远程桌面来访问与 Olares 位于同一局域网的 Windows 服务器了。