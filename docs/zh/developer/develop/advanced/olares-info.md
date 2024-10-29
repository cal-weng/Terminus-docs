# Olares Info

olares-info 是一个无需鉴权的接口，我们将一些系统可以对外展示的信息放在这里。可以理解为它是房子的门牌。

## 外部调用

```
https://<username>.olares.com/api/olares-info
```

## 数据结构

```json
interface OlaresInfo {
    olaresName: string;
    wizardStatus: string;
    selfhosted: boolean;
    tailScaleEnable: boolean;
    osVersion: string;
    avatar: string;
    loginBackground: string;
    olaresId: string;
}
```

## 字段含义

| 字段            | 解释                                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| olaresName    | 用户的 Olares ID。格式是: pengpeng@snowinning.com                                                                                                                                                                                                                                                                                                                           |
| wizardStatus    | Olares 的激活状态，有以下状态：<br>wait_activate_vault，vault_activating，vault_activate_failed，wait_activate_system，system_activating，system_activate_failed，wait_activate_network，network_activating，network_activate_failed，wait_reset_password, completed <br> 当状态为 completed 时，代表用户激活成功。在用户激活成功前，不推荐第三方程序进行太多业务相关的逻辑。 |
| selfhosted      | 用户所在的 Olares 是否运行在 Olares Space 上                                                                                                                                                                                                                                                                                                                                |
| tailScaleEnable | 用户是否激活了 TailScale，如果激活了私有入口只能通过 VPN 访问 <br> 用途：LarePass 在连接 Olares 时，不根据这个变量决定是否增加 local 访问                                                                                                                                                                                                                                    |
| osVersion       | Olares 的系统版本                                                                                                                                                                                                                                                                                                                                                             |
| avatar          | 用户的头像 <br> 用途：用来显示用户的头像，可以参考文档 Avatar                                                                                                                                                                                                                                                                                                                   |
| loginBackground | login 界面的背景图 <br> 用途：在 login 页面时，前端没有 acesstoken，拿不到用户更新过的壁纸                                                                                                                                                                                                                                                                                      |
| olaresId      | 用户在每次激活时，都会生成一个新的唯一 ID <br> 用途：LarePass 在连接 Olares 时，会判断当前的 Olares 是否是之前那一台                                                                                                                                                                                                                                                       |
