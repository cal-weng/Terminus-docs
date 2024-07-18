
# Getting Started on Mac

This guide will walk you through the essential steps to get Terminus up and running on your Mac. Follow these steps to create your account, install Terminus, and start exploring the Terminus ecosystem.

## Prerequisites

Before you begin, ensure your system meets these requirements:

- A Mac meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [Docker](https://www.docker.com/products/docker-desktop/) and [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fbinary+download) intalled on your Mac. 
- [TermiPass](../../../how-to/termipass/overview.md#download-termipass) mobile app installed on your smartphone.

## Step 1: Create a Terminus Name

Open TermiPass on your mobile, and [create a new Terminus Name](../../../how-to/termipass/account/#create-terminus-name) as instructed on the screen.

## Step 2: Install Terminus

1. In Docker Desktop, navigate to **Settings** > **Resources**, and configure as below:
    - CPU limit: Set to 11 CPUs
    - Memory limit: Set to at least 9 GB
  
2. Click **Apply & Restart** to implement the changes.
    
3. In terminal, navigate to the directory where you want to install Terminus OS, run the following command to start installing:

   ```sh
   curl -fsSL https://terminus.sh |  bash - 
   ```

4. At the end of the installation, take note of the URL for Terminus Activation wizard and your initial login password.

For more detailed instructions, see [Install Terminus on Mac](../../../how-to/terminus/setup/install/mac.md).

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

- **Uninstall Terminus**. Run this command when you need to reinstall Terminus, or simply want to uninstall it:

   ```sh
   bash uninstall_macos.sh
   ```


## Next Steps

- [Explore Terminus Tasks](../../../how-to/terminus/)
- [Install Applications](../../../how-to/terminus/market/index.md#install-applications)
- [Build Your Profile](../../../how-to/terminus/profile.md)