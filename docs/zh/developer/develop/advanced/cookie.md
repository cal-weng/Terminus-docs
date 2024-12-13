# Cookie

Olares 系统中采用 SSO 的模式来为整个系统（包括所有安装的应用）实现授权认证。SSO 认证模式采用无侵入设计，使用 cookie 作为认证的凭证。

系统会在认证登录后设置两个 cookie：

- **authelia_session**

  cookie 内容为 SSO 的 session id。作用域为用户的 Olares domain， `<username>.olares.com`。

- **auth_token**

  用户认证的 authorization token。作用域为用户的 Olares domain， `<username>.olares.com`。

为避免 cookie 冲突，任何应用（包括系统的内建应用，三方应用）都不可以设置 cookie 到用户的域，只可设置到应用自己的域下面。

由于系统的每个 APP 都存在两个域名 `<app id>.<username>.olares.com` 和 `<app id>.local.<username>.olares.com`。所以 Olares 在 Olares 应用运行时中整合了 cookie 设置 `rewrite`机制，确保应用自动为 HTTP Response 中 Set-Cookie 字段中的两个域分配 cookie。

要使用这个功能只需要在应用 chart 的 [OlaresManifest.yaml](../package/manifest.md#resetcookie) 中申明：

```yaml
options:
  resetCookie:
    enabled: true
```