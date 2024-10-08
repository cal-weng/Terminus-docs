# 了解 DevBox

在 Terminus 中，我们为每个开发者提供了一个为 Terminus 开发 APP 的开发工具，这就是 DevBox。

- 开发者为什么需要 DevBox 呢

  Terminus 作为一个具有诸多云原生特性的系统，有大量的系统上下文环境在开发者的单机开发环境很难模拟。同时，Terminus 独有的沙盒体系也需要在真实的系统环境中才能完成 End to End 的测试。所以，为了方便开发者能够最便捷地获得真实的 APP 仿真体验，减少开发中的系统联调尝试，我们提供 DevBox 为开发者提供自动快速构建 APP 沙盒的开发工具集。

- DevBox 提供了哪些功能

  - 在 DevBox 中，你可以创建一个应用，生成 Terminus 应用的 TAC。而后，你可以修改这个 TAC 的部署脚本，移植一个现有的 APP，以 Terminus 的方式部署到系统中。在修改过程中，你可以尝试安装，检查错误。测试通过后，可下载你的 TAC，提交给 Terminus 的[Market 仓库](https://github.com/beclab/apps)

  - 除了移植现有 APP，你还可以创建一个全新的应用，在 DevBox 完成整个 APP 的开发到上线的工作。DevBox 中提供了在线的开发容器，开发者可以在真实的环境中完成代码开发，在程序中调用系统的其他接口或者数据库集群等等。
