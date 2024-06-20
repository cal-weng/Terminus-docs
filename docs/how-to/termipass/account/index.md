---
outline: [2, 4]
---

# Manage Accounts with TermiPass

Managing Terminus Accounts is a core function of TermiPass. If you are new to TermiPass and Terminus, you can begin with [Creating a Terminus Name](#create-terminus-name). This guide will walk you through the process.

## Create a Terminus Name

Here are the steps to apply for a Terminus Name:

1. [**Download TermiPass**](../overview.md#download-termipass): Download the mobile version of TermiPass.
2. [**Set Local Password**](#set-local-password): Follow the instructions below to set up a secure local password.
3. [**Create an Account**](#create-an-account): Choose to either create a new account or import an existing one.
4. [**Bind a Terminus Name**](#bind-terminus-name): Bind your new account to either an Individual or Organization Terminus Name.

### Set Local Password

When opening TermiPass for the first time, you need to set a local password.

![alt text](/images/how-to/termipass/setup_local_password.png)

Your password must meet the following criteria:

- Length of 8-32 characters
- Contains lowercase letters
- Contains uppercase letters
- Contains numbers
- Contains symbols

:::tip
- All Terminus Names under one TermiPass share the same unlocking password.
- Passwords for TermiPass on different devices are stored locally and independent of each other.
:::

### Create an Account

![alt text](/images/how-to/termipass/new_an_account.png)

Choose to either create a new Terminus Account or import an existing one.

#### Create a New Account

To create a new Terminus Account:

1. In TermiPass, Click on **Create a Terminus Name** to start creating a new Terminus account. This creates a DID at the same time.<br>
2. [Bind your DID to a Terminus Name](#bind-terminus-name.md).

#### Import an Existing Account

If you have an existing Terminus Account:

1. In TermiPass, click on **Import a Terminus Name**
2. Enter the 12 mnemonic words to import your account.

:::tip
- Incorrect mnemonic phrases will prevent importing.
- Accounts without a bound Terminus Name cannot be imported.
- Accounts with a bound Terminus Name can be imported to any TermiPass.
:::

### Bind Terminus Name

![alt text](/images/how-to/termipass/choose_terminus_name_type.png)

There are two types of Terminus Names:

- For personal use, select **Individual Terminus Name** to bind a Terminus Name.
- To use Terminus within an organization, select **Organization Terminus Name**, regardless of whether you're an administrator or a member.

#### Individual Terminus Name

If you're using Terminus for personal purposes, you'll need to bind a personal VC to create an individual Terminus Name.

![alt text](/images/how-to/termipass/individual_terminus_name.png)


We currently provide  Verifiable Credential (VC) via Google Gmail. For details, please refer to [Gmail Issuer Service](../../../overview/snowinning/terminus-name.md#gmail-issuer-service). To create your Terminus Name with Gmail VC:

1. Click the VC card to open the Google account interface.
2. Select the Google account to bind. 
3. Log into TermiPass with your Google account and click **Continue**.
4. Wait for the binding to complete, then click **Continue**. 
5. Proceed to the **Terminus Name** landing page.

If you encounter errors while binding, check if your account is already bound to a **Terminus Name**. If not, please contact us.

Once at the landing page, wait for [Terminus installation](../../terminus/setup/install.md) to complete, then proceed with [activation](../../terminus/setup/wizard.md).


#### Bind Organization Terminus Name

To bind an **Organization Terminus Name**:

![alt text](/images/how-to/termipass/organization_terminus_name.png)

1. Read the **Organization Terminus Name** explanations and click **Got it**.
2. Join an existing organization or create a new one:
   - If your organization doesn't exist yet, scan the QR code to log in to Terminus Space and create a domain.
   - If your organization already has a verified domain name, you can choose to join an existing organization.
3. Enter your organization's domain name and click **Continue**. Recheck whether your domain name has been verified and configured if an error occurs.   
4. Bind your organization email. Currently, only Gmail and Google Workspace email are supported. The binding process is similar with that of an [**Individual Terminus Name**](#individual-terminus-name).
5. Upon completion, you will receive an **Organization Terminus Name**.

### Backup Mnemonic Phrase

In a decentralized account system, the mnemonic phrase is the **ONLY** way to recover your DID and Terminus Name. **Make sure you store your Terminus Name's mnemonic phrase securely!**

:::info
Each TermiPass will save the mnemonic phrase for all Terminus Names you've imported. The mnemonic phrase is safeguarded by the mobile device's storage. Generally, you will only lose the mnemonic phrase if you lose all your devices installed with Terminus.
:::

To back up your mnemonic phrase:

![alt text](/images/how-to/termipass/mnemonic_phrase.png)

1. Enter your TermiPass local password and click **Export Mnemonic Phrase**. This takes you to a screen with a 12-word mnemonic phrase.
2. Write down the mnemonic phrase and keep it safe.
3. Type your mnemonic phrase in the correct order on the next page. If entered correctly, you have successfully backed up your mnemonic phrase.

:::warning
Clicking the **Copy** button will save the 12 mnemonic phrase to the clipboard. However, this may pose a risk of leakage. For secure storage of the mnemonic phrase, we strongly recommend backing it up **offline**.
:::

## Stage of Account

TermiPass uses [one local password](#setup-local-password.md) to allow users to manage multiple accounts independent of each other.

Each account has three stages:

![account](/images/how-to/termipass/account.png)

1. **Not bound to a Terminus Name**

   - Account created locally with mnemonic phrase, private key, DID, but no Terminus Name 
   - Mnemonic phrase can be exported and backed up
   - Can log into **Terminus Space** to apply for org domain name.
   - Cannot be imported to other TermiPass clients via mnemonic phrase

2. **Bound to a Terminus Name**
   
   - The mapping between the Terminus Name and DID is recorded on the blockchain.
   - Can apply for a Terminus on **Terminus Space** and activate the Terminus.
   - After the mnemonic phrase is exported, it can be imported to TermiPass on other devices. 
  
3. **Bound to a Terminus**

   If your account is bound to Terminus, you'll have full access to all the features on the TermiPass.

## Account Synchronization

Account in TermiPass, Terminus, and Terminus Space stay synchronized as described below:

- Creating a Terminus requires providing the Terminus Name and activate it using the TermiPass logged in with that Terminus Name. For more details, refer to [Activation Wizard](../../terminus/setup/wizard.md).
- To log into Terminus Space, you need to scan a QR code with TermiPass. For more details, refer to [log in to Terminus Space](../../space/account.md).
