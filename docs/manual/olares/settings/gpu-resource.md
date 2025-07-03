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

## Understand GPU allocation modes

Olares supports three GPU allocation modes. Choosing the right mode helps optimize performance based on your needs.

### Time-slicing (default)

In time-slicing mode, GPU resources are shared among multiple applications sequentially.

* Tasks run in the order they were requested, ensuring fair distribution.
* Suitable for multiple lightweight applications not requiring constant GPU access.

### Exclusive access mode

In exclusive access mode, the entire GPU processing power and memory is dedicated exclusively to one application.

* Best for intensive, performance-critical applications like AI-generated imagery or high-performance gaming servers.
* Large memory demands may limit availability for other tasks.

### VRAM-slicing mode

In VRAM-slicing mode, GPU memory (VRAM) is partitioned, providing a fixed allocation of memory to specific applications.

* Ideal for running multiple GPU-intensive applications simultaneously, each with guaranteed VRAM allocation.

## View GPU Status

To view your GPU status:

1. Navigate to **Settings > GPU**. The GPU list shows each GPU’s model, associated node, total VRAM, and current allocation mode.
2. Click on a specific GPU to visit its details.

## Configure GPU allocation mode

To configure a specific GPU:

1. Click any GPU from the GPU list to access its details page.
2. Under the **GPU allocation mode** dropdown, select your desired mode:

    * **Time-slicing:** Click **Confirm**.
    * **Exclusive access mode:**
      1. From **Select the exclusive application** dropbox, choose your target application.
      2. Click **Confirm**.
    * **VRAM-slicing mode:**
        1. From the **Allocate VRAM to applications** section, click the **Add application** button. 
        2. Select your target application from the dropdown.
        3. Specify the VRAM allocation in GB, then click **Confirm**.
   
## Learn more
- [Monitor GPU usage in Olares](../resources-usage.md)