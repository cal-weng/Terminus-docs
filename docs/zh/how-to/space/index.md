# Olares Space

## Introduction

[Olares Space](https://space.olares.com/) 由两部分功能。

### Infrastructure Service

包含数据备份，域名管理，反向代理，共享 GPU 等服务。

在 BEC 架构中，因为希望给用户自主选择的权利，所以这些服务由第三方或用户自己提供。

Olares Space 是我们为 Olares 世界准备的默认方案，用户开箱即可使用。我们同时也会为上述服务提供开源的 SelfHosted 方案，用户可以选择自己搭建，而不依赖任意第三方。

### Host Service

出于对资源灵活性，稳定性和访问速度等方面的要求，我们预计部分企业用户会有在公有云部署 Olares 的需求。

Host Service 就是帮助用户在公有云上便捷搭建 Olares 的方案。相比用户自己部署，我们在集群资源的编排和安全粒度控制上遵循了最佳实践，发挥了云厂商底层的优势。

Host Service 目前在邀请内测中。

## Features

- [Account](./account.md)，Olares Space 和 LarePass，Olares 采用同一个账号，你可以使用 LarePass 扫码登录，并在一个浏览器里管理多个账号
- [Host](./host/index.md)，介绍了如何查看 Olares 的情况，以及管理 Olares Space 里的 Olares 集群
- [Backup](./backup.md)
- [Domain](./domain/index.md)
- [Bill](./bill.md)，了解我们的计价规则
