---
outline: [2, 3]
---

# Home

The **Home** section provides tools to manage devices and enhance the security of your Olares system.

## Device Management

View and monitor all devices authorized to access your Olares.

![alt text](/images/how-to/olares/home01.png)

This list presents all devices with access to Olares. It includes information such as the name of each device, connection method, device IP, and the last connection time. 

- **Device List**: Displays device name, connection method, IP address, and last connection time.
- Device Categories:
  - **LarePass**: Mobile phones, computers, and browser plugins using LarePass require Vault and Account authorization, plus additional VPN authorization if enabled.
  - **Desktop**: Devices accessing Olares through a browser require authorization vian Olares's account system.

## Security Settings

This section provides security related settings and monitoring. 

![alt text](/images/how-to/olares/home02.png)

### Access Control

- **Change Password**: Update your Olares login password.
- **Forcing VPN Access to Private Entrance (VPN Mode Only)**: Enforces VPN connections for all access to the [Private Entrance](../../../overview/olares/network.md#private-entrance). Requires at least two devices (typically a computer and a mobile phone) with LarePass and VPN enabled.
- **Network Authority Policy**:
    **Two-Factor** (Recommended): Requires login password and two-factor authentication code.
    **One Factor** (Not Recommended): Only requires the login password.

### Monitoring and Session Management

- **Active Session of the Vault**: Displays a list of LarePass devices currently authorized to access Olares.
- **HeadScale Connection Status**: Shows devices with active VPN connections through LarePass.
- **List of SSO Authorization Tokens**: View and revoke active tokens obtained through login or LarePass authentication.
- **Login History**: Tracks recent login attempts using passwords, regardless of two-factor authentication success.

