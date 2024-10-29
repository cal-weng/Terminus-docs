# 在树莓派上安装 Olares

本文档详细介绍了在树莓派设备上安装 Olares 的步骤。

## 前提条件

- 树莓派设备满足如下要求：
  - 硬件：Raspberry Pi 4B 或配备 8GB 内存的 Raspberry Pi 5
  - 操作系统：Raspbian 12  
  - 存储空间：64GB（推荐 SSD）
- 以太网线
- 手机上已安装 [LarePass](../../../larepass/overview.md#download)
- 已创建 [Olares ID](../../../larepass/account/index.md#create-olares-id)

:::info
了解[为什么需要 Olares ID](../../../../overview/olares/olares-id.md#为什么需要-olares-id)。
:::

## 1. 安装 Olares

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

   :::info
   - 如果安装过程中出现错误，使用以下命令先卸载 Olares OS：

   ```bash
   bash uninstall_cmd.sh
   ```
   卸载后，重新运行原始安装命令尝试安装。
   :::
 
### 2. 输入 Olares ID

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
