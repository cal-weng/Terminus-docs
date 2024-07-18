
# Getting Started on Linux

This guide will walk you through the essential steps to get Terminus up and running on your Linux system. Follow these steps to create your account, install Terminus, and start exploring the Terminus ecosystem.

## Prerequisites

- A Linux system meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [TermiPass](../../../how-to/termipass/overview.md#download-termipass) mobile app installed on your smartphone.

## Step 1: Create a Terminus Name

Open TermiPass on your mobile, and [create a new Terminus Name](../../../how-to/termipass/account/#create-terminus-name) as instructed on the screen.

## Step 2: Install Terminus

1. In your terminal, run the following command to install the latest build of Terminus:

   ```sh
   curl -fsSL https://terminus.sh |  bash -
   ```

2. At the end of the installation, take note of the URL for Terminus Activation wizard and your initial login password.

Depending on your network and hardware configuration, the installation time may vary. For detailed instructions, see [Install Terminus on Linux](../../../how-to/terminus/setup/install/linux.md).

## Step 3: Activate Terminus

1. Open the Terminus Wizard in your browser using the URL and login with your initial password. 
2. Follow the on-screen instructions to complete the initial setups.
3. Scan the QR code with TermiPass mobile to activate Terminus, and reset your login password.

For complete activation guidance, see the [Wizard documentation](../../../how-to/terminus/setup/wizard.md).

## Step 4: Log In to Terminus

On your Wizard page, log in to Terminus with the password you just reset and complete two-step verification on TermiPass. For more information, see the [Login documentation](../../../how-to/terminus/setup/login.md).

:::important
Always [Back up your mnemonic phrase](../../../how-to/termipass/account/index.md#backup-mnemonic-phrase.md) to ensure account and data security.
:::

## Other Operations

Here are some additional operations:

- **Uninstall Terminus**. Use this when you need to reinstall Terminus, or simply want to uninstall it:

   ```sh
   cd install-wizard && bash uninstall_cmd.sh
   ```

- **Resolve IP change issues**. Services within the Kubernetes cluster rely on stable IPs and DNS resolution provided by the cluster's internal DNS. IP Address change can disrupt this and make Terminus inaccessible. To resolve this issue, run the following command in your new network environment:

```sh
cd install-wizard && bash change_ip.sh
```


## Next Steps 

- [Explore Terminus Tasks](../../../how-to/terminus/index.md)
- [Install Applications](../../../how-to/terminus/market/index.md#install-applications)
- [Build Your Profile](../../../how-to/terminus/profile.md)