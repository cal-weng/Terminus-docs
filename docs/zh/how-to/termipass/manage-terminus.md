# 使用 TermiPass 管理 Terminus

本指南将向您说明如何通过 TermiPass 简单管理 Terminus 设备，包括检查系统状态、管理网络连接和执行远程操作。

## 前提条件

确保满足以下条件：

- 已安装 TermiPass 应用程序。
- 您有有效的 Terminus Name 并已激活 Terminus 设备。
- Terminus 设备已开机并连接到网络。

## 访问 Terminus 管理页面

TermiPass 应用程序中的 Terminus 管理页面是管理 Terminus 的主要界面。您可以查看系统状态、配置 Wi-Fi 网络、重启或关闭设备。

访问页面步骤：

1. 打开 TermiPass 应用程序，进入 **设置** 页面。
2. 点击 **Terminus Name** 以访问管理页面。

::: tip 注意
请确保满足以下条件：
- 当前账户具有管理员权限。
- 您的手机和 Terminus 设备位于同一网络中。
:::

## 配置 Wi-Fi 网络

在 Wi-Fi 配置部分，您可以在有线和无线连接之间切换，或更改到其他网络。

### 切换有线和无线连接

如果 Terminus 是通过有线连接激活的，您可以切换到 Wi-Fi 连接：

![切换至 Wi-Fi](/images/how-to/termipass/switch_to_wifi.png)

1. 在 **Wi-Fi 配置** 页面，点击 **手机当前网络** 下列出的 Wi-Fi 连接。
2. 如果提示，输入 Wi-Fi 密码并确认连接。
3. 连接成功后，Wi-Fi 网络将显示在 **可选连接方式** 列表中。点击该 Wi-Fi 连接，Terminus 将切换至无线网络。Terminus 状态会显示为 “IP地址变更中”。
4. 当状态恢复为 **Terminus 运行中** 时，切换完成。此过程大约需要 5 分钟。

::: tip 注意
如果您的 Terminus 是通过无线连接激活的，您可以在 **可选连接方式** 列表中直接切换到有线连接。
:::

### 切换至其他网络

如果 Terminus 设备已连接至新的网络环境，您需要在 TermiPass 应用中配置 IP 地址：

1. 将手机连接至新网络，并启动 Terminus。
2. 打开 TermiPass 应用，进入 **Terminus 管理** 页面。TermiPass 会扫描本地网络并检测 Terminus 设备。此时，设备状态为 **IP 正在更改**。
3. IP 地址更改完成后，系统状态会恢复为 **Terminus 运行中**。此过程大约需要 10-15 分钟。

## 远程控制 Terminus

在 **Terminus 管理** 页面右上角有一个电源图标，点击它可以执行以下远程操作：

![远程控制](/images/how-to/termipass/remote_control.png)

- **重启 Terminus**：点击后将重启 Terminus 设备。系统状态将显示 **正在重启**，然后恢复为运行状态。此过程需要 5-10 分钟。
- **关闭 Terminus**：点击后将关闭设备。系统状态将显示 **Terminus 已关闭**，您需要手动重新开机。

::: tip 注意
- 在关闭或重启过程中，连接可能会暂时中断，系统将显示“找不到 Terminus”，然后切换到相应状态。
- 手动关闭设备后，只会显示 **找不到 Terminus** 页面。
  :::

## 恢复出厂设置

::: warning 重要
此操作将卸载系统并永久删除所有用户账户及相关数据！
:::

![恢复出厂设置](/images/how-to/termipass/restore_to_factory.png)

要卸载 Terminus：

1. 在 **Terminus 管理** 页面，点击 **恢复出厂设置**。
2. 确认风险提示并输入 Terminus 密码。
3. 等待卸载完成后，系统将返回到 Terminus Name 登录页面。

## 查看资源消耗

您可以在 **TermiPass > 设置** 中查看 Terminus 的资源消耗。

![资源消耗](/images/how-to/termipass/resource.jpg)

## VPN 连接

为增强远程访问 Terminus 的安全性，您可以通过 TermiPass 启用私有网络。

![VPN 连接](/images/how-to/termipass/vpn.jpg)

- **在 TermiPass 移动端启用私有网络**：
    1. 打开 TermiPass 应用程序，进入 **设置 > 账户**。
    2. 在账户管理页面中切换开关，启用私有网络。

- **在 TermiPass 桌面端启用私有网络**：
    1. 打开 TermiPass 应用程序，点击左上角的个人资料图标。
    2. 在弹出的面板中选择 **启用私有网络连接**。

启用后，所有通过 TermiPass 应用或网络浏览器的 Terminus 访问将通过私有网络进行。

## 了解连接状态

TermiPass 会显示您账户与 **Terminus** 的连接状态。

![连接状态](/images/how-to/termipass/connection_status.jpg)

| 状态                      | 图标      | 描述                                     |
| --------------------------- | --------- | ---------------------------------------- |
| 公网 - 互联网               | Internet  | 通过公网连接到 Terminus                  |
| 局域网 - 内网                | Intranet  | 通过局域网连接到 Terminus               |
| FRP                        | FRP       | 通过 FRP 连接到 Terminus                 |
| VPN 连接 - DERP             | DERP      | 通过 VPN - DERP 连接到 Terminus          |
| VPN 连接 - P2P              | P2P       | 通过 VPN - P2P 连接到 Terminus           |
| 离线模式                    | Offline   | 无法连接到 Terminus                      |

