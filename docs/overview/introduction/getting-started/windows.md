# Getting Started on Windows

This guide will walk you through the essential steps to get Terminus up and running on your Windows. Follow these steps to create your account, install Terminus, and start exploring the Terminus ecosystem.

## Prerequisites

-  A Windows machine meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [TermiPass](../../../how-to/termipass/overview.md#download-termipass) mobile app installed on your smartphone.

## Step 1: Create a Terminus Name

Open TermiPass on your mobile, and [create a new Terminus Name](../../../how-to/termipass/account/#create-terminus-name) as instructed on the screen.

## Step 2: Install Terminus

1. Open PowerShell as Administrator and run the following commands:
   
   ```sh
   wsl --update
   wsl --install -d Ubuntu-22.04
   # Update WSL and install Ubuntu 
   ```
   
2. Create a `.wslconfig` file in your Windows user directory (typically `C:\Users\YourUsername\`) with the following content:
   
   ```sh
   [wsl2]
   networkingMode=mirrored
   memory=8GB 
   swap=0GB

   [experimental]
   hostAddressLoopback=true

3. Launch Ubuntu from the Start menu, and configure the Ubuntu environment as below:

   a. Modify the `/etc/wsl.conf` file:

   ```sh
   echo "[network]
   generateHosts = false
   generateResolvConf = false" | sudo tee -a /etc/wsl.conf
   ```
   :::info
   This configuration prevents WSL2 from overwriting your Windows host's DNS settings.
   :::

   b. Configure Mount:

   ```sh
   sudo mount --make-rshared /
   ```

   c. Configure the hosts file:

   ```sh
   sudo nano /etc/hosts
   # Add the following line
   192.168.50.11  ubuntu  # Adjust to your actual local IP address
   ```
    
4. In Ubuntu, run the following command to install the latest build of Terminus:

   ```sh
   curl -fsSL https://terminus.sh |  bash -
   ```
   Depending on your network and hardware configuration, the installation time may vary.

5. At the end of the installation, take note of the URL for Terminus Activation wizard and your initial login password.

For more detailed instructions, see [Install Terminus on Windows](../../../how-to/terminus/setup/install/windows.md).

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

- **Uninstall Terminus**. Run this command in Ubuntu when you need to reinstall Terminus, or simply want to uninstall it:

   ```sh
   cd install-wizard && bash uninstall_cmd.sh
   ```

- **Resolve IP change issues**. Services within the Kubernetes cluster rely on stable IPs and DNS resolution provided by the cluster's internal DNS. IP Address change can disrupt this and make Terminus inaccessible. To resolve this issue, run the following command in Ubuntu in your new network environment:

```sh
cd install-wizard && bash change_ip.sh
```

## Next Steps 

- [Explore Terminus Tasks](../../../how-to/terminus/index.md)
- [Install Applications](../../../how-to/terminus/market/index.md#install-applications)
- [Build Your Profile](../../../how-to/terminus/profile.md)
