---
outline: [2, 3]
---

# Terminus Name

This document gets you familiar with Terminus Name, why do you need it, and how to create one for your Terminus.

## What is a Terminus Name?

A Terminus Name is a unique identifier within the Terminus ecosystem, serving as your digital identity and gateway to various services and features. Each Terminus Account corresponds to a Terminus Name, which consists of a local name and a domain name. For example, in `alice@myterminus.com`, *alice* is the Local Name, and *myterminus.com* is the domain name.

## Why do you need a Terminus Name?

Your Terminus Name corresponds to a **unique domain name**, offering several key benefits:

* **Ease of access**: The system automatically provisions subdomains for your applications within Terminus. Use your domain name as the personal web address to seamlessly access Terminus applications and services from anywhere. 
* **Enhanced security with free HTTPS certificate**: Terminus domain name comes with a free HTTPS certificate, ensuring secure and encrypted communication for all your digital interactions.
* **Easy to remember and personalized**: Terminus Name and the corresponding domain name are easy to remember, share, and personalized for your distinct online identity.

By simply replacing the "@" in your Terminus Name with a ".", you get your corresponding domain name. For example,

* **Terminus Name**: `alice@myterminus.com`
* **Domain Name**: `alice.myterminus.com`

## How to get a Terminus Name?

Creating a Terminus Name is your starting point of using Terminus. It involves creating a Terminus Account and binding it to a Terminus Name on the mobile version of TermiPass.

1. Create a new Terminus account.
    1. Launch TermiPass on your mobile. If you haven't created a local unlocking password yet, you will be required to set one.
    2. Click **Create a Terminus Name**. You can also choose to import an existing one.
2. Bind Terminus Name
    - **Bind Individual Terminus Name (for personal use)**
        * Select **Individual Terminus Name**.
        * Bind a personal Verifiable Credential (VC) to create your Terminus Name using the authentication service by Google's Gmail. Follow the prompts to log in with your Google account and complete the binding process.
    - **Bind Organization Terminus Name** (for organizational use)
        * Select **Organization Terminus Name.**
        * Join an existing organization or create a new one through Terminus Space.
        * Enter your organization's domain name.
        * Bind your organization email. Currently, only Gmail and Google Workspace email are supported.
        * Upon completion, you will receive an Organization Terminus Name.
3. Backup mnemonic phrase.

    The mnemonic phrase is the ONLY way to recover your DID and Terminus Name. Make sure you [backup your Terminus Name](../../how-to/termipass/account/#backup-mnemonic-phrase)'s mnemonic phrase securely!


Refer to [Create a Terminus Name](../../how-to/termipass/account/#create-a-terminus-name) for detailed steps.


## Learn more

* [Manage Accounts with TermiPass](../../how-to/termipass/account/#create-terminus-name)
* [Snowinning Protocol](../../developer/contribute/snowinning/overview.md)
* [Understanding Decentralized Identifier (DID)](../../developer/contribute/snowinning/concepts.md)
* [Types of domains](../../developer/contribute/snowinning/terminus-name.md#domain)
* [Gmail Issuer Service](../../developer/contribute/snowinning/terminus-name.md#gmail-issuer-service)
* [Stage of Terminus Account](../../how-to/termipass/account/#stage-of-account)
