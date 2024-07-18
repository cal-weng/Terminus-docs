---
outline: [2, 3]
---

# Account Management

The **Account** page allows Admins to manage user accounts within the organization. This includes viewing user roles, account status, creating new accounts, and managing existing accounts.

## View User List

The user list displays all existing users in your Terminus.

- **Role**: Indicates whether a user is an Admin or a Member.
- **Status**: Shows if an account is active or inactive. Accounts with a **Not activated** label means the account has been created but not yet activated through the Wizard process.

## Create Account

Admins can create new user accounts by following these steps:

![alt text](/images/how-to/terminus/settings_create_account.png)

1. Confirm the **Terminus Name** for the new user. If they don't have a Terminus Name yet, direct them to the [Getting Started](../../../overview/introduction/getting-started/) guide for application instructions.

   :::info
   Make sure the user's **Terminus Name** domain matches the domain of this Terminus.
   :::

2. In the **Account** page, click the **Create Account** button to open the Create Account dialog.  
3. Enter the user's Terminus Name (local part only, e.g., "john" for "john@example.com").
4. Set the CPU and memory usage quotas for the user. You can also adjust them later in the [User Details](#set-resource-limit) page.
  
  :::info
    Minimum resource allocation recommendations: <br>
    **CPU**: 1 core<br>
    **Memory**: 3G
  :::

5. A dialog will appear with the new user's Terminus Name, initial password, and activation Wizard link. Copy the One Time Password and the Wizard link and send them to the new user.

  :::info
  If member users lose the activation link or initial password, you can get them at the bottom of the inactive account details page. You can also reset the initial password there.
  :::

## Account Info

The Account Info page shows details of individual accounts and provides options for managing them.

![alt text](/images/how-to/terminus/settings_user_info.png)


The account options available for Admin vary depending on the account type.

| Account Type | Actions Available |
|-----------|---------|
| **Admin** | Change password |
| **Activated Member** | - Change password<br>- Adjust CPU and memory usage quotas<br>- Delete the user |
| **Inactive Member** | - Change password <br>- Display the Wizard URL <br>- Adjust the CPU and memory usage quotas <br>- Delete the user |

### Change Password

If your **Members** forget their passwords, you can **reset** them here as the Admin and share with the member.

### Set Resource Limit

You can adjust and configure the CPU and memory usage quotas for a member user here.

:::info NOTE
The CPU and memory usage quotas for an individual user must not exceed the cluster's CPU and memory limits.
:::

### Delete User

Click on **Delete User** to remove a Member.  

:::info NOTE
Deleting an activated user will result in the loss of **Terminus** data. However, the **Vault** data stored in **TermiPass** will not be lost.
:::
