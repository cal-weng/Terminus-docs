---
description: Definition, structure and purpose of Olares ID system. Covers personal ID types, domain categories and relationship principles with decentralized identifiers (DID).
---
# Olares ID

This document gets you familiar with Olares ID.

## What is an Olares ID?

An Olares ID is a unique identifier within the Olares ecosystem, serving as your digital identity and gateway to various services and features. Each Olares account corresponds to an Olares ID.

## Why do you need an Olares ID?

Your Olares ID corresponds to a **unique domain name**, offering several key benefits:

* **Ease of access**: The system automatically provisions subdomains and access policies for your applications within Olares. You can use the domain name as your personal web address to seamlessly access Olares applications and services from anywhere.
* **Enhanced security with free HTTPS certificate**: Olares domain name comes with a free HTTPS certificate, ensuring secure and encrypted communication for all your digital interactions.
* **Easy to remember and personalized**: Olares ID and the corresponding domain name are easy to remember, share, and personalized for your distinct online identity.

For example, if your Olares ID is `alice123@olares.com`, the system will automatically assign you a subdomain `alice123.olares.com`. Based on this subdomain, your various services will get their corresponding access addresses:
- `alice123.olares.com`: For accessing your personal homepage.
- `desktop.alice123.olares.com`: For accessing your personal Olares Desktop.
- `files.alice123.olares.com`: For accessing the Files app.

## Olares ID structure
The format of an Olares ID is the same as an email address, consisting of two parts:
- A local name (prefix) 
- A domain name (suffix)

For example, in `alice123@olares.com`, *`alice123`* is the local name, and *`olares.com`* is the domain.

Local names are unique within each domain, ensuring that each Olares ID is unique.

### Domain types
Within Olares, there are three types of Domains:

* Individual domain: For personal use, similar to personal email. Currently, Olares provides default domain `olares.com` for individual users.
* Organizational domain: For organizational use, like company email addresses. After joining an organization, users can apply for an Olares ID under that organization's domain. The administrator can revoke this Olares ID when the user leaves the organization.
* Entity domain: For applications and other entities that cannot be classified as either personal or organizational.

### Olares ID creation for individuals
Olares offers two approaches to create an individual Olares ID:
- **Quick creation**<br>You can create an Olares ID by choosing an available name that meets the requirements.
- **Advanced creation**<br>
This approach uses Verification Credentials (VC) to connect an existing trusted identity (such as email accounts) with the Olares ID. 
When creating a verified identity, Olares:
   * Authenticates the user through established OAuth providers
   * Creates cryptographic links between the social identity and Olares DID

:::tip Create an Olares ID with Verifiable Credential (VC)
On the LarePass app, click <i class="material-symbols-outlined">display_settings</i>, then select **Individual Olares ID**. 

Currently, verification is available through Google OAuth.
:::

## What's Olares ID's relationship with DID
A Decentralized Identifier (DID) is a unique, cryptographically verifiable identifier that doesn't rely on any centralized authority. While DIDs solve the issue of identity in a decentralized network, they are typically difficult for humans to remember or use in daily situations.

![DID](/images/manual/concepts/DID.png){width=70%}

Olares IDs makes DIDs more user-friendly. It provides a familiar, easy-to-remember format similar to email addresses, while still leveraging the power and security of DIDs.
Each Olares ID is bound to a DID. When a user creates an account using Olares, a DID is created at the same time. Learn more about their relationship in [Stage of Olares account](./account#understand-the-stage-of-account).

## Learn more

* [Create an Olares ID](../get-started/create-olares-id)
* [Snowinning protocol](https://docs.snowinning.com/protocol/overview.html)
* [Decentralized identifier (DID)](https://docs.snowinning.com/protocol/did.html)
* [Gmail issuer service](https://docs.snowinning.com/verifiable-credential/terminus-name.html#gmail-issuer-service)
