---
outline: [2, 3]
description: Access Olares applications securely from anywhere using VPN. Learn VPN setup, troubleshooting, and how to enforce VPN-only access for maximum security.
---

# Access Olares applications anywhere via VPN

For services intended for personal use, such as desktop, file management, or media players,  you can use domain names in the format `https://{routerID}.local.{OlaresDomain}` (e.g., https://vault.local.bob.olares.com) to access these applications locally.

Local access to such applications is supported in two ways:

- **LAN**: When your device and Olares are on the same local network, such as being connected to the same WiFi.
- **Private network**: By enabling Virtual Private Network (VPN) in LarePass, all traffic from the device running LarePass to Olares is routed through a secure private network, providing the same experience as intranet access.

This document walks you through how to setup VPN access to Olares.


## Set up VPN access on LarePass
:::tip
For different LarePass download options, visit [the official page](https://olares.com/larepass).
:::

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

## Enforce access using VPN
For maximum security, Olares allows you to enforce VPN mode and ensure that all connections to your private Olares applications go through the VPN, regardless of the device or network you're using.

To enable enforced VPN mode:
1. Enable VPN connections on at least two devices (typically a computer and a mobile phone) with LarePass installed. See [Set up VPN access on LarePass](#set-up-vpn-access-on-larepass).
2. Open the Settings app from the Dock or Launchpad.
3. Click on your profile picture in the top-left corner, and scroll down to **Security** settings.
4. Turn on the switch for **Enforce VPN access to private entrance**.

When successful, you'll see a confirmation message at the bottom of the screen.

## Understand connection status
LarePass displays the connection status between your account and Olares, helping you understand or diagnose your current network connection.

| Status       | Description                                      |
|--------------|--------------------------------------------------|
| Internet     | Connected to Olares via the public internet      |
| Intranet     | Connected to Olares via the local network        |
| FRP          | Connected to Olares via FRP                      |
| DERP         | Connected to Olares via VPN using DERP relay     |
| P2P          | Connected to Olares via VPN using P2P connection |
| Offline mode | Currently offline, unable to connect to Olares   |

::: info
When accessing private entrances from an external environment through VPN, if the status shows "DERP", it indicates that the VPN cannot directly connect to Olares via P2P and must use Tailscale's relay servers. This status may affect connection quality. If you consistently encounter this situation, please contact Olares support for assistance.
:::

## Troubleshoot connection issues
If you encounter connection problems, LarePass will display diagnostic messages to help you resolve the issue. Here are some common scenarios and how to address them:

| Status message                                               | Possible cause and recommended actions                                                                                                                                                                                                                                                                                                                         |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Network issue detected. Please check local network settings. | **Local network issue** <br> 1. Wait for automatic reconnection. The system will detect network recovery and sync data. <br> 2. Check your local network settings if the issue persists.                                                                                                                                                                       |
| VPN connection to Olares required.                           | **VPN not enabled** <br> Click the notification banner and follow prompts to enable VPN connection.                                                                                                                                                                                                                                                            |
| Olares re-login required.                                    | **Session expired or authentication issue** <br> Click the notification banner and follow prompts to log in.                                                                                                                                                                                                                                                   |
| Olares reconnection required.                                | **Connection interrupted or timed out** <br> Click the notification banner and follow prompts to log in. After re-login, Vault data will sync and merge with the server.                                                                                                                                                                                       |
| No running Olares detected.                                  | **Temporary network issue or Olares is restarting or shutting down** <br> Wait for automatic recovery. This usually resolves shortly. <br> **Olares instance no longer exists** <br> 1. Click the notification banner and follow prompts to reactivate Olares, enable offline mode or ignore notification. <br> 2. Contact Olares Admin if the issue persists. |
