---
outline: [2, 3]
---

# Wizard

You can use Terminus in one of two roles:

- Admin: Build your own Terminus to enjoy its full capabilities.
- Member: Ask your Admin to set up an account for you. As a member, you can access most features and collaborate with other users.

Depending on your role, you may get the initial system setup information as described below:

- As an Admin, the location of the Wizard URL and the One-Time Password for the initial login depends on the method of Terminus installation:

  - For [self-hosted servers](./install/), please refer to the installation guide for your chosen system to confirm whether you are using the internal network Wizard URL.
  - For hosting on Terminus Space, refer to [Creating Terminus in a Space](../../space/host/create-terminus.md#one-time-password).

- As a Member, please request your Wizard URL and the one-time password for the initial login from the Admin.

## Open Wizard in Browser

Enter the Wizard URL in your browser. The welcome page, as shown below, will appear. Press any key to continue.

![alt text](/images/how-to/terminus/open_wizard_in_browser.jpg)

## Enter the Password

1. Check if the Terminus Name is correct.
2. Enter the one-time password and click **Continue**.

![alt text](/images/how-to/terminus/enter_password.png)

If the password is not correct, please review the previous step and enter again.

:::warning
If you enter the incorrect password more than **3** times, your account will be temporarily locked. You will need to wait **5 minutes** before you can attempt to log in again.
:::

## Select the Language

Select the system language. Currently, only English is supported.

![alt text](/images/how-to/terminus/select_language.png)

## Select A Reverse Proxy (Optional)

If you are using a **self-hosted server**, you may see this step.

![alt text](/images/how-to/terminus/select_a_reverse_proxy.jpeg)

- If you are using an **internal network Wizard URL**, the [Cloudflare Tunnel](../../../overview/terminus/network.md#setup-reverse-proxy) will be enabled by default.

- If you are using a **public Wizard URL**, you can skip setting up a reverse proxy.

## Activate Terminus

:::info
If you are an **Admin** and are using a **self-hosted server** with an **internal network Wizard URL**, both TermiPass and Terminus must be on the same internal network for TermiPass to access Terminus.
:::

1. Open **TermiPass**, which should take you to this page.

![alt text](/images/how-to/terminus/activate_terminus.jpg)

2. Click the **Scan the QR code** button to scan the QR code on the Wizard page and complete the activation.

   - If your **Terminus Name** has previously been owned and the mnemonic phrase has been securely stored, you can import the mnemonic phrase, and your TermiPass should jump to the above interface. Click the **Scan the QR code** button to complete the activation process.

   - If your **Terminus Name** has been previously activated, but Terminus is no longer available, you need to reactivate Terminus. Follow the on-screen guide you through the reactivation process.

## Initialize Terminus

This is the initialization setup stage, where ideally, no errors should occur.

![alt text](/images/how-to/terminus/initialize_terminus.png)

### Network Configuration

This is the DNS configuration and HTTPS certificate application stage.

If an error occurs, please retry in TermiPass.

![alt text](/images/how-to/terminus/network_configuration.png)

### DNS Resolution

At this stage, the system is waiting for DNS to take effect.

If an error occurs, please retry in TermiPass.

![alt text](/images/how-to/terminus/dns_resolution.png)

### Reset Password

Use **TermiPass** on your mobile phone to reset the login password for Terminus.

![alt text](/images/how-to/terminus/reset_password.png)

:::warning
Please note that the new password should not be the same as the One Time Password for the initial login.
:::

Once the password is successfully set, the one-time password for initial login will no longer be valid. Please store the new Terminus login password securely.

After successful setup, the **TermiPass** app will automatically go to the home screen, and the Wizard will redirect you to the [login page](../setup/login.md).