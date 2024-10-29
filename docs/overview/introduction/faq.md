# FAQ

## What license is Olares using?

Olares consists of a series of projects using a hierarchical authorization approach. The basic principles are:

- Projects running on blockchain use Apache 2.0, such as [Snowinning Protocol](https://github.com/beclab/olaresdid-contract-system).
- Projects related to protocols use Apache 2.0, such as [r4](https://github.com/beclab/r4).
- Projects around [Olares](https://github.com/beclab/olares) and [LarePass](https://github.com/beclab/LarePass) use the [Olares License](https://github.com/beclab/olares?tab=License-1-ov-file).
- For third-party applications running on Olares, it is up to the developer to decide whether they want them open source or not and choose the license accordingly.

For more details, visit our projects on [GitHub](https://github.com/beclab).

## Is the Olares License an open source license?

Olares's choice of license for its major projects is inspired by [fair code](https://faircode.io/). The [Olares License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md), directly copied from the [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md), also follows these principles:

> - Is generally free to use and can be distributed by anybody
> - Has its source code openly available
> - Can be extended by anybody in public and private communities
> - Is commercially restricted by its authors

## What happens if the mnemonic word goes missing?

You will lose:

- The ownership to [DID](../../developer/contribute/snowinning/concepts.md#decentralized-identifier) and [Olares ID](../../developer/contribute/snowinning/olares-id.md)
- The data stored in the [Vault](../../how-to/olares/vault/index.md)

We strongly suggest that you back up the mnemonic phrase offline.

From 1Password’s MasterKey to crypto wallet’s mnemonic phrase, for more than ten years, the problem of mnemonic storage has not been well solved.

The mnemonic phrase of Olares will be encrypted and stored on all devices that install LarePass. Generally, you only lose the mnemonic phrase if you lose all the devices with LarePass installed at the same time.

Safety is the most important principle in designing our system. We will continue to improve it in the future to provide you with a better solution that balances convenience and safety.

## Is there a difference between Olares and the current operating systems running on NAS?

At the inception of Olares, the market already had excellent NAS operating systems such as [Synology](https://www.synology.com/en-global/dsm/packages), [CasaOS](https://github.com/IceWhaleTech/CasaOS), and [Umbrel](https://github.com/getumbrel/umbrel). They have indeed inspired us.

But we do think the operating system running on Edge should be able to:

- Orchestrate resources for multiple hardware
- Manage applications in sandboxes

This is difficult to achieve with the above-mentioned NAS operating systems built on Docker Compose.

Meanwhile, Olares aims to provide a one-stop self-hosted solution, which goes beyond the scope of general NAS operating systems.

## I have several servers. Can I use Olares to manage them one-stop?

Yes. You can refer to [How to add a node](../../developer/develop/advanced/cli.md).

After you add the node, you can manage the cluster via [Dashboard](../../how-to/olares/dashboard/) and [Control Hub](../../how-to/olares/controlhub/).

The experience of multi-node clusters is a focus of our work in the next few months.

## Do I need to pay for Olares?

When you're self-hosting, you can essentially use Olares for free.

But for the following two features, we may introduce reasonable charges due to the cost (currently both are provided for free):

- **Backup**

  We provide 10G of free backup space for each Olares ID on Olares Space. When the archive size exceeds this limit, we will charge you a certain fee to cover the cloud provider fee.

  You can change the [Settings/Backup](../../how-to/olares/settings/backup.md) settings to avoid this cost by turning off backup or backing up your data to a local hard drive or S3.

- **Network Traffic**

  We provide 2G of free public network traffic for each Olares ID every month.

  If you don't provide service via the public Internet, almost all of your traffic can be routed peer-to-peer through the VPN, and you won't be charged for it. However, we are not sure how the TailScale DERP service is billed.

  If you need to provide service via the public Internet, we will charge you for the additional traffic generated with reference to the bills from cloud providers.

Meanwhile, we believe that cold backup and CDN are resource types that are relatively easy to DePinize, and we look forward to solutions based on [Otmoic Protocol](../protocol/otmoic.md).

## Do I need to pay to operate on a blockchain?

Right now our smart contract is deployed on [OPTIMISTIC ROLLUPS](https://optimism.io/).

We cover all Olares ID registrations, which cost around $1-2 (USD) per registration. The purpose of this is to lower the barrier to using the system.

But if users want to interact directly with smart contracts on the blockchain, such as posting comments or managing Domains, they need to pay the corresponding Gas themselves through the wallet plug-in on the browser.

## When are other languages available?

Right now we only support English. We hope to support multiple languages from Q2 2024.

In fact, we have completed i18n replacement in all front-end projects. However, we lack the experience in maintaining translation resources for a fast iterating project through the open source community. We are still learning.

## Can we develop our own desktop?

Certainly. If you remember the Android Market in 2011, the Google Market (yes, it wasn’t called Google Play back then) had desktop, messaging, and contacts apps in a variety of formats.

We plan to use a similar architecture to Android (LaunchProvider->Launcher) to separate the application front-end and back-end. The front-end will be handed over to third-party applications and placed in the third-party application space. We expect to support this feature by July 2024.

If you want to start now, you can:

1. Refer to the implementation of [desktop](https://www.transifex.com/) 
2. Develop a system desktop using [DevBox](../../developer/contribute/system-app/overview) to replace the local desktop.

However, there are chances that applications developed through this method cannot be installed correctly after being distributed through the Market. This should be fixed when we support the separation of front and back ends.

## How do we use the term `Olares`?

We use the term Olares under two scenarios:

- Describing the entire project and the OS. Specifically, it refers to the complete architecture including 3 core components and extension protocols.
- Describing the hardware devices running Olares OS. Be it a Raspberry Pi or a cluster of multiple machines on the cloud, all can be called Olares.


## What are the differences among the different "passwords"?

Olares does have various passwords to ensure its security, including:

- Private key
- The password of LarePass:
  - On mobile phones, biometrics can be used for login
  - On computers and browser plug-ins, manual input is required
- Password for first activation of Olares
- Password for Olares login
- Second verification code when logging in to Olares

Don't panic! For daily use, what you need to enter is the two-step verification code when logging in to Olares.

## What is Proof of Useful Work?

Proof of Useful Work (PoUW) must satisfy the following requirements:

- Production costs are much higher than verification costs.
- Any third party can verify.

For example, Bitcoin mining is the first and most classic PoUW. But it is not useful because we cannot solve practical problems with the calculated Hash.

A similar project is Chia, which provides a PoUW for storing large numbers of randomly generated numbers on disk.

There are many projects claiming to provide such a PoUW, but we are cautious about this. 

## How to deploy multi-user applications?

It depends on whether you want to provide external service or simply let internal Olares users use it.

- To provide services to the public, you can select the Entrance to access the application as [Public](../olares/network.md#public-entrance). This allows the application to manage its own user registration and authentication.
- To provide internal access only, you can deploy the [Cluster Scoped](../olares/application.md#cluster-scoped-application) version of such products on Olares.

For Gitlab, we provide two versions of porting: [Gitlab Pure](https://github.com/beclab/apps/tree/main/gitlabpure) and [Gitlab Fusion](https://github.com/RLovelett/gitlab-fusion).
