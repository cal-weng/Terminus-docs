---
outline: [2, 3]
description: 通过 Olares 安装、配置 Steam 客户端，本地或远程串流你最喜欢的 Steam 游戏。
---
# 在 Olares 上串流 Steam 游戏

想要利用 Olares 的强大性能放松一下？没有问题。借助 Steam Headless 应用，Olares 轻松化身为 Steam 串流服务器，让你可以通过 Moonlight 或 Steam Link 客户端，在任意兼容设备上畅玩你最爱的游戏大作。

本教程将介绍如何在 Olares 上安装 Steam Headless 客户端、配置串流服务，并使用 Moonlight 客户端进行游戏串流。


## 目标
通过本教程，你将学习：

- 在 Olares 上安装 Steam Headless 并设置游戏兼容性。
- 将 Moonlight 客户端于 Sunshine 串流服务器配对。
- 使用 Moonlight 客户端进行游戏串流。
- 借助 Olares 专用网络实现远程串流。  

## 准备工作

开始前，请确保以下条件已满足：

- Olares 已安装并运行。
- 串流设备已安装 Moonlight 客户端。可在 [Moonlight 官网](https://moonlight-stream.org/) 下载适合你设备的客户端并安装。
  - 本地：串流设备需与 Olares 位于同一局域网  
  - 远程：串流设备上需安装 LarePass 客户端，可在 [LarePass 官网](https://www.joinolares.cn/larepass) 选择适合你设备的 LarePass 客户端并安装。
- 拥有一个有效的 Steam 账号。

## 安装 Steam Headless

1. 打开 Olares 应用市场，在"娱乐"分类下找到 **Steam Headless** 并点击安装。
2. 安装完成后，打开 **Steam Headless** 应用，点击 **Connect** 进入安装后台。 
3. 点击 **Install** 按钮以安装并更新 Steam。安装完毕后会自动跳转到 Steam 登录页面。
4. 登录你的 Steam 账号并完成基本设置。

![Steam 登陆界面](/images/zh/manual/tutorials/steam-login.png#bordered)

::: tip 提示
由于国内网络环境限制，Steam 安装/更新可能失败，此时可点击左上角菜单：**Internet > Steam > 重新安装**，多次尝试一般可以成功。
:::

## 设置 Steam 游戏兼容性

Olares 运行于 Linux 环境，需要通过 Proton 兼容层运行 Steam 上的 Windows 平台游戏。

1. 打开 Steam 设置页面。 
2. 前往 **兼容性** 选项，勾选“为所有其他产品启用 Steam Play”。 
3. 保存设置后重启 Steam 即可查看全部游戏库。

## 本地串流

要使用 Moonlight 客户端串流，还需与 Sunlight 服务端进行配对，并在 Moonlight 里添加游戏主机。

### 准备配对

1. 在 Olares 的 Steam 页面获取 URL，并加上端口号 `:47990`，如 `139ebc4f0.local.<你的olares 本地名称>.olares.cn:47990`。通过该网址访问 Sunshine 串流服务器控制页面。
2. 首次访问需验证。输入默认账号 `sam` 和密码 `password` 进入。
3. 点击进入 **Pin** 页签以准备配对。

### 在 Moonlight 端添加主机

1. 打开 Moonlight 客户端，点击右上角 **添加主机**。
2. 输入主机 IP 地址，即 Steam 的本地 URL：`139ebc4f0.local.<你的olares 本地名称>.olares.cn`。
   ::: tip 注意
   仅需填入 URL 部分（无需 `https://`），要带上 `local` 关键词。
3. 点击确定，可以看到主机图标，此时为待配对的锁定状态。
4. 点击主机图标，会得到配对码。

### 完成配对

1. 在 Sunshine 的 **Pin** 页面输入配对码。 
2. 填写设备名称，点击 **Send** 完成配对。

此时，你已经完成 Moonlight 与 Sunshine 配对，Steam 主机图标也变为可用状态。 

点击**主机** > **Steam**, 即可进入 Steam 界面并畅玩游戏。

## 远程串流

借助 Olares 专用网络，即使在不同网络环境下也能享受流畅的远程串流体验。要启用 Olares 专用网络：

<!--@include: ./remote.reusables.md{4,22}-->

开启专用网络后，您可以在 Moonlight 中点击已配置好的主机开始串流游戏。

## 常见问题

- **为什么我看到的画面不是全屏？**

   可能是屏幕分辨率设置的问题，你需要调整 Moonlight 的设置选项里调整分辨率，或是进入 Olares 的 Steam Headless 桌面设置。

- **如何在全屏模式下退出串流？**
   
   要退出串流的游戏画面：
   - Windows 或 Mac 上的 Moonlihgt 客户端，请使用快捷键组合 **Ctrl + Alt + Shift + Q**。
   - 移动设备上的 Moonlihgt 客户端，请使用手柄按键组合 **Start + Select + L1 + R1**。
   
   游戏结束后，可退出 Steam Big Picture 应用以释放 Olares 系统资源。

- **我下载的游戏存在哪里？**

   在默认情况下，游戏文件会下载至 `/Cache/olares/steam-headless/c0/.steam/debian-installation/steamapps/common`。建议不要更改默认下载目录。

