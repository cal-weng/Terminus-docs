---
outline: [2, 3]
---

# 管理 Olares

## View Panel Data

要通过 Olares Space 查看到系统数据信息，我们你需要在 Olares 的“Settings”应用里登录 Olares Space，以授权在 Olares Space 查看你的系统数据信息。登录完成后，你就可以在此看到 Olares 相关的系统数据，了解存储和流量的使用和消耗情况。

你可以查看 [Integration](../../olares/settings/integration.md) 获取更多信息。

对于 Selfhosted 用户而言，你可能更需要关心的是内网穿透的流量数据和备份服务所占用的存储。因为如果使用了相关服务，我们可能会收取你这部分的使用费用。

![alt text](/images/how-to/space/my_olares.jpg)

## Add Worker

如果你使用的是云上的 Olares，我们支持添加 Worker 节点。

点击右上角的「...」更多按钮，选择「Add Worker」，在后续的引导页面中，选择配置和查看存储和流量的收费信息之后，确认订单并提交即可。

## Return Olares

如果你已经不想继续使用云上的 Olares 服务，可以将 Olares 归还。

点击右上角的「...」更多按钮，选择「销毁 Olares」。

确认销毁之后，我们将实时结算当前的消费情况，如果需要退款，款项将实时退至你的账号余额中；如果还需你支付费用，请确认订单支付即可。

## Shared GPU

我们暂时没有提供包含 GPU 的实例，如果你有需求请联系我们。

我们面向个人用户提供了基于 rCuda 的共享 GPU 方案，它可以比较好的解决 Stable Diffusion 等应用的体验，每张图的成本在 0.02 美金。但对 LLM 的支持上还需要进一步提升。
