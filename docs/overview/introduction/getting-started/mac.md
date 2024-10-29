
# Getting Started on Mac

This guide will walk you through the essential steps to get Olares up and running on your Mac. Follow these steps to create your account, install Olares, and start exploring the Olares ecosystem.

::: tip NOTE
Currently, Olares on Mac has certain limitations including::
- Lack of distributed storage support 
- Inability to add local nodes

We recommend using it only for development or testing purposes.
:::


## Prerequisites

Before you begin, ensure your system meets these requirements:

- A Mac meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [Docker](https://www.docker.com/products/docker-desktop/) and [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew) intalled on your Mac. 
::: tip
For MiniKube, it's recommended to install via `homebrew`.
:::
- [LarePass](../../../how-to/larepass/overview.md#download-larepass) mobile app installed on your smartphone.

## Step 1: Create an Olares ID

Open LarePass on your mobile, and [create a new Olares ID](../../../how-to/larepass/account/#create-olares-id) as instructed on the screen.

:::info
Olares ID is your unique identifier within Olares.
Learn more about [why you need an Olares ID](../../olares/olares-id.md#why-do-you-need-a-olares-id).
:::

## Step 2: Install Olares

1. In Docker Desktop, navigate to **Settings** > **Resources**, and configure as below:
    - CPU limit: Set to at least 4 CPUs
    - Memory limit: Set to at least 9 GB
  
2. Click **Apply & Restart** to implement the changes.
    
3. In terminal, navigate to the directory where you want to install Olares OS, run the following command to start installing:

   ```bash
   curl -fsSL https://olares.sh |  bash - 
   ```

4. At the end of the installation, take note of the URL for Olares Activation wizard and your initial login password.

For more detailed instructions, see [Install Olares on Mac](../../../how-to/olares/setup/install/mac.md).

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
