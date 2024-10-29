# Olares Application Chart 包的结构

Olares Application Chart (TAC) 基于 Helm Chart 的基础结构，扩展 Olares 特有信息。一个基础的 TAC 应包含这些内容

```
|-- Chart.yaml                   # chart的metadata
|-- OlaresManifest.yaml        # Olares APP metadata
|-- templates                    # chart安装部署模版文件
|   |-- deployment.yaml          # APP 部署脚本
|-- values.yaml                  # chart安装部署参数
```

当然，在 templates 模本目录，为了内容更加清晰，你也可以将部署分开成多个文件。

- 一个典型的`应用` TAC

```
AppName
|-- Chart.yaml                # 必选: 包含了chart信息的YAML文件``
|-- OlaresManifest.yaml     # 必选: App的配置文档
|-- values.yaml               # 必选: chart 默认的配置值
|-- templates                 # 必选: 模板目录， 当和values 结合时，可生成有效的Kubernetes manifest文件
|   |-- NOTES.txt             # 可选: 包含简要使用说明的纯文本文件
|   |-- deployment.yaml       # 定义 App 安装的 Deployment
|   |-- service.yaml          # 定义 App 提供 Entrance 的 Service
|   |-- provider.yaml         # 可选：如果需要暴露 Provider 接口
|-- LICENSE                   # 可选: 包含chart许可证的纯文本文件
|-- README.md                 # 可选: 可读的README文件
```

- 一个典型的`智能推荐` TAC

```
RecommendName
|-- Chart.yaml                # 必选: 包含了chart信息的YAML文件``
|-- OlaresManifest.yaml     # 必选: Recommend的配置文档
|-- values.yaml               # 必选: chart 默认的配置值
|-- templates                 # 必选: 模板目录， 当和values 结合时，可生成有效的Kubernetes manifest文件
|   |-- NOTES.txt             # 可选: 包含简要使用说明的纯文本文件
|   |-- train.yaml            # 定义 recommand workflows 中的 train 流程
|   |-- prerank.yaml          # 定义 recommand workflows 中的 prerank 流程
|   |-- rank.yaml             # 定义 recommand workflows 中的 rank 流程
|   |-- embedding.yaml        # 定义 recommand workflows 中的 embedding 流程
|-- LICENSE                   # 可选: 包含chart许可证的纯文本文件
|-- README.md                 # 可选: 可读的README文件

```

- 一个典型的`大模型` TAC

```
LLMName
|-- Chart.yaml                # 必选: 包含了chart信息的YAML文件``
|-- OlaresManifest.yaml     # 必选: LLM的配置文档(通用配置)
|-- values.yaml               # 必选: chart 默认的配置值
├── modelConfig.yaml          # 必选: LLM的配置文档(模型配置)
└── README.md                 # 可选: 可读的README文件


```
