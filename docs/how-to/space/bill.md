---
outline: [2, 3]
---

# Bill

We have partnered with [Stripe](https://stripe.com/) to process all your payments. In most cases, we will send your invoices and receipts via email. You can keep these records and use them for fee analysis. If you have any questions during the payment process, please feel free to contact us.
- We only collect limited information about your payment. For bank cards, we only store non-sensitive details such as the `last4`. **Stripe** securely stores most of the information.

## Fee Deduction Method

There are following aspects to be noted about the fee deduction method:

- **You are billed monthly**. <br>
   For example, if you purchase resources on April 18, you will be billed on the 18th of every month. Your next bill will arrive one calendar month later. If your first purchase is on January 31, since February doesn't have 31 days, your next bill will be on the last day of February, either the 28th or 29th, depending on whether it is a leap year.

- **Automatic Deductions** <br>
   After you make the first payment with Stripe, it means that you have authorized automatic deductions. The payment method you used for the first time will be set as the default payment method, which will be used by subsequent automatic deductions. You may refer to [Stripe Automatic charging](https://docs.stripe.com/invoicing/automatic-charging) for more details. If you prefer not to have automatic deductions, you can delete or modify the default payment method in the control panel. if you remove the default method, you'll need to manually pay the next bill.

- **Payment/Deduction Validity Period**<br>
   After your purchase, you'll receive a bill valid for 24 hours. If it isn't paid within that time, it will be automatically cancelled. For recurring bills, we'll create an invoice on the next billing day and attempt to deduct the amount an hour later. If the attempt fails, we'll try again on the 1st, 3rd, 5th, and 7th days after. Each attempt will create an invoice sent to your email, where you'll be able to pay manually via a link.

## Trial Funds

- **Obtaining trial funds**<br>
   We will send trial funds to users through promotional activities. Once received, users can view them in the balance history on the Cloud platform.

- **Usage of trial funds**<br>
   You can use trial funds to pay for certain products. Let's say you're a new user and you get $20 in trial funds. Then you create an OS cluster that costs $49. The system will take your $20 trial funds first, so you only have to pay the remaining $29. The system will automatically use all available trial funds.

- **Refund of trial funds**<br>
   By default, trial funds are non-refundable. For instance, if you request a refund after a week, as in the case above, the system will use the trial funds to pay the bill first and then calculate the refundable amount based on the refund formula. It will not exceed the actual payment amount (up to $29).


## Billing Products

Terminus OS currently offers the following billable products:
- **Host instance fees**<br>
   To set up a **Terminus**, you need a host, which could be on AWS or GCS. This is a **prepaid product**. You must pay upfront, and then you'll receive a cloud host resource. We'll install **Terminus** on this host, and you can use this machine after login.

- **Cloud storage**<br>
   **Terminus** gradually stores system data on a cloud-based S3 bucket through JuiceFS. This is a **postpaid product**. On the second billing day, we'll generate a detailed cost based on your storage usage during the billing cycle. You'll see this on your second bill.

- **Cloud backup**
   **Terminus** includes a backup feature. If you choose cloud storage, you can back up the host's data to our public storage cloud. Like cloud storage, this is a **postpaid product**.

- **Host instance traffic**<br>
   Cloud hosting can incur traffic charges when it generates external traffic. Here, "external" refers to internet usage outside the assigned region, which can happen in various scenarios. Like cloud storage, cloud hosting is a **postpaid product**, where you receive a bill based on your usage.

- **Cloudflare Tunnel (or FRP) traffic**<br>
   If you install the OS in an internal network environment and deploy some services to the public internet using the FRP scheme, it will generate FRP traffic fees when some one visit your services via links. This is also a **postpaid product**.

- **GPU unit**<br>
   We have not yet launched GPU billing-related features. When you use our GPU-related services, it will be a **prepaid product**. You need to purchase a certain number of units in advance, and the system will deduct from these units based on your usage.


## Minimum Billable Duration and Metering Rules
- **For time-charged products** <br>
   For prepaid products, such as instance resources, when you request to purchase, the smallest billing unit is 1 minute (less than 1 minute is calculated as 1 minute). For example, if you add a worker in the middle of the billing cycle, it will calculate the remaining time in minutes and then calculate the bill amount.
- **For metered-charged products**<br>
   the billing rules are more complex. We are still organizing this, and it may require a separate page to describe.

## Generate Bill And Pay
The following scenarios will generate bills, and payment may be required:

- **Creating a Terminus in the cloud**<br>
   Depending on the cloud service provider you choose and the different configurations in various regions, it will have different pricing. Once you select and click to create, we will immediately generate an Invoice. After you complete the payment, the Terminus will begin to install.
   
- **Adding a Worker to a Terminus in the cloud** <br>
   also incurs monthly charges. After the initial period, these charges will be combined into a one monthly bill.

- **Restoring a snapshot to the cloud** <br>
   This is equivalent to creating a new Terminus in the cloud, and also incurs monthly charges.

- **Destroying a Terminus in the cloud**<br>
   We will immediately settle the fees up to the current date. The amount of fee will be adjusted accordingly.

- **Monthly bills, pay as you use**<br>  
   The monthly bill, updated once per month, includes the base subscription fees as well as any additional charges incurred during the month, such as adding a Worker, or extra traffic and storage fees.

## View Bill

We update the billing information automatically every month. If there are any additional charges, you will be required to make the necessary payments.

A bill includes the following information:

- **Unpaid Fees**, if there are any unsettled fees in this month, they will be shown in this section. If there are none, this section won't be displayed.

- **Upcoming bill**, this section shows the bill for the upcoming month. It includes the paid subscription fees for the current month, as well as any additional traffic and storage fees incurred during the month.

- **Payment method settings**, here you can add bank cards for payment and set a default payment card. If you have added multiple bank cards, the default payment card will be used first. If the payment doesn't go through, we'll try using other cards.

- **The most recent complete monthly bill**, this section displays the last month's bill. It includes the paid subscription fees, and any extra traffic and storage fees incurred.

- **A list of historical monthly bills provided**, This section shows all previous monthly bills, sorted by month. You can view the details of each month's spending.


## Historical Bill
- The system will summarize and record your payment based on the billing cycle, which is set to monthly.
- You can view detailed monthly bill data. This includes fees for instance resources used during the month, as well as any additional traffic and storage fees. The usage period and amount for each product will be recorded.


## Example Of Bill Amount
Here are some typical scenarios to explain the logic behind bill amounts:

- **Creating a cluster**<br>
   the system will generate a bill for the prepaid products included in the cluster configuration you selected. After you complete the payment, the Terminus will begin to install.

- **Adding a worker to a cluster**<br>
   the system calculates the total duration from the current time to the end of the current billing period, then generates a bill amount based on the ratio of the total time to a billing cycle. For instance, if your first billing day is March 15 and you apply to add a worker priced at $29 on March 20, the remaining duration is from March 20 to April 15, which is 26 days (the minimum duration is one minute, less than one minute is rounded to one minute). The bill amount would be approximately $24.32, which you need to pay to start the application and addition of the worker.


- **Removing a worker from a cluster**<br>
   similar to adding a worker, the system first calculates the remaining usable duration from the current time to the end of the current billing period (the minimum unit is one hour, any fraction over an hour is rounded up to one hour). Continuing the previous example, if you want to remove the worker on March 25, the remaining time is from March 25 to April 15, which is 21 days. The refundable amount would be calculated as $24.32 / 26 * 21 ≈ $19.63. The system will refund this amount to your balance or bank card according to your choice (trial funds or coupons are not refunded, and the refund is based on the actual payment amount).

- **Adding an SSD drive**,<br>
   similar to adding a worker, but involves cross-month billing calculations. Since the billing unit for storage is per month per GB per hour, if billing spans over two months, the total time for the cost difference is calculated as (current time to the end of this calendar month) + (start of the next month to the end of the billing period). After calculating the duration, the billable amount is determined based on the principle that the minimum time unit is one hour.

- **Uninstalling an SSD drive**<br>
   after the SSD is uninstalled, it will be destroyed, and the remaining payable amount will be refunded. The duration calculation rule is similar to that of adding an SSD drive. After calculating the remaining unused duration, the refund amount is calculated based on the minimum unit of one hour (fractions less than one hour are rounded to one hour), and the refund is processed according to your selected refund method.

- **Destroying a cluster**<br>
   when a cluster is destroyed, the refund amount is first calculated based on the logic of removing a worker from the cluster. Then, the amount paid for prepaid services like storage traffic and other metered prepaid products used during the period is calculated. Finally, if the refundable amount exceeds the payable amount, the surplus is refunded by the selected method; if equal, there is no adjustment; if less, it means the payable amount exceeds the refundable amount, and no refund occurs. This result is recorded in your balance, and it will be accounted for in your bill when you create a new cluster or purchase other products next time.

## Arrears

- A negative balance does not always indicate debt; it could be a result of regular billing.
- If the system fails to automatically deduct payment during a cluster's billing period, and you haven't made the payment manually, your account might be marked as overdue.
- If arrears occur, an attempt will be made to back up your cluster before the instance resources are deleted.
- You'll receive email notifications at each stage. You can click the Invoice link in the email to make a payment anytime.


## View Balance History
- Balance includes trial funds and refunds from the cluster.
- It may increase due to promotional activities and refunds, and it decreases when applied to bills.
- You can use the balance history to track the acquisition and usage of each balance transaction, and its associated bill.

## Explanation Of Bill Amount Being Too Small
- Since Stripe charges a fee for each transaction, we have set a minimum amount for payments.

- If the bill amount is less than $1, we actually do not initiate a bank card charge but record it on your balance. For instance, if an Invoice amount is $0.45, when you attempt to pay, it will return successful directly, but your balance will be debited by $0.45. This amount will accumulate and be included in your next bill.

::: tip
- During the invited-only beta phase, we **do not** charge actual fees.
- Please use the services responsibly to enhance our user experience and optimize pricing.
- We will provide a free quota for both **Cloud-based and self-hosted Terminus**.
- For Self-hosted users, the main costs may arise from traffic and backup space used.
:::

## FAQ

### 1. Will I be charged if I watch a movie?   

   Generally, watching a movie at home using a local domain doesn't generate external traffic, so there are no fees. Similarly, if you access your home devices from outside using P2P mode, the traffic bypasses Space servers, so there are no fees either. However, If you cannot access your home devices directly from outside and must use DERP for relay, it may incur charges. If you encounter this situation, please contact us.

### 2. Will I be charged if someone accesses my deployed WordPress site?
   Yes, charges will occur because both Cloudflare and cloud vendors charge us.
   
   The costs include two parts: 
   1. The fee for traffic going through Cloudflare, which mainly helps to hide the real IP of Terminus and provides basic security protection against Distributed Denial of Service (DDoS) and other threats. 
   2. The external traffic fees charged by your chosen cloud vendor.
   
   Honestly, we find the costs for these two services to be quite high, and we are working on optimizing these costs. If you have any ideas, feel free to contact us.