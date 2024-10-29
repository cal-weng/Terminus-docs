
# 在 Mac 上安装 Olares

本文档详细介绍了如何在 Mac 上安装 Olares。这种方法使用了容器化工具，如 Docker Desktop 和 Minikube，为在 Mac 上运行 Olares OS 创建合适的环境。

::: tip
目前在 Mac 上使用 Olares 有一些限制，包括：
- 不支持分布式存储
- 无法添加本地节点

建议仅将其用于调试或测试目的。
:::

## 前提条件

-  Mac 设备满足如下要求：
   - 架构：X86-64 或 ARM64
   - 内存：8GB 或以上（可用内存）
   - 存储空间：64GB 或以上（可用磁盘空间）
   - macOS：Monterey (12) 或更高版本
- Mac 上已安装[Docker](https://www.docker.com/products/docker-desktop/) 和 [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew)。
::: tip
建议通过 `homebrew` 安装 MiniKube。
:::
- 手机上已安装 [LarePass](../../../larepass/overview.md#download)
- 已创建 [Olares ID](../../../larepass/account/index.md#create-olares-id)

:::info
了解[为什么需要 Olares ID](../../../../overview/olares/olares-id.md#为什么需要-olares-id)。
:::

## 1. 安装 Olares 

1. 在 Docker Desktop 中，导航至 **Settings** > **Resources**，并按下面配置分配资源：
    - **CPU limit**: 至少 4 个 CPU
    - **Memory limit**: 至少 9 GB
  
2. 点击 **Apply & Restart** 使变更生效。
    
3. 在终端中，导航至你想安装 Olares OS 的目录，运行以下命令开始安装：

   ```bash
   curl -fsSL https://olares.sh |  bash - 
   ```

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
