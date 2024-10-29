# 密码自动填充

:::info
只有 Android 和 iOS 版本支持该功能
:::

Vault 的使用帮助，请[查看 Vault 的帮助文档](../olares/vault/index.md)

在此主要介绍 LarePass 移动客户端密码自动填充功能。

## Android Password Autofill

![alt text](/images/how-to/larepass/autofill_android.jpg)

### Enable Service

首先，你需要在设置中开启自动填充服务。打开 LarePass，切换到 Setting tab，然后选择「Autofill」，开启 Autofill 开关。

### Autosave

开启之后，如果你在某个 app 中输入账号密码，我们将监控到这个事件，并提醒你是否要保存这个 app 的账号和密码。

- 点击确认，则自动将此 app 的账号和密码保存到了 Vault。

- 点击取消，则不会保存这个账号和密码。

### Autofill

下一次，当你需要在这个 app 中输入账号密码时，点击账号或密码的输入框，我们会提示使用 LarePass 来填充密码。

选择之后，解锁 LarePass。然后在 Vault 列表中选择你需要填入的账号密码项。

这时候将切换到这个 app 界面，并自动在账号和密码的输入框填入了账号和密码。你只需要提交确认即可。

## iOS Password Autofill

由于 iOS 的系统限制，我们无法实现像 Android 系统一样的密码自动保存。并且在 iOS 中密码调起和自动填充的方式也不太一样。

![alt text](/images/how-to/larepass/autofill_ios.jpg)

### Launch LarePass Interface

你可以在某个 app 中，在输入账号密码的界面中调起系统键盘，键盘中部会显示填充密码入口。点击之后，你可以在列表中看到 LarePass。

选择 LarePass，将调起 LarePass 界面，并要求解锁。解锁之后你可以看到 Vault 列表。如果你的这个 app 的账号密码不在其中，可以选择手动添加进去。

当然，你也可以主动打开 LarePass，自行将这个 app 的账号密码保存为一个 Vault。

### Autofill

同样的，在输入账号密码的界面中调起系统键盘，键盘中部会显示填充密码入口，点击之后，你可以在列表中看到 LarePass。

选择 LarePass，将调起 LarePass 界面，并要求解锁。解锁之后你可以看到 Vault 列表。

这时，选择其中的一项包含账号和密码的 Vault，即可将账号密码自动填入这个 app 的账号和密码的输入框。你只需要提交确认即可。
