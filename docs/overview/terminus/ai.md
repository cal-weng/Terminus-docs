---
outline: [2, 3]
---

# AI Framework

## Motivation

AI has made great progress in the past two years, but centralized AI services have encountered certain challenges in terms of privacy, cost, and composability. Many projects have emerged in the open source community to help users build AI services locally.

Terminus OS, which is designed to allow users to regain data ownership and manage hardware and software, was born for this era. The advantages of Terminus OS as the user’s identity avatar or second brain are:

For users:

- User data is truly protected
- While the data is protected, the Agent can answer questions based on your local documents, photos, videos, chat records, health records and other private data
- Via UI ([Dify.ai](../../how-to/terminus/dify.md)) and [Market](../../how-to/terminus/market/index.md) , users can build and use Agent without coding
- Through high integration with Agent and [TermiPass](../../how-to/termipass/overview.md), users can access services anytime and anywhere
- Low cost, users buy their own GPUs instead of renting GPUs from cloud vendors

For developers:

- Based on Kubernetes, Terminus OS has good orchestration capabilities for different modules in the AI service chain, including internal and external models, knowledge bases, vector databases, and RUG systems, thereby achieving combinability between different modules
- Terminus OS has built-in account system, web page crawling, content extraction, secret management and other functions, so components no longer need to implement similar functions themselves.
- Explore making Agent and hardware resources into services and monetization by combining with [Snowinning Protocol](../../developer/contribute/snowinning/overview.md) and [Otmoic Protocol](../protocol/otmoic.md)

## GPU Management

When installing Terminus, users can [set whether to enable the GPU](../../developer/develop/advanced/cli.md#terminus-installation-script-in-command-line) based on the specifics of the node machine.

The system's installer will automatically install the GPU driver and enable cluster nodes in the system's cluster.

:::info
Currently, the system only supports NVIDIA GPUs.

At the same time, Terminus’s GPU nodes enable virtual sharing capabilities. Up to 10 Pods can be shared in the cluster.
:::

## Model management

Users and developers can seamlessly integrate open source LLMs, Image, Vision and Speech models in their local environment.

Users can install models through [Market](../../how-to/terminus/market/index.md), and manage models locally through [Nitro](https://nitro.jan.ai/).

Developers can submit new models through [Model TerminusManifest](../../developer/develop/package/model.md) or calls the local model using [API](../../developer/develop/advanced/ai.md).

## Middleware management

We have integrated [Dify.ai](https://docs.dify.ai/) with Terminus OS, while retaining the original functions of Dify.ai, we have:

- Successfully linked accounts between two systems, eliminating the need for users to manually create and log into accounts.
- Developed a specialized agent for each account, named Ashia.
- Achieved integration between Dify.ai and the model management system, enabling Ashia to utilize local models directly.
- Facilitated direct installation of the agent via the Market, linking it with Dify.ai.
- Established a connection between TermiPass and Dify.ai’s agent interface, allowing users to operate the Agent from within TermiPass.

## Data Management

Integrating Dify.ai's Dataset and [Knowledge Base](../../how-to/terminus/settings/knowledge.md), Agent can answer user questions based on local files.

## Developer Friendly

Developers can call the interface provided by the system through [API](../../developer/develop/advanced/ai.md).

For example, note-taking software can provide capabilities similar to Notion AI by calling the interface of the local model.
