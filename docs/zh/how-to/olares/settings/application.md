---
outline: [2, 4]
---

# 应用

你可以在这里对已经安装的应用进行管理。在列表中，你可以看到：

- [用户系统应用](../../../overview/olares/application.md#用户系统应用)
- [社区应用](../../../overview/olares/application.md#社区应用)
- 如果你是 Admin， 还会看到[集群应用](../../../overview/olares/application.md#集群应用)

![alt text](/images/how-to/olares/application.png)

## App Management

你可以在这里查看常见的[应用状态](../../../overview/olares/application.md#应用状态)
:::info
[社区应用](../../../overview/olares/application.md#社区应用)可以被 Suspend，以释放资源。
:::

![alt text](/images/how-to/olares/application_details.png)

## Entrance Management

你可以在这里更多了解 [Entrance](../../../overview/olares/network.md#entrance)。

![alt text](/images/how-to/olares/application_entrance.png)

### Setup Endpoint

你可以在这里设置应用的 [Entrance Endpoint](../../../overview/olares/network.md#endpoint)。

![alt text](/images/how-to/olares/application_domain_setup.png)

#### Setup Custom Route id

你可以将 Default route id 替换成自定义的值。 例如，将将 de463205 替换为 wordpress

![alt text](/images/how-to/olares/application_third_level_domain.png)

#### Setup Custom Domain

你可以给 Entrance 设置一个独立的域名。

![alt text](/images/how-to/olares/application_third_party_domain.png)

在输入域名后，根据弹窗的提示信息，你需要在域名托管网站上添加一条 CNAME 解析记录。

![alt text](/images/how-to/olares/application_activation_third_party_domain.png)

DNS 记录生效后，Status 将会变成 Activated，此时设置就完成了。

:::info
如果你想要你的朋友无需登录就访问这个网址，请将它的 AuthLevel [设置成 Public](#authlevel)
:::

### Setup Access Policies

每个应用可以更细致的为应用内的每个访问路径设置访问策略。

比如，对某些敏感操作，要求调用时再次输入 [One Time Password](../../../overview/olares/account.md#多因素验证)。

#### AuthLevel

设置整个应用的访问级别，有 Public 和 Private 两种，你可以在 [这里](../../../overview/olares/network.md#entrance) 查看他们的含义。

#### Second factor Model

如果应用设置 Auth Level 为 Private，那么可以进行下面两项的设置：

- One time<br>
  True：已经在[Login](../setup/login.md)登录通过的情况下，访问该应用，是否还需要输入一次 [One Time Password](../../../overview/olares/account.md#多因素验证)<br>
  False：已经在[Login](../setup/login.md)登录通过的情况下，可以直接访问该应用

- Valid duration<br>
  当 One Time 为 True 时，输入一次 [One Time Password](../../../overview/olares/account.md#多因素验证) 的有效期。有效期内，不需要重复输入。该值为 0 时，代表每次访问都需要输入。

#### Policies

通过 Policies 可以对应用内的子路径设置不同的访问策略。

![alt text](/images/how-to/olares/application_add_sub_policies.png)

在添加的对话框中，你可以用一个`正则表达式`设置策略匹配的某些子路径。

然后可以选择针对这个子路径规则的访问模式。

- `Public` 表示这个子路径可以无需授权，完全公开访问。
- `One Factor` 表示这个路径在 [Login](../setup/login.md) 只需要输入登录密码就可以完成登录。
- `Two Factor` 表示这个路径在 [Login](../setup/login.md) 需要输入登录密码和二次验证码才能完成登录。

如果选择 Two Factor，`One time` `Valid duration`的含义可以参考 [Second facto Model](#second-factor-model)
