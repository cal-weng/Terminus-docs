# 管理 Olares

## Resource Consumption of the Olares

:::info
只有 Android 和 iOS 版本支持该功能
:::

在这里你可以查看到 Olares 的资源消耗信息。

![alt text](/images/how-to/larepass/resource.jpg)

## VPN connection

你可以在 LarePass 客户端开启 VPN 连接。

![alt text](/images/how-to/larepass/vpn.jpg)

- 在 Olares 桌面客户端开启 VPN。请点击主界面的左上角头像区域，在新的面板中选择开启 VPN connection。

- 在 Olares 移动客户端开启 VPN。请切到 Setting 界面，进入 Account，在 Account 页面中开启 VPN。

请注意，如果你在 LarePass 客户端开启了 VPN，那么无论你是通过 LarePass 客户端连接到 Olares，还是通过浏览器访问 Olares，都将使用 VPN 连接。

## Connection Status

LarePass 将显示账号和 Olares 的连接状态.

正常情况下，将有以下几种状态：

![alt text](/images/how-to/larepass/connection_status.jpg)

| 状态                | 状态图标 | 描述                             |
| ------------------- | -------- | -------------------------------- |
| 公网连接 - Internet | Internet | 通过公网连接 到 Olares         |
| 内网连接 - Intranet | Intranet | 通过内网连接 到 Olares         |
| FRP                 | FRP      | 通过 FRP 连接 到 Olares        |
| VPN 连接 - DERP     | DERP     | 通过 VPN - DERP 连接 到 Olares |
| VPN 连接 - P2P      | P2P      | 通过 VPN - P2P 连接 到 Olares  |

### Public Network Connection - Internet

显示 “Internet” 状态，则表示，你是通过公网连接到 Olares。

### Internal Network Connection - Intranet

显示 Intranet 状态，则表示，你是通过内网连接到 Olares。

### FRP

显示 FRP 状态，则表示，你是通过 FRP 连接到 Olares。

### VPN Connection - DERP

显示 DERP 状态，则表示，你是通过 VPN - DERP 连接连接到 Olares。

### VPN Connection - P2P

显示 P2P 状态，则表示，你是通过 VPN - P2P 连接连接到 Olares。

### Offline Mode

显示 Offline Mode 状态，则表示，你现在处于离线模式下，无法连接到 Olares。

## Abnormal Status

![alt text](/images/how-to/larepass/abnormal_status.jpg)

### Network Connection Abnormality

处于这种状态下，则提醒你 Network abnormality, please check local network settings，我们自动检测本地网络，网络恢复后会自动连接，自动同步数据。

### VPN Connection Not Enabled

处于这种状态下，则提醒你 Need VPN to connect to Olares. Connect，点击状态图标和状态条都会弹窗要求立即开启 VPN 连接。

### SSO Invalid

处于这种状态下，则提醒你 Need to log in to Olares again. Log in，点击状态图标和状态条都会弹窗提示。确认后，将进入输入密码页面，输入密码后完成重新登录。

### SRP Invalid

处于这种状态下，则提醒你 Need to reconnect to Olares. Reconnect，点击状态图标和状态条都会弹窗提示。确认后，将进入输入密码页面，输入密码后完成重新登录。登录之后，你的 Vault 数据将和服务端 Vault 进行同步并合并，请放心这些数据都不会丢失。

### Device Is Inactive or Expired

出现这种情况，你则提醒你 Need to reactivate Olares. Learn more。可能的原因，我们都大致罗列了一下，最终的处理方式，由用户自行决定。

- 由于 Olares 短暂性的网络连通问题引起的，Olares 恢复正常后，此问题会自动消失。

- 因为你的 Olares 已经销毁，需要重新激活。如果你确认需要重新激活，请选择重新激活。

- 如果你无法确认情况，请忽略此信息，或寻求管理员帮助。

- 如果你觉得受到了状态提示条的干扰，可以启用离线模式。

| 异常状态           | 描述                                                                                                      | 状态提醒     |
| ------------------ | --------------------------------------------------------------------------------------------------------- | ------------ |
| 离线模式           | 可以手动切换到离线模式，在离线状态继续编辑，内容将在联网后和服务端同步。                                  | Offline 状态 |
| 网络连接异常       | 当前的网络连接不畅，请检查本地网络                                                                        | banner tip   |
| 未开启 VPN 连接    | Need VPN to connect to Olares.                                                                          | banner tip   |
| SSO 失效           | Need to log in to Olares again.                                                                         | banner tip   |
| SRP 失效           | Need to reconnect to Olares.                                                                            | banner tip   |
| 设备未激活或已失效 | 设备未激活，或者设备被销毁等各种情况。用户可以根据自己的实际情况选择：1 重新激活，2 开启离线模式，3，忽略 | banner tip   |
