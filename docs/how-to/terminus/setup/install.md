---
outline: [2, 3]
---

# Install Terminus

## Hardware Requirements
:::tip
You need a device running the Linux system, with **8GB** of RAM and **100GB** of disk space.
:::

Tested Linux versions include:

| Linux Version | Architecture |
| -------------- | ------ |
| Ubuntu 24.04   | x86-64, amd64 |
| Ubuntu 22.04   | x86-64, amd64 |
| Ubuntu 20.04   | x86-64, amd64 |
| Debian 12  | amd64 |
| Debian 11  | amd64 |

We will continue to update this table. If you have completed an installation on a Linux version not listed, or if you encountered any issues, please don't hesitate to contact us.


## Install

- Install the latest version of Terminus OS

    ```sh
    curl -fsSL https://terminus.sh |  bash -
    ```

- Install a specific version

    ```bash
    VERSION="1.3.0"      # Version of Terminus to install
    curl -LO https://github.com/beclab/terminus/releases/download/${VERSION}/install-wizard-v${VERSION}.tar.gz

    mkdir -p install-wizard && cd install-wizard && \
    tar -xzvf ../install-wizard-${VERSION}.tar.gz  && bash install_cmd.sh
    ```

## Enter Terminus Name

During the installation process, the system will ask you to enter your domain name and Terminus Name.

![alt text](/images/how-to/terminus/enter_terminus_name.png)

- If your Terminus Name is "alice@myterminus.com", press **Enter** or type `myterminus.com` for the domain name, then type `alice` for the terminus name.

- If your Terminus Name is "alice@helloworld.com", type `helloworld.com` for the domain name, then type `alice` for the terminus name.

:::info
- If you want to use a custom domain name, please make sure that the domain configuration has been completed. For details, please check [Create Domain](../../space/domain/host-domain.md).

- If an error occurs during installation, please use the following command to uninstall:
    ```
    bash uninstall_cmd.sh
    ```
    After uninstallation is complete, re-enter the installation command.
:::

## Get Initial System Info

Upon completion of the installation, the initial system information, including the Wizard URL and the default login password, will appear on the screen.

![alt text](/images/how-to/terminus/one_time_password.png)

### Wizard URL

The content inside the red square is the WIZARD URL. It contains two URLs:
- The upper one is for internal network access.
- The lower one is for public network access.

Generally speaking, if your computer and Terminus are on the same network (like WIFI), use the internal network URL. If not, use the public network URL.

:::tip
when using the internal network URL, please note:
1. You might need to set up a reverse proxy during activation.
2. If you're activating TermiPass by QR code scanning, ensure your phone and Terminus are on the same network.
:::


### One-Time Password

Please note the default one-time password in the lower red square. You will need it in the Wizard page. 