# Network

Olares provides users with a barrier-free but secure and versatile network solutions. This documents covers the key networking concepts related to application access.

## Entrance

Each Olares application can have one or more entrances that serve as access points. There are three types of entrances:

- **Public entrance**
  - Provides external services such as blogs, social media, etc. 
  - Accessible without authentication 
  - Basic security through Cloudflare

- **Private entrance**
  - Provides services exclusively for individual users, families, or teams
  - Suitable for readers, entertainment, productivity tools, desktop applications, etc.
  - Requires [authentication](account.md#multi-factor-authentication-mfa) for access

- **Internal entrance**
  - Functions similarly to private entrance
  - No authentication required when accessing applications through local network or VPN

## Endpoints

  An endpoint is the access address or point where users interact with an application. Simply put, it's the URL you enter in your browser's address bar to access a specific Olares application or its features. 

  A typical Olares application endpoint follows this format:

    https://{routeID}.{domain}

For example: `https://vault.bob.olares.com`, where

- `vault` is the route ID for a system application.
- `bob.olares.com` is derived from the Olares ID `bob@olares.com`.

## Route ID

A route ID is a unique identifier used to identify specific applications or application entrances. The default route IDs are automatically generated by the system according to the following rules:

- System applications
  - Use predefined memorable Route IDs
  - Examples: `desktop` (for Desktop), `market` (for Market)
- Community applications 
  - Use an 8-character random string + entrance index (starting from 0)
  - Example: For an application with Route ID 92d76a13 and two entrances:<br>
    First entrance: `92d76a130`, and the access URL is `92d76a130.bob.olares.com`

::: tip NOTE
- DomainName is derived from Olares ID.
- Entrance index refers to the position of entrance in multiple entrances defined in [`OlaresManifest.yaml`](../../developer/develop/package/manifest.md).
:::

## Olares internal network

Olares implements a layered proxy routing design in its gateway architecture. Traffic flows through multiple layers:

`cluster` -> `user` -> `application` -> `service component`.

![alt text](/images/overview/olares/image4.jpeg)

Inside the application, Olares has multiple layers of security.

- **Namespace isolation**
  - Each application operates in its exclusive namespace
  - All resources are namespace-confined
  - Applications cannot connect "ClusterRole" to "ServiceAccount"
  - Cross-namespace resource access is prohibited

- **Network policy controls**
  - Each namespace has dedicated network policies
  - Incoming network requests are restricted to cluster applications and system applications of the user
  - User-level network isolation:
    - Applications isolated between users 
    - Third-party applications isolated within user space
- **Pod restrictions**
  - Pods cannot use "hostNetwork" service or "NodePort" service
  - Traffic access requires declared entrance service and system-provided entry proxy
  - The Pod declared as entrance will be forced to join Envoy's sandbox Sidecar to authenticate and authorize incoming traffic.

## See also
- [Customize domain name for application](../tasks/access-settings.md#custom-domain-name)
- [Access Olares via VPN](../tasks/private-network.md)



