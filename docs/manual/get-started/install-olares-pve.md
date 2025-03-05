# Install Olares on PVE
Olares is designed to run on Linux-based systems and has been verified on the following platforms:

- Linux distributions: Debian, Ubuntu, Raspbian (a Debian-based system for Raspberry Pi)
- Virtualization platforms: Proxmox VE (PVE, Debian-based), LXC on PVE.

## System requirements
Make sure your device meets the following requirements.

- CPU: At least 4 cores
- RAM: At least 8GB of available memory
- Storage: At least 64GB of available space (SSD recommended)
- Supported Systems: PVE 8.2.2

::: tip Version compatibility
While the specific version is confirmed to work, the process may still work on other versions. Adjustments may be necessary depending on your environment. If you meet any issues with these platforms, feel free to raise an issue on [GitHub](https://github.com/beclab/Olares/issues/new).
:::

## Install on PVE

In PVE CLI, run the following command:

<!--@include: ./reusables.md{4,33}-->

<!--@include: ./activate-olares.md-->

<!--@include: ./log-in-to-olares.md-->

<!--@include: ./reusables.md{35,39}-->

::: Enbale GPU passthrough for PVE
To enable GPU acceleration for Olares in a PVE virtual machine, you must first configure GPU passthrough on PVE before installing Olares. For detailed steps, see the [tutorial](../tutorials/set-gpu-passthrough.md).
:::