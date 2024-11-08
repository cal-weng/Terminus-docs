# Billing

Olares partners with Stripe for secure payment processing. Your invoices and receipts will be sent via email, allowing you to keep records for analysis. If you have any questions during the payment process, please contact support.

## The scope of billing

The following services or products are billed:

- **Hosted Olares**: Prepaid product required for setting up an Olares on a cloud provider like AWS or GCS. Pricing varies depends on the provider you choose. 
- **Host instance traffic**: Postpaid charges for external traffic generated by cloud hosting out of assigned regions.
- **Worker instance**: Adding a Worker node to a hosted Olares also incurs monthly charges. Charges will be combined to the monthly bill.
- **Cloud storage**: Postpaid product storing system data via JuiceFS. Billed based on usage at the end of the billing cycle.
- **Cloud backup/restore**: Backs up host data to public storage. Billed based on usage at the end of the billing cycle.
- **Cloudflare tunnel (FRP) traffic**: Postpaid for traffic incurred by self-hosted Olares when services are accessed via public links.
- **GPU unit**: Prepaid for GPU-related services. Charges are deducted from prepaid units based on usage.


### Bill generation and payment scenarios

The following actions generate bills:

- **Creating an Olares in the cloud**: An invoice is generated immediately after you select a cloud provider and configuration. Payment is required for installation to begin.
- **Adding/Removing workers**: Bills are generated for adding workers based on the remaining time in the billing period. Similarly, refunds are calculated when removing workers.
- **Restoring a snapshot**: Equivalent to creating a new Olares, with monthly charges applied.
- **Destroying an Olares**: Fees are settled up to the destruction date. Refunds are processed as applicable.

The monthly bill updated once per month. It includes the base subscription fees as well as any additional charges incurred during the month, such as adding a Worker, or extra traffic and storage fees.

## How fees are deducted monthly

Olares operates on a monthly billing cycle:
- **Automatic deduction**: Your first payment will authorize automatic deductions, with the first payment method set as default. You can disable auto-deductions from the control panel if you prefer to pay manually, but make sure to settle your bills on time to avoid service interruption.
- **Payment validity period**: For each purchase, you'll receive a bill valid for 24 hours.


## Use promotional credits or coupons

We distribute trial credits or coupons through promotions. 

- Once you have received trial credits, you can view them in **Billing** > **Balance History**, and apply directly to specific products when you pay. 
- Once you receive a promotional coupon codes, you can redeem them in **Billing** > **Coupons**. It could be a discount to your plans, plan subscriptions, Olares memberships, and more.

::: tip NOTE
Trial credits or coupons are non-refundable. If you request a refund, the system will only refund your actual payment.
:::

## FAQs

### Will I be charged if someone accesses the WordPress site deployed on Olares?

Yes, charges will occur from both Cloudflare for the traffic going through Cloudflare FRP tunnel. It mainly helps to hide the real IP of Olares and provides security protection against Distributed Denial of Service (DDoS) and other threats. If you host Olares on the cloud, traffic fee from your chosen vendor will apply. 


### What happens if my bill is less than $1?

If your total bill is under $1, it won't trigger a card charge. Instead, this amount will be added to your balance and rolled into the next bill.

### How do I resolve a negative balance?

A negative balance doesn't always mean you owe money. If you have a negative balance, check the **Billing** > **Balance** section for details. Pay any outstanding amounts to avoid service interruptions.