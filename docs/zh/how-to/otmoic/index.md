---
outline: [2, 4]
---

# Otmoic

Otmoic 系统的使用介绍将会以两个不同的视角进行讲述, 分别是 LP 视角和 User 视角。

## For LP

对于 LP 而言, 有三大块配置内容, 其中 bridge 相关的配置是系统运行的基础, 只有完成此部分配置后系统才能开始工作. amm 和 monitor 分别控制对冲策略和监控报警, 我们为你预设了简单的配置方案可以直接使用, 但是我们建议你根据自身情况修改配置, 以获得更好的执行结果

### Configure A Bridge

此章节将会指引你完成 otmoic 系统中 bridge 的相关配置, bridge 在 otmoic 系统中代表一座特定的桥, 你可以简单的理解为交易所中的交易对, 但是是单向的.
bridge 的配置有两种情况

- 第一次配置时你可以在 guide 页面进行所有信息的配置
- 针对后续更多的 bridge, 你需要单独进入特定项目的配置页面进行配置

#### First Bridge

1. Configure token
   :::info token
   配置 token 时有两部分信息需要填写或选择

- token 所在的链
- token 本身的信息, 其中包括 **合约地址**, **在系统中显示的名称**, **Market Name**, **token 精度**, **token 类型**
  - Market Name 字段在对冲和获取市价时使用, 自动匹配中心化交易所的 MarketName/USDT 交易对
  - token 类型字段可选 **coin**, **stable coin**. 是否是稳定币将会影响到 amm 的对冲逻辑, 非稳定币的交换会在交易所进行反向的买卖操作, 以保证总净值稳定, 请依据实际情况选择

在这一步当中我们预设了一些 token 的配置, 方便你快速完成配置, 使用测试网络时是测试 token, 使用正式网络时是一些常见 token

<video controls width="100%">
  <source src="/images/how-to/otmoic/config-token.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

在上面的动画中你可能发现了我们连续配置了两个 token, 因为要让一座桥正常工作至少需要两端也就是两个 token. 举个例子, 如果我们配置一座用 eth 上 usdt 交换 bsc 上 usdt 的桥, 则需要配置 eth 上 usdt 的 token 信息和 bsc 上 usdt 的 token 信息
:::

2. Configure wallet
   :::info wallet
   配置 wallet 时有两部分信息需要填写或选择

- 使用 wallet 的链
- wallet 本身的信息, 其中包括 **address**, **private key**

此步骤至少需要配置一个与 dst 一侧 token 所在链相同的 wallet, 在交换过程中, src 一侧是 LP 收到的 token, 而 dst 一侧是 LP 需要转出的 token, dst 一侧的 wallet 就是为了进行这个转出操作而配置的, 当然, 除了与 dst token 处于相同链以外, 你的 wallet 中还应该有一定量的 gas 以及 dst token 用以进行交换.
如果 src 一侧与 dst 一侧不是相同的链, 或者你希望用不同的 wallet 进行收款, 那么就需要再为 src 一侧配置一个 wallet

<video controls width="100%">
  <source src="/images/how-to/otmoic/config-wallet.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

> [!NOTE] Tips
> 此处 dst 侧使用的 wallet 需要在链上声明过所属状态, 操作方法参照设置 NFT 头像
>
> :::

3. Configure account
   :::info account
   配置账户时你仅需要输入此 LP 的介绍信息即可, **lp_id** 将使用你的 OlaresName, 并且交换流程中的身份验证也将基于你的 OlaresName
   ![alt text](/images/how-to/otmoic/config-account.png)
   :::

4. Configure limiter
   :::info limiter
   限制器的配置需要选择黑名单模式或白名模式, 然后从对应的列表中选择并添加国家

<video controls width="100%">
  <source src="/images/how-to/otmoic/config-limiter.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

:::

5. Configure bridge
   :::info bridge
   从已配置好的数据中选择 **src token**, **dst token**, **src wallet**, **dst wallet**, 以及执行策略的 **amm** 程序

- src token: 收到的 token
- dst token: 转出的 token
- src wallet: 接收 src token 的钱包
- dst wallet: 发送 dst token 的钱包
- open authenticationLimiter: 此 bridge 是否开启限制器 (目前支持基于 KYC 信息中地理位置信息进行限制)

<video controls width="100%">
  <source src="/images/how-to/otmoic/config-bridge.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

:::

#### More Bridge

侧边栏中有上述每个步骤的单独配置页面, 功能与引导流程中完全相同, 在你需要配置更多的 bridge 时, 只需要在这些信息中分别补充新 bridge 缺失的信息, 之后再进入 bridge 配置页面配置新的 bridge 即可

### Configure Amm

:::info 配置文件
进入 Amm - Programs 页面, 点击 AMM Program, 右侧将展示配置文件编辑器, 可以通过修改此处的配置文件来控制 amm 程序的运行逻辑
![alt text](/images/how-to/otmoic/config-amm.png)

Amm, exchange_adapter 都使用这一份配置文件，方便加载一致的账号、交易所信息

```json
{
  // 配置多个区块链的参数，每个区块链有唯一的chainId
  "chainDataConfig": [
    {
      "chainId": 9006, // 区块链ID
      "config": {
        "maxSwapNativeTokenValue": "50000", // 最大交换原生代币值； 1.目标链原生币余   2. 启用对冲时交易可执行的最大量 3.启用对冲时 CEX 对应币的余  4配置值 。报价中的最大值是 1,2,3,4中的最小值
        "minSwapNativeTokenValue": "0.5" // 已经废弃的值，暂时不生效
      }
    }
  ],
  // 桥接基础配置
  "bridgeBaseConfig": {
    "defaultFee": "0.003", // 收取多少的跨链手续费
    "enabledHedge": false // 是否启用对冲
  },
  // 针对单独的跨链桥做配置，如只配置 ETH-USDT 比对，这里的配置优先级高于bridgeBaseConfig，会覆盖对应币对的配置，假如你只想针对某些币对使用对冲功能，或者需要设置单独的 fee 时，可以使用此选项
  "bridgeConfig": [
    {
      "defaultFee": "0.003",
      "enabledHedge": false
    }
  ],
  // 订单簿类型，此处为market订单簿
  "orderBookType": "market", // 值为 market 时，初始化为 Cex 类型的 orderbook 并从 exchange_adapter 获取 orderbook ，目前仅支持 market。如果需要支持其他 orderbook ，请配置其它值，并实现对应的实现者。
  // 对冲配置
  "hedgeConfig": {
    "hedgeAccount": "001", // 对冲账户ID ，enabledHedge 为 true 时生效， 系统会根据这个 value 读取下面配置中 accountList 对应的账号信息，目前amm app 仅支持 spot 相关账号。     "hedgeType": "CoinSpotHedge", // 对冲类型
    "accountList": [
      // 账户列表
      {
        "enablePrivateStream": false, // 是否启用私有流
        "apiType": "exchange_adapter", // API类型：交易所适配器 ，exchange｜profolio｜exchange_adapter  分别对应 本地交易所实现｜使用 profolio｜使用 exchange_adapter ，用于配置系统如何初始化交易所 完成交易信息加载、账户信息同步、的订单操作
        "accountId": "001", // 账户ID， 当 id == hedgeConfig.hedgeAccount 的配置时，这一个账户将被启用。
        "exchangeName": "binance", // 交易所名称，账户对应的交易所名称 ，当 apiType 为 profolio、exchange_adapter 时有效
        "spotAccount": {
          // 现货账户信息
          "apiKey": "", // API密钥
          "apiSecret": "" // API秘密
        },
        "usdtFutureAccount": {
          // USDT本位期货账户信息
          "apiKey": "", // API密钥
          "apiSecret": "" // API秘密
        },
        "coinFutureAccount": {
          // 币本位期货账户信息
          "apiKey": "", // API密钥
          "apiSecret": "" // API秘密
        }
      }
    ]
  }
}
```

:::

### Configure Monitor

我们在 Monitoring - Create 页面中提供了编写自定义监控脚本的功能, 你可以用 ts 编写自己的监控策略

<video controls width="100%">
  <source src="/images/how-to/otmoic/config-monitor-rf30-720-vs.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

- 编码
  在第一步中输入你的监控代码, 使用环境预置的 SDK 可以访问系统数据库, 然后获取你感兴趣的数据并进行监控, 上方的演示动画中获取了所有的交易历史, 更多的功能和用法需要你自己去发掘, 相关详细信息请参考我们的开源代码库
- 调试
  在配置的第二步, 你将可以看到此脚本的运行结果或者程序异常时的错误信息, 依赖此功能可以进行简单的开发调试

## For User

对于用户而言, 有两个核心功能, Swap 和 KYC, KYC 的 状态有可能影响到 LP 给出的报价价格, 以及是否支持交易

### KYC

:::info KYC 操作的的步骤如下

1. 安装 LarePass 浏览器插件并 创建/导入 你的助记词
2. 网页通过 LarePass 插件获取你的 did
3. 上传你的身份认证资料
4. 如实填写 KYC 信息
5. 使用 LarePass 对你的 KYC 信息进行签名, 并提交到 relay 服务器
6. 联系或等待审核人员对你的 KYC 申请进行审核
7. 审核过后, 通过网页获取你的 VC 凭证并存入 LarePass, 然后使用 LarePass 签名提交你的 VP 凭证

<video controls width="100%">
  <source src="/images/how-to/otmoic/kyc-x2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
:::

### Swap

:::info 交换的操作步骤如下

1. 报价阶段

   1. 选择想要交换的 token 所在的 2 条链
   2. 选择想要交换的 token
   3. 输入你的收款地址
   4. 从报价列表中选择你满意的报价
      - 灰色的报价是不满足 LP 要求的报价, 无法选择, 可能是 KYC 状态, 也可能是你的年龄或国家
      - LP name 后面的星代表 LP 的信用分, 依据最近一段时间的历史交易完成度, 平均交易时间, 被投诉的数量等情况综合计算得出
   5. 使用 钱包(例如:metamask) 确认交易信息并签名

2. 交易阶段

在每一步的时间限制内, 通过钱包发送交易, 如果你发现 LP 锁定的代币或者数量与报价中的信息不符, 或者是 LP 没有在时间限制内操作 token 锁仓, 可以点击 complain 进行投诉, 不论交易因何种原因未成功进行, 你都可以在 refund 倒计时结束后操作退款

<video controls width="100%">
  <source src="/images/how-to/otmoic/swap.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
:::
