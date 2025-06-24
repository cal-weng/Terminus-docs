---
outline: [2, 3]
description: Optimize GPU usage in Olares with flexible memory management options. Choose between shared and standalone modes for different resource requirements.
---

# Manage GPU usage
:::info
Only Olares admin can change GPU usage mode. This ensures optimal resource management across the system and prevents conflicts between users' resource needs.
:::

Olares offers flexible GPU memory management to support resource-intensive tasks like image generation and large language models. Users can choose between two modes to best suit their needs: **shared mode** and **standalone mode**.

## GPU usage modes
:::tip
Use shared mode when running multiple lightweight tasks or when you want to ensure fair resource distribution among users. Switch to standalone mode for complex AI models or high-resolution image generation tasks that require dedicated resources.
:::

### Shared mode (default)

In shared mode, Olares intelligently allocates GPU memory across multiple applications:

* Applications share up to the maximum GPU memory available on your hardware.
* Tasks are executed in order of request, ensuring fair resource distribution.
* Ideal for users running multiple lightweight GPU tasks simultaneously.

### Standalone mode

For users requiring dedicated GPU resources, standalone mode can be enabled:

* Applications can request up to the maximum GPU memory available on your hardware exclusively.
* Enhances performance for single, resource-intensive tasks. 
* Large memory requests may limit resources available for subsequent applications.

:::info
For shared applications, such as SD Web UI (Stable Diffusion) and ComfyUI, GPU memory is managed by the shared application itself, not individual user instances.
This means that the GPU mode settings described here do not directly affect reference applications.
:::

## Change GPU mode for application
1. Open the Settings app from the Dock or Launchpad.
2. Select **System** from the left sidebar, and click **GPU** on the right.
3. In the dropdown **VRAM mode**, select the required GPU usage mode.

## Learn more
- [Monitor GPU usage in Olares](../resources-usage.md)