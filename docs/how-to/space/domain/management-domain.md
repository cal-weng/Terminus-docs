---
outline: [2, 3]
---

# Manage Domains

Please [Create a Domain](../../space/domain/host-domain.md) before managing it. Once your domain is set up, you can **configure email invitation rules for organization members** and invite members to bind their own organization **Olares ID** via email.

## Set Email Invitation Rules

![alt text](/images/how-to/space/set_rule.jpg)

Most companies use a standard domain suffix for their team members' emails, like A@myteam.com for person A or B@myteam.com for person B. However, sometimes, team members might use emails in different domains. To accommodate these scenarios, we provide two types of rules for adding organization member emails:

- **Fixed Email Suffix**: In this case, your organization uses a corporate domain suffix for all team member emails, and you can enter that suffix as specified in the rule. Any emails that match the specified suffix will be eligible to bind as the organization's **Olares ID**.

- **Specified Email Address**: If your organization doesn't have a corporate email suffix, you can use this rule. You need to manually add the email address for each member of the organization.

:::info NOTE
- Currently, **NLY Gmail or Google Workspace emails are supported** for both rule types.
- Members and emails that have been bound to the **Olares ID** will appear in the member list and cannot be deleted.
- Emails that are manually added and have not been bound to the **Olares ID** will also be displayed in the list, shown as unbound status. Unbound emails can be deleted.
:::

## Manage Members

![alt text](/images/how-to/space/management_members.jpg)

### Add a Member

To add a member:

1. On the domain management detail page, manually add members to the organization by entering their email address.
2. Notify users to use their email addresses to [bind as the organization's Olares ID](../../larepass/account/index.md#organization-olares-id).

### Remove a Member

If a member's email is unbound from the **Olares ID**, you can remove it from the list. However, if a member has finished binding to the organization's Olares ID, you won't be able to remove it.