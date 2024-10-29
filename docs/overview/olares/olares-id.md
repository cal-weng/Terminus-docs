---
outline: [2, 3]
---

# Olares ID

This document gets you familiar with Olares ID, why do you need it, and how to create one for your Olares.

## What is an Olares ID?

A Olares ID is a unique identifier within the Olares ecosystem, serving as your digital identity and gateway to various services and features. Each Olares Account corresponds to an Olares ID, which consists of a local name and a domain. For example, in `alice@olares.com`, *alice* is the Local Name, and *olares.com* is the domain.

## Why do you need an Olares ID?

Your Olares ID corresponds to a **unique domain name**, offering several key benefits:

* **Ease of access**: The system automatically provisions subdomains and access policies for your applications within Olares. You can use the domain name as your personal web address to seamlessly access Olares applications and services from anywhere.
* **Enhanced security with free HTTPS certificate**: Olares domain name comes with a free HTTPS certificate, ensuring secure and encrypted communication for all your digital interactions.
* **Easy to remember and personalized**: Olares ID and the corresponding domain name are easy to remember, share, and personalized for your distinct online identity.

By simply replacing the "@" in your Olares ID with a ".", you get your corresponding domain name. For example,

* **Olares ID**: `alice@olares.com`
* **Domain Name**: `alice.olares.com`

## How to get an Olares ID?

Creating an Olares ID is your starting point of using Olares. This process includes setting up your Olares account and binding it to an Olares ID. Depending on your preference, you can choose from two creation modes:
- [Fast creation (default mode)](../../how-to/larepass/account/index.md#create-without-vc-binding-default-mode): Recommended for individual users who prefer a quick setup without binding a verification credential (VC).
- [Advanced creation](../../how-to/larepass/account/index.md#create-with-vc-advanced-mode): Recommended for individual and organizational users that require enhanced security and more distinctive names through VC binding.

Refer to [Create an Olares ID](../../how-to/larepass/account/#create-a-olares-id) for detailed steps.

## What's Olares ID's relationship with DID

A Decentralized Identifier (DID) is a unique, cryptographically verifiable identifier that doesn't rely on any centralized authority. While DIDs solve the issue of identity in a decentralized network, they are typically difficult for humans to remember or use in daily situations.

Olares ID acts as a human-readable layer on top of DIDs. It provides a familiar, easy-to-remember format similar to email addresses, while still leveraging the power and security of DIDs.
Each Olares ID is bound to a DID. When a user creates an account using Olares, a DID is created at the same time. Learn more about their relationship in [Stage of Olares Account](../../how-to/larepass/account/#stage-of-account).


## Learn more

* [Manage Accounts with LarePass](../../how-to/larepass/account/#create-olares-id)
* [Snowinning Protocol](../../developer/contribute/snowinning/overview.md)
* [Understanding Decentralized Identifier (DID)](../../developer/contribute/snowinning/concepts.md)
* [Types of domains](../../developer/contribute/snowinning/olares-id.md#domain)
* [Gmail Issuer Service](../../developer/contribute/snowinning/olares-id.md#gmail-issuer-service)
