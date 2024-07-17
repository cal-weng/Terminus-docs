---
outline: [2, 3]
---

# Terminus Name

DIDs solve the issue of identity but are not easy to remember or recognize. Terminus Name addresses this problem.

:::info
Please refer to [this document](../../../how-to/termipass/account/index.md#stage-of-account) for the relationships between DID, Terminus Name, and Account.
:::

## Introduction

Terminus Name consists of **Local Name** and **Domain**, for example:

`alice@myterminus.com` is a Terminus Name, **alice** is the Local Name, **myterminus.com** is the Domain.

Since the Local Name is unique within each Domain, Terminus Names are also unique.

## Domain

With Terminus, there are three types of Domains:

### Individual

Intended for individual use, similar to email addresses with suffixes like `gmail.com`.

Currently, Terminus uses **myterminus.com** as the suffix for Individual Domains.

### Organization

Intended for organizational use, like corporate emails.

When users join an organization, they can apply for a Terminus Name under the organization. When they leave, the administrator can reclaim the Terminus Name.

Organization administrators can apply for the organization's Domain through a Web2 domain, with the specific process detailed in: [Create Organization Domain](../../../how-to/space/domain/host-domain.md).

Once the Domain is registered, [manage users under the organization](contract-manager.md).

### Entity

Let's revisit the definition of DID:

> A DID refers to any
> subject (e.g., a person, organization, thing, data model, abstract entity, etc.)
> as determined by the controller of the DID.

Abstract entities, like a movie, cannot be categorized under Individual or Organization. However, they still require a DID to represent them, for which we designed the Entity Domain.

For example, Movie, Application, Otmoic Market Maker are different types of Entity Domains.

The main use case of the Entity Domain is to help protocols build [reputation](concepts.md#reputation). We hope to see more protocols utilizing the Entity Domain to build the Web3 versions of IMDb, Yelp, LinkedIn, and more.

Currently, the registration of Entity Domains is approved by the Terminus team, with the applicant responsible for subsequent management.

## DomainName

Replacing the "@" in the Terminus Name with a "." you get the corresponding DomainName.<br>
Eg, `alice@myterminus.com`'s DomainName is **alice.myterminus.com**.

This rule applies to both Individual and Organization Terminus Names.

You can access the user's activated Terminus by entering the Domain Name in a browser.<br>
For example, entering `https://alice.myterminus.com` allows you to access alice's [Profile](../../../how-to/terminus/profile.md).

## Individual Terminus Name

Individual Terminus Name's application may have potential fairness issues because strictly adhering to a first-come, first-served basis could lead to pre-registration of accounts, which might cause:

1. Fraud. Like elonmusk@myterminus.com might likely not registered by [Elon Musk](https://twitter.com/elonmusk)
2. Speculation in registering Terminus Names, even though it could effectively boost network activity during its early stages.

Based on [VC Service](vc.md), we designed the Issuer and Verifier process to help users apply for a Terminus Name:

![alt text](../../../public/images/overview/snowinning/image1.jpeg)

### Gmail Issuer Service

An official Issuer service from Google won't be available in the short term. For now, we use Google's OAuth process to complete the issuance of VCs. The simplified process is as follows:

1. Alice logs into her Gmail account via OAuth in TermiPass.
2. Google returns the OAuth credentials to the TermiPass client.
3. TermiPass submits the OAuth credentials to the Issuer.
4. The Issuer confirms the validity of the credentials with Google's servers and retrieves basic information about Alice's account (such as the email name).
5. The Issuer issues a VC to Alice that matches the local part of her Gmail address.

Alice can now store the issued VC to TermiPass.

:::tip
Throughout the process, Alice only reveals basic account data within the scope of the credential authorization to TermiPass and the Issuer service, with password and privacy protection ensured by Google's OAuth protocol.
:::

We have open-sourced all the code needed to build the Issuer Service, allowing anyone to set up a Gmail Issuer Service or other Web2 service Issuer Services.

### Terminus Name Verifier Service

This is how the Verifier service works on the Terminus end:

1. Alice packages her DID, Terminus Name, and Gmail VC into a VP and submits the VP along with its signature to the Verifier Service.
2. The Verifier Service checks the signature, the validity of the VC in the VP, and whether the Terminus Name can be registered on the blockchain (conflicts may occur when multiple channels such as Gmail and Twitter are used for VC information).
3. Once all checks are passed, the Verifier Service submits the user's information to the blockchain and helps Alice pay the Gas fees.

At this point, Alice gets her Terminus Name successfully.

:::tip
For example, if you apply with the Gmail address "hello@gmail.com", you will receive a Terminus Name "hello@myterminus.com" once all checks have been cleared.
:::

## Organization Terminus Name

Using the **Organization Terminus Name** is essentially the same as using the **Individual Terminus Name**. The only difference is that the Admin needs to [apply for a Custom Domain](../../../how-to/space/domain/host-domain.md) first. For more details, please refer to [Get Started](../../../overview/introduction/getting-started.md).