# Vault

Vault is a password manager for Terminus OS, developed based on [Padloc](https://padloc.app/).

![image](/images/how-to/terminus/vault2.jpg)

Vault facilitates easy sharing and management of sensitive data within families, businesses, or any organizational type. It also supports advanced search and filtering options by tags, favorites, and recent use. You can efficiently store and manage:

- Private keys, accounts, and passwords for websites and apps
- DIDs, Terminus Names, and One Time Passwords (OTPs).

This section introduces how to manage your sensitive data using Vault. 

  - Activating Vault on Web 
  - Daily uses of Vault
  - Using Vault within teams
  

## Architecture

Vault's architecture is split into two components:

- **Server**:

  Vault's server end runs on Terminus OS. It synchronizes data across multiple client devices of a single user. Data is encrypted with a private key during transmission and storage to ensure data security. Refer to the [Padloc Security Whitepaper](https://docs.padloc.app/docs/security/) to learn more.

- **Client**:

  Vault is available on **four platforms** in **six versions**: web, mobile, desktop, and browser extensions. Mobile, desktop, and browser versions are distributed with **TermiPass**, while the web version is a default system application released with Terminus.

  Each client offers a consistent user experience with minor differences in the native password autofill processes across platforms.


## Glossary

### Vault

Named for its role as a secure repository, Vault encrypts and stores user's confidential data, akin to a physical vault.

Each user may have one Main Vault and several Shared Vaults.
- **Main Vault**: Automatically created at account activation and used as the user's private vault, encrypted with the user's mnemonic.
- **Shared Vault**: A shared vault within Terminus. Refer to the [Padloc Security Whitepaper](https://docs.padloc.app/docs/security/) to understand the encryption mechanism.

### Vault Item

Each Vault comprises multiple Vault Items, each representing a secured secret. Each Vault Item consists of **Name**, **Tags**, **Field**, **History**, **Attachment**, and **Expiration**.

### Field

Fields within a Vault Item allow you to store different types of data. 

![image](/images/how-to/terminus/vault_add_fields.jpg)

You can add different fields. The supported types include: **Username**, **Password**, **Mnemonic**, **Email Address**, **URL**, **Date**, **Month**, **Credit Card Number**, **Phone Number**, **PIN**, **Plain Text**, and **One-Time Password**.

We will continue to add new field types and support field type customization in the future.