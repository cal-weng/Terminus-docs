---
outline: [2, 3]
---

# 创建域名

## How to set a domain

### 为 Olares 设置自己的域名

![alt text](/images/how-to/space/submit_a_domain.jpg)

如果输入的域名，尚未被它人绑定，就可以创建成功。接下来就到了设置域名的步骤。

注意：请确保你登录的账号处于 DID 状态（即尚未绑定 Olares ID 的状态），了解更多详情，请参考[为何不能绑定新域名？](./index.md#why-cannot-i-bind-a-new-domain)

### TXT 步骤

![alt text](/images/how-to/space/txt.jpg)

为域名添加 TXT 信息以验证其所有权，请按提示在你的域名设置中添加 txt 记录。添加完成后，请等待我们的验证，验证完成之后，域名状态将自动更新。

### NS 步骤

![alt text](/images/how-to/space/ns.jpg)

为域名添加 NS 信息，以便让 Olares Space 享有 DNS 配置权限。请按提示在你的域名设置中添加 NS 记录。添加完成后，请等待我们的验证，验证完成之后，域名状态将自动更新。

### Awaiting domain's Verifiable Credential

![alt text](/images/how-to/space/awaiting_domain.jpg)

在 LarePass 手机 APP 上申请域名的 Verifiable Credential，确保你的 Olares ID 对此域名拥有最终的控制权。

提交上链完成后，即可配置域名邮箱规则

### Awaiting rule configuration

请查看[管理 Domain](./management-domain.md) 

## Domain status and processing

你提交了域名之后，还需要几个步骤，以完成我们对你输入的域名的合法性认证。

为了方便用户理解域名的不同状态和需要进行的相应设置，我们通过以下表格进行了整理。
| 状态 | 处理方式 |
| ------------ | ------ |
| Awaiting TXT record configuration | 去添加 TXT 记录 |
| Awaiting NS record configuration | 去添加 NS 记录 |
| Awaiting the application for the Domain's Verifiable Credential| 去手机端完成域名上链申请|
| Awaiting submission of the domain's Verifiable Presentation|去手机端完成域名上链申请 |
| Awaiting rule configuration|首次设置组织成员的邮箱邀请规则 |
| Binding|等待与 Olares 的绑定，可进入详情页 |
| Allocated| 完成与 Olares 的绑定，可进入详情页|

