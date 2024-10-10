# Manage Terminus on TermiPass

This guide explains how to easily manage your Terminus device using TermiPass, including checking system status, managing network connections, and performing remote operations.

## Prerequisites

Make sure the following conditions are met:

- The TermiPass app is installed.
- You have a valid Terminus Name and have activated your Terminus device.
- Terminus is powered on and connected to the network.

## Access the Terminus management page

The Terminus management page on the TermiPass app is the main interface for managing your Terminus. You can view system status, configure the Wi-Fi network, and restart or shut down your device.

To access the page:

1. Open the TermiPass app and go to **Settings**.
2. Tap **Terminus Name** to access the management page.

::: tip NOTE
Ensure:
- The current account has administrator privileges.
- Your phone and Terminus device are on the same network.
:::

## Configure the Wi-Fi network

In the Wi-Fi configuration section, you can switch between wired and wireless connections or change to a different network.

### Switch between wired and wireless connections

If Terminus is activated via a wired connection, you can switch to a Wi-Fi connection:

 ![Switch to Wi-Fi](/images/how-to/termipass/switch_to_wifi.png)

1. On the **Wi-Fi configuration** page, tap the Wi-Fi connection listed under **Phone network**.
2. Enter the Wi-Fi password if prompted and confirm the connection.
3. Once connected, the Wi-Fi network appears in the **Available connections** list. Tap the Wi-Fi connection, and Terminus will switch to the wireless network. Terminus status changes to "IP changing". 
4. When the status returns to **Terminus Running**, the switch is complete. The process may take about 5 minutes.

::: tip NOTE
If your Terminus is activated via a wireless connection, you can switch to the wired connection directly from the **Available connections** list.
:::

### Switch to a different network

If your Terminus device is connected to a new network, you will need to configure the IP address in the TermiPass app:

1. Connect your phone to the new network and launch Terminus.
2. Open the TermiPass app and go to the **Terminus management** page. TermiPass will scan the local network and detect the Terminus device. At this time, the device status is **IP changing**.
3. Once the IP address change is complete, the system status returns to **Terminus Running**. This process may take 10-15 minutes.

## Remote control your Terminus

In the top-right corner of the **Terminus management** page, there is a power icon. Tap it to perform the following remote operations:

![Remote Control](/images/how-to/termipass/remote_control.png)

- **Restart Terminus**: Tap to restart the Terminus device. The system status will display the **Restarting** status before returning to the running status. This process takes 5-10 minutes.
- **Shutdown Terminus**: Tap to shut down the device. The system will display the **Terminus is powered off** message. You will need to manually power it back on.

::: tip NOTE
- During shutdown or restart, the connection may be temporarily lost. The system will display “Terminus not found” before switching to the correct status.
- Manual shutdown will only show the **Terminus not found** page.
:::

## Restore to Factory Settings

::: warning IMPORTANT
This action will uninstall the system and permanently delete all user accounts and related data!
:::

![Restore to Factory Settings](/images/how-to/termipass/restore_to_factory.png)

To uninstall Terminus:

1. In the **Terminus management** page, tap **Restore to factory settings**.
2. Confirm the risk warning and enter your Terminus password.
3. Wait for the uninstallation to complete. You will return to the Terminus Name login page after that.

## View resource consumption

You can view the resource consumption of Terminus in **TermiPass > Settings**.

![Resource Consumption](/images/how-to/termipass/resource.jpg)

## VPN Connection

To enhance security when accessing Terminus remotely, enable the private network via TermiPass.

![VPN Connection](/images/how-to/termipass/vpn.jpg)

- **Enable Private Network on TermiPass Mobile**:
  1. Open the TermiPass app and go to **Settings > Account**.
  2. Toggle the switch in the account management page to enable the private network.

- **Enable Private Network on TermiPass Desktop**:
  1. Open the TermiPass app and click the profile icon in the upper left corner.
  2. In the popup panel, select **Enable private network connection**.

Once enabled, all access to Terminus, whether via the TermiPass app or a web browser, will be routed through the private network.

## Learn Connection Status

TermiPass displays the connection status of your account with **Terminus**.

![Connection Status](/images/how-to/termipass/connection_status.jpg)

| Status                      | Icon      | Description                                     |
| --------------------------- | --------- | ----------------------------------------------- |
| Public Network - Internet    | Internet  | Connected to Terminus via the public network    |
| Local Network - Intranet     | Intranet  | Connected to Terminus via the local network     |
| FRP                         | FRP       | Connected to Terminus via FRP                   |
| VPN Connection - DERP        | DERP      | Connected to Terminus via VPN - DERP            |
| VPN Connection - P2P         | P2P       | Connected to Terminus via VPN - P2P             |
| Offline Mode                 | Offline   | Cannot connect to Terminus                      |
