---
description: 使用 LarePass 移动端远程管理 Olares，包括监控状态、网络配置、远程控制与设备信息查看。
---

# 使用 LarePass 管理 Olares

**LarePass** 应用让你在手机端即可远程管理 Olares 设备：监控系统状态、配置网络、执行远程控制，并查看关键设备信息。

## 前提条件

开始前，请确认：

- 已拥有有效的 **Olares ID**，且 Olares 设备已激活。  
- Olares 设备已通电并连接网络。  
- 手机与 Olares 设备位于同一局域网。  
- 当前账户具备管理员权限。  

## 进入 Olares 管理界面

1. 打开 LarePass，进入 **设置**。  
2. 点击你的 **Olares ID**，进入 Olares 管理页面。  

## 远程设备控制

在 Olares 管理页右上角点击 <i class="material-symbols-outlined">power_settings_new</i>，可执行：

- **重启 Olares** – 设备将重启，状态显示 `Restarting`，约 5–8 分钟后恢复为 `Running`。  
- **关闭 Olares** – 设备关机，状态显示 `Powered Off`，需手动开机。  

## 网络配置

点击 **Wi-Fi 配置** 查看或修改当前网络设置。

### 有线切换至无线

若 Olares 通过网线激活，可切换到同一网络的 Wi-Fi：

1. 在 **Wi-Fi 配置** 中选择目标 Wi-Fi。  
2. 若受保护，输入密码并确认。  
3. 连接成功后，Wi-Fi 将显示在 **可用连接** 列表中。  
4. 点击新 Wi-Fi，状态显示 `IP changing`，约 5 分钟后恢复 `Running`。  

::: tip 建议
为获得最佳稳定性，优先使用有线网络。
:::

### 更新 IP 地址

当 Olares 迁移至新网络：

1. 将 Olares 与手机接入新网络并开机。  
2. 打开 LarePass，进入 **Olares 管理**。  
3. LarePass 会自动扫描局域网中的 Olares，找到后状态显示 `IP changing`。  
4. IP 更新完成后，状态变为 `Olares running`，约需 5–10 分钟。  

## 查看设备信息

点击管理页顶部的设备信息区域，可查看：

- 硬件详情  
- 系统版本  
- 资源使用情况  
- 当前网络连接  

## 卸载 Olares

此操作会将设备恢复到待安装状态，届时可在局域网重新扫描、安装并激活 Olares。

::: warning 谨慎操作
该操作将永久删除所有账户信息与数据。
:::

1. 在 **Olares 管理** 页面点击 **恢复出厂设置**。  
2. 阅读风险提示，并输入 LarePass 本地锁屏密码；若未设置，将提示先创建。  
3. 等待卸载完成，系统将返回 Olares ID 登录界面。  

