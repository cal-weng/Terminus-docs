---
outline: [2,3]
description: Learn how to configure VPN on Olares using Settings, covering VPN enforcement, SSH access, and subnet routing.
---
# Configure VPN access to Olares

The LarePass VPN enables secure remote access to your Olares device from a different network segment or remote location. The **Settings** app in Olares allows you to further configure VPN access to meet your specific needs, such as enforcing VPN connections, enabling SSH access via VPN, or routing traffic through specific ports.

This guide shows you how to configure VPN-related settings in **Settings**.

:::info
Only Olares admin can enable remote access to LAN Devices via LarePass VPN.
:::

## Enforce access using VPN

To ensure that all traffic to your private Olares applications is encrypted and routed securely, you can enforce VPN access. This ensures that connections to your Olares environment always go through the LarePass VPN, regardless of the network or device used.

To enable enforced VPN mode:

1. Enable VPN connections on at least two devices using LarePass (typically a computer and a mobile phone) with LarePass installed. For detailed instructions, see [Enable VPN on LarePass](/manual/larepass/private-network.md).
2. Open Settings app from the Dock or Launchpad.
3. Click on your profile picture in the top-left corner, and scroll down to **Security** settings.
4. Turn on the switch for **Enforce VPN access to private entrance**.

When successful, you'll see a confirmation message at the bottom of the screen.


## Allow SSH connections via VPN
This enables SSH access to your Olares device through the LarePass VPN, even when you are in a different network or working remotely.

1. Open the Settings app, and select **System** > **VPN**.
2. Toggle on **Allow SSH Access via VPN**. Port **22** (SSH) is automatically added to the configuration.

   ![SSH via VPN](/images/manual/tasks/ssh-via-vpn.png#bordered)
## Allow subnet routing
This feature allows you to access other devices in the same local network as your Olares through the VPN.

1. Open the Settings app, and select **System** > **VPN**.
2. Toggle on **Enable subnet routes**.

## Configure ACL rules for port access
After enabling subnet routing, you can further configure ACL (Access Control List) rules to allow traffic to specific ports based on the services you want to access.

For example, to access a Windows server via Remote Desktop:
1. Click <i class="material-symbols-outlined">add</i> to open the **Add ACL** dialog.
2. Enter `3389` (default port for Remote Desktop Protocol), and click **Confirm**.
3. Click **Apply** to apply changes.

   ![Add ACL port](/images/manual/tasks/add-acl-port.png#bordered)

Now you can use Windows Remote Desktop to access the Windows server in the same LAN as Olares.