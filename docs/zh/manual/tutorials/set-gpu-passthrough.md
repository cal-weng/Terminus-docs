---
outline: [2, 3]
description: 如何在PVE中配置GPU直通并在启用 GPU 加速的虚拟机中安装 Olares。
---

# 为 PVE 设置显卡直通

为 Proxmox Virtual Environment (PVE) 启用显卡直通（GPU Passthrough）可以让虚拟机（VM）直接访问物理 GPU，从而实现硬件加速计算，如托管本地 AI 模型、AI 应用等。

本文将指导您如何在 PVE 上配置显卡直通，并在启用 GPU 加速的虚拟机中安装 Olares。


## 目标
通过本教程，你将学习：
- 配置 PVE 显卡直通底层环境：
  - 为 PVE 配置 IO 内存管理单元（IOMMU）
  - 绑定 VFIO（Virtual Function I/O）驱动
- 安装虚拟机系统并为其添加 PCI 显卡设备
- 在虚拟机系统里安装 Olares 并启用 GPU 加速

## 开始之前
在开始操作之前，确保你的硬件符合以下条件：
- CPU: 4 核以上，并在 BIOS 中启用 IOMMU。
  - Intel: VT-d
  - AMD：AMD-Vi 或 IOMMU
- 显卡：支持 GPU 直通的 NVIDIA 显卡
- 内存：建议 16GB 及以上
- 存储：如果运行本地大模型，建议至少 150GB 的 SSD 空间

本教程使用配置如下：
- PVE 版本：8.3.2
- CPU：Intel i5-12600KF
- 显卡：NVIDIA RTX 4060 Ti 16GB
- 虚拟机系统：Ubuntu 22.04.5 LTS

## 为 PVE 启用 IOMMU
1. 在 PVE 命令行 (Shell) 界面里，执行以下命令编辑 GRUB 配置文件：

   ```bash
   nano /etc/default/grub
   ```

2. 找到 `GRUB_CMDLINE_LINUX_DEFAULT="quiet"` 并编辑如下：

   ::: code-group

   ```bash [Intel]
   GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt"
   ```

   ```bash [AMD]
   GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt"
   ```
   :::

3. 保存并退出编辑模式，执行以下命令以更新 GRUB：

   ```bash
   update-grub
   ```

4. 重启 PVE 主机以使配置生效。
5. 在 PVE 中执行以下命令以验证 IOMMU 是否启用成功：
   
   ```bash
   dmesg | grep -e DMAR -e IOMMU
   ```

   如成功启用，你会看到类似以下的输出：

   ::: code-group

   ```bash [Intel]
   [0.061644] DMAR: IOMMU enabled
   ...
   [0.408103] DMAR: Intel(R) Virtualization Technology for Directed I/O
   ```

   ```bash [AMD]
   
   ```bash
   [1.219719] AMD-Vi: Found IOMMU at 0000:00:00.2 cap 0x40
   ```
   :::

## 添加 VFIO 模块

1. 在 PVE 命令行中，执行以下命令编辑 modules 文件： 

   ```bash
   nano /etc/modules
   ```

2. 在文件末尾处添加以下 VFIO 模块：

   ```bash
   vfio
   vfio_iommu_type1
   vfio_pci
   vfio_virqfd
   ```

3. 保存并退出。

## 绑定显卡信息至 VFIO

1. 在 PVE 命令行中，执行以下命令查询显卡信息：
   ```bash {4,6}
   lspci  |grep NVIDIA

   # 返回示例如下：
   01:00.0 VGA compatible controller: NVIDIA Corporation AD106 [GeForce RTX 4060 Ti] (rev a1)
   01:00.1 Audio device: NVIDIA Corporation AD106M High Definition Audio Controller (rev a1)
   ```

   此处我们获取到了显卡的 PCI 地址 `01:00`，并列出了该显卡的两个功能。

2. 执行以下命令获取该 PCI 上对应的显卡设备 ID：
   
   ```bash {4,6}
   lspci -n -s 01:00

   # 返回 ID 信息如下:
   01:00.0 0300: 10de:2803 (rev a1)
   01:00.1 0403: 10de:22bd (rev a1)
   ```
   对应设备 ID 分别为 `10de:2803` 与 `10de:22bd`。

3. 将显卡 ID 信息添加到 VFIO 配置文件中：
   
   ```bash
   echo "options vfio-pci ids=10de:2803, 10de:22bd" > /etc/modprobe.d/vfio.conf
   ```

4. 更新 initramfs （初始化内存文件系统）并重启 PVE：
   
   ```bash
   update-initramfs -u
   reboot
   ```
   
5. 在 PVE 命令行中，运行以下命令以检查显卡是否绑定至 `vfio-pci` 驱动：

   ```bash
   lspci -v
   ```

   如显卡直通成功，则会返回如下显卡信息：

   ```bash
   01:00.0 VGA compatible controller: NVIDIA Corporation AD106 [GeForce RTX 4060 Ti] (rev a1) (prog-if 00 [VGA controller])
        Subsystem: Gigabyte Technology Co., Ltd AD106 [GeForce RTX 4060 Ti]
        Flags: fast devsel, IRQ 255, IOMMU group 11
        ...
        Kernel driver in use: vfio-pci
   ```

## 创建虚拟机

1. 在 PVE 管理界面右上角点击**创建虚拟机**。本教程关键配置如下：

     - 操作系统 
       - ISO: ubuntu-22.04.5-desktop-amd64.iso
     - 系统
       - Machine: q35
       - BIOS: OVMF(UEFI)
       - EFI 存储：local-lvm
     - Storage
       - 磁盘大小：150 GB
     - CPU
       - 类别：x86-64-v3 
     - 内存 
       - 内存：10240MiB （可根据实际配置设置最大可用内存）
  
   ::: tip 注意
   - 以上项目之外的配置可使用默认值。
   - 本教程验证的操作系统为 `Ubuntu 22.04.5-desktop`，CPU 类别为 `x86-64-v3` 或 `host`。选择其他配置可能导致直通失败或 AI 应用运行问题。
   :::

2. 点击**完成**以创建虚拟机。

## 安装并设置虚拟机系统

1. 在 PVE 服务器视图里，双击刚创建的虚拟机进入控制台，并点击 **Start Now** 以安装 Ubuntu 系统。
2. 安装完成后重启虚拟机，然后进入 Linux 系统执行以下初始设置：

   ```bash
   sudo apt update
   sudo apt install -y curl openssh-server
   sudo systemctl enable ssh
   sudo systemctl start ssh
   ```
   ::: Warning 重要
   记下虚拟机的 IP 地址、登录账号和密码。配置显卡直通后，你将无法通过 PVE 控制台获取这些信息。
   :::

3. 禁用安全启动设置。

   ![禁用安全启动](/images/zh/manual/tutorials/pve-bios.png#bordered)
  
   a. 在 PVE 控制台里重启虚拟机，并立即按 **ESC** 键进入虚拟机 BIOS 设置。
   
   b. 在 BIOS 中，进入 **Device Manager** > **Secure Boot Configuration**。
   
   c. 按空格键取消选中 **Attempt Secure Boot**。

   d. 按 F10 保存配置并推出 BIOS。
   
   e. 重启进入 Ubuntu 系统后，关闭虚拟机。

## 为虚拟机添加 PCI 设备

1. 在 PVE 服务器视图里，点击虚拟机进入虚拟机详情页。
2. 点击**硬件** > **添加** > **PCI 设备**。
   ![添加 PCI](/images/zh/manual/tutorials/pve-add-pci.png#bordered)
3. 选择**原始设备**。在下拉列表里，通过 PCI 地址 `01:00` 选取对应的显卡。   
   ![添加 GPU](/images/zh/manual/tutorials/pve-add-pci-gpu.png#bordered)
4. 在页面右下方选中**高级**选项，并勾选 **PCI-Express**。
5. 点击**添加**。

至此，你已成功为虚拟机配置了显卡直通。

## 安装 Olares

1. 重启后，通过 SSH 方式登陆虚拟机。
   
   ::: tip 使用 SSH 登陆
   启用 GPU 直通后，虚拟机将失去图形界面显示，因此你需要通过 SSH 访问虚拟机系统。
   :::

2. 在命令行中，执行以下指令安装 Olares:

   ```bash
   export LOCAL_GPU_ENABLE=1 \ 
   && curl -sSfL https://olares.sh | bash -
   ```

   按照命令行提示完成安装，激活。详细安装步骤请参考[在 Linux 上安装 Olares](../get-started/install-olares-linux.md)。

