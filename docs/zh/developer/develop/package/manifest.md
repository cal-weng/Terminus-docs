---
outline: [2, 3]
---

# 配置应用

每一个 Olares App 的 Chart 根目录下都必须有一个 OlaresManifest.yaml 文件，且该文件名必须是`OlaresManifest.yaml`。OlaresManifest.yaml 描述了一个 Olares App 的所有基本信息，Olares Market 协议和 Olares 系统依赖这些关键信息来正确的分发和安装应用。

一个 OlaresManifest.yaml 文件的示例如下：

::: details OlaresManifest.yaml 样例

```Yaml
olaresManifest.version: '0.7.0'
olaresManifest.type: app
metadata:
  name: helloworld
  title: Hello World
  description: app helloworld
  icon: https://file.bttcdn.com/appstore/default/defaulticon.webp
  version: 0.0.1
  categories:
  - Utilities
entrances:
- name: helloworld
  port: 8080
  title: Hello World
  host: helloworld
  icon: https://file.bttcdn.com/appstore/default/defaulticon.webp
  authLevel: private
permission:
  appCache: true
  appData: true
  userData:
  - Home/Documents/
  - Home/Pictures/
  - Home/Downloads/BTDownloads/
spec:
  versionName: '0.0.1'
  featuredImage: https://link.to/featured_image.webp
  promoteImage:
  - https://link.to/promote_image1.webp
  - https://link.to/promote_image2.webp
  fullDescription: |
    A full description of your app.
  upgradeDescription: |
    Describe what is new in this upgraded version.
  developer: Developer's Name
  website: https://link.to.your.website
  sourceCode: https://link.to.sourceCode
  submitter: Submitter's Name
  language:
  - en
  doc: https://link.to.documents
  supportArch:
  - amd64
  limitedCpu: 1000m
  limitedMemory: 1000Mi
  requiredCpu: 50m
  requiredDisk: 50Mi
  requiredMemory: 12Mi

options:
  dependencies:
  - name: olares
    type: system
    version: '>=0.1.0'
```
:::

## OlaresManifest.yaml identifier

### olaresManifest.type

- Type: `string`
- Accepted Value: `app`, `recommend`, `model`, `middleware`

Olares 目前支持四种类型的应用程序，每种应用程序需要不同的字段。本文档以 `app` 为例，解释每个字段的含义。关于其他类型的信息，请参考相应的配置指南。
- [recommend 配置指南](recommend.md)
- [model 配置指南](model.md)

配置示例
```Yaml
olaresManifest.type: app
```

### olaresManifest.version

- Type: `string`

olaresManifest.version 由 3 位英文句点分隔的整数组成。随着 Olares 的发展，OlaresManifest.yaml 的配置方式可能会有所变化。

- 第 1 位数字增加意味着引入了不兼容的配置项，未升级对应 OlaresManifest.yaml 的应用将无法分发或安装
- 第 2 位数字增加意味着分发和安装必须字段存在变化，但 Olares 系统仍兼容之前所有版本配置的应用分发与安装。我们建议开发者尽快更新升级应用的 OlaresManifest.yaml 文件。
- 第 3 位数字的改变，不影响应用分发和安装。

:::info 注意
Olares 系统当前的 olaresManifest.version 为`0.7.0`。
:::

开发者可以使用 1-3 位的版本号来标识该应用遵循的配置版本。以下是有效版本的一些示例：
```Yaml
OlaresManifest.yaml.version: 1
OlaresManifest.yaml.version: 0.1
OlaresManifest.yaml.version: 1.1.0
OlaresManifest.yaml.version: '2.2'
OlaresManifest.yaml.version: "3.0.122"
```

## Metadata

记录应用的元信息。

配置示例
```Yaml
metadata:
  name: nextcloud
  title: Nextcloud
  description: The productivity platform that keeps you in control
  icon: https://file.bttcdn.com/appstore/nextcloud/icon.png
  version: 0.0.2
  categories:
  - Utilities
  - Productivity
```

### name

- Type: `string`
- Accepted Value: `[a-z][a-z0-9]?`

Olares 系统中的应用命名空间，仅限小写字母和数字。不超过 30 个字符。需要与 FolderName、Chart.yaml-name 保持一致。

### title

- Type: `string`

应用市场中显示的应用标题。长度不超过 30 个字符。

### description

- Type: `string`

应用市场中应用标题下显示的简短描述。

### icon

- Type: `url`

应用市场中显示的应用图标。

应用图标必须为 PNG 或 WEBP 格式，最大 512 KB，尺寸为 256x256 像素。

### version

- Type: `string`

应用的 Chart Version，每次改变 Chart 目录里的内容时应递增。需遵循[语义化版本规范](https://semver.org/)，需要与 Chart.yaml 中的 version 字段一致

### categories

- Type: `list<string>`
- Accepted Value: `Blockchain`,`Utilities`,`Social Network`,`Entertainment`,`Productivity`

用于在应用市场的不同类别页面显示你的应用。

## Entrances

指定如何访问此应用。每个应用至少需要 1 个入口，至多 10 个。

配置示例
```Yaml
entrances:
- name: a
  host: firefox
  port: 3000
  title: Firefox
  authLevel: public
  invisible: false
- name: b
  host: firefox
  port: 3001
  title: admin
```

### name

- Type: `string`
- Accepted Value: `[a-z]([-a-z0-9]*[a-z0-9])?`

  entrance 的名称,长度不超过 63 个字符.一个应用内不能重复.

### port

- Type: `int`
- Accepted Value: `0-65535`

### host

- Type: `string`
- Accepted Value: `[a-z]([-a-z0-9]*[a-z0-9])?`

  当前入口的 Ingress 名称。 只包含小写字母和数字和中划线`-`,长度不超过 63 个字符

### title

- Type: `string`

安装后在 Olares 桌面上显示的标题。长度不超过 30 个字符.

### icon

- Type: `url`
- Optional

安装后在 Olares 桌面上显示的图标。应用图标必须为 PNG 或 WEBP 格式，大小不超过 512 KB，尺寸为 256x256 像素。

### authLevel

- Type: `string`
- Accepted Value: `public`,`private`
- Default: `private`
- Optional

当前入口的授权级别。私有入口需要激活 tailscale 才能访问。应用的 entrance 默认为 private。

### invisible

- Type: `boolean`
- Default: `false`
- Optional

当 invisible 为 true 时，该 entrance 不会显示在 Olares 桌面上。默认为 false

### openMethod

- Type: `default | iframe | window`
- Default: `default`
- Optional

Entrance 在 [Desktop](../../../how-to/olares/desktop.md) 中窗口的打开方式。

`iframe` 代表在 Desktop 的窗口内通过 iframe 新建一个窗口，`window` 代表在浏览器新的 Tab 页打开。`default` 代表跟随系统的默认选择，系统默认的选择是`iframe`

### windowPushState
- Type: `boolean`
- Default: `false`
- Optional

当在桌面上的 iframe 中嵌入应用时，应用的 URL 可能会动态变化。由于浏览器的同源策略，桌面（父窗口）无法直接检测 iframe 中的 URL 变化。因此，如果重新打开应用标签页，它将显示初始 URL 而不是更新后的 URL。

为确保无缝的用户体验，您可以通过将此选项设置为 true 来启用此功能。此操作会提示网关自动将以下代码注入到 iframe 中。此代码会在 iframe 的 URL 发生变化时向父窗口（桌面）发送事件，从而使桌面能够跟踪 URL 变化并打开正确的页面。

配置示例
```Javascript
<script>
  (function () {
    if (window.top == window) {
        return;
    }
    const originalPushState = history.pushState;
    const pushStateEvent = new Event("pushstate");
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      window.dispatchEvent(pushStateEvent);
    };
    window.addEventListener("pushstate", () => {
      window.parent.postMessage(
        {type: "locationHref", message: location.href},
        "*"
      );
    });
  })();
</script>
```

## permission

记录应用所需的权限信息

配置示例
```Yaml
permission:
  appCache: true
  appData: true
  userData:
  - /Home/  
  sysData:
  - dataType: legacy_prowlarr
    appName: prowlarr
    port: 9696
    group: api.prowlarr
    version: v2
    ops:
    - All
```

### appCache

- Type: `boolean`
- Optional

是否需要在 Cache 目录创建应用的目录。如需要在 deployment yaml 中使用`.Values.userspace.appCache`, 则 appCache 必须等于, true

### appData

- Type: `boolean`
- Optional

是否需要在 Data 目录创建应用的目录。如需要在 deployment yaml 中使用`.Values.userspace.appData`, 则 appData 必须等于, true

### userData

- Type: `string`
- Optional

声明应用需要访问用户 Home 下的哪些目录。

### sysData

- Type: `list<map>`
- Optional

声明此应用需要访问的 API 列表。

配置示例
```Yaml
  sysData:
  - group: service.bfl
    dataType: app
    version: v1
    ops:
    - InstallDevApp
  - dataType: legacy_prowlarr
    appName: prowlarr
    port: 9696
    group: api.prowlarr
    version: v2
    ops:
    - All
```

API 需要的系统数据权限，数据权限列表如下

| Group                            | version | dataType   | ops                                                                                                                                                      |
|----------------------------------|---------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| service.appstore                 | v1      | app        | InstallDevApp, UninstallDevApp                                                                                                                           |
| message-disptahcer.system-server | v1      | event      | Create, List                                                                                                                                             |
| service.desktop                  | v1      | ai_message | AIMessage                                                                                                                                                |
| service.did                      | v1      | did        | ResolveByDID, ResolveByName, Verify                                                                                                                      |
| api.intent                       | v1      | legacy_api | POST                                                                                                                                                     |
| service.intent                   | v1      | intent     | RegisterIntentFilter, UnregisterIntentFilter, SendIntent, QueryIntent, ListDefaultChoice, CreateDefaultChoice, RemoveDefaultChoice, ReplaceDefaultChoice |
| service.message                  | v1      | message    | GetContactLogs, GetMessages, Message                                                                                                                     |
| service.notification             | v1      | message    | Create                                                                                                                                                   |
| service.notification             | v1      | token      | Create                                                                                                                                                   |
| service.search                   | v1      | search     | Input, Delete, InputRSS, DeleteRSS, QueryRSS, QuestionAI                                                                                                 |
| secret.infisical                 | v1      | secret     | CreateSecret, RetrieveSecret                                                                                                                             |
| secret.vault                     | v1      | key        | List, Info, Sign                                                                                                                                         |

## spec
> 记录额外的应用信息，主要用于应用商店的展示。

配置示例
```Yaml
spec:
  namespace: os-system 
  # optional. Install the app to a specified namespace, e.g. os-system, user-space, user-system
  
  onlyAdmin:  true 
  # optional. When set to true, only the admin can install this app.
  
  versionName: '10.8.11' 
  # The version of the application that this chart contains. It is recommended to enclose the version number in quotes. This value corresponds to the appVersion field in the `Chart.yaml` file. Note that it is not related to the `version` field.

  featuredImage: https://file.bttcdn.com/appstore/jellyfin/promote_image_1.jpg
  # The featured image is displayed when the app is featured in the Market.

  promoteImage:
  - https://file.bttcdn.com/appstore/jellyfin/promote_image_1.jpg
  - https://file.bttcdn.com/appstore/jellyfin/promote_image_2.jpg
  - https://file.bttcdn.com/appstore/jellyfin/promote_image_3.jpg
  fullDescription: |
    Jellyfin is the volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached. Your media, your server, your way.
  upgradeDescription: |
    upgrade descriptions
  developer: Jellyfin
  website: https://jellyfin.org/
  doc: https://jellyfin.org/docs/
  sourceCode: https://github.com/jellyfin/jellyfin
  submitter: Olares
  language:
  - en

  requiredMemory: 256Mi
  requiredDisk: 128Mi
  requiredCpu: 0.5
  # Specifies the minimum resources required to install and run the application. Once the app is installed, the system will reserve these resources to ensure optimal performance.

  limitedDisk: 256Mi
  limitedCpu: 1
  limitedMemory: 512Mi
  # Specifies the maximum resource limits for the application. If the app exceeds these limits, it will be temporarily suspended to prevent system overload and ensure stability.

  legal:
  - text: Community Standards
    url: https://jellyfin.org/docs/general/community-standards/
  - text: Security policy
    url: https://github.com/jellyfin/jellyfin/security/policy
  license:
  - text: GPL-2.0
    url: https://github.com/jellyfin/jellyfin/blob/master/LICENSE
  supportClient:
  - android: https://play.google.com/store/apps/details?id=org.jellyfin.mobile
  - ios: https://apps.apple.com/us/app/jellyfin-mobile/id1480192618
```

## middleware

- Optional
- Type: `map`

系统提供了高可用的中间件服务，开发者无需重复安装中间件，只需在此填写对应的中间件信息即可。

使用 `scripts` 字段指定在数据库创建后应执行的脚本。此外，使用 `extension` 字段在数据库中添加相应的扩展。

配置示例
```Yaml
middleware:
  postgres:
    username: immich
    databases:
    - name: immich
      extensions:
      - vectors
      - earthdistance
      scripts:
      - BEGIN;                                           
      - ALTER DATABASE $databasename SET search_path TO "$user", public, vectors;
      - ALTER SCHEMA vectors OWNER TO $dbusername;
      - COMMIT;
      # The OS provides two variables, $databasename and $dbusername, which will be replaced by TAPR when the command is executed.
  redis:
    password: password
    namespace: db0
  mongodb:
    username: chromium
    databases:
    - name: chromium
      script:
      - 'db.getSiblingDB("$databasename").myCollection.insertOne({ x: 111 });'
      # Please make sure each line is a complete query.
```

假设你在 OlaresManifest.yaml 中填写了 middleware，你就不用自己再创建对应的中间件。直接在应用的 yaml 中填写对应的中间件信息。

```yaml
- name: DB_POSTGRESDB_DATABASE
  # 为你在middleware指定创建的dadtabase, dbname为你指定的库名
  value: {{ .Values.postgres.databases.<dbname> }}
- name: DB_POSTGRESDB_HOST
  value: {{ .Values.postgres.host }}
- name: DB_POSTGRESDB_PORT
  value: "{{ .Values.postgres.port }}"
- name: DB_POSTGRESDB_USER
  value: {{ .Values.postgres.username }}
- name: DB_POSTGRESDB_PASSWORD
  value: {{ .Values.postgres.password }}


// 对于其它的类型的中间件mongodb, 对应的值为
// port, password在yaml文件中需加上双引号
host --> {{ .Values.mongodb.host }}
port --> "{{ .Values.mongodb.port }}"
username --> {{ .Values.mongodb.username }}
password --> "{{ .Values.mongodb.password }}"
# databases是一个map, 获取对应数据库 {{ .Values.postgres.databases.<dbname> }}
databases --> "{{ .Values.mongodb.databases }}"

# Redis
host --> {{ .Values.redis.host }}
port --> "{{ .Values.redis.port }}"
password --> "{{ .Values.redis.password }}"
```

## options

可以在此部分配置系统相关的选项，例如验证 policy, 访问数据分析等。

### policies

- Optional
- Type: `map`

为应用的子域定义详细的访问控制。

配置示例
```yaml
options:
  policies:
    - uriRegex: /$
      level: two_factor
      oneTime: false
      validDuration: 3600s
      entranceName: gitlab
```

### clusterScoped

- Optional
- Type: `map`

确定此应用是否为 Olares 集群中的所有用户安装。

Server 配置示例
```yaml
metadata:
  name: gitlab
options:
  appScope:
    clusterScoped: true
    appRef:
      - gitlabclienta #app name of clients
      - gitlabclientb
```

Client配置示例
```yaml
metadata:
  name: gitlabclienta
options:
  dependencies:
    - name: olares
      version: ">=0.3.6-0"
      type: system
    - name: gitlab #app name of server
      version: ">=0.0.1"
      type: application
```

### analytics

- Optional
- Type: `map`

为应用启用网站分析功能。

配置示例
```yaml
options:
  analytics:
    enabled: true
```

### dependencies

- Type: `list<map>`

指定应用的依赖和要求。包括应用依赖的其他应用，以及任何特定的操作系统（OS）版本要求。

配置示例
```yaml
options:
  dependencies:
    - name: olares
      version: ">=1.0.0-0"
      type: system
    - name: mongodb
      version: ">=6.0.0-0"
      type: middleware
```

### websocket

- Optional
- Type: `map`

为应用启用 websocket。更多信息请参考 [websocket](../advanced/websocket.md)。

配置示例
```yaml
options:
  websocket:
    url: /ws/message
    port: 8888
```

### resetCookie

- Optional
- Type: `map`

如果应用需要使用 cookies，请启用此功能。更多信息请参考 [cookie](../advanced/cookie.md)。

配置示例
```yaml
options:
  resetCookie:
    enabled: true
```

### upload

- Optional
- Type: `map`

Olares 应用运行时（TAPR）包含一个内置的文件上传组件，旨在简化应用中的文件上传过程。更多信息请参考 [upload](../advanced/file-upload.md)。

配置示例
```yaml
upload:
  # 允许上传的文件类型，*为任意类型， 上传时会指定file_type，必须在允许的文件类型中
  fileType:
    - pdf
  # dest的路径必须为某一个mountPath
  dest: /appdata
  # 文件上传的最大大小，单位为字节
  limitedSize: 3729747942
```

### mobileSupported

- Optional
- Type: `boolean`
- Default: `false`

确定应用是否与移动 Web 浏览器兼容，并能够在 Olares 桌面的移动版本上显示。如果应用针对移动 Web 浏览器进行了优化，请启用此选项。这将使应用在 Olares 桌面的移动版本上可见并可访问。

配置示例
```yaml
mobileSupported: true
```

### oidc

- Optional
- Type: `map`

Olares OS 包含一个内置的 OpenID Connect 身份验证组件，用于简化用户的身份验证。启用此选项以在你的应用中使用 OpenID。
```yaml
# OpenID related varibles in yaml
{{ .Values.oidc.client.id }}
{{ .Values.oidc.client.secret }}
{{ .Values.oidc.issuer }}
```

配置示例
```yaml
oidc:
  enabled: true
  redirectUri: /path/to/uri
  entranceName: navidrome
```

### apiTimeout
- Optional
- Type: `int`

指定 API 提供者的超时限制，以秒为单位。默认值为 `15`。使用 `0` 可允许无限制的 API 连接。

配置示例
```yaml
apiTimeout: 0
```