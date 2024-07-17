---
outline: [2, 3]
---

# Manage Terminus

This page introduces Terminus management tasks in **Terminus Space**, such as monitoring system data, adding worker nodes, and handling cloud services.

## View Panel Data

To view system data through **Terminus Space**:
1. In your Terminus, navigate to **Settings** > **Integration**, bind your Terminus Name with your Terminus Space account. This action will authorize Terminus Space to access your system data.
2. Log into **Terminus Space**. 
3. You can find the system panel on the **My Terminus** page, where you get insight into storage usage and traffic consumption.

    ![alt text](/images/how-to/space/my_terminus.jpg)


View [Integration](../../terminus/settings/integration.md) for more information.


:::info
If you're using **Self-Hosted Terminus**, you need to pay attention to the traffic data for **intranet penetration** and the **storage usage** by backup services. This is because if you are using these services, you may be charged based on usage.
:::


## Add Worker Nodes

If you are using Terminus in the cloud, you can add **Worker Nodes** for better performance.

1. Click the **More Options (...)** button in the upper right corner, and select **Add Worker**.
2. In the following guide page, choose the hardware configuration option as needed.
3. Review fees for storage and traffic. 
4. Confirm the order and submit.

## Return Terminus

If you no longer need your Terminus services in the cloud, you can return Terminus. To return your Terminus:

1. Click the **More Options (...)** button in the upper right corner, select **Destroy Terminus**. 
2. Confirm the action and settle your current usage:
   - If a refund is applicable, the corresponding amount will be quickly returned to your account balance. 
   - If an additional payment is required, please confirm and settle the payment.

## Shared GPU

We currently do not provide instances that include GPUs. If you have such a need, please get in touch with us.

We offer individual users a shared GPU solution based on rCuda. This solution is effective for applications like Stable Diffusion and costs approximately $0.02 per image. However, it still needs further enhancements for Large Language Models (LLMs).
