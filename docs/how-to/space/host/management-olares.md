---
outline: [2, 3]
---

# Manage Olares

This page introduces Olares management tasks in **Olares Space**, such as monitoring system data, adding worker nodes, and handling cloud services.

## View Panel Data

To view system data through **Olares Space**:
1. In your Olares, navigate to **Settings** > **Integration**, bind your Olares ID with your Olares Space account. This action will authorize Olares Space to access your system data.
2. Log into **Olares Space**. 
3. You can find the system panel on the **My Olares** page, where you get insight into storage usage and traffic consumption.

    ![alt text](/images/how-to/space/my_olares.jpg)


View [Integration](../../olares/settings/integration.md) for more information.


:::info
If you're using **Self-Hosted Olares**, you need to pay attention to the traffic data for **intranet penetration** and the **storage usage** by backup services. This is because if you are using these services, you may be charged based on usage.
:::


## Add Worker Nodes

If you are using Olares in the cloud, you can add **Worker Nodes** for better performance.

1. Click the **More Options (...)** button in the upper right corner, and select **Add Worker**.
2. In the following guide page, choose the hardware configuration option as needed.
3. Review fees for storage and traffic. 
4. Confirm the order and submit.

## Return Olares

If you no longer need your Olares services in the cloud, you can return Olares. To return your Olares:

1. Click the **More Options (...)** button in the upper right corner, select **Destroy Olares**. 
2. Confirm the action and settle your current usage:
   - If a refund is applicable, the corresponding amount will be quickly returned to your account balance. 
   - If an additional payment is required, please confirm and settle the payment.

## Shared GPU

We currently do not provide instances that include GPUs. If you have such a need, please get in touch with us.

We offer individual users a shared GPU solution based on rCuda. This solution is effective for applications like Stable Diffusion and costs approximately $0.02 per image. However, it still needs further enhancements for Large Language Models (LLMs).
