# 备份&恢复

Terminus Space 存储了 Terminus 的所有备份记录。为了确保你的数据安全可靠，万无一失，每个备份快照都拥有一个备份密码，数据即使备份在云端，任何人没有密码也无法解密它。你可以随时将 Terminus 恢复到最新的状态中。

:::tip
我们会给每台 Terminus 提供 10G 的免费备份空间，对于超出的部分我们将按照云厂商提供的费用收费
:::

你可以在这里了解：[Backup 的设计理念](/overview/terminus/data.md#backup)

如果你还没有进行过备份，可以先尝试 [备份 Terminus](../../how-to/terminus/settings/backup.md)

## Backup List

![alt text](/images/how-to/space/backup_list.jpg)

备份任务列表显示了每一个备份任务，包含了它的首次创建时间和最新的快照备份时间，以及备份任务整体的存储使用情况。

从备份任务的某个快照中恢复

单击列表中的某一项任务的「查看详情」，你将进入此备份任务的详情页面，这里显示了此备份任务自创建之后起的所有存储占用情况，以及每一个备份成功过的快照。

注意：我们暂时不支持恢复任意时间点的快照，只支持恢复最新的快照。

## Restore Backup to the Terminus Space

![alt text](/images/how-to/space/restore_backup_to_the_terminus_space.jpg)

恢复一个快照到云的流程和创建一台新的云上 Terminus 十分相似。

第一步，设置一些相关的信息。

    1. 选择所使用的云服务提供商及其机房位置

    2. 选择实例的硬件配置

    3. 确认快照信息并输入备份密码。

第二步，了解我们对于存储和流量的收费信息。当然每个实例都包含了免费的存储和流量额度，超出额度的部分，将按照阶梯收取费用。

第三步，确认订单并完成支付。支付完成后，你创建的 Terminus 就将开始进行安装并恢复。请等待完成即可。

注意 1：我们会在安装过程中验证备份密码，如果备份密码错误，请在当前页面按提示重新输入正确的备份密码。如果你忘记了备份密码，那么恢复流程将无法继续。请销毁机器，重新进行恢复。

注意 2：为了防止冲突等其它不可控的情况，如果你需要恢复为云上 Terminus，前提是你需要先停用已有的采用当前 Terminus Name 的 Terminus。

## Restore Backup to Local

![alt text](/images/how-to/space/restore_backup_to_local.jpg)

选择「恢复到本地」，将弹出「恢复指引」弹窗，请按弹窗的文案说明操作恢复。了解更多相关内容，请查看[这里](../../developer/develop/advanced/cli.md#在本地用一个备份快照还原-terminus)

注意：我们会要求在命令行窗口中输入恢复密码，才能继续执行恢复任务。如果备份密码错误，请按照命令行窗口的提示文案指引，重新进行恢复。
