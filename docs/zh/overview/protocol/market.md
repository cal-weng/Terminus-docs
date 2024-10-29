# 开放应用分发协议

## 动机

Olares 中的应用市场基于开放应用分发协议构建，致力于：

- 打造一个无许可的应用分发生态
- 用户的付费全部归开发者所有

## 技术方案

要想实现这个愿景，Olares OS 在技术上需要做到：

- 统一的安装格式

  Olares OS 提供了 [TAC 格式](../../developer/develop/package/chart.md)，提供给用户在安装和管理传统应用，推荐算法和模型以及未来所有“软件”时一样的体验。

- 应用沙盒

  Olares OS 提供了[社区应用模式](../olares/application.md#社区应用)，让恶意软件的影响范围尽可能的小。

- 去中心化的应用评价体系

  Olares 支持 [Application Reputation](../../developer/contribute/snowinning/smart-contract.md#application-reputation)，帮助用户进行购买决策，以及识别有信誉的开发者。 

- 灵活的 Indexer 服务
  
  用户可以自由为 Market 选择 Indexer 服务，下图是 Developer、Indexer 和 Market 的关系。

  ![Developer、Indexer 和 Market 的关系](/images/overview/protocol/distribute.jpeg)

  Developer 可以将应用自由提交到任意一个 Indexer，Market 可以选择任意一个 Indexer 给用户展现应用列表。

  [apps](https://github.com/beclab/apps) 是 Olares 官方的 Indexer，它由 GitBot 机器人根据规则自动维护，开发者只要遵守 [流程](../../developer/develop/submit/index.md) 提交符合 TAC 格式的应用，GitBot 就会将开发者的提交合并到主干，用户就可以在 [Market](../../how-to/olares/market/index.md) 里看到这个应用并安装。
