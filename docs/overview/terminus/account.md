---
outline: [2, 3]
---

# Account

## Motivation

Terminus was initially developed as a logically single-user system, where each user's Terminus is physically independent, and each person has their own data. However, as development progressed, we quickly discovered the disadvantages of this approach:

- Significant hardware resource overhead, which increases linearly with the growing number of users. Each user requires the independent deployment of redundant system software and middleware, consuming a large amount of memory with almost no load.
- Inability to handle collaborative scenarios. Applications in single-user systems do not support [Cluster Scoped Application](./application.md#cluster-scoped-application), resulting in the abandonment of a vast accumulation of collaborative software in the open-source community.

Furthermore, we expect users to only need to log in to the desktop once to access all applications in the system. In contrast, every application on a phone requires us to log in separately.

We believe that a unified account system will not only help break down data silos between different applications but also enhance the overall security of the system.

Finally, we hope that when applications migrate to Terminus, the required changes to accommodate the new account system will be minimal.

## Unified Account

![Unified Account](/images/overview/terminus/account.jpg)

We have designed an application authentication process under a multi-user system. The figure above is a schematic diagram of the process:

1. After the user logs in at the [Login page](../../how-to/terminus/setup/login.md), all subsequent requests will automatically carry authentication information.
2. Each time a user sends a request, the request will first go through the Authelia service for authentication. 
3. If the authentication information of the request fails the authentication, the application automatically redirects to the [Login page](../../how-to/terminus/setup/login.md), and the user needs to log in again to obtain new authentication information.
4. If the authentication information passes, the [Backend for Launcher (BFL)](https://github.com/beclab/bfl) service will attach the user's basic information and then forward the request to the application service, eliminating the need for the application to handle authentication itself.
5. [Cluster Scoped Application](./application.md#cluster-scoped-application) requires developers to build an extra `Auth Server` to tie the application's account with BFL's account.

:::info
You can refer to some `Auth Servers` developed by the Terminus team: [wordpress-proxy](https://github.com/beclab/wordpress-proxy), [bytebase-proxy](https://github.com/beclab/bytebase-proxy), [gitlab-client-proxy](https://github.com/beclab/gitlab-client-proxy), [gitlab-server-proxy](https://github.com/beclab/gitlab-server-proxy).
:::

## Multi-factor Authentication

Currently, systems that rely solely on passwords for identity authentication are often subjected to a large number of attacks such as `brute force cracking`. Multi-factor Authentication (MFA) has become a popular choice for securing systems and services. Terminus adopts a variety of authentication factors with different security levels to ensure the security of user identity authentication in the system.

- Password
  
  Upon the initial creation of the user, Terminus OS generates a random password for the user to complete the initialization process. After completing the user's identity recognition authentication, the user is required to modify the initial password and adopt a custom password with higher security.

- TOTP

  During the [Terminus Activation](../../how-to/terminus/setup/wizard.md) process, TermiPass saves Terminus OS's Time-Based One-Time Password (TOTP). When users perform sensitive operations such as [login](../../how-to/terminus/setup/login.md), Terminus OS requires users to enter the `one-time two-factor authentication code` generated by TOTP in TermiPass.

## Multiple Accounts

### Role

There are two roles in Terminus OS:

- **Admin**: The user who creates Terminus automatically becomes Admin, who can:
  - [Manage users](../../how-to/terminus/settings/account.md)  
  - [Manage Cluster App](./application.md#cluster-application)
  - Manage Hardware
- **Member**: Users other than Admin.

:::info  
Admins have the right to view and modify the resource usage of all accounts, but they cannot view the data of other accounts.
:::

### Account

Each Terminus OS Account corresponds to a [Terminus Name](../../developer/contribute/snowinning/terminus-name.md) that consists of a local name and a domain name. At the same time, each Terminus OS belongs to one [Domain](../../developer/contribute/snowinning/terminus-name.md#domain). Therefore, Terminus users such as `alice@myterminus.com` will use the local name, `alice`, in the Terminal OS.

## Resource Limit

When creating a new user, Terminus OS needs to allocate CPU and memory resources to each user. 

When a user installs a new application, Terminus OS will check the system's available resources. If there are not enough resources left, installation will not be allowed.

If a new user consumes more than 90% of the allocated resources in real time, Terminus OS activates the protection mechanism. It suspends the two Community Applications that consume the most user resources.

After the user's real-time consumption of resources drops to a reasonable level, you can manually modify the deployment running status in [Control Hub](../../how-to/terminus/controlhub/browse.md#modify-running-status) to resume the suspended applications.

## Learn More 

### Users

- [Use TermiPass to manage Account](../../how-to/termipass/account/index.md)
- [Use Settings to manage the safety of one's account security](../../how-to/terminus/settings/home.md) 
- [Use Settings to manage System Account](../../how-to/terminus/settings/account.md)

### Developers

- [Account System Callback](../../developer/develop/advanced/account.md)