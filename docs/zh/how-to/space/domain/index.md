# 组织域名

## Using a Custom Domain with Olares

在办公场景，企业会希望员工使用自己品牌的域名进行登录，而不是用我们提供的公共域名。这时，用户就可以申请自己的 Domain，并绑定。

## Why cannot I bind a new domain？

只有账号处于 DID 状态下才可以绑定新的域名。因为账号已经绑定了 Olares ID，这意味着此账号已经有了相应的域名归宿，这时候是无法更换新域名的。
你可以创建一个新的 DID，然后使用这个 DID 登录 Olares Space 设置自己的域名。

1. 在 Cloud 申请一个域名
2. 进行 DNS 配置
3. 在 LarePass 上申请账号，并绑定 Domain 域名
4. 申请一个这个域名下的 Olares ID
5. 进行安装
6. 通过自定义的 Domain 访问 Olares
   这块业务的处理逻辑非常复杂，牵涉到所有的环节，包括智能合约，DID/VC 签发，网络拓扑，云和 LarePass 等各种问题。但我的想法是，正式发布前做掉比发布后改工作量要小的多。
