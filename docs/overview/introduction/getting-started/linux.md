
# Getting Started on Linux

This guide will walk you through the essential steps to get Olares up and running on your Linux system. Follow these steps to create your account, install Olares, and start exploring the Olares ecosystem.

## Prerequisites

- A Linux system meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [LarePass](../../../how-to/larepass/overview.md#download-larepass) mobile app installed on your smartphone.

## Step 1: Create an Olares ID

Open LarePass on your mobile, and [create a new Olares ID](../../../how-to/larepass/account/#create-olares-id) as instructed on the screen. 

:::info
Olares ID is your unique identifier within Olares.
Learn more about [why you need an Olares ID](../../olares/olares-id.md#why-do-you-need-a-olares-id).
:::

## Step 2: Install Olares

1. Bind your local IP to your Ubuntu hostname for stable DNS resolution:

   ```bash
   sudo apt install net-tools
   ifconfig
   # Get your local IP. Make sure it starts with `192.168`.
   ```
   
   ```bash
   sudo nano /etc/hosts
   # Add the following line
   192.168.xx.xx   Ubuntu 
   # Replace with your actual local IP and your host name.
   ```

2. Reboot your Ubuntu to apply the change.
   
   ```bash
   sudo reboot
   ```

3. In your terminal, run the following command to install the latest build of Olares:

   ```sh
   curl -fsSL https://olares.sh |  bash -
   ```

4. At the end of the installation, take note of the URL for Olares Activation wizard and your initial login password.

Depending on your network and hardware configuration, the installation time may vary. For detailed instructions, see [Install Olares on Linux](../../../how-to/olares/setup/install/linux.md).

## Step 3: Activate Olares

1. Open the Olares Wizard in your browser using the URL and login with your initial password. 
2. Follow the on-screen instructions to complete the initial setups.
3. Scan the QR code with LarePass mobile to activate Olares, and reset your login password.

For complete activation guidance, see the [Wizard documentation](../../../how-to/olares/setup/wizard.md).

## Step 4: Log In to Olares

On your Wizard page, log in to Olares with the password you just reset and complete two-step verification on LarePass. For more information, see the [Login documentation](../../../how-to/olares/setup/login.md).

:::warning
Always [Back up your mnemonic phrase](../../../how-to/larepass/account/index.md#backup-mnemonic-phrase.md) to ensure account and data security.
:::

## Next Steps 
- [Explore Olares Tasks](../../../how-to/olares/)
- [Install Applications](../../../how-to/olares/market/index.md#install-applications)
- [Uninstall Olares](../../../developer/develop/advanced/cli.md#olares-uninstallation-script)
- [Resolve IP Change Issues](../../../developer/develop/advanced/cli.md#resolve-ip-change-issue)
