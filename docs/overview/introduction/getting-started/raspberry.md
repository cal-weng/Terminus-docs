
# Getting Started on Raspberry Pi

This guide will walk you through the essential steps to get Terminus up and running on your Raspberry Pi. Follow these steps to create your account, install Terminus, and start exploring the Terminus ecosystem.

## Prerequisites

- A Raspberry Pi system meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [TermiPass](../../../how-to/termipass/overview.md#download-termipass) mobile app installed on your smartphone.

## Step 1: Create a Terminus Name

Open TermiPass on your mobile, and [create a new Terminus Name](../../../how-to/termipass/account/#create-terminus-name) as instructed on the screen.

:::info
Terminus Name is your unique identifier within Terminus.
Learn more in [why do you need a Terminus Name](../../terminus/terminus-name.md#why-do-you-need-a-terminus-name).
:::

## Step 2: Install Terminus

1. Configure the Raspbian environment to enable necessary features: 

   ```bash
   echo "cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1" | sudo tee -a /boot/firmware/cmdline.txt
   
   echo "kernel=kernel8.img" | sudo tee -a /boot/firmware/config.txt
   ```

2. Bind your local IP to your Ubuntu hostname for stable DNS resolution:

   ```bash
   sudo apt install net-tools
   ifconfig
   # Get your local IP. Make sure it starts with `192.168`.
   ```
   
   ```bash
   sudo nano /etc/hosts
   # Add the following line
   192.168.xx.xx  raspberrypi 
   # Replace with your actual local IP and your host name.
   ```

3. Reboot your Raspberry Pi to apply the changes.
   ```bash
   sudo reboot
   ```

4. Install the latest build of Terminus:

   ```bash
   curl -fsSL https://terminus.sh |  bash -
   ```

5. At the end of the installation, take note of the URL for Terminus Activation wizard and your initial login password.

For more detailed instructions, see [Install Terminus on Raspberry Pi](../../../how-to/terminus/setup/install/raspberry.md).

## Step 3: Activate Terminus

1. Open the Terminus Wizard in your browser using the URL and login with your initial password. 
2. Follow the on-screen instructions to complete the initial setups.
3. Scan the QR code with TermiPass mobile to activate Terminus, and reset your login password.

For complete activation guidance, see the [Wizard documentation](../../../how-to/terminus/setup/wizard.md).

## Step 4: Log In to Terminus

On your Wizard page, log in to Terminus with the password you just reset and complete two-step verification on TermiPass. For more information, see the [Login documentation](../../../how-to/terminus/setup/login.md).

:::warning
Always [Back up your mnemonic phrase](../../../how-to/termipass/account/index.md#backup-mnemonic-phrase.md) to ensure account and data security.
:::

## Next Steps 
- [Explore Terminus Tasks](../../../how-to/terminus/)
- [Install Applications](../../../how-to/terminus/market/index.md#install-applications)
- [Uninstall Terminus](../../../developer/develop/advanced/cli.md#terminus-uninstallation-script)
- [Resolve IP Change Issues](../../../developer/develop/advanced/cli.md#resolve-ip-change-issue)

