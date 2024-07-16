---
outline: [2, 3]
---

# Concepts

:::info

While adhering to W3C standards, we have expanded the Snowinning Protocol for our purposes. For ease of understanding, we suggest you:

1. Read our documentation first.
2. Read the introduction to the [Web5](https://developer.tbd.website/blog/what-is-web5/) project, as we have referenced its foundational implementation.
3. Get familiar with the W3C standards about [Decentralized Identifiers](https://www.w3.org/TR/did-core/) and [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/).
   :::

## Decentralized Identifier (DID)

W3C's definition of DID is:

> Decentralized Identifiers are a new type of identifier that
> enables verifiable, decentralized digital identity. A DID refers to any
> subject (e.g., a person, organization, thing, data model, abstract entity, etc.)
> as determined by the controller of the DID.
>
> ~ https://www.w3.org/TR/did-core/

As indicated by the graph below, a DID is a simple text string consisting of three parts: 1) the didURI scheme identifier, 2) the identifier for the DID method, and 3) the DID method-specific identifier.

![alt text](/images/overview/snowinning/did.png)

DIDs, like blockchain addresses, are self-generated and self-owned identities, created using a mnemonic derived through a specific algorithmic sequence.

The relationships among mnemonic phrases, private keys, and DIDs can be succinctly described as follows:

> Mnemonic -> Private Key -> Public Key -> Blockchain Address or DID

- The mnemonic, a randomly generated string of 12 words, is locally produced and used algorithmically to generate a private key.
- Both the private key and the mnemonic must be kept confidential by the user.

- To prevent loss and ensure recoverability, the mnemonic should be backed up offline.

- The public key, blockchain address, and DID are derived from the private key.
- Since it is possible to derive the public key from the private key (but not vice versa), the public key, blockchain address, and DID can be safely made public.

## DID Registry

Once a DID is generated locally, a user may elect to register their ownership at a designated location known as a DID Registry. The W3C standards do not prescribe a specific implementation for the Registry.

Snownning Protocol adopted [Smart Contract](./smart-contract.md) to facilitate this process, which can ensure:

> No centralized providers or trusted authorities
>
> Highly resistant to all forms of interdiction
>
> IDs can be made universally discoverable

Issuers have the capability to upload essential metadata into the Registry, including items such as DID, [Terminus Name](./terminus-name.md), RSA public keys, among others.

Given that the metadata occupies minimal storage space and requires infrequent updates, the capabilities of existing mainstream blockchain technologies are adequately equipped to handle these demands. This efficiency is primarily due to the low overhead involved in storing and accessing small amounts of data on the blockchain, where changes are rare and thus do not overburden the system.

:::info
Right now, smart contracts are deployed on [OPTIMISTIC ROLLUPS](https://optimism.io/).

It should be noted that the Web5 development team has reportedly shifted from using ION as their Registry mechanism to adopting a Distributed Hash Table (DHT) network.

DHT networks represent a form of technology that achieves a higher degree of decentralization compared to Layer2 blockchain solutions. However, managing the efficiency and stability of DHT networks presents significant challenges. These challenges stem from the inherent complexities of maintaining a large, decentralized network where data is distributed across numerous nodes, which can complicate data retrieval and integrity checks.
:::

## Network Topology

Leveraging DID and Blockchain Smart Contracts (constituting a DID Registry), we have established a decentralized peer-to-peer network that eliminates the need for third-party trust and enables direct information exchange between any two entities. We will illustrate this network topology using Alice and Bob, two users who have initially registered their DIDs on the blockchain.

![alt text](/images/overview/snowinning/network-topology.jpeg)

This is how Alice and Bob send messages via the network:

1. When Alice wishes to send a message to Bob, the process initiates from her terminal device, which forwards the message to her Edge server.
2. Utilizing the blockchain, Alice's Edge determines the location of Bob's Edge, effectively using the blockchain **as a Domain Name System (DNS)** to route the message accurately.
3. Alice's Edge sends a message to Bob's Edge.
4. Upon receiving the message, Bob's Edge verifies the authenticity of Alice's message by validating the cryptographic signature against the blockchain, **similar to the role of a Certificate Authority (CA)**.
5. Finally, once verified, the message is relayed from Bob's Edge to his terminal device.

## Verifiable Credential

As defined by W3C:

> Credentials are a part of our daily lives; driver's licenses are used to assert that we are capable of operating a motor vehicle, university degrees can be used to assert our level of education, and government-issued passports enable us to travel between countries. This specification provides a mechanism to express these sorts of credentials on the Web in a way that is cryptographically secure, privacy respecting, and machine-verifiable.

DIDs exist independently, representing both tangible and intangible entities across physical and digital realms. Each entity is associated with multiple claims, and the documents supporting these claims, without necessitating mutual trust between the involved parties, are referred to as Verifiable Credentials (VCs).

Consider the example of Alice, an entity, whose educational qualifications constitute a claim. The diploma, serving as a credential, substantiates Alice's educational claim. This diploma, authenticated via cryptographic methods, is issued by the university Alice graduated from and can be inspected by potential employers during the interview process.

The following outlines the transformation of a diploma from a simple credential to a Verifiable Credential:

![alt text](/images/overview/snowinning/image2.jpeg)

This process has 3 roles:

- Issuer

  > A role an entity can perform by asserting claims about one or more subjects, creating a verifiable credential from these claims, and transmitting the verifiable credential to a holder.

  In the above example, the issuer is the university Alice attended.

- Holder

  > Holders are entities that have one or more verifiable credentials in their possession. Holders are also the entities that submit proofs to Verifiers to satisfy the requirements described in a Presentation Definition.

  In the above example, the holder is Alice. Alice manages her Verifiable Credentials (VCs) using TermiPass.

- Verifier

  > Verifiers are entities that define what proofs they require from a Holder (via a Presentation Definition) in order to proceed with an interaction.

  In the above example, the verifier is the company Alice goes for an interview.

The verification process involves a structured sequence of six steps:

1. The Issuer registers their information on the DID Registry.
2. The Holder submits a verification request to the Issuer, indicating the need for credential issuance.
3. The Issuer issues a VC to the Holder, embedding a claim regarding her educational qualifications.
4. The Holder securely stores this VC in TermiPass, ensuring its availability for future verification.
5. The Holder sends a Verifiable Presentation (VP) that encapsulates the VC to a Verifier, initiating the verification process.
6. The Verifier checks the authenticity of the VC's and VP's signatures via the DID Registry, confirming the validity of the enclosed claim, thereby completing the verification.

It is crucial to recognize that VCs are not stored on the blockchain.

## Reputation

We have reputation systems in conventional contexts, such as:

- Online review platforms like Yelp, IMDB, etc.
- Financial scoring like [FICO Score](https://www.fico.com/en/products/fico-score), gather and aggregate claims to form a comprehensible reputation metric.

Restaurants and movies are entities, user reviews are Claims, and a large number of Claims are collected and processed through algorithms to determine the entity's Reputation. Subsequent consumers can rely on this Reputation to make purchasing decisions and provide continuous feedback.

The problem with traditional Reputation systems is that the raw data and algorithms are not transparent and cannot be customized.

Snowinning Protocol transforms this model by embedding it in blockchain technology:

1. Raw Data Collection: User-generated ratings and reviews are recorded directly within smart contracts.
2. Reputation Processing: Developers can access this raw data to generate reputation insights, tailored to specific contexts and needs.
3. Reputation Distribution: These insights are distributed via a specialized [Market Protocol](../protocol/market.md), enabling users to select appropriate Reputation Providers based on their specific requirements.

In each scenario, users can choose one or several Reputation Providers to get comprehensive opinions.

## DID Metadata vs. VC vs. Reputation

- DID Metadata stored on the DID Registry consists of declarations made by the entity about themselves.
- Verifiable Credentials are issued by one entity about another, often encapsulating objective data such as age or educational qualifications.
- Reputation aggregates subjective evaluations of an entity, allowing for a nuanced interpretation that incorporates potential inaccuracies.
