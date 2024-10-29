---
outline: [2, 3]
---

# 密钥

## 动机

管理密钥需要格外小心。

我们的目标是明确谁能接触到这些密钥，谁在使用它们，以及如何定期轮换（Secret Rotation）。

然而，在实际操作中，我们发现机密信息的泄露相当普遍。这些信息经常以明文形式出现在源代码里，出现在像 Chef、Puppet、Ansible这 样的配置管理工具中，甚至被上传到 GitHub、GitLab 或 Bitbucket 等版本控制系统中。最终，这些机密信息散布在整个基础设施中，任何有登录权限的人都可能接触到。

Olares OS 根据场景对 `secret` 进行了区分，并采取不同的管理方式。

|                                                               | 数据类型                                                                      | 存储位置                                      | 泄露风险                                                                               | 使用方式                                                                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Vault Item](../../how-to/olares/vault/index.md#vault-item) | 通常指的是网站，数据库密码，区块链私钥等                                      | [Vault](../../how-to/olares/vault/index.md) | 第三方登录 Olares 也无法查看，因为 Olares 上存储的是加密过的数据                   | 每次使用都需要 LarePass 签名                                                                            |
| Credentials                                                   | 通常指通过密码安全认证后，获得的系统访问凭证，包含：Token， Cookie 等         | [Infisical](https://infisical.com/)           | 第三方登录 Olares 后，通过确定的步骤，可以查看                                       | 应用申请 Provider 权限后，可以通过接口获得                                                               |
| Secret                                                        | 在 Pod 容器中可能用到的敏感信息。例如，数据库连接，管理员账号，后台地址，等等 | ETCD                                          | 用户可以在 [ControlHub 里直接查看](../../how-to/olares/controlhub/browse.md#secrets) | 在 Helm 的部署 templates 中引用变量。例如，在环境变量中利用 valueFrom -> secretKeyRef 注入 secret 的值。 |

## Integration Credential

- 用户可以在 Settings 里通过[登录第三方服务的账号](../../how-to/olares/settings/integration.md#third-party-account)，将 Credential 授权给 Olares OS 里的应用，例如：

  - 当我登录 Olares Space 后，Backup 程序可以申请 token 进行后台自动备份。
  - 当我登录 Google 后，File 程序可以和 Google Drive 的数据进行同步。

- Olares OS 里的应用可以通过 [Service Provider](../../developer/develop/advanced/provider.md) 申请 Settings 里 Integration 的第三方服务的 Credential。

## Application Credential

- 应用可以通过 Olares OS 提供的接口管理和使用 [Credential](../../developer/develop/advanced/secret.md)。
- 应用创建的 Credential 只有应用自己可以使用。
