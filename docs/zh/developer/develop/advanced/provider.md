# Service Provider

APP 的开发者可在 TAC 中配置 ProviderRegistry 或者在其他 Provider 的调用权限申请

## 申明 Provider

```yaml
apiVersion: sys.bytetrade.io/v1alpha1
kind: ProviderRegistry
metadata:
  # provider 名称，需要加入namespace，避免重复
  name: provider-{{ .Release.Namespace }}

  # provider registry需要安装到user-system下面
  namespace: user-system-{{ .Values.bfl.username}}
spec:
  version: v2   # 最新版本为 v2，但系统仍与 v1 兼容。

  # provider 的 dataType, 建议添加应用名称以避免重复
  dataType: legacy_{{ .Release.Name }}
  deployment: {{ .Release.Name }}
  description: {{ .Release.Name }} legacy api v2

  # provider 的可访问service。通常是 <appServiceName>.<appNameSpace>:<servicePort>
  endpoint: {{ .Release.Name }}-svc.{{ .Release.Namespace }}:1234

  # provider 的 group，建议添加应用名称以避免重复
  group: api.{{ .Release.Name }}
  kind: provider
  namespace: "{{ .Release.Namespace }}"
  opApis:
    # 提供的接口名称
    - name: AppApi
      # 提供的接口访问路径
      uri: /api  
status:
  state: active
```

## 申请 Privder 的访问权限

可在 [OlaresManifest.yaml](../package/manifest.md#sysdata) 中配置。

```Yaml
sysData:
- appName: providerapp  # provider 的应用名称，ProviderRegistry v2 必填
  port: 8888  # provider 服务的端口

  # 如果服务名称和应用命名空间不是默认格式，可以在以下字段指定 provider 默认域名为 <appName>-svc.<appName>-<username>:<port>
  svc: app-svc  # 服务名称，ProviderRegistry v2 可选
  namespace: ns # 应用的命名空间，ProviderRegistry v2 可选

  version: v2   # ProviderRegistry 的版本
  dataType: legacy_{{ .Release.Name }}  # 在 ProviderRegistry 中定义的 dataType
  group: api.{{ .Release.Name }}   # 在 ProviderRegistry 中定义的 group
  ops:
  - AppApi   # 在 ProviderRegistry 中定义的 opApis 的名称
```

配置后，在 TAC 的 templates 中可引用系统在安装时将为其注入的授权使用的 `access key` 和 `access secret`

```yaml
env:
  - name: OS_SYSTEM_SERVER
    value: system-server.user-system-{{ .Values.bfl.username }}
  - name: OS_APP_SECRET

    # 此处的appname为TAC包中定义的APP名称
    value: "{{ .Values.os.<appnane>.appSecret }}"
  - name: OS_APP_KEY
    value: "{{ .Values.os.<appname>.appKey }}"
```

在代码中可获取这三个环境变量，进行 Provider 调用

以 curl 为例

1. 获取 acess token,有效时间 5 分钟,

token 加密算法：bcrypt(`app key` `timestamp` `app secret`) default cost 10

```sh
now=$(date +%s)
token=$(htpasswd -nbBC 10 USER "${OS_APP_KEY}${now}${OS_APP_SECRET}"|awk -F":" '{print $2}')

curl -X POST http://${OS_SYSTEM_SERVER}/permission/v1alpha1/access -H "content-type: application/json" \
  -d "{ \
  \"app_key\": \"${OS_APP_KEY}\",         \
  \"timestamp\": ${now},                  \
  \"token\": \"${token}\",                \
  \"perm\": {                             \
      \"group\": \"service.bfl\",         \
      \"dataType\": \"app\",              \
      \"version\": \"v1\",                \
      \"ops\": [                          \
      \"InstallDevApp\"                   \
      ]                                   \
  }                                       \
}'
```

系统将返回

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "access_token": "JDJ5JDEwJE5Wbk9vbFpoLjJlSGxhUUpRY1IwRmVZVjFBWmUxUi5LOXNuQWJmVjRnN29xNWVVaFhPWmV5"
  }
}
```

2.这个时候，可用返回的 token 去调用 provider 的接口

```sh
# 地址格式 http://${OS_SYSTEM_SERVER}/system-server/v1alpha1/<dataType>/<group>/<version>/<op>
curl http://${OS_SYSTEM_SERVER}/system-server/v1alpha1/app/service.bfl/v1/InstallDevApp \
  -H "content-type: application/json" \
  -H "X-Access-Token: ${access_token}"  \
  -d '{"data":"post to provider"}'
```
