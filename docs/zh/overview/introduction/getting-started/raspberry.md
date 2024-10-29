
# 在树莓派上开始

本文档将介绍如何在树莓派å上快速部署和启动 Olares。只需遵循以下几个简单的步骤，你就可以创建账户、安装 Olares 并开始探索其丰富的功能。

## 开始之前

- 树莓派设备符合[硬件与系统要求](../getting-started/index.md#硬件与系统要求)。
- 手机上已安装 [LarePass](../../../how-to/larepass/overview.md#download) 应用。

## 1. 创建 Olares ID

在手机上打开 LarePass，按照界面指示[创建 Olares ID](../../../how-to/larepass/account/index.md#create-olares-id)。

:::info
Olares ID 是你在 Olares 中的唯一身份标识。
了解[为什么需要 Olares ID](../../../../overview/olares/olares-id.md#why-do-you-need-a-olares-id)。
:::

## 2. 安装 Olares

1. 配置 Raspbian 环境以启用必要的功能：

   ```bash
   echo "$(head -1 /boot/firmware/cmdline.txt) cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1" | sudo tee /boot/firmware/cmdline.txt
   
   echo "kernel=kernel8.img" | sudo tee -a /boot/firmware/config.txt
   ```

2. 将局域网 IP 地址绑定到 Ubantu 主机名，以确保 DNS 解析稳定：

   ```bash
   sudo apt install net-tools
   ifconfig
   # 查找以 `192.168` 开头的局域网 IP 地址。
   ```
   
   ```bash
   sudo nano /etc/hosts
   # 添加一行
   192.168.xx.xx   Ubuntu 
   # 将 xx 替换为你的实际 IP 地址和主机名。
   ```

3. 重启树莓派设备使变更生效。
   ```bash
   sudo reboot
   ```

4. 运行以下命令来安装 Olares 的最新版本：

   ```sh
   curl -fsSL https://olares.sh |  bash -
   ```

5. 安装完成后，请记下 Olares 激活向导的网址和你的初始登录密码。

   详细的安装步骤，请参考[在树莓派上安装 Olares](../../../how-to/olares/setup/install/raspberry.md)。

## 3. 激活 Olares

1. 使用记录的网址，在浏览器中打开 Olares 激活向导，并用初始密码登录。
2. 根据页面指示完成初始设置。
3. 用 LarePass 扫描二维码以激活你的 Olares，并设置新的登录密码。

完整的激活步骤，请查看[向导文档](../../../how-to/olares/setup/wizard.md)。

## 4. 登录 Olares

在向导页面，用新设置的密码登录 Olares，并通过 LarePass 完成双重验证。更多登录详情，参见[登录帮助文档](../../../how-to/olares/setup/login.md)。

:::warning
为保障账户和数据安全，请务必[备份助记词](../../../how-to/larepass/account/index.md#backup-mnemonic-phrase)。
:::

## 下一步
- [探索 Olares 的各种任务](../../../how-to/olares/index.md)
- [安装更多应用](../../../how-to/olares/market/index.md#install-application)
- [如何卸载 Olares](../../../developer/develop/advanced/cli.md#olares-卸载脚本)
- [如何解决 IP 地址变更的问题](../../../developer/develop/advanced/cli.md#解决-ip-变更问题)


