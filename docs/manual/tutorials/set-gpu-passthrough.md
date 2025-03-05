---
outline: [2, 3]
description: Step-by-step tutorial on how to configure GPU passthrough for PVE and install Olares in the VM with GPU acceleration enabled.
---

# Set up GPU passthrough in PVE
GPU passthrough in Proxmox Virtual Environment (PVE) allows virtual machines (VMs) to directly access the physical GPU, enabling hardware-accelerated computing for tasks like hosting local AI models and AI applications.

This tutorial walks you through the steps to configure GPU passthrough for PVE and install Olares in the VM with GPU acceleration enabled.

## Objectives

By the end of this tutorial, you will learn how to:

- Configure the underlying GPU passthrough environment for PVE, which includes:
  - Enable IO Memory Management Unit (IOMMU)
  - Bind Virtual Function I/O (VFIO) drivers
- Install the virtual machine system and add PCI GPU devices
- Install Olares in the virtual machine system with GPU enabled

## Prerequisites
Before proceeding, ensure that your hardware meets the following requirements:
- **CPU**: 4 cores or more, with IOMMU enabled in BIOS
  - Intel: VT-d
  - AMD: AMD-Vi or IOMMU
- **GPU**: An NVIDIA GPU that supports GPU passthrough
- **RAM**: Recommended 16GB or more
- **Storage**: At least 150GB on SSD if you need to run local AI models

The configuration used in this tutorial is as follows:
- **PVE Version**: 8.3.2
- **CPU**: Intel i5-12600KF
- **GPU**: NVIDIA RTX 4060 Ti 16GB
- **VM OS**: Ubuntu 22.04.5 LTS

## Enabling IOMMU for PVE

1. In the PVE command line (Shell), execute the following command to edit the GRUB configuration file:
   
   ```bash
   nano /etc/default/grub
   ```

2. Find `GRUB_CMDLINE_LINUX_DEFAULT="quiet"` and edit it as below:

   ::: code-group

   ```bash [Intel]
   GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt"
   ```

   ```bash [AMD]
   GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt"
   ```
   :::


3. Save and exit, and then execute the following command to update GRUB:

      ```bash
      update-grub
      ```

4. Reboot PVE to apply the changes.

5. Verify if IOMMU has been successfully enabled:

      ```bash
      dmesg | grep -e DMAR -e IOMMU
      ```

      If successful, you should see output similar to the following:

      ::: code-group

      ```bash [Intel]
      [0.061644] DMAR: IOMMU enabled
      ...
      [0.408103] DMAR: Intel(R) Virtualization Technology for Directed I/O
      ```

      ```bash [AMD]
      [1.219719] AMD-Vi: Found IOMMU at 0000:00:00.2 cap 0x40
      ```
      :::

## Add VFIO modules

1. In the PVE command line, execute the following command to edit the `modules` file:
   
   ```bash
   nano /etc/modules
   ```

2.	Append the following VFIO modules to the end of the file:

      ```bash
         vfio
         vfio_iommu_type1
         vfio_pci
         vfio_virqfd
      ```

3. Save and exit the editor.

## Bind GPU to VFIO

1. In the PVE command line, execute the following command to query the GPU information:

      ```bash
      lspci | grep NVIDIA

      # Example output:
      01:00.0 VGA compatible controller: NVIDIA Corporation AD106 [GeForce RTX 4060 Ti] (rev a1)
      01:00.1 Audio device: NVIDIA Corporation AD106M High Definition Audio Controller (rev a1)
      ```

      Here, the GPU’s PCI address is `01:00`, with two functions listed.

2. Execute the following command to get the IDs of the GPU on PCI `01:00`:

      ```bash
      lspci -n -s 01:00

      # Example output:
      01:00.0 0300: 10de:2803 (rev a1)
      01:00.1 0403: 10de:22bd (rev a1)
      ```
      The corresponding IDs of the GPU are `10de:2803` and `10de:22bd`.

3. Add the GPU ID information to the VFIO configuration file:

      ```bash
      echo "options vfio-pci ids=10de:2803, 10de:22bd" > /etc/modprobe.d/vfio.conf
      ```

4. Update the initial RAM file system (initramfs) and reboot PVE:

      ```bash
      update-initramfs -u
      reboot
      ```

5. In the PVE command line, execute the following command to check if the GPU is bound to the `vfio-pci` driver:

      ```bash
      lspci -v
      ```

      If GPU passthrough is successful, the output will show something like:

      ```bash
      01:00.0 VGA compatible controller: NVIDIA Corporation AD106 [GeForce RTX 4060 Ti] (rev a1) (prog-if 00 [VGA controller])
      Subsystem: Gigabyte Technology Co., Ltd AD106 [GeForce RTX 4060 Ti]
      Flags: fast devsel, IRQ 255, IOMMU group 11
      ...
      Kernel driver in use: vfio-pci
      ```

## Create the VM

1. In the PVE management interface, click **Create VM** in the top-right corner. The key configurations for this tutorial are as follows:
     - **Operating System**
       - ISO: `ubuntu-22.04.5-desktop-amd64.iso`
     - **System**
       - Machine: `q35`
       - BIOS: `OVMF (UEFI)`
       - EFI Storage: `local-lvm`
     - **Storage**
       - Disk size: `150 GB`
     - **CPU**
       - Category: `x86-64-v3`
     - **Memory**
       - Memory: `10240 MiB` (Adjust as necessary based on your setup)

      ::: tip Note
      - You can leave other configurations at their default values.
      - This tutorial verifies the operating system as `Ubuntu 22.04.5-desktop`, and CPU category as `x86-64-v3` or `host`. Using other configurations may cause pass-through failures or application issues.
      :::

2. Click **Finish** to create the virtual machine.

## Install and configure the VM system

1. In the PVE server view menu, double-click the newly created VM to enter the console, and click **Start Now** to install Ubuntu.

2. After installation completes, reboot the VM, perform the following initial setups in Ubuntu terminal:
   
   ```bash
   sudo apt update
   sudo apt install -y curl openssh-server
   sudo systemctl enable ssh
   sudo systemctl start ssh
   ```

   ::: warning Important
   Take note of the virtual machine’s IP address, login credentials, and password. After configuring GPU passthrough, you will not be able to retrieve this information from the PVE console.
   :::

3. Disable Secure Boot.

   ![Disable Secure Boot](/images/manual/tutorials/pve-bios.png#bordered)
   
   a. In the VM console, restart the virtual machine and immediately press **ESC** to enter the VM’s BIOS setup.

   b. In BIOS, go to **Device Manager** > **Secure Boot Configuration**.

   c. Press the space bar to uncheck **Attempt Secure Boot**.
   
   d. Press **F10** to save the configuration and exit BIOS.
   
   e. Reboot into Ubuntu and then shut down the virtual machine.

## Add GPU to the VM

1. In the PVE server view menu, click on the virtual machine to enter the VM details page.
2. Click **Hardware** > **Add** > **PCI Device**.
   ![Add PCI](/images/manual/tutorials/pve-add-pci.png#bordered)
3. Select **Raw Device**. From the dropdown list, choose the corresponding GPU by the PCI address (`01:00`).
   ![Add GPU](/images/manual/tutorials/pve-add-pci-gpu.png#bordered)
4. In the bottom-right corner, select the **Advanced** options and check **PCI-Express**.
5. Click **Add** to add the GPU to the VM system.

At this point, you have successfully configured GPU passthrough for your virtual machine.

## Install Olares

1. After restarting the VM, log in to it via SSH.

      ::: tip Using SSH to log in
      The VM will lose graphical display after GPU passthrough is enabled, so you need to access it via SSH.
      :::

2. Execute the following command to install Olares:

      ```bash
      export LOCAL_GPU_ENABLE=1 \
      && curl -sSfL https://olares.sh | bash -
      ```

Follow the on-screen prompts to complete the installation and activation. For detailed installation steps, refer to [Install Olares on Linux](../get-started/install-olares-linux.md).