# Manage Olares with LarePass

The LarePass app allows you to easily manage your Olares device remotely. You can monitor system status, manage network connections, perform remote controls, and access key device information  from your phone.

This guide walks you through the core management features available in LarePass.

## Prerequisites

Before you begin, ensure the following:

- You have a valid Olares ID and an activated Olares device.
- Your Olares device is powered on and connected to a network.
- Your phone and Olares device are on the same local network.
- Your current account has administrator permissions.

## Access Olares management

To access the Olares management page:

1. Open LarePass app, and go to **Settings**.
2. Tap your Olares ID to enter the Olares management interface.

## Remote device control

In the upper-right corner of the Olares management page, tap the <i class="material-symbols-outlined">power_settings_new</i> icon to access remote control options:

- **Restart Olares** – Reboots the device. Status will show `Restarting`... and revert to Running after approximately 5–8 minutes.
- **Shutdown Olares** – Powers off the device. Status will display `Powered Off`. You must turn it on manually afterward.

## Configure network

Tap **Wi-Fi configuration** to view or modify the current network settings of your Olares device.

### Switch from wired to wireless network

If Olares was activated over Ethernet, you can switch to the connected Wi-Fi on the same network:

1. On the **Wi-Fi configuration** screen, select the Wi-Fi network from the list.
2. If the network is secured, enter the password and confirm.
3. Once connected, the Wi-Fi network will appear under the **Available connections** list.
4. Tap the new Wi-Fi option to switch. Status will change to `IP changing` and return to `Running` after about 5 minutes.

::: tip Wired network recommended
To ensure an optimal and stable connection, we recommend using a wired network whenever possible.
:::

### Update IP address

If your Olares device moves to a different network:

1. Connect Olares and your phone to the new network and power on Olares.
2. Open LarePass and go to the **Olares management** page.
3. LarePass will automatically scan Olares device within the local network. When found, Olares will appear as `IP changing` in LarePass.
4. Once IP update finishes, the status will change to `Olares running`. This process may take 5–10 minutes.

 ## View device information

Tap the device information area at the top of the Olares management screen to view:

- Hardware details
- System version
- Resource usage
- Connected network

## Uninstall Olares

This will reset your device to the prepared installation phase, where you can scan the LAN to re-install and activate Olares. 

::: warning Proceed with caution
This will permanently delete all your accounts info and data. Proceed with caution.
:::

1. On the **Olares management** page, tap **Restore to Factory Settings**.

2. Review the risk prompt and enter your local LarePass lock screen password. If not set, you will be prompted to create one first.

3. Wait for the uninstallation to complete. You will be returned to the Olares ID login screen.
