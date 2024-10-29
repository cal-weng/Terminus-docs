# 在 Windows 上开始

本文档将介绍如何在 Windows 系统上快速部署和启动 Olares。只需遵循以下几个简单的步骤，你就可以创建账户、安装 Olares 并开始探索其丰富的功能。

::: tip
目前在 Windows 上使用 Olares 有一些限制，包括：
- 不支持分布式存储
- 无法添加本地节点

建议仅将其用于调试或测试目的。
:::

## 开始之前

- Windows 设备符合[硬件与系统要求](../getting-started/index.md#硬件与系统要求)。
- 手机上已安装 [LarePass](../../../how-to/larepass/overview.md#download) 应用。

## 1. 创建 Olares ID

在手机上打开 LarePass，按照界面指示[创建 Olares ID](../../../how-to/larepass/account/index.md#create-olares-id)。

:::info
Olares ID 是你在 Olares 中的唯一身份标识。
了解[为什么需要 Olares ID](../../../../overview/olares/olares-id.md#why-do-you-need-a-olares-id)。
:::

## 2. 安装 Olares

1. 导航至你的 Windows 用户目录（通常是 `C:\Users\YourUsername\`），创建一个名为`.wslconfig`的新文件。
   
2. 将以下内容复制粘贴到`.wslconfig`文件中。
   
   ```bash
   [wsl2]
   memory=16GB 
   swap=0GB
   ```

3. 以管理员身份打开 PowerShell，在 Windows 的 Linux 子系统中安装 Ubuntu 操作系统。
   
   ```PowerShell
   wsl --install -d Ubuntu-22.04
   wsl --update
   ```

   :::info
   如果是首次安装 WSL，可能需要重启计算机。
   ::: 

4. 在 PowerShell 中运行以下命令，获取当前 Windows 系统的 IP 地址。
   
   ```PowerShell
   netsh interface ipv4 show addresses
   ```
   
   记录 WLAN 或 Ethernet 接口的 IP 地址（以`192.xxx`开头）。安装 Olares 时将需要此 IP 地址。

5. 设置端口转发，确保从 Windows 访问 WSL 服务时能正确路由。
   
   a. 获取 WSL 的 IP 地址：

      ```PowerShell
      wsl ip address show eth0 `| grep inet `| grep -v inet6 `| cut -d ' ' -f 6 `| cut -d '/' -f 1
      # 这通常会返回格式为 "172.xx.xx.xx" 的 IP 地址
      ```
   b. 设置端口转发规则：
   
      ```PowerShell
      netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress=<addr for hostname>
      netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=443 connectaddress=<addr for hostname>
      netsh interface portproxy add v4tov4 listenport=30180 listenaddress=0.0.0.0 connectport=30180 connectaddress=<addr for hostname>
      
      # 用WSL 的 IP 地址替换 <addr for hostname>。
      ```

6. 配置 Ubuntu 环境。

   a. 打开**开始**菜单，搜索`Ubuntu-22.04`，点击 Ubuntu 图标打开 Ubuntu 终端。

   b. 在 Ubuntu 中，修改`/etc/wsl.conf`文件。

      :::tip
      使用 sudo 命令编辑文件。
      :::

      ```bash
      [boot] 
      systemd=true  
      command="mount --make-rshared /"   # 添加这行
      [network]
      generateHosts = false
      generateResolvConf = false # 允许手动管理主机文件和 DNS 设置
      hostname=olares # 为 WSL 实例设置主机名
      ```

   c. 关闭 Ubuntu 使变更生效。

      ```PowerShell
      wsl --shutdown Ubuntu-22.04
      ```

   d. 重新启动 Ubuntu，修改`/etc/hosts`和`/etc/resolv.conf`文件。
   
      ```bash
      sudo sh -c "echo \"127.0.0.1 localhost\n \
      $(ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}') $(hostname)\" > /etc/hosts && \
      echo \"nameserver 1.1.1.1\nnameserver 1.0.0.1\" > /etc/resolv.conf"
      ```
      :::info
      此命令将 Ubuntu 的本地 IP 与主机名绑定，并配置 DNS 解析以使用 Cloudflare 的公共 DNS 服务器。
      :::
    
6. 安装 Olares。
   
   a. 在 Ubantu 中，运行以下命令来安装 Olares 的最新版本：

      ```bash
      curl -fsSL https://olares.sh |  bash -
      ```

   b. 安装过程中，根据提示输入 Windows 主机的 IP 地址（以`192.xxx`开头），按 **Enter** 继续。

    ![输入 Windows 主机 IP 地址](/images/overview/olares/install-windows-ip.jpeg)

7. 安装完成后，请记下 Olares 激活向导的网址和你的初始登录密码。

详细的安装步骤，请参考 [在 Windows 上安装 Olares](../../../how-to/olares/setup/install/windows.md)。

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
- [如何卸载 Olares](../../../developer/develop/advanced/cli.md#olares-uninstallation-script)
- [如何解决 IP 地址变更的问题](../../../developer/develop/advanced/cli.md#resolve-ip-change-issue)

