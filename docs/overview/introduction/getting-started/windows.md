# Getting Started on Windows

This guide will walk you through the essential steps to get Terminus up and running on your Windows. Follow these steps to create your account, install Terminus, and start exploring the Terminus ecosystem.

::: tip NOTE
Currently, Terminus on Windows has certain limitations including:
- Lack of distributed storage support 
- Inability to add local nodes

We recommend using it only for development or testing purposes.
:::

## Prerequisites

-  A Windows machine meeting the [requirements](../getting-started/index.md#hardware-and-system-requirements).
- [TermiPass](../../../how-to/termipass/overview.md#download-termipass) mobile app installed on your smartphone.

## Step 1: Create a Terminus Name

Open TermiPass on your mobile, and [create a new Terminus Name](../../../how-to/termipass/account/#create-terminus-name) as instructed on the screen.

:::info
Terminus Name is your unique identifier within Terminus.
Learn more about [why you need a Terminus Name](../../terminus/terminus-name.md#why-do-you-need-a-terminus-name).
:::

## Step 2: Install Terminus

1. Create a `.wslconfig` file in your Windows user directory (typically `C:\Users\YourUsername\`) with the following content:
   
   ```bash
   [wsl2]
   memory=16GB 
   swap=0GB
   ```

2. Open PowerShell as Administrator and run the following commands to install Ubuntu in your WSL2:
   
   ```bash
   wsl --install -d Ubuntu-22.04
   wsl --update
   ```

   :::info
   You may need to restart your system after Ubuntu is installed if it's the first time installing WSL2.
   ::: 

3. In PowerShell, run the following command to obtain Windows host IP:
   
   ```bash
   netsh interface ipv4 show addresses
   ```
   
   Note the IP Address of your WLAN or Ethernet interface. It should start with `192.xxx`. You will need it when installing Terminus.

4. Set up port forwarding for your WSL2 server.
   
   a. Get the IP address of the WSL2 server.

      ```bash
      wsl hostname -i
      # This typically returns an IP address in format of "172.xx.xx.xx"
      ```
   b. Set up port forwarding rules:
   
      ```bash
      netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=80 connectaddress=<addr for hostname>
      netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=443 connectaddress=<addr for hostname>
      netsh interface portproxy add v4tov4 listenport=30180 listenaddress=0.0.0.0 connectport=30180 connectaddress=<addr for hostname>
      
      # Replace <addr for hostname> with the IP address you get from step a.
      ```

5. Configure the Ubuntu environment.

   a. Start Ubuntu in WSL2 and log in as root.

      ```bash
      wsl -d Ubuntu-22.04
      sudo su
      ```
   
   b. Modify the `/etc/wsl.conf` file:

      ```ini
      sudo vi /etc/wsl.conf

      [boot] 
      command="mount --make-rshared /"  # add this line below [boot]  

      [network]
      generateHosts = false
      generateResolvConf = false 
      # Allow you to manually manage hosts file and DNS settings
      hostname=terminus # Set your hostname of the WSL instance
      ```
      Save and exit the editing mode (Ctrl+X, Y, and Enter). 

   
   c. Exit Ubuntu and restart it in WSL2 to apply the changes:

      ```bash
      exit

      wsl --shutdown Ubuntu-22.04
      wsl -d Ubuntu-22.04
      ```

   d. Modify the hosts file and the `resolv.conf` file:
   
      ```bash
      cd && sudo sh -c "echo \"127.0.0.1 localhost\n$(ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}') $(hostname)\" > /etc/hosts && echo \"nameserver 1.1.1.1\nnameserver 1.0.0.1\" > /e    tc/resolv.conf"
      # Bind Ubuntu's local IP with the host name, and configure DNS resolution to use Cloudfare's public DNS servers.
      ```
    
6. Install Terminus.
   
   a. In Ubuntu, run the following command to install the latest build of Terminus:

      ```sh
      curl -fsSL https://terminus.sh |  bash -
      ```

   b. During installation, enter the Windows host IP (`192.168.xxx.xxx`) you obtained earlier in step 3 when prompted. Then, press **Enter** to proceed.

    ![Install Windows IP](/images/overview/terminus/install-windows-ip.jpeg)

At the end of the installation, take note of the wizard URL for Terminus Activation wizard and your initial login password.

For more detailed instructions, see [Install Terminus on Windows](../../../how-to/terminus/setup/install/windows.md).

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
