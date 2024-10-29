---
outline: [2, 3]
---

# 备份

你可以在这里进行 Olares 的备份和快照的管理。

Olares 希望给用户提供类似 TimeMachine 的体验，在后台自动的将用户的 Olares 进行定期备份。出现意外后，用户可以指定版本进行还原。

备份数据可以存放在 Olares Space，AWS S3 或用户自己的硬盘上。因为备份数据经过了加密，秘钥只有用户自己掌握，所以即使备份存储在云端，数据的隐私性也可以得到保证。

:::info
当前版本我们仅支持备份数据到 Olares Space，很快将会支持更多备份的位置
:::

## Login Olares Space

当前，你需要登录 Olares Space 才能使用备份服务。请使用 LarePass 扫码登录 Olares Space。

![alt text](/images/how-to/olares/login_olares_space.png)

## Create a Backup

你可以新建一个备份任务，在新建详情里，你需要注意：

![alt text](/images/how-to/olares/create_a_backup.png)

- 备份的任务名称，请输入至少一位字符
- 备份的频次设置，你可以选择每周或者每日的频次进行备份
- 启动备份的时间，你可以设置自动备份的时间点。如果上面选择了每周的频次，你需要选择具体在星期几进行备份。
- 输入 2 遍备份密码，密码需要至少 4 位字符

任务将在你设置的时间开始备份，首次备份将生成一个完整的备份包，之后将按照备份的频次设置定时生成最新的增量备份快照。

:::info
请牢记备份密码，密码丢失将造成备份数据无法还原
:::

## View Backup Logs

你可以通过备份列表，进入备份任务详情。

![alt text](/images/how-to/olares/view_backup_logs.png)

备份任务详情中包含了以下几部分内容：

- 备份相关的参数，你可以在这里调整部分参数
- 备份的总大小，你可以查看到此任务使用的存储空间大小
- 备份的快照列表，你可以查看到每次任务的结果。包含备份的时间，备份的大小，备份状态

### Modify Backup Settings

对于已经创建的备份任务，暂时不支持修改备份名称，但你可以调整备份的频率和时间等参数。

### Remove Backup Job

如果你不再需要这个备份任务，可以删除此任务以节省存储空间的占用。

:::info
删除备份任务，将同时删除此备份任务下所有的备份快照。请确保你的数据安全。
:::

## Restore from Backup

请查看 [Olares Space Backup & Restore](/how-to/space/backup.md)。
