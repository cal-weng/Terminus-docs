---
outline: [2, 3]
description: Access Olares applications securely from anywhere using LarePass VPN. Learn VPN setup, troubleshooting, and how to enforce VPN-only access for maximum security.
---

# Access Olares anywhere via LarePass VPN

By enabling Virtual Private Network (VPN) in LarePass, all traffic from the device to Olares is routed through a secure private network, providing the same experience as local access.

This document walks you through how to set up LarePass VPN to access Olares anywhere.


## Enable VPN on LarePass

:::tip
For different LarePass download options, visit [the official page](https://olares.com/larepass).
:::

![VPN](/images/manual/larepass/vpn.jpg)

### On LarePass mobile client
1. Open LarePass, go to **Settings** > **Account**.
2. Turn on the VPN switch.

### On LarePass desktop client
1. Open LarePass, click on the avatar area in the top left corner of the main interface.
2. Turn on the switch for **VPN connection** in the pop-up panel.

Devices with activated VPN will use the VPN connection to access Olares, whether through the LarePass client or a browser.

:::info
iOS or macOS versions of LarePass will require adding a VPN configuration file to the system when turning on the VPN. Follow the prompts to complete the setup.
:::

## Understand connection status
LarePass displays the connection status between your device and Olares, helping you understand or diagnose your current network connection.

![Connection status](/images/manual/larepass/connection-status.jpg)

| Status       | Description                                      |
|--------------|--------------------------------------------------|
| Internet     | Connected to Olares via the public internet      |
| Intranet     | Connected to Olares via the local network        |
| FRP          | Connected to Olares via FRP                      |
| DERP         | Connected to Olares via VPN using DERP relay     |
| P2P          | Connected to Olares via VPN using P2P connection |
| Offline mode | Currently offline, unable to connect to Olares   |

::: info
When accessing private entrances from an external environment through VPN, if the status shows "DERP", it indicates that the VPN cannot directly connect to Olares via P2P and must use Tailscale's relay servers. This status may affect connection quality. If you constantly encounter this situation, please contact Olares support for assistance.
:::

## Troubleshoot connection issues
If you encounter connection problems, LarePass will display diagnostic messages to help you resolve the issue. Here are some common scenarios and how to address them:

![Abnormal status](/images/manual/larepass/abnormal_state.png)

| Status message                                        | Possible cause and recommended actions                                                                                                                                                                                                                                                                                                                                            |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Network issue detected. Check local network settings. | **Local network issue** <br> 1. Wait for automatic reconnection. <br/>The system will detect network recovery <br/>and sync data.<br/> 2. Check your local network settings if <br/>the issue persists.                                                                                                                                                                           |
| VPN required to connect to Olares.                    | **VPN not enabled** <br> Click the notification banner and follow <br/>prompts to enable VPN connection.                                                                                                                                                                                                                                                                        |
| Need to log in to Olares again.                       | **Session expired or authentication issue** <br> Click the notification banner and follow<br/> prompts to log in.                                                                                                                                                                                                                                                                 |
| Need to reconnect to Olares.                          | **Connection interrupted or timed out** <br> Click the notification banner and follow<br/> prompts to log in. After re-login, Vault <br/>data will sync and merge with the server.                                                                                                                                                                                                |
| No active Olares found.                               | **Temporary network issue or Olares is restarting<br/> or shutting down** <br> Wait for automatic recovery. This <br/>usually resolves shortly. <br> **Olares instance no longer exists** <br> 1. Click the notification banner and follow<br/> prompts to reactivate Olares, enable offline <br/>mode or ignore notification. <br> 2. Contact Olares Admin if the issue persists. |
