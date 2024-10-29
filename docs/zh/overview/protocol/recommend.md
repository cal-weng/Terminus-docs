---
outline: deep
---

# Open Information Distribution Protocol

Open Information Distribution Protocol 的愿景是打造一个隐私保护、开放、实用、通用、可组合的信息分发协议，将用户从中心化巨头的信息茧房中拯救出来。它有以下几个目标：

- **隐私保护**：用户的使用数据不会泄露。
- **开放**：任何第三方都可参与，协议不被包括 Olares 在内的任何一方掌握。
- **实用**：推荐算法需要有效。
- **通用****：除了文字内容外，也能兼容视频，音乐，商品进行推荐。
- **可组合**：协议模块化，提高个性化的同时，降低重复计算。

你可以在 [Wise](../../how-to/olares/wise/index.md#recommend) 里体验 Olares 团队提供的 demo 级推荐算法。

## 理念

### A New Paradigm for Recommendation

Open Information Distribution Protocol 协议的核心原理是，将推荐过程拆分成两个阶段。

1. 由 Content Provider 在云端对全网的内容进行收集，向量化后，将所有内容打包供用户下载。
2. Olares 下载完数据后，通过本地运行的算法和存储在本地的点击和阅读反馈，进行内容推荐。

由于每台 Olares 从 Content Provider 获得的数据都是一样的，同时推荐算法运行在本地无网络的环境里，所以用户的反馈数据获得了保密

![alt text](/images/overview/protocol/recommend1.jpeg)

### Local Recommendation Framework

运行在 Olares 内部的推荐系统框架，会对由 Market 安装的 `Recommend算法` 进行编排，保证这些算法运行在没有网络环境的沙盒里。

![alt text](/images/overview/protocol/recommend2.jpeg)

### Proof of Intelligent Contribution

Recommendation Framework 致力于通过设计出一种工作量证明，以公平的奖励主动提供梯度数据训练模型的用户，进而通过联邦学习对算法进行改进。

![alt text](/images/overview/protocol/recommend3.jpeg)

## 开源仓库

- [recommend-system-module](https://github.com/beclab/recommend-system-module) 是运行在 Olares 内部的推荐系统框架。

- [r4](https://github.com/beclab/r4) 是 Olares 团队为演示框架流程开发的一套 demo 算法。

- [article-extractor](https://github.com/beclab/article-extractor) 是网页正文提取的模块。
