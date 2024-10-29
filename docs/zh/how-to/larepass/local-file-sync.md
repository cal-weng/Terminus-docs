# 同步本地文件

:::info
只有 Windows 和 Mac 版本支持该功能。
:::

## Library Creation and Management

[参考 Olares 的操作](../olares/files/index.md#sync)

## Library Sync

LarePass 桌面客户端可以实现本地文件夹与 Sycn 盘 Library 之间的实时同步。Files APP 和 LarePass 移动客户端将实时查看到 LarePass 桌面客户端同步完成的文件数据。

## Sync Library To Local

在 LarePass 客户端打开 Files ，查看 Sync 的 Libraries 列表，右键点击某一 Library，在弹出菜单中选择“同步到本地”, 并在弹窗中设置本地的同步之后，即可同步远程 Library 到本地。

![alt text](/images/how-to/larepass/sync.jpg)

你可以选择默认的本地目录，可以以自行设置一个本地目录。设置完成后，点击完成，即开始同步。

例如：你选择了本地目录 D:/Sync/，同步服务将创建出一个和 Library 名称一致的文件夹。此 Library 的所有数据都将同步到这里。

## Sync Local To Library

你可以将本地文件夹移动到 Library 的本地同步目录内，来实现本地文件夹的实时同步到 Library。

如果你将本地文件夹从 Library 中移除，那么 Library 中的这个文件夹也就同样被删除了。

如果你想将本地的文件夹直接设置成为一个独立的同步 Library。请先创建一个同名的 Library，然后把要同步的本地文件夹内的所有数据移动到 Library 的本地同步目录内。

## Unsynchronize

当你不想再让 Library 和本地文件夹进行同步时，你可以对 Library 解除同步。

解除同步后，本地文件和文件夹的修改不再被上传到服务器上， Library 的修改也不再被下载到本地。本地文件夹内的数据依然保留，不会被删除。

## Sync Immediately

同步服务通常会自动检查本地文件夹的改动并将改动上传到服务器。但是，如果本地文件夹位于网络共享驱动器中，或者其他的一些情况，同步服务不一定能可靠地检查出本地文件夹的改动。这时候，你可以手动激活立即同步。

## Read-only Sync

如果你的 Library 只有只读权限，那么你无法将本地同步目录中的新增文件和修改的文件同步到 Library 中。你的新增文件和修改的文件将显示灰色的禁用图标(—)来表示它们是只读的。

## File Conflict

有时你和你的同事可能会同时编辑同一个文件，你们的修改可能会冲突。

在这种情况下，同步服务会将较先编辑完成的文件版本保存到服务器上，同时将另一个文件版本重命名为一个“冲突文件”。

冲突文件的名称以作者的 Olares ID 的前缀和当前时间结尾,例如 test.txt(SFConflict name 2024-04-17-12-12-12)。
