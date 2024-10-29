---
outline: [2, 3]
---

# 发布应用

## 应用发布流程概览

- 注册 GitHub，并 Fork 应用商店仓库
- 在本地安装测试应用通过后，创建 Draft PR，向 Above-Os:main 提交应用目录
- 确认应用目录符合格式规范后，点击 Ready for review 提交应用。
- 系统会自动检查你的 PR 内容和目录格式
  - 如果你的应用仍需修改，系统会提示错误信息，并给 PR 添加 waiting-to-submit 标签
  - 如果你的应用通过检查，被自动合并至 Above-Os:main
- 等待一段时间后，你就能在应用商店看到你提交的应用了

## 详细步骤

### 1. 创建一个 Olares 应用，并制作安装目录文件

- 你可以按照以下方法（TODO）来创建一个 Olares 应用，并按照格式规范制作应用的安装目录
- 你可以下载 Chart 包模版文件，根据需要修改文件内容(OlaresManifest.yaml 说明，资产的要求)

### 2. 向应用商店提交你的应用

- 你需要注册 GitHub 账户来提交 Olares 应用。
- 登录你的 GitHub 账户，并 Fork Olares 应用商店仓库
- 在你 fork 的仓库中添加你应用的目录，并创建一个指向 Above-Os:main 的 Draft PR
  - 你将会看到一个通用的 PR 模版，请参照模版提示编辑你的 PR Title 和正文。
    ![图片占位]()
- 以下是一些提交 PR 时需要注意的事项

  - 机器人通过 PR 的标题来判断你的 PR 操作，因此请参照以下规范填写你的 PR 标题
    :::warning 注意
    请务必按照标准的 PR Title 格式撰写你的标题，否则可能导致 PR 被自动关闭
    :::
  - 标题格式：`[PR Type][FolderName][version]Other Content` 
  - PR Type 包括： 
    - NEW：代表提交一个新应用 
    - UPDATE：代表更新一个已经合并成功应用 
    - REMOVE：代表下架一个已经合并成功应用
    - SUSPEND：代表暂停一个已经合并成功应用通过应用商店分发 
  - PR 标题样例：`[NEW][myapp][0.0.1]for example` 
  - FolderName 需遵照应用目录格式规范 中的 Chart 包命名要求
  - 未按照规范填写的标题会导致机器人无法正确解析你的 PR。你在修改标题后，机器人会尝试重新解析你的 PR。
  - 你还需要注意以下事项，以免你的 PR 被关闭或者被要求修改
    - 你的 PR 标题中必须有且仅有一个 PR Type、FolderName、version
    - 你的 PR Type 只能是此处定义的类型中的一种
    - 一次 PR 中只能增加或修改一个 FolderName 下的内容，并且所有 Commit 的修改范围仅限于 PR Title 中的 Folder Name
    - 同一个 FolderName 下，只能有一个 Open 的 PR 或 Draft PR。
    - 你需要有 FolderName 所指目录的所有权才能提交更新、移除、暂停该应用的 PR。目录的所有权由目录下的 OWNERS 文件定义。如果你新提交一个应用，则提交者应包含在 OWNERS 文件中。
  - 当你的应用被正确打上 PR 类型标签后，即代表你已成功提交了一个有效 PR。此后请勿修改 PR 的`[PR Type][FolderName]`信息。如果确实需修改，你可以关闭当前 PR 后重新提交一个 PR。
  - 如果你的 PR 被关闭了则意味着该 PR 检查流程的终止，请勿 Reopen 该 PR。你可以重新提交 PR 来发起新的检查流程。
  - 不同 PR 类型的要求

    - New
      - 当前应用仓库中不存在该 PR 标题中 FolderName 指定的目录
      - 所有提交的内容符合应用目录格式规范
      - 提交的根目录下，不包含".suspend"、".remove"特殊控制文件。
    - Update
      - 当前应用仓库中已有该 PR 标题中 FolderName 指定的目录
      - PR 的提交者拥有 FolderName 所指目录的所有权
      - 提交的应用版本号应大于等于当前版本。
      - 所有提交的内容符合应用目录格式规范
      - 提交的根目录下，不包含".suspend"、".remove"特殊控制文件。
    - Suspend
      - 当前应用仓库中已有该 PR 标题中 FolderName 指定的目录
      - PR 的提交者拥有 FolderName 所指目录的所有权
      - 提交的应用版本号应等于当前版本。
      - 所有提交的内容符合应用目录格式规范
      - 提交的根目录下，包含".suspend"文件，但不包含".remove"文件
    - Remove
      - 当前应用仓库中已有该 PR 标题中 FolderName 指定的目录
      - PR 的提交者拥有 FolderName 所指目录的所有权
      - 提交的根目录下，包含".remove"文件

  - 在 Draft PR 期间你可以持续修改你的 PR 内容和安装目录文件。这里是一些你在正式提交应用前需要注意的事项。
  - 当所有工作准备就绪后，点击 Read for review 按钮就可以正式提交的你的 PR 了。

### 3. 追踪你的 PR 状态

- 当你正式提交 PR 后，你的应用就进入检查流程了。在此期间你可以在你的 PR 页面查看当前的 PR 状态。
- 你可以通过 4 个 PR 状态标签来追踪你的 PR 检查进展：
  - waiting to submit: 代表你的 PR 存在问题，需要进一步修改后才能继续推进
  - waiting to merge: 代表你的 PR 已通过机器人的形式检查，一切顺利正等待机器人完成自动合并
  - closed: 代表你的 PR 无效或事存在无可修复的错误。
  - merged: 代表这个 PR 已完成审核，已经被自动合并到应用仓库了
- 你的 PR 需要同时满足 2 个条件才会被合并，你可以在 PR 页面下方看到这些条件是否满足

  - PR 通过形式检查
  - PR 与 Above-Os:main 没有冲突

- 当 PR 未能通过机器人的形式检查时，你可以通过这份 Gitbot 错误手册(TODO)查看常见的问题，并修改 PR 内容或提交新的 Commit 予以修复。
- 当 PR 在 Merged 之前，你仍可以提交 Commit 修改你的 PR 内容。提交 Commit 后，你的 PR 状态将会被重置，需要重新经过形式检查和人员审核后才能被合并。
- 在提交 PR 的过程中如果遇到问题，你可以通过社区寻求帮助

### 4. 应用商店上架

- 当你的 PR 通过所有检查且后，你的 PR 将会被自动合并至 Above-Os:main。此时应用就完成了上架
- 等待一段时间后，你就能在应用商店看到你提交的应用了

### 5. 管理和维护你的应用

- 在你成功发布应用后，你可以继续通过应用商店仓库管理和维护你的应用。你可以对应用进行升级，修改应用的 availability，或者将应用从应用商店移除。

#### 更新

当你需要对已发布的应用进行更新时，你只需像创建新应用一样制作安装目录文件。更新的提交流程与首次提交应用基本一致。

- 以下是一些额外的注意事项：
  - 你可以通过 UPDATE 类型的 PR 来更新的你的应用版本，或应用商店的 Metadata，或应用的 OWNER 信息等。无论何种内容的更新，请确保你提交的更新中的 Chart 版本号大于当前应用的版本号。
  - 应用商店不提供版本回滚，因此如果你的应用有任何问题，你必须通过一个新版本的更新予以修复。
  - 为了避免潜在的冲突，我们建议你在应用更新前 sync 你 fork 的分支，并将应用更新的 commit rebase 到最新的 main 分支上。

#### 暂停

如果因为任何原因，你希望让你的应用暂时不能被用户从应用商店下载和安装，你可以提交 SUSPEND 类型的 PR。

- 你只需在应用的根目录下添加".suspend"文件并保证没有其他特殊控制文件即可暂停应用在商店的展示。
- 当暂停 PR 通过检查被合并后，应用商店将在 24 小时内停止应用的展示
  ::: warning 注意
  当你暂停应用后，已经下载并安装应用的用户仍能正常使用该应用
  :::

#### 移除

如果因为任何原因，你希望让你的应用从应用商店移除，你可以提交 REMOVE 类型的 PR

- 你需要清空当前应用目录下的文件，并在根目录下添加".remove"文件
- 当移除 PR 通过检查被合并后，应用商店将在 24 小时内移除该应用
  ::: warning 注意
  当你移除应用后
- 已经下载并安装应用的用户仍能正常使用该应用
- 你将无法再次使用该应用的目录名称(FolderName)
  :::

## 应用目录格式规范

App Chart 是用于描述一个 Olares 应用各项配置的文件集合。一个 App Chart 需包含以下文件

```
FolderName/
  Chart.yaml                # 必选: 包含了chart信息的YAML文件``
  OlaresManifest.yaml     # 必选: App的配置文档
  values.yaml               # 必选: chart 默认的配置值
  templates/                # 必选: 模板目录， 当和values 结合时，可生成有效的Kubernetes manifest文件
  templates/NOTES.txt       # 可选: 包含简要使用说明的纯文本文件
  LICENSE                   # 可选: 包含chart许可证的纯文本文件
  README.md                 # 可选: 可读的README文件
  charts/                   # 可选: 包含chart依赖的其他chart
  values.schema.json        # 可选: 一个使用JSON结构的values.yaml文件
  crds/                     # 可选: 自定义资源的定义
  index.json                # 可选: 使用ZincSearch时需要的index.json文件`
```

#### Chart.yaml

Chart.yaml 文件必按照 helm chart.yaml 文件格式撰写。文件必须包含 apiVersion、name、version 字段，且不允许额外的字段。

```
apiVersion: chart API 版本 （必需）
name: chart名称 （必需），需要和FolderName一致
version: 语义化2 版本（必需）
```

#### values.yaml 和 templates 文件夹

templates 文件夹下包含若干 yaml 文件，当和 values.yaml 结合时，可生成有效的 Kubernetes manifest 文件。请依据 Helm 的相关文档撰写 value 和 template 文件

- https://helm.sh/zh/docs/chart_best_practices/values/
- https://helm.sh/zh/docs/chart_best_practices/templates/
  为更好的管理系统资源，需要对每一个 container 设置 resources requests 和 limits。填写方式遵照 kubernetes 的要求。
- 其中内存和 CPU 必选，其他资源选填，如果未填则默认不分配相关资源。

配置示例

```Yaml
spec:
  containers:
  - name: app
    image: images.my-company.example/app:v4
    resources:
      requests:
        memory: "64Mi"            #必选
        cpu: "250m"               #必选
        ephemeral-storage: "2Gi"  #可选
      limits:
        memory: "128Mi"           #必选
        cpu: "500m"               #必选
        ephemeral-storage: "4Gi"  #可选
```

#### OlaresManifest.yaml

OlaresManifest.yaml 是一个自定义文件(用于扩展应用的配置信息,在通过 Olares 进行应用安装时会读取该文件信息)，位于 chart 文件的根目录下。需使用英文填写所有信息。

- OlaresManifest spercification: 用于表明 app 的类型和配置文件版本
- metadata: 记录应用的元信息
- permission: 记录应用所需的权限信息
- spec: 记录额外的应用信息，主要用于应用商店的展示。
- middleware: 系统提供了高可用的中间件服务，开发者无需重复安装中间件，只需在此填写对应的中间件信息即可。
- option: 可以在此部分配置系统相关的选项，例如验证 policy, 访问数据分析等

OlaresManifest.yaml 格式详见[Chart 格式](../package/chart.md)
