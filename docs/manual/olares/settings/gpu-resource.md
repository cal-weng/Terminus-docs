---
outline: [2, 3]
description: Manage and optimize GPU resources in Olares with centralized controls, supporting time-slicing, exclusive access, and VRAM-slicing across single or multi-node setups.
---
# Manage GPU usage
:::info
Only Olares admin can configure GPU usage mode. This ensures optimal resource management across the system and prevents conflicts between users' resource needs.
:::

Olares allows you to harness the full power of your GPUs to accelerate demanding tasks such as large language models, image and video generation, and gaming. Whether your GPUs are on a single node or spread across multiple nodes, you can manage them conveniently from one centralized interface.

This guide helps you understand and configure GPU allocation modes to maximize hardware performance.

::: tip Nvidia GPU only
Currently, only Nvidia GPU is supported.
:::

## Understand GPU allocation modes

Olares supports three GPU allocation modes. Choosing the right mode helps optimize performance based on your needs.

### Time slicing 

In time-slicing mode, GPU resources are shared among multiple applications sequentially.

* Tasks run in the order they were requested, ensuring fair distribution.
* Suitable for multiple lightweight applications not requiring constant GPU access.

### App exclusive

In exclusive access mode, the entire GPU processing power and memory is dedicated exclusively to one application.

* Best for intensive, performance-critical applications like AI-generated imagery or high-performance gaming servers.
* Large memory demands may limit availability for other tasks.

### Memory slicing
In memory-slicing mode, GPU memory (VRAM) is partitioned, providing a fixed allocation of memory to specific applications.
Ideal for running multiple GPU-intensive applications simultaneously, each with guaranteed VRAM allocation.

## View GPU status

To view your GPU status:

1. Navigate to **Settings > GPU**. The GPU list shows each GPU’s model, associated node, total VRAM, and current GPU mode.
2. Click on a specific GPU to visit its details.

::: tip Note
If there is only one GPU in the cluster, you will go into the GPU detail page directly. 
:::

## Configure GPU mode

In the **GPU detail** page, select your desired mode from the **GPU mode** dropdown. Depending on your selected mode, different follow-up options will apply.

* **Time slicing**：Default mode. GPU-supported apps will automatically show in the list. 
  1. Click the **Add an application** button to manually add an application if it's not in the list.
  2. Select your target application and click **Confirm**.
    ![Time slicing](/images/manual/olares/gpu-time-slicing.png#bordered)
  
* **App exclusive**
  1. From **App exclusive** dropbox, choose your target application.
  2. Click **Confirm**.
     ![App exclusive](/images/manual/olares/gpu-app-exclusive.png#bordered)

* **Memory slicing**
  1. From the **Memory slicing** section, click the **Add an application** button. 
  2. Select your target application from the dropdown.
     3. Specify the VRAM allocation in GB, then click **Confirm**.
        ![VRAM slicing](/images/manual/olares/gpu-memory-slicing.png#bordered)
   ::: tip Note
   You can't assign a VRAM that's larger than the total VRAM of the GPU.
   :::

## Learn more
- [Monitor GPU usage in Olares](../resources-usage.md)