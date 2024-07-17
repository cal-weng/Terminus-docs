---
outline: [2, 3]
---

# Managing Shared Vault for Your Team

 **Shared Vault** is a powerful tool for organizing, managing, and sharing sensitive data among users. It's ideal for various organizations, from family accounts to teams, companies, or any group requiring secure storage and information sharing among multiple members. A Shared Vault allows precise control over who can access, edit, or share specific information.

## Members & Roles

There are three different roles in a **Vault Team**:

- **Owner** is the user who created the team, usually the administrator who initialized Terminus OS. Owner can add, suspend, or unsuspend members and appoint administrators.

- **Administrators** can create **Shared Vault** items and assign read/write permissions to members.

- **Regular Members** are members who are invited to a **Shared Vault** by the owner or administrators their read/write permissions.

## Join a Team

To use the Shared Vault, you must join a Vault Team first.

At Terminus, all administrators and users of a Terminus cluster are automatically included in one **Vault Team**. For security reasons, each new member must go through a simple process to confirm their membership and ensure secure access:

1. System automatically sends an invitation to each new member to join the **Vault Team**.
   
   ![image](/images/how-to/terminus/vault_invite.jpg)

  - **Administrators**: You will see the invitation code sent to new users displayed on the interface.
   - **New Users**: Check for the invitation code to join the Vault Team, and enter the code in the popup window and submit. This means you have accepted the invitation. Contact your administrator if you haven't got the invitation code.

2. After the invitation is accepted:
   - **New Users**:, inform your system administrator through any available communication channel. 
   - **Administrators**: Once notified, manually add the new user to the team management page within the Vault.

3. As a new member, your default role will be a **Regular Member** in the **Vault Team**. It means that you will not be able to create a **Shared Vault**. Please wait for the administrator to add you to a **Shared Vault**.

### Suspend Members

:::Info
You must be an **Owner** to perform this operation.
:::

Suspended members maintain their assigned permissions and group membership but are unable to receive any updates to the vault data or make modifications.

- To **suspend a member**, select the user from the member list, click the **More Options (...)** button in the top right corner of the member page, and choose **Suspend**.

- To **unsuspend a member**, select **Unsuspend** from the same place. Afterwards, their membership must be reconfirmed in the same manner as when they initially joined the organization.

### Appoint Admins

:::Info
You must be an **Owner** to perform this operation.
:::

To appoint a member as an administrator:

1. Select the member from the list. 
2. Click the **More Options (...)** icon in the top right corner of the member page, and choose **Make Admin**.  

To **remove an administrator**, simply select "Remove Member" from the same place.

## Manage Shared Vault

:::Info
You must be an **Admin** to perform these operations.
:::

By default, a **Shared Vault** will not be created automatically. It requires the **administrator** to create it manually.

### Create a Shared Vault

To create a **Shared Vault**:

1. Navigate to **My Team** > **Vaults**, then click the **+** icon at the top to create a new **Shared Vault**. 
2. Add multiple members to this **Shared Vault** and set their read/write permissions as needed.
3. Click **Save** to apply the changes.

### Edit a Shared Vault

To make edits on the created Vault:

1. Navigate to **My Team** > **Vaults**, select the **Shared Vault** you want to edit.
2. Make edits such as adding or removing members and setting members' read/write permissions. 
3. Click **Save** to apply the changes.

### Delete a Shared Vault

To delete a **Shared Vault**:
1. Navigate to the **Vaults** page and select the vault you want to remove. 
2. Click on the **More Options (...)** button located in the upper right corner, then choose **Delete** in the drop-down menu. 
3. Type the word **DELETE** in pop-up dialog to confirm your action.

:::warning
Deleting a vault is irreversible! All data within the vault will be destroyed.
:::

### Manage Permissions

Vault offers a simple yet powerful permission system that allows you to define who can read, edit, and manage the **Shared Vault**. You can assign read/write permissions to members in the **Vault Team**.
