---
outline: [2, 3]
---

# Host Your Domain

This guide walks you through creating your own domain for your Terminus on Terminus Space. 

## Create Your Own Domain for Terminus

You can create a domain if it's not already taken. Next, you need to set up the domain.

![alt text](/images/how-to/space/submit_a_domain.jpg)

:::info NOTE
Please make sure you're logged into an account in DID status (i.e., not yet bound to a Terminus Name). For more details, please refer to [Why can't I bind a new domain?](./index.md#why-cant-i-bind-a-new-domain)
:::

### Add TXT Record for Your Domain

![alt text](/images/how-to/space/txt.jpg)

To confirm your domain ownership, please add the `TXT` record as guided in your domain settings. After adding the `TXT` record, wait for our verification process. Once verified, the domain status will update automatically.


### Add NS Record for Your Domain

![alt text](/images/how-to/space/ns.jpg)

Adding `NS` information for your domain allows **Terminus Space** to configure **DNS**. Follow the guide to add `NS` records in your domain settings. After adding the `NS` record, wait for our verification process. Once verified, the domain status will update automatically.

### Await Domain's Verifiable Credential

![alt text](/images/how-to/space/awaiting_domain.jpg)

Apply for the domain's **Verifiable Credential** through the **TermiPass** mobile app. This ensures that your **Terminus Name** has complete control over the **Domain**. You can configure the email rules after the submission to the blockchain.

### Await Rule Configuration

Please refer to [Managing Domain](./management-domain.md).

## Domain Status and Processing

After submitting a domain name, several steps are necessary to validate the entered domain.

The table below explains different domain statuses and the corresponding actions required:

| Status                                    | Action Required                         |
| ----------------------------------------- | --------------------------------------- |
| Awaiting TXT record configuration         | Add a TXT record                        |
| Awaiting NS record configuration          | Add NS records                          |
| Awaiting the application for the domain's Verifiable Credential | Complete blockchain domain application on mobile |
| Awaiting submission of the domain's Verifiable Presentation | Complete blockchain domain application on mobile |
| Awaiting rule configuration               | Set up email invitation rules for organization members |
| Binding                                   | Wait for binding with Terminus, you can access details page |
| Allocated                                 | Bound to Terminus, you can access details page  |
