---
outline: [2, 3]
---

# Network

## Motivation

The network configuration of the server has always been an extremely cumbersome task, meaning:

- Externally, issues such as domain name, certificate, reverse proxy, intranet penetration, etc. need to be dealt with.
- Internally, it is necessary to manage independent routing, domain names and security policies for each application.

Currently, no other product on the market does well in both safety and ease of use.

Olares OS hopes to provide individual users with a barrier-free but secure and versatile solution.

## Entrance

Entrance is the gateway for applications, and users need to access the application through Entrance.

Each application has one or more Entrances. There are two types of Entrances: Public and Private. For example, WordPress includes two Entrances: public page (Public Entrance) and management backend (Private Entrance).

### Public Entrance

Positioning is to provide services that are open to the outside world. Such as blogs, social media, etc.

Traffic accessing Public Entrance does not need to go through [authentication](./account.md#mfa). We get basic security by routing Public Entrance traffic through Cloudflare.

- When Olares has a public IP, traffic enters Olares through Cloudflare
- When Olares does not have a public IP, there are two ways:
  - Traffic enters Olares through Cloudflare Tunnel
  - Traffic passes through Cloudflare and is forwarded to FRP before entering Olares

### Private Entrance

Its positioning is to provide services that only users can access. For example, blog management console, [Desktop](../../how-to/olares/desktop.md), etc.

Traffic accessing Private Entrance needs to go through [authentication](./account.md#mfa). Private Entrance traffic routing depends on whether the user has enabled the [Only VPN](../../how-to/olares/settings/home.md#forcing-vpn-access-to-private-entrance-only-vpn-mode) mode to force VPN access to private entrance:

- **Disabled the Only VPN mode**. Depending on whether the user [activates VPN connection in LarePass](../../how-to/larepass/manage-olares.md#vpn-connection)]
  - If VPN connection is Activated in LarePass, all traffic is routed through VPN (TailScale).
  - If not activated, traffic routing is the same as Public Entrance.
- **Enabled the Only VPN mode**. Only traffic through VPN (TailScale) can access the Private Entrance.

### Endpoint

Users have two ways to access the application in the browser, or entrance of the application:

- By default, use this URL–`https://[RouteID].[DomainName]`. For example, `https://vault.bob.olares.com`. `RouteID` also has two situations:

  - Use default RouteID.

    - All pre-installed system applications use an easy-to-remember RouteID. For example, `desktop`, and `market`.

    - Other applications use the combo of [Application ID](./application.md#application-id) + Entrance Index, which makes it a 10-bit string of lowercase English letters and numbers. For example, `92d76a11` is the Application ID, the Entrance Index is 1, and together the RouteID is `92d76a1101`.

  - [Customize RouteID](../../how-to/olares/settings/application.md#custom-routeid) in Settings.

- [Set third-party domain name](../../how-to/olares/settings/application.md#custom-domain) for the traffic entrance. 

:::info
- DomainName is derived from [Olares ID](../../developer/contribute/snowinning/olares-id.md#domainname)

- Entrance Index refers to the position of Entrance in multiple Entrances defined in [OlaresManifest.yaml](../../developer/develop/package/manifest.md)
:::

## Setup Domain

Olares Space will assist users to complete [Domain Name](../../developer/contribute/snowinning/olares-id.md#domainname) setup when Olares is [activated](../../how-to/olares/setup/wizard.md).

### DNS

During the system activation process, we will configure DNS for the domain name so that users can access Olares through the URL after the installation is completed.

:::info
For the Admin of the organization, you need to refer to [Domain Settings Tutorial](../../how-to/space/domain/index.md) to hand over the domain name to Olares Space for hosting.
:::

### HTTPS Certificate

In order to ensure the privacy of data transmission when users access Olares, we have applied for a free SSL certificate for users. This certificate is issued by Google Trust Services LLC and will be automatically renewed when the certificate expires.

At the same time, in order to improve the speed and security of access to Olares, we use Cloudflare to perform layer 7 acceleration on Olares. The corresponding SSL certificate is issued by Google and managed by Cloudflare.

### Setup Reverse Proxy

For Olares users who do not have a public IP, they need to set up a reverse proxy during activation. There are currently two ways of doing this:

- Use Cloudflare’s Tunnel
- Use an FRP node. To speed up the access, it is recommended to choose an FRP node that is close to the physical location of Olares.

## Access via Local

Users can access applications on Olares through `https://[RouteID].local.[DomainName]`, such as `https://vault.local.bob.olares.com` in two situations: Intranet and VPN.

### Intranet

This refers to the environment where the user's device and Olares are deployed on the same intranet, for example, connected to the same WIFI.

### VPN Access

Olares has built-in VPN services using [TailScale](https://tailscale.com/) and [HeadScale](https://headscale.net/).

When VPN access is enabled on LarePass, all traffic to Olares from a device with that LarePass installed goes through the VPN. The advantages of VPN access are:

- Safer
- Faster access

We provide the [Only VPN](../../how-to/olares/settings/home.md#forcing-vpn-access-to-private-entrance-only-vpn-mode) switch in the settings. When turned on, the system will require that all access to Private Entrance must be through VPN.

## LarePass Connection Status

You can check the current connection status of LarePass and Olares through [LarePass Connection Status](../../how-to/larepass/manage-olares.md#connection-status).

## Olares Internal Network

The Olares system adopts a multi-layer proxy routing design on the gateway architecture. Traffic is distributed layer by layer from `cluster` -> `user` -> `application` -> `service component`.

![alt text](/images/overview/olares/image4.jpeg)

Inside the application, Olares has multiple layers of security.

- Each application has its own namespace, and all resources are placed in a namespace for exclusive use. All applications are not allowed to bind 'ClusterRole' on the 'ServiceAccount'. That is, the application does not have permission to access resources across namespaces.

- A network policy will be added to each Namespace. Except for cluster applications and applications on the user's own system, network requests from other APPs are not allowed to enter. All applications and networks are isolated between users. The third-party applications installed by each user will also be network isolated to prevent malicious APPs from attacking other applications.

- All Pods deployed by the application are not allowed to have service of 'hostNetwork' or 'NodePort'. Only when the Entrance Service is declared, will the system provide an entry proxy to access traffic. The Pod declared as Entrance will be forced to join Envoy's sandbox Sidecar to authenticate and authorize each incoming traffic.

## Learn More

- User

  Learn how to manage Entrance application.md in [Settings](../../how-to/olares/settings/).

- Developer

  Learn more about Entrance properties via [OlaresManifest.yaml](../../developer/develop/package/manifest.md#entrances).