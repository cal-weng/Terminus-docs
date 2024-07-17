# Manage Terminus on TermiPass

**TermiPass** provides several features to help you manage your **Terminus** device, including monitoring resource consumption, enabling VPN connections, checking connection status, and troubleshooting abnormal situations.  

## Resource Consumption 

View the resource consumption of **Terminus** in **TermiPass**.

![alt text](/images/how-to/termipass/resource.jpg)

:::info
This feature is supported only on Android and iOS versions.
:::

## VPN Connection

Enable or disable the VPN connection to Terminus.

![alt text](/images/how-to/termipass/vpn.jpg)

- **TermiPass Desktop**: Click the avatar in the top-left and activate VPN from the menu.
- **Mobile**: Navigate to **Settings** > **Account** to enable VPN.

## Connection Status

TermiPass can display the connection status of your account with **Terminus**.

Usually, you will see the following statuses:

![alt text](/images/how-to/termipass/connection_status.jpg)

| Status                      | Status Icon | Description                                     |
| --------------------------- | ----------- | ----------------------------------------------- |
| Public Network - Internet   | Internet    | Connected to Terminus via the public network    |
| Local Network - Intranet    | Intranet    | Connected to Terminus via the local network     |
| FRP                         | FRP         | Connected to Terminus via FRP                   |
| VPN Connection - DERP       | DERP        | Connected to Terminus via VPN - DERP            |
| VPN Connection - P2P        | P2P         | Connected to Terminus via VPN - P2P             |
| Offline Mode                | Offline             | Cannot connect to Terminus              |

## Abnormal Status

TermiPass can display the abnormal status when exception or error occurs. 

![alt text](/images/how-to/termipass/abnormal_status.jpg)


| Abnormal Status       | Description                                                                                       | Notification |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| Offline Mode        | You can manually switch to offline mode and continue editing offline. The data will sync with the server later. | Offline Mode |
| Network Connection Exception    | The current network connection is poor. Please check your local network settings.                  | Banner Tip   |
| VPN Connection Not Enabled | Need VPN to connect to Terminus.	| Banner Tip   |
| SSO Invalid | Need to log in to Terminus again.	| Banner Tip   |
| SRP Invalid | Need to reconnect to Terminus.	| Banner Tip   |
| Device is Inactive or Expired | The Terminus device is not activated, or the device has been destroyed. Possible options are: <br> - Activating Terminus<br>- Enabling the offline mode <br>- Ignoring the issue <br> - Contacting the Admin  | Banner Tip   |
