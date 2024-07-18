
# Install Terminus on Windows

This guide covers the detailed steps of installing Terminus on your Windows system. This method leverages the Windows Subsystem for Linux (WSL2) to create a Linux environment within Windows, where Terminus OS is then installed.

## Prerequisites

Before you begin, ensure your system meets these requirements:

- A Windows machine meeting the following requirements:
  - CPU: 4 cores or above
  - RAM: 8GB or above (available memory)
  - Storage: 64GB or above (available disk space)
  - Supported Systems:
     - Windows: Windows 10 (Build 19041 or higher) or Windows 11 with WSL2 enabled  
     - Linux: Ubuntu 20.04 LTS or later; Debian 11 or later
- [TermiPass](../../../termipass/overview.md#download-termipass) mobile app installed on your smartphone
- [Terminus Name](../../../termipass/account/index.md#create-a-terminus-name) created

## Step 1: Install Terminus 

1. Open PowerShell as Administrator and run the following to update WSL2 and install Ubuntu:
   
   ```sh
   wsl --update
   wsl --install -d Ubuntu-22.04
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

   c. Configure the hosts file to ensure stable host resolution within WSL:

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

## Troubleshooting Installation 

If an error occurs during installation, use the following command to uninstall first:

```sh
bash uninstall_cmd.sh
```

After uninstalling, retry the installation by running the original installation command.

## Next Steps

- [Activate Terminus](../wizard.md)
- [Log In to Terminus](../login.md)
- [Manage Accounts with TermiPass](../../../termipass/account/index.md)





