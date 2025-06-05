---
description: Learn how to change FRP (Fast Reverse Proxy) options in Olares Settings to expose internal services securely.
---
# Change FRP

Fast Reverse Proxy (FRP) is a high-performance reverse proxy tool designed for internal network penetration, enabling users to expose local services to the public internet.

Olares offers three FRP options to accommodate different geographic locations and network environments:

- **Cloudflare Tunnel** – Recommended for most users worldwide.

- **Olares Tunnel** – Optimized for users in mainland China.

- **Self-built FRP** – Ideal for users with their own FRP servers.

## How to change your FRP option

1. Open Settings, then navigate to **System** > **Network**.

2. Choose your preferred FRP option. If you select Self-built FRP, you’ll need to provide the server address, port, and authentication method.

3. Click **Save** to apply your changes.

::: warning Change with caution
Olares sets a default FRP option during installation. Changing this setting may affect connectivity—proceed with caution.
:::
