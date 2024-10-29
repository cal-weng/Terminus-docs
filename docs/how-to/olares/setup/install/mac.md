
# Install Olares on Mac

This guide covers the detailed steps to install Olares on your Mac. This method uses containerized tools like Docker Desktop and Minikube to create a suitable environment for running Olares OS on Mac.

::: tip NOTE
Currently, Olares on Mac has certain limitations including:
- Lack of distributed storage support 
- Inability to add local nodes. 

We recommend using it only for development or testing purposes.
:::


## Prerequisites

- A Mac meeting the following requirements:
   - Architecture: X86-64 or ARM64
   - RAM: 8GB or above (available memory)
   - Storage: 64GB or above (available disk space)
   - MacOS: Monterey (12) or later
- [Docker](https://www.docker.com/products/docker-desktop/) and [MiniKube](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Farm64%2Fstable%2Fhomebrew) intalled on your Mac. 
::: tip
For MiniKube, it's recommended to install via `homebrew`.
:::
- [LarePass](../../../larepass/overview.md#download-larepass) mobile app installed on your smartphone.
- [Olares ID](../../../larepass/account/index.md#create-a-olares-id) created.

:::info
Learn why you need an Olares ID [here](../../../../overview/olares/olares-id.md#why-do-you-need-a-olares-id).
:::

## Step 1: Install Olares 

1. Configure Docker. 
   In Docker Desktop, navigate to **Settings** > **Resources**, and configure as below:
    - CPU limit: Set to at least 4 CPUs
    - Memory limit: Set to at least 9 GB
  
2. Click **Apply & Restart** to implement the changes.
    
3. In terminal, run the following command to install the latest build of Olares:

   ```bash
   curl -fsSL https://olares.sh |  bash - 
   ```
   
   This script sets up the necessary components for Olares OS, including configuring MiniKube, setting up Kubernetes and networking, and installing required plugins. Depending on your network and system, the installation time may vary. 

   :::info
   If an error occurs during installation, use the following command to uninstall first:

   ```bash
   bash uninstall_macos.sh
   ```
   After uninstalling, retry the installation by running the original installation command.
   :::
 
## Step 2: Enter Olares ID

At the end of the installation process, enter your domain name and Olares ID as prompted by the system:

![alt text](/images/how-to/olares/enter_olares_id.png)

- If your Olares ID is "alice@olares.com", press **Enter** or type `olares.com` for the domain name, then type `alice` for the olares name.

- If your Olares ID is "alice@helloworld.com", type `helloworld.com` for the domain name, then type `alice` for the olares name.

:::info
To use a custom domain name, make sure the domain configuration has been completed as described in [Create Domain](../../../space/domain/host-domain.md).
:::

## Step 3: Get Initial System Info

Upon completion of the installation, the initial system information, including the Wizard URL and the initial login password, will appear on the screen. You will need them later in the activation stage.

![alt text](/images/how-to/olares/one_time_password.png)

### Wizard URL

There are two Wizard URLs as shown the screenshot:

- The upper one is for internal network access.
- The lower one is for public network access.

Generally speaking, if your computer and Olares are on the same network, use the internal network URL. If not, use the public network URL.

:::tip
When using the internal network URL, please note:
- You might need to set up a reverse proxy during activation.
- If you're activating LarePass by QR scanning, ensure your phone and Olares are on the same network.
:::

### Initial Login Password

Please take note of the initial one-time password in the lower red square. You will need it in the Wizard page. 

## Next Steps

- [Activate Olares](../wizard.md)
- [Log In to Olares](../login.md)
- [Manage Accounts with LarePass](../../../larepass/account/index.md)






