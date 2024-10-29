---
outline: [2, 4]
---

# Manage Accounts with Olares

Managing Olares Accounts is a core function of LarePass. If you are new to Olares, you can start by creating an Olares ID. This guide walks you through the process, and other commonly used account operations as well.

## Create an Olares ID

Before you start, ensure you have downloaded the [LarePass](../overview.md#download-larepass) app on your phone. You can choose to either create a new Olares ID or import an existing one.

![Create Olares ID](/images/how-to/larepass/create_an_account.png)

In LarePass app, tap **Create an Olares ID** to start creating your Olares account. Depending on your personal preference, you can choose to create an Olares ID with or without binding a Verifiable Credential (VC).

### Create without VC binding (default mode)

To create an Olares ID fast without binding VC:

1. Enter your desired Olares ID. It must be at least 8 characters long and contain only lowercase letters and numbers.
2. Click **Continue** to finish the creation process.

![Fast creation](/images/how-to/larepass/individual_olares_id_fast.png)

After you get your Olares ID, wait for [Olares installation](../../olares/setup/install/index.md) to complete, then proceed with [activation](../../olares/setup/wizard.md).

### Create with VC (advanced mode)

To create a unique, unrestricted individual Olares ID, you need to bind a VC through your preferred social account in advanced mode. Your Olares ID will be identical to your social account name. To enter this mode:

1. In the LarePass app, tap **Create an Olares ID**.
2. Tap the button in the top right corner of the Olares ID creation page.

![Advanced mode](/images/how-to/larepass/olares_id_advanced.png)

Depending on how you use Olares, you can choose to bind an Individual Olares ID or an Organization Olares ID to your account.

#### Bind an individual Olares ID

We currently provide VC via Google Gmail. For details, refer to the [Gmail Issuer Service](../../../developer/contribute/snowinning/olares-id.md#gmail-issuer-service). To create your individual Olares ID with Gmail VC:

![Olares ID VC](/images/how-to/larepass/individual_olares_id_vc.png)

1. Click the VC card to access your Google account.
2. Log into LarePass with your Google account and click **Continue**.
3. Wait for the binding to complete, then click **Continue** to view your Olares ID information.

:::info
If you encounter errors while binding, check if your account is already bound to an Olares ID.
:::

#### Bind an Organization Olares ID

To bind an **Organization Olares ID**:

1. Choose to join an existing organization or create a new one:
   - If your organization doesn't exist yet, scan the QR code to log in to Olares Space and [bind a custom domain](https://docs.olares.com/how-to/space/domain/#using-a-custom-domain-with-olares).
   - If your organization already has a verified domain name, you can choose to join an existing organization.

   ![Olares ID for Org](/images/how-to/larepass/organization_olares_id.png)


2. Enter your organization's domain name and click **Continue**. Recheck whether your domain name has been verified and configured if an error occurs.

3. Bind your organization email. Currently, only Gmail and Google Workspace email are supported. The binding process is similar with that of [Binding an Individual Olares ID](#bind-an-individual-olares-id).

Upon completion, you will receive an **Organization Olares ID**.

## Import an existing account

You can also set up an account by importing an existing Olares ID:

1. In LarePass app, tap **Import an Olares ID**.
2. Enter the 12-word mnemonic phrase to import your Olares ID.

::: tip
If your account is bound to an Olares ID, you can freely import it into any LarePass device.
:::

## Backup mnemonic phrase

In a decentralized account system, the mnemonic phrase is the **ONLY** way to recover your DID and Olares ID. **Make sure you store your Olares ID's mnemonic phrase securely!**

:::info
Each LarePass will save the mnemonic phrase for all Olares IDs you've imported. The mnemonic phrase is safeguarded by the mobile device's storage. Generally, you will only lose the mnemonic phrase if you lose all your devices installed with Olares.
:::

To back up your mnemonic phrase:

![alt text](/images/how-to/larepass/mnemonic_phrase.png)

1. Enter your LarePass local password and click **Export Mnemonic Phrase**. This takes you to a screen with a 12-word mnemonic phrase.
2. Write down the mnemonic phrase and keep it safe.
3. Type your mnemonic phrase in the correct order on the next page. If entered correctly, you have successfully backed up your mnemonic phrase.

:::warning
Clicking the **Copy** button will save the 12 mnemonic phrase to the clipboard. However, this may pose a risk of leakage. For secure storage of the mnemonic phrase, we strongly recommend backing it up **offline**.
:::

## Understand the stage of account

Each account has three stages:

1. **Not bound to an Olares ID**

   - Account created locally with mnemonic phrase, private key, DID, but no Olares ID
   - Mnemonic phrase can be exported and backed up
   - Can log into **Olares Space** to apply for org domain name.
   - Cannot be imported to other LarePass clients via mnemonic phrase

2. **Bound to an Olares ID**

   - The mapping between the Olares ID and DID is recorded on the blockchain.
   - Can apply for an Olares on **Olares Space** and activate the Olares.
   - After the mnemonic phrase is exported, it can be imported to LarePass on other devices.

3. **Bound to an Olares**

   If your account is bound to Olares, you'll have full access to all the features on the LarePass.

## Account synchronization

Account in LarePass, Olares, and Olares Space stay synchronized as described below:

- Creating an Olares requires providing the Olares ID and activate it using the LarePass logged in with that Olares ID. For more details, refer to [Activation Wizard](../../olares/setup/wizard.md).
- To log into Olares Space, you need to scan a QR code with LarePass. For more details, refer to [log in to Olares Space](../../space/account.md).