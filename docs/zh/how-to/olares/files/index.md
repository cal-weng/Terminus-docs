---
outline: [2, 4]
---

# 文件管理

![alt text](/images/how-to/olares/files.jpg)

我们希望通过一个产品，让用户随时随地管理散落在各处的文件。

与 Vault 一样，Files 是 Olares OS 的预装应用，你可以同时在网页和 LarePass 里使用。

- 在本章节，我们以网页版为主线介绍 Files 的主要功能。
- 你可以在 [Local File Sync](../../larepass/local-file-sync.md) 了解如何在电脑上使用 Sync 功能。

## Introduction

Files 采用了跟电脑文件管理一样的页面布局。

![alt text](/images/how-to/olares/drive.jpg)

### Drive

Drive 盘的定位是 iCloud，用来存储没有同步需求，不频繁修改的文件。例如，视频，照片等。

每个用户都有独立的 Home 目录，此外默认创建了 Document，Pictures，Downloads 等目录。

对开发者来说，可以将 Drive 盘的 Home 目录理解为 [UserData](../../../overview/olares/data.md#userdata) 的根目录。

### Sync

Sync 盘的定位是 Dropbox。用户可以通过 LarePass 跨设备的同步文件和目录。

每个用户默认都有自己独立的 Library，之后用户可以通过创建 Shared Library，跟 Olares 里的其它用户共享文件。

Sync 盘有自己的文件系统，它的数据存储在 JuiceFS 上，但对开发者来说不可见。

### Application Data

用户日常不会使用这个目录，Files 里出现这个目录是为了方便开发者进行调试。

对开发者来说，这里是 [AppData](../../../overview/olares/data.md#appdata) 目录。

### Application Cache

用户日常不会使用这个目录，Files 里出现这个目录是为了方便开发者进行调试。

对开发者来说，这里是 [AppCache](../../../overview/olares/data.md#appcache) 目录。

## Basics

在 Files 里，用户无需关注不同目录底层文件系统的差异，可以使用统一，符合直觉的操作进行交互。

![alt text](/images/how-to/olares/drive.jpg)

### Create New Folder

你可以在任意文件夹空白处，通过右键呼出右键菜单，选择在此位置，新建一个文件夹。

你还可以在任意文件夹内，选择界面右上角的“新建文件夹”按钮，来新建一个文件夹。

选择之后，在弹窗中输入你要设置的文件夹名称。

### Rename

当你选中一个文件的时候，可以通过右键呼出右键菜单，选择“重命名”，来对这个文件进行重命名操作。

选择之后，在弹窗中输入你要设置的文件名称。

当然，你也可以通过这种方式来对一个文件夹进行重命名。

### View Mode

我们支持**列表**和**大图**两种文件列表的查看方式。

![alt text](/images/how-to/olares/drive_view_mode.jpg)

### Multiple Selection

目前我们支持使用快捷键+点选的方式，来一次选中多个文件。

- Windows 中，请使用按住 Control 键+ 鼠标点选的方式进行多选
- Mac 中，请使用按住 Command 键+ 鼠标点选的方式进行多选

后续我们还将支持更快捷的多选方式。

### Copy

选中文件之后，可以通过右键呼出右键菜单，选择“复制”，把文件复制到剪贴板。然后打开你需要粘贴的文件位置，在空白处打开右键菜单，选择“粘贴”。即可把选中的文件复制到当前的位置。

值得一提的是，我们已支持跨文件系统的复制，即你可以将 Drive 中的文件复制到 Sync 中来。反之也是可以的。

注意：此过程可能需要一些等待时间，请等待整个操作完成之后，再进行下一个操作。

### Delete

选中文件之后，可以通过右键呼出右键菜单 - 删除。在删除确认弹窗中完成确认删除后，即可删除文件。

同样的，也可以在界面右上角的「...」更多按钮中选择「删除」，来发起删除。

注意：我们没有回收站机制，删除的文件不可恢复，同时释放占用的存储空间。

### Attributes

选中文件或文件夹之后，你可以呼出右键菜单来查看选中的项目的详情信息。包含了所选文件的大小、数量、文件位置、更新时间等一些详细信息。

注意：一次只能查看一个文件或文件夹的详情信息

### Right-click Menu

![alt text](/images/how-to/olares/drive_right_click_menu.jpg)

有两种情况下，可以呼出右键菜单，但它们的菜单项目各不一样。

- 选中内容时，右键菜单是针对选中内容的操作。具体有：下载、复制、重命名、删除、详情等

- 列表空白处的右键菜单是针对当前列表的操作。具体有：新建文件夹、上传文件、上传文件夹、粘贴（剪贴板有文件时显示）、刷新等

### Upload

![alt text](/images/how-to/olares/drive_upload.jpg)

我们提供了多种上传方式：

- 通过拖拽上传，在 PC 端，支持选择本地文件管理器内的文件，然后拖拽到 Files 的窗口中进行上传。

- 通过固定菜单上传，单击在 Files 界面右上角的「上传」按钮，在弹窗中选择本地文件后进行上传。

- 通过右键菜单上传，文件夹空白处，右键呼出右键菜单，选择「上传」，在弹窗中选择本地文件后进行上传。

并具备了多种形式的上传能力：

- 单文件上传，一次只上传一个文件。

- 多文件上传，一次选择多个文件上传，并支持多个任务并发同时上传。

- 文件夹上传，选择一个文件夹，上传其中的所有文件。

- 混合上传，混合选择文件和文件夹一起上传。

我们已经完全支持上传的断点续传功能。即无论在 Drive 还是 Sync，如果上传过程中，某一分片上传失败，再次上传时会从 Checkpoint 文件记录的断点继续上传，无需重新上传所有分片。上传完成后，所有分片将合并成完整的文件。

### Download

**Single File Download**

在 Files 中，选择任意文件后，右键呼出右键菜单，选择“下载”，然后在弹窗中选择你需要保存的文件位置。点“保存”下载到本地。

**Multiple File Downloads**

在浏览器中下载时，我们会将多文件打包成一个文件进行下载。下载完成后你将得到一个 zip 文件，请手动解压缩。

LarePass 桌面端支持多文件下载，一次性提交的下载任务都将进入到下载队列之中，可以对正在进行的下载任务进行暂停、删除等操作。也可以查看和定位已经下载到本地的任务。

### Preview & Edit

- File Preview

我们支持以下几种文件的预览

| 文件类型 | 文件格式                                        |
|------|---------------------------------------------|
| 图片   | JPG、JPEG、PNG、BMP、WEBP、SVG                   |
| 视频   | MP4、MKV、AVI、MOV、MPEG、MTS、TS、WMV、WEBM、RM、3GP |
| 音频   | MP3、WMA、WAV、OGG、AAC、M4A、APE、FlAC            |
| 文本   | PDF、TXT、JS、MD、CSS、XML、YAML、HTML             |

- Text File Edit

我们支持 TXT、JS、MD、CSS、XML、YAML、HTML 等文本格式的编辑和保存。

## Sync

![alt text](/images/how-to/olares/sync.jpg)

同步盘是 Files 中另一个独立的一个模块，最基础的单位是 Library。

用户可以以 Library 为单位，实现自己数据的多端同步，或者是和其他成员进行实时的数据共享。当然，Library 也支持同时多端同步和多用户数据共享。

用户可以创建多个 Library 来满足不同的同步和共享需求。

更多的同步盘的介绍，请查看[Sync](../../larepass/local-file-sync.md)。

### Create Library

点击页面上的 “+”按钮，可以新建 Library。

![alt text](/images/how-to/olares/sync_new_library.jpg)

注意：用户自己创建的 Library，自己即为该 Library 的拥有者。拥有者的身份不可转移。

### Library Operations

Libraries 列表中,每个 Library 条目的右侧都有「...」更多操作按钮，可以对 Library 进行「共享」、「删除」、「重命名」等操作。

![alt text](/images/how-to/olares/sync_operation.jpg)

注意：共享和重命名权限，仅对拥有者开放。

### Team Shared Library

选择某个 Library，点击右侧都有「...」更多操作按钮，选择「共享」。

![alt text](/images/how-to/olares/sync_share_repo.jpg)

在弹窗中输入希望共享的用户，或者从下拉菜单中选择用户。设置他们对文件的权限，点击「完成」以完成共享。

提交完成后，收到共享邀请的用户，会在 Libraries 列表中看到共享给他的 Library。

如果你需要撤销这个用户的共享权限，在窗口中删除这个用户即可。这样，你的 Library 将消失在他的 Libraries 列表中。

### User And Authority Management

在上图中，如果存在已共享的用户，将显示在 USER 列表中，并显示该用户拥有的权限。拥有者可以对成员进行操作。支持删除成员，以及修改成员的权限。

#### Member

- 拥有者，拥有对这个 Library 的完整权限。
- 普通成员，拥有者可以对成员进行权限设置。

#### Authority

- 读写权限，可以 Library 进行内容的增删改操作
- 只读权限，只可以查看 Library 的内容，无法更改内容

注意：在 Shared Library 中，只有拥有者可以邀请其他成员加入。普通成员没有邀请权限。

### Exit & Delete

在 Shared Library 中，只有拥有者可以删除这个 Shared Library，但拥有者无法退出或转让这个 Shared Library。而普通成员刚好相反，他可以退出，但无法删除。

#### Exit

在 Library 条目的右侧「...」更多按钮中选择「退出」，确认退出此 Library 即可。

任何成员都可以退出共享的 Library。拥有者无法退出自己共享的 Library。

#### Delete

在资料库条目的右侧「...」更多按钮中选择「删除」，确认删除此 Library 即可。

只有拥有者才能删除 Shared Library。当拥有者删除 Shared Library 时，所有成员的 Shared Libraries 列表中都将删除掉此 Shared Library，无法再进行查看。

注意：删除 Library 的行为不可逆。Library 内的所有文件都将被删除，且无法恢复。请重视你和你团队的数据安全。

## Reference

Files 是基于 [FileBrowser](https://filebrowser.org/) 和 [SeaFile](https://github.com/haiwen/seafile) 进行二次开发和改进的。
