
# 在 Windows 上安装 Olares

本文档详细介绍了在 Windows 系统上安装 Olares 的步骤。本方法利用 Windows Subsystem for Linux（WSL）在 Windows 中创建一个 Linux 环境，然后在其中安装 Olares OS。

- 符合以下条件的 Windows 机器：


::: tip
目前在 Windows 上使用 Olares 有一些限制，包括：
- 不支持分布式存储
- 无法添加本地节点

建议仅将其用于调试或测试目的。
:::


## 前提条件

- Windows 满足如下要求：
  - CPU：4 核心或以上
  - 内存：16GB 或以上（可用内存）
  - 存储空间：64GB 或以上（可用磁盘空间）
  - 支持的系统：
     - Windows 10 或 11
     - Linux（在 WSL2 上）：Ubuntu 20.04 LTS 或更高版本；Debian 11 或更高版本
- 手机上已安装 [LarePass](../../../larepass/overview.md#download)
- 已创建 [Olares ID](../../../larepass/account/index.md#create-olares-id)
  
:::info
了解[为什么需要 Olares ID](../../../../overview/olares/olares-id.md#为什么需要-olares-id)。
:::

## 1. 安装 Olares

1. 导航至你的 Windows 用户目录，（通常是 `C:\Users\YourUsername\`），创建一个名为`.wslconfig`的新文件。
   
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

   :::info 信息
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

6.  配置 Ubuntu 环境。

    a. 打开**开始**菜单，搜索`Ubuntu-22.04`，点击 Ubuntu 图标打开 Ubuntu 终端。
    
    b. 在 Ubuntu 中，修改`/etc/wsl.conf`文件。
    
      ::: tip
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
    
7. 安装 Olares。
   
   a. 在 Ubantu 中，运行以下命令来安装 Olares 的最新版本：

      ```bash
      curl -fsSL https://olares.sh |  bash -
      ```

   b. 安装过程中，根据提示输入 Windows 主机的 IP 地址（以`192.xxx`开头），按 **Enter** 继续。

    ![输入 Windows 主机 IP 地址](/images/overview/olares/install-windows-ip.jpeg)

   :::info
   - 如果安装过程中出现错误，使用以下命令先卸载 Olares OS：

        ```bash
        bash uninstall_cmd.sh
        ```
        卸载后，重新运行原始安装命令尝试安装。
   :::

## 2. 输入 Olares ID

安装过程结束时，系统会提示输入域名和 Olares ID：

![alt text](/images/how-to/olares/enter_olares_id.png)

- 如果你的 Olares 名称是 "alice@olares.com"，按 **Enter** 或输入 `olares.com` 作为域名，然后输入 `alice` 作为 Olares 名称。

- 如果你的 Olares 名称是 "alice@helloworld.com"，输入 `helloworld.com` 作为域名，然后输入 `alice` 作为 Olares 名称。

:::info
若需使用自定义域名，请确保已按照 [创建域名](../../../space/domain/host-domain.md) 中的描述完成域名配置。
:::

## 3. 获取初始系统信息

安装完成后，终端中将显示初始系统信息，包括后续激活所需的配置向导 URL 和初始登录密码。

![alt text](/images/how-to/olares/one_time_password.png)

### 向导 URL

如截图所示，有两个向导 URL：

- 上面一个用于内部网络访问。
- 下面一个用于公共网络访问。

通常情况下，如果你的计算机和 Olares 处于同一网络，请使用内部网络 URL。如果不在同一网络，使用公共网络 URL。

:::tip
使用内部网络 URL 时，请注意：
- 在激活过程中，你可能需要设置反向代理。
- 如果你通过扫描 QR 码激活 LarePass，请确保你的手机和 Olares 处于同一网络。
:::

### 初始登录密码

请记下下方红色方框内的初始一次性密码。你将在向导页面中需要使用它。

## 下一步

- [激活 Olares](../wizard.md)
- [登录 Olares](../login.md)
- [使用 LarePass 管理账户](../../../larepass/account/index.md)
