---
outline: deep
---

# Renaissance of the Protocol

About 5 years ago, MIKE MASNICK published the article 
[Protocols, Not Platforms: A Technological Approach to Free Speech](https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech), explaining to us the importance of protocols in the future.

We are delighted to see that enlightened individuals have realized this, and more and more applications based on protocols are being developed, such as:

- Mastodon, developed on ActivityPub
- Element, developed on Matrix  
- BlueSky, developed on [AT Protocol](https://atproto.com/)
- Nostr
- Farcaster

However, objectively speaking, these protocols still have a long way to go before they are widely used. 

This article attempts to analyze why and what can be done in the future.

## Problems with Protocols

Typically, the protocol ecosystem comprises four roles:

- Protocol: The initiator of the project, the standard setter, the developer of core services
- Provider: Provides hardware to run the protocol's core services, ensuring the operation of the protocol network.

  - In the context of blockchain, such roles are known as miners.  
  - In federated networks, such as Mastodon, they are called relays.
  - In BitTorrent (BT) networks, trackers assume a similar role.

  We refer to them all as service providers.

- Application: Applications developed based on the protocol, which communicate through providers or Peer-to-Peer communication.  
- User: The entities that use the above services and inject funds or resources into the ecosystem

The protocol ecosystem competes with existing Web2 platforms for users' limited attention, time, and money. 

If a massive number of users choose a certain protocol ecosystem, then the funds that previously circulated in Web2 platforms would flow into the protocol ecosystem in various ways, and everything else would prosper.

Thus, I believe the current dilemma of protocol ecosystems is the lack of users. Only after gaining users should we consider whether there is a sustainable economic system or business model.

## Why Would Users Migrate?

Understanding the problems with protocols, we realize that the revival of protocols is about migrating users from Web2 platforms to protocol ecosystems. Similar migrations have occurred among various Web2 platforms over the past 20 years. Based on history, user migration occurs when the following inequality holds:

> Migration Cost < "New Product Experience - Old Product Experience" ~ Yu Jun

The greater the gap between migration costs and the experience difference, the faster the migration will occur.

### Migration Cost

The costs of running a server are certain:

- Running a server requires professional knowledge
- Running a server requires an initial hardware investment
- Running a server requires ongoing time investment for maintenance and paying maintenance fees

For services like Ethereum's archival nodes, even small businesses find it challenging to manage.

### Product Experience

Decentralized products are generally not better than their centralized counterparts. The 20-year history of the internet is a history of transitioning from decentralized software to centralized platforms. (Ironically, this trend fits the aforementioned inequality.)

If you have a background in software development, you can easily understand that, with the same resource investment, centralized systems often provide a better experience than decentralized systems.

To this day, decentralized systems only exist in a few use cases such as CDNs, blockchain, etc.

### Why Users Do Not Migrate

Now let's summarize the two sides of the inequality:  

- Left side: The migration cost from Web2 platforms to protocol ecosystems is high.
- Right side: The improvement in experience is negative.

The inequality is far from being met, so there is no sign of massive user migration currently.

## Changes Brought by Terminus

With Terminus, the situation begins to shift:

- The migration cost becomes low enough. The emergence of Terminus makes the migration cost as trivial as buying a new smartphone.

- The AI revolution has brought users unprecedented concerns about data privacy and sovereignty, something fundamentally unattainable on Web2 platforms.

In scenarios that involve data privacy, the experience improvement brought by Terminus could easily outweigh the migration costs.

## Terminus + Protocol 

Simply put, Terminus collaborates with protocols to bring better experiences to users in more use cases beyond just privacy protection. There are two typical use cases:

- Use cases where the marginal user cost on Web2 platforms is not zero

  One of the characteristics of Web2 platforms is the initial investment of a huge fixed cost, after which the marginal cost of serving users is very low. Therefore, users can use the service for free, and service providers profit from advertising.

  But in the AI era, due to GPU costs, users need to pay to receive consistent and stable services. These are typically related to physical resources, such as GPUs, disk space, and bandwidth. 

  We collectively refer to these resource providers as Providers.

  Previously, Providers were assumed by Web2 platforms, but now we hope to protocolize these resources.

- Use cases where users on Web2 platforms pay for marginal services

  For example, SaaS, where products charge fees per head.

  Although SaaS companies need to pay hardware costs for incremental users, considering that the average gross margin of SaaS companies is 80%, and that of IaaS companies is 50%, only 10% of the user fees paid go to marginal costs.

  Since hardware costs are borne by the users after adopting Terminus, we hope that through protocols, while allowing Application developers to receive fair compensation, users can reduce their costs.

  Please note, we support [fair code](https://faircode.io/). We oppose the overly simplistic and destructive impact on the application developer ecosystem by open sourcing.

## Sustainable Protocol Ecosystem

We aim to create a design paradigm that enables protocol designers to follow and design to develop large-scale, sustainable protocols easily. This paradigm is built on the following principles:

- On the software architecture level, the protocol network should be based on reputation and Request For Quote (RFQ) systems.
- From an incentive perspective, the value should be determined by user payments.

### Protocol Network Based on Reputation and RFQ

Our previous analysis has concluded the roles Applications and Providers play within the protocol ecosystem. Now let's move to another topic–Relay. This is a contentious topic as relays make a decentralized network appear reliant on semi-centralized services.

However, I argue that relays are an essential component of the protocol ecosystem because:

- Relays are constructed adhering to protocol standards, allowing anyone to establish them. This flexibility ensures that users can choose a relay system without constraints.
- In a protocol ecosystem containing thousands of distributed applications and providers, relays are crucial for facilitating their discovery of each other.

While the BitTorrent network employs relay-like tracker servers, this does not diminish its decentralized nature.

Here's an illustration of our envisioned protocol network operation:

![alt text](/images/overview/protocol/rfq.jpeg)

1. Application sends an ASK to the Relay.
2. Relay broadcasts the ASK to Providers.
3. Providers send their Bids back to the Relay.
4. Relay returns the Bids to the Application.
5. Application selects a Provider based on the Bid and the Provider's Reputation, and completes the payment.
6. Provider delivers services to the Application.
7. Application reviews the Provider's service.

This model underpins the e-commerce ecosystem and has been proven scalable in real-world applications.

For more information, see [Snowinning Protocol](../../developer/contribute/snowinning/overview.md) and [Otmoic Protocol](./otmoic.md).

### Value Distribution

Our goal is to ensure public goods are priced fairly.

I contend that Tokenized protocols are ineffective at ensuring fair distribution since they presuppose the existence of a [Useful Proof of Work](../introduction/faq.md#useful-proof-of-work), which is rarely applicable in a lot of cases.

A sustainable and universal protocol economy features:

- User-based payments, with payments to Applications and Providers signifying genuine recognition. These can be either one-time or subscription-based.
- A transparent public reputation system that allows transaction parties to view each other's reputation, significantly reducing transaction costs.
- Deflationary measures, where the relay or protocol deducts or burns a portion of each payment to deter transaction record falsification for reputation enhancement, and to tackle the "protocol value capture" challenge.
- Minimal introduction of new tokens, with legal stable coins generally serving as the medium of exchange. Protocols managed by a DAO require careful regulation of token issuance and value capture.

## Protocols for Terminus OS

[Snowinning Protocol](../../developer/contribute/snowinning/overview.md) is a protocol for a decentralized identity and open and transparent reputation system, and is one of the three components of the Terminus BEC architecture.

[Otmoic Protocol](./otmoic.md) is an automated value exchange network built for Depin, AI Agent, and Crypto Trading that does not require third-party trust.

[Market Protocol](./market.md) is a protocol created to facilitate permissionless applications distribution. Its core is to specify the Terminus Application Chart (TAC) structure.

[Recommend Protocol](./recommend.md) is an experimental protocol that helps users break out of the information cocoon. We will experiment with many new ideas with this protocol, such as trying to build an economic system through this protocol to incentivize diverse algorithms and content providers.
