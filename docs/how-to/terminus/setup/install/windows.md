
# Install Terminus on Windows

This guide covers the detailed steps of installing Terminus on your Windows system. This method leverages the Windows Subsystem for Linux (WSL2) to create a Linux environment within Windows, where Terminus OS is then installed.

::: tip NOTE
Currently, Terminus on Windows has certain limitations including:
- Lack of distributed storage support 
- Inability to add local nodes

We recommend using it only for development or testing purposes. 
:::


## Prerequisites

Before you begin, ensure your system meets these requirements:

- A Windows machine meeting the following requirements:
  - CPU: 4 cores or above
  - RAM: 16 or above (available memory)
  - Storage: 64GB or above (available disk space)
  - Supported Systems:
     - Windows 10 or 11
     - Linux (on WSL2): Ubuntu 20.04 LTS or later; Debian 11 or later
- [TermiPass](../../../termipass/overview.md#download-termipass) mobile app installed on your smartphone
- [Terminus Name](../../../termipass/account/index.md#create-a-terminus-name) created
  
:::info
Learn why you need a Terminus Name [here](../../../../overview/terminus/terminus-name.md#why-do-you-need-a-terminus-name).
:::

## Step 1: Install Terminus 

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
   You may need to restart your system if it's the first time installing WSL2.
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
      # This typically returns an IP address in format of "172.xx.xx.xx".
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

      ```bash
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


   :::info
   If an error occurs during installation, use the following command to uninstall first:
   ```bash
   bash uninstall_cmd.sh
   ```
   After uninstalling, retry the installation by running the original installation command.
   :::

## Step 2: Enter Terminus Name

At the end of the installation process, enter your domain name and Terminus Name as prompted by the system:

![alt text](/images/how-to/terminus/enter_terminus_name.png)

- If your Terminus Name is "alice@myterminus.com", press **Enter** or type `myterminus.com` for the domain name, then type `alice` for the terminus name.

- If your Terminus Name is "alice@helloworld.com", type `helloworld.com` for the domain name, then type `alice` for the terminus name.

:::info
To use a custom domain name, make sure the domain configuration has been completed as described in [Create Domain](../../../space/domain/host-domain.md).
:::

## Step 3: Get Initial System Info

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![alt text](/images/how-to/terminus/one_time_password.png)

### Wizard URL

There are two Wizard URLs as shown the screenshot:

- The upper one is for internal network access.
- The lower one is for public network access.

Generally speaking, if your computer and Terminus are on the same network, use the internal network URL. If not, use the public network URL.

:::tip
When using the internal network URL, please note:
- You might need to set up a reverse proxy during activation.
- If you're activating TermiPass by QR scanning, ensure your phone and Terminus are on the same network.
:::

### Initial Login Password

Please take note of the initial one-time password in the lower red square. You will need it in the Wizard page. 

## Next Steps

- [Activate Terminus](../wizard.md)
- [Log In to Terminus](../login.md)
- [Manage Accounts with TermiPass](../../../termipass/account/index.md)





