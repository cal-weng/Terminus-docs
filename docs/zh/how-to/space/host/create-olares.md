---
outline: [2, 3]
---

# 创建 Olares

要创建 Olares，请先确认你的账号状态，请点击[ account](../account.md#account-type)了解更多账号信息。

需要提醒的是，由于我们的 Host Service 目前在邀请内测中，所以并不是所有满足基本条件的账号都可以创建云上 Olares。

如果你无法创建云上 Olares，但却有一台内存大于 8G，硬盘大于 50G 的闲置服务器，你可以尝试[安装 Olares](../../olares/setup/install/index.md)。

如果你仍然想体验云上 Olares，请联系我们以获得 Host Service 内测邀请。

![alt text](/images/how-to/space/create_olares.jpg)

如果你满足了创建云上 Olares 的条件，请在引导页面上选择第二项，进入创建云上的 Olares 流程。

## Basic Configuration

![alt text](/images/how-to/space/basic_configuration.jpg)

1. 选择所使用的云服务提供商及其机房位置

2. 选择实例的硬件配置

    :::tip
    如果想体验 Stable Diffusion，请选择阿里云香港区。目前只有该区开放了共享 GPU 服务
    :::

3. 选择需要安装的 Olares 版本和 Kubernetes/K3S 方案。

4. 确认完成之后，进入下一步

## Storage and Network

![alt text](/images/how-to/space/storage_and_network.jpg)

你需要了解我们对于存储和流量的收费信息。当然每个实例都包含了免费的存储和流量额度，超出额度的部分，将按照阶梯收取费用。

## Confirm Order

![alt text](/images/how-to/space/confrim.jpg)

确认订单并完成支付。支付完成后，你创建的 Olares 就将开始进行安装。请等待安装完成，按指引完成 Olares 的激活即可。

需要了解 Olares 的激活，请查看[激活流程](../../olares/setup/wizard.md)

## Data on Panel During Olares Creation

![alt text](/images/how-to/space/data_on_panel_during_olares_creation.jpg)

我们的创建过程需要 10 分钟，这时候面板有 log 查看，以及可以查看到实时的状态变化。

### Status

在安装过程中，我们将实时显示安装过程中的 Olares 状态，正常情况下，它会经历 Queuing - Installing - Pending activation - Running 这几种核心状态。

当你看到，Pending activation 状态时，即可进行 Olares 设备的激活。

如果你看到了 Errored 状态，可以销毁重新安装，也可以联系我们处理。

看到 Runing 时，代表系统已经激活完成，处于正常运行之中。

我们罗列了系统的状态情况，如下：

| 状态                 | 说明                                   |
|--------------------|--------------------------------------|
| Unpaid             | 已创建等待付款。可以取消。                        |
| Fetching           | 已付款等待创建资源。                           |
| Queuing            | 已提交创建资源请求。                           |
| Pending            | 创建资源成功，等待OS安装。                       |
| Installing         | OS安装中。                               |
| Restoring          | OS还原中。                               |
| Restore_error      | OS还原失败(目前只有输入快照密码错误一种情况)，可以重设密码继续还原。 |
| Restarting         | OS重启中。                               |
| Stopping           | OS机器停机中。                             |
| Starting           | OS机器开机中。                             |
| Running            | OS正常运行中。可以销毁，重启，停止。                  |
| Stopped            | OS机器停机中。可以销毁、开机。                     |
| Errored            | 错误，可能是创建资源错误，也可能是安装错误。可以销毁。          |
| Destroying         | 销毁中。                                 |
| Destroyed          | 已销毁。                                 |
| Canceled           | 已取消，未支付的时候可以主动取消，首期账单超时未支付会自动取消。     |
| Pending activation | 待激活，激活完成后就进入正常运行状态。                  |

### Log

你也可以点击「Log」来查看实时的安装详细信息。

### One Time Password

![alt text](/images/how-to/space/one_time_password.jpg)

当 Olares 处于 Pending activation 状态时，点击右上角的「Activation」按钮，弹窗会显示：绑定的 Olares ID、One Time Password，Wizard URL。

你可以使用 One Time Password 来激活 Olares。激活完成时，请在 LarePass 端修改你的 Olares 密码。查看[激活流程](../../olares/setup/wizard.md)
