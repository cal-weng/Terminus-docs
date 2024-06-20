---
outline: [2, 4]
---

# Application Management

The Application page allows you to manage installed applications, including 

- [User System Application](../../../overview/terminus/application.md#user-system-application)
- [Community Application](../../../overview/terminus/application.md#community-application)
- [Cluster Scoped Application](../../../overview/terminus/application.md#cluster-scoped-application) (for Admins)

![alt text](/images/how-to/terminus/application.png)

## View Application Status

View the status of your applications. Refer to [application status section](../../../overview/terminus/application.md#application-status) for more information.

![alt text](/images/how-to/terminus/application_details.png)

:::info
[Community Application](../../../overview/terminus/application.md#community-application) can be suspended to free up resources.
:::

## Entrance Management

Entrance controls how users and the public access your applications. You can learn more about [Entrance](../../../overview/terminus/network.md#entrance) here.

![alt text](/images/how-to/terminus/application_entrance.png)

Entrance Management involves configurations of endpoints and access policies. 

### Configure Endpoints

Endpoints define how your application can be reached. Refer to[Entrance Endpoint](../../../overview/terminus/network.md#endpoint) for more information.

![alt text](/images/how-to/terminus/application_domain_setup.png)

You can define the following for your endpoints:

- **Custom Route ID**. Replace the default route ID with a custom one. For example, replace `de463205` with `wordpress`.

- **Custom Domain**. Assign a custom domain to the Entrance. 

  1. Click the **+** button, and enter the custom domain name in the popup window. 
  
      ![alt text](/images/how-to/terminus/application_third_party_domain.png)

  2. Follow the instructions in the pop-up dialog to add a CNAME record on the domain hosting website.

      ![alt text](/images/how-to/terminus/application_activation_third_party_domain.png)
  
  Once the DNS record is activated, the status of the custom domain will change to **Activated**. This indicates the setup is completed.

:::info
If you want your friends to access this URL without logging in, set **AuthLevel** to "Public".
:::

### Configure Access Policies

Access Policies control how an application can be accessed. Each application can have more specific access policies for different paths within it.

For instance, sensitive operations might require a [One Time Password](../../../overview/terminus/account.md#multi-factor-authentication).

- **AuthLevel** (Application-Wide):
    Specifies whether an application requires authentication.
  - **Public**: Anyone can access the application.
  - **Private**: Users need to log in to access the application.

- **Second Factor Model**(Available when **AuthLevel** set to "Private")
  - **One Time**
    - **True**: A One Time Password is always required, even after logging in.
    - **False**: Access is granted directly after logging in.
  - **Valid Duration**: (Available when **One Time** is True) 
    Specifies how long the One Time Password remains valid. A value is 0 means the One Time Password is required for each access).
- **Sub-Policies** (Path-Specific) 
    Define access rules for specific sub-paths within your application matched using regular expressions. Click the **+** icon to add sub-policies. Options include:
  - **Public**: No authorization required.
  - **One Factor**: Login password required.
  - **Two Factor**: Login password and a second verification code required during [Login](../setup/login.md). Refer to the Second Factor Model section above.
    
    ![alt text](/images/how-to/terminus/application_add_sub_policies.png)
