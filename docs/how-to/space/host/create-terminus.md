---
outline: [2, 3]
---

# Create Terminus

To create a Terminus, please first confirm your account type. Visit [account](../account.md#account-type) to learn more about your account information.

The **Host Service** of Terminus is in an invite-only beta phase. To use the cloud-based Terminus, please contact us to get an invitation. If invited, log in to [Terminus Space](https://space.jointerminus.com/) by scanning the QR code using TermiPass and select the second option on the **Cluster** page to start creating your Terminus.

![alt text](/images/how-to/space/create_terminus.jpg).

To install the self-hosted version of Terminus OS, refer to [installing Terminus](../../terminus/setup/install.md).

## Configure the Environment

Follow these steps to configure the environment:

![alt text](/images/how-to/space/basic_configuration.jpg)

1. Select the cloud service provider and their data center location.
2. Choose the hardware configuration for the instance.
3. Choose the Terminus version and the Kubernetes/K3S solution to be installed.
4. After confirming the details, proceed to the next step.

:::tip
If you want to host LLMs, choose the Alibaba Cloud Hong Kong region. At present, it is the only region that offers shared GPU services.
:::

## Review Storage and Network Fees

![alt text](/images/how-to/space/storage_and_network.jpg)

Please review our fees for storage and traffic. Each instance includes a certain amount of free storage and traffic. Exceeding these quotas will incur additional charges.


## Confirm Order

![alt text](/images/how-to/space/confrim.jpg)

Confirm your order and finish the payment. Then, your Terminus will begin to install.

## Monitor Installation Status

![alt text](/images/how-to/space/data_on_panel_during_terminus_creation.jpg)

The creation process takes approximately 10 minutes. During this time, you can view logs and monitor status changes in real-time.

### Status

Usually, the installation progresses through these main stages: **Queuing**, **Installing**, **Waiting for Activation**, and **Running**.

Here is a list of the system statuses:

| Status           | Description                                 |
| ---------------- | ------------------------------------------- |
| Unpaid           | Created and waiting for payment. Can be canceled. |
| Fetching         | Payment made. Waiting to create resources.  |
| Queuing          | Resource creation request submitted.        |
| Pending          | Resources created; waiting for OS installation. |
| Installing       | OS installation in progress.                |
| Restoring        | OS restoration in progress.                 |
| Restore_error    | OS restoration failed (may due to incorrect snapshot password); you can reset password to continue. |
| Restarting       | OS restarting.                              |
| Stopping         | OS machine shutting down.                   |
| Starting         | OS machine starting up.                     |
| Running          | OS running normally. Can be destroyed, restarted, stopped. |
| Stopped          | OS machine stopped. Can be destroyed, started. |
| Errored          | Error, may be due to resource creation or installation error. Can be destroyed. |
| Destroying       | Being destroyed.                            |
| Destroyed        | Destroyed.                                  |
| Canceled         | Canceled, can be actively canceled if unpaid; automatically canceled if the initial bill is not paid on time. |
| Pending activation | Awaiting activation; OS will start running once activated. |

### Log

Click on **Log** to monitor detailed installation information in real-time.

### One Time Password

![alt text](/images/how-to/space/one_time_password.jpg)

When Terminus is in the **Pending activation** state, click the **Activation** button in the top right corner. A pop-up dialog will display the bound **Terminus Name**, **One Time Password**, and **Wizard URL**.

You can use the **One Time Password** to log in to **Terminus**. During activation, you will be asked to change your **Terminus** password in **TermiPass**. See the [activation process](../../terminus/setup/wizard.md) for details.
