
# 在 Mac 上开始

本文档将介绍如何在 Mac 系统上快速部署和启动 Olares。只需遵循以下几个简单的步骤，你就可以创建账户、安装 Olares 并开始探索其丰富的功能。

::: tip
目前在 Mac 上使用 Olares 有一些限制，包括：
- 不支持分布式存储
- 无法添加本地节点

建议仅将其用于调试或测试目的。
:::

## 开始之前

- Mac 设备符合[硬件与系统要求](../getting-started/index.md#硬件与系统要求)。
- Mac 上已安装[Docker](https://www.docker.com/products/docker-desktop/) 和 [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew)。
::: tip 提示
建议通过 `homebrew` 安装 MiniKube。
:::
- 手机上已安装 [LarePass](../../../how-to/larepass/overview.md#download) 应用。

## 1. 创建 Olares ID

在手机上打开 LarePass，按照界面指示[创建 Olares ID](../../../how-to/larepass/account/index.md#create-olares-id)。

:::info 信息
Olares ID 是你在 Olares 中的唯一身份标识。
了解[为什么需要 Olares ID](../../../../overview/olares/olares-id.md#why-do-you-need-a-olares-id)。
:::

## 2. 安装 Olares

1. 在 Docker Desktop 中，导航至 **Settings** > **Resources**，并按下面配置分配资源：
    - **CPU limit**: 至少 4 个 CPU
    - **Memory limit**: 至少 9 GB
  
2. 点击 **Apply & Restart** 使变更生效。
    
3. 在终端中，导航至你想安装 Olares OS 的目录，运行以下命令开始安装：

   ```bash
   curl -fsSL https://olares.sh |  bash - 
   ```

4. 安装完成后，请记下 Olares 激活向导的网址和你的初始登录密码。

详细的安装步骤，请参考 [在 Mac 上安装 Olares](../../../how-to/olares/setup/install/mac.md)。

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
