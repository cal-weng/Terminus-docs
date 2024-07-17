 ---
outline: [2, 3]
---

# BEC - Let People Own Their Data Again

## Challenges faced by Web 2.0

As we search for information, share photos, and purchase goods, we have to constantly endure the leakage of private data, ubiquitous advertising, and censorship. Databases of these Internet monopolies store all user information, including everything posted, purchased, watched, where they have been, and what's going on at home. Even biometric features are tracked and stored. This information is utilized to construct detailed personal profiles that enable targeted marketing through sophisticated algorithms.

When utilizing websites or applications, users are required to accept a document commonly referred to as a "user agreement". Through these agreements, the rights holders or distributors progressively restrict consumer rights, subtly transforming the concept of ownership into one of mere licensure.

Consider why e-books we purchase can be remotely deleted, and how the rights associated with physical books differ from those of their electronic counterparts. If you express dissatisfaction with this disparity on social media, you may find your post swiftly removed, and you might even face threats of account closure.

This scenario reflects the current state of the Internet, where monopolistic enterprises exploit user data to solidify their dominance and secure substantial profits.

The rights to privacy, free speech, and digital property of users are under significant threat. Challenging the prevailing monopolistic dominance requires a pivotal shift towards returning data ownership back to the individuals. This is Terminus's mission.

## Where is the users' data stored?

In the prevailing Client/Server architecture of the Internet, data is centralized on the servers owned by monopolistic corporations.

For those of us committed to the goal of "restoring individual data ownership", a critical question arises: where should this data be relocated once it is no longer housed on centralized servers?

### Blockchain

A solution that naturally comes to mind is blockchain.

In 2008, Satoshi Nakamoto introduced "Bitcoin: A Peer-to-Peer Electronic Cash System." From its inception, blockchain technology facilitated ownership of assets (Bitcoin) and identities (via public key addresses) through private keys maintained in user wallets.

In the decade since, blockchain has been laden with expectations to broaden user ownership into numerous sectors, leading to the emergence of an increasing number of public blockchains and decentralized applications (DApps), spanning electronic payments, social networks, gaming, music, and storage.

Yet, the reality confronts us starkly: a blockchain aspiring to serve as a global computer manages only 6,000 transaction confirmations per second, with storage costs substantially exceeding those of conventional cloud services.

Comparatively, the world hosts 4.8 billion PC users and 5.2 billion smartphone users, who spend an average of 6.85 hours online daily, generating 400ZB of traffic per month. The digital infrastructure sustains hundreds of millions of server interactions and data transactions every second, a demand far exceeding blockchain’s current capabilities.

A significant barrier is the absence of a widely applicable "Useful Proof of Work," which hampers our ability to synchronize self-serving entities into a cohesive network globally.

To summarize, leveraging blockchain for extensive data storage and service creation poses significant challenges in the near term.

### Local

A concept that has regained popularity among tech enthusiasts is the "local" approach to software. Insights into this trend are detailed in the article [Local First Software: You Own Your Data, in Spite of the Cloud](https://martin.kleppmann.com/papers/local-first.pdf).

> While cloud computing facilitates collaboration, traditional applications conferred data ownership.
>
> We desire both the convenience of cross-device access and real-time collaboration afforded by cloud applications and the data ownership that traditional software offers.

This ideology is especially prevalent in the realm of note-taking software, exemplified by platforms such as [Obsidian](https://obsidian.md/) and [Logseq](https://logseq.com/). User notes are stored in `Markdown` format on personal devices and synchronized using third-party services like iCloud and Seafile.

Challenges associated with storing data on local devices include:

- Given their dependency on battery life and network availability, local devices cannot reliably ensure high availability. This dependency intrinsically limits Local First software's ability to handle data synchronization efficiently.
- [Conflict-Free Replicated Data Types (CRDTs)](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) provide a robust solution for client-side data synchronization in documentation applications. However, retrofitting existing open-source projects with CRDT technology is often impractical. Over the past two decades, most projects developed by the open-source community were not designed with CRDT adaptability in mind. Consequently, the Local First community faces the substantial task of developing an entirely new developer ecosystem from the ground up.
- Relative to stationary devices, mobile devices offer lower cost-effectiveness, a disparity that may be exacerbated in the short term with the advent of the GPU era. This could impact the feasibility and performance of local data storage and synchronization on these devices.

### BEC

Instead of centralizing data storage, the BEC model advocates for distributing data across the most suitable locations. This concept derives from three foundational ideas:

- **Edge**: Brings every individual a personal cloud.

  Users maintain application data such as documents, chat logs, and photos on their private server (Edge).

  All user interactions, whether with other individuals or services, are facilitated through this server.

  In the era following the advent of artificial intelligence, an agent residing on the Edge, equipped with comprehensive contextual information, will serve as a user's secondary brain and external persona.

- **Blockchain**: Stores only data of the highest value on the blockchain.

  Blockchain technology is renowned for its transparency, openness, immutability, and global accessibility.

  While current blockchain capacities may not support extensive data and transaction volumes, concentrating on essential transactions such as account registrations and asset transfers could reduce the requisite scale by three to four orders of magnitude. This could be feasible with existing blockchain infrastructure.

  The anticipated future model will retain only data and transactions related to Decentralized Identifiers [(DID)](../../developer/contribute/snowinning/concepts.md#decentralized-identifier) and assets on the blockchain, analogous to website registrations and online banking transactions. All other data would reside on Edge nodes, utilizing peer-to-peer (P2P) transmissions for interaction.

- **Client**: Guarantees users direct control over their private keys.

  In the initial design, we stored the private key controlling [DID](../../developer/contribute/snowinning/concepts.md#decentralized-identifier) on Edge to greatly simplify software development.

  However, feedback from user interviews revealed a preference for personal custody of private keys, whether on mobile devices or via browser extensions, enhancing perceived security. Blockchain wallets exemplify this approach.

These principles have gone through extensive refinement throughout the developmental process, culminating in the three integral components of the Terminus system:

- [Terminus OS](../terminus/overview.md): A cloud-native operating system designed to operate on Edge devices.
- [Snowinning Protocol](../../developer/contribute/snowinning/overview.md): This decentralized identity and credit system provides a framework for secure, trustless exchanges of information and value. It integrates with other components of the ecosystem to ensure that transactions and interactions across platforms remain secure and verifiable without centralized oversight.
- [TermiPass](../../how-to/termipass/overview.md): A comprehensive client software that operates across multiple platforms. It securely stores users' private keys and manages their identities and data across various Edge devices.