# 密钥

在 APP 中经常需要保存用户的一些重要信息，比如，密码、某个外部系统的 Access Token，等等。Olares 基于 Infisical，为 APP 提供了一个统一的安全保存各种密钥的金库。

APP 只需要做简单的申请，即可获得接口访问权限。申请方式是在 TAC 的 [OlaresManifest.yaml](../package/manifest.md#sysdata)中申请一个 sysData 的访问权限，例如

```yaml
permission:
  sysData:
    - dataType: secret
      group: secret.infisical
      version: v1
      ops:
        - RetrieveSecret?workspace=your-app # 每个 app 申明自己独立的workspace
        - CreateSecret?workspace=your-app
        - DeleteSecret?workspace=your-app
        - UpdateSecret?workspace=your-app
        - ListSecret?workspace=your-app
```

- 调用接口

采用 provider 相同调用机制

调用接口时采用 ops 完整名字（包含 workspace 参数）作为 uri

调用接口时需要加入 header， X-Authorization: <cookie 中的 auth_token>

- 请求参数

Response Body:

```json
{
  "code": http.StatusOK, // 200 is ok
  "message": "",
  "data": [resData],
}
```

Request Body:

CreateSecret

```json
{
  "name": "string", // secret name
  "value": "string", // secret value
  "env": "string" // environment of secret, test | dev | staging | prod (default)
}
```

返回结果

`[resData]` 为空

RetrieveSecret

```json
{
  "name": "string", // secret name
  "env": "string" // environment of secret, test | dev | staging | prod (default)
}
```

返回结果

`[resData]`

```json
{
  "name": "string", // secret name
  "value": "string", // secret value
  "env": "string" // environment of secret, test | dev | staging | prod
}
```

DeleteSecret

```json
{
  "name": "string", // secret name
  "env": "string" // environment of secret, test | dev | staging | prod (default)
}
```

返回结果

`[resData]`为空

UpdateSecret

```json
{
  "name": "string", // secret name
  "value": "string", // secret value
  "env": "string" // environment of secret, test | dev | staging | prod (default)
}
```

返回结果

`[resData]`为空

ListSecret

```json
{
  "env": "string" // environment of secret, test | dev | staging | prod (default)
}
```

返回结果

`[resData]`

```json
[
  {
    "name": "string", // secret name
    "value": "string", // secret value
    "env": "string" // environment of secret, test | dev | staging | prod
  }
]
```
