---
outline: [2, 3]
---

# Desktop

In Terminus OS, Desktop is your hub for managing and interacting with installed applications. This guide helps you navigate and perform daily tasks efficiently.

![alt text](/images/how-to/terminus/desktop.jpg)

## Access Applications via Dock & Launchpad

Click on the **LaunchPad** icon on the Dock to display all installed applications.

![alt text](/images/how-to/terminus/desktop_lauchpad.jpg)

Interact with the applications them as you would on a computer:

- **Open an Application**: Click on any application icon.
- **Rearrange Icons**: Drag icons to reorder them.
- **Quick Access**: Drag icons to the Dock for faster access.


### Uninstall Applications in Edit Mode

To uninstall an application, press and hold an application icon to enter edit mode, where you can uninstall apps.

![alt text](/images/how-to/terminus/desktop_application2.jpg)

:::info
If an application icon does not have an **X** icon in the upper left corner, it indicates that the application is a built-in system app and cannot be uninstalled.
:::

### Application Status

Applications have distinct visual indicators based on their status

- Dev applications show the app's name along with a dedicated icon.
- Applications being installed show a dynamic spinning circle on their icon.
- Installed applications display only the app icon.
- Uninstallable applications will have an **X** icon in the upper left corner in edit mode. You can click to uninstall the app.

![alt text](/images/how-to/terminus/desktop_application.jpg)

### Manage Application Windows

By default, applications open in the `iframe` mode, appearing as embedded windows on the desktop. You can interact with them as described below:

- **Move Windows**: Drag the title bar.
- **Resize Windows**: Drag the window edges.
- **Minimize Windows**: Click the minimize button in the title bar and reopen from the Dock.
- **Maximize Windows**: Click the maximize button.
- **Close Windows**: Click the close button.
- **Enter Browser Mode**: Use the browser button in the title bar to open the application in a new browser tab.

![alt text](/images/how-to/terminus/desktop_window.jpg)

:::info
For applications that don't support the `iframe` mode well, we provide a `window` mode to open these applications in a new tab.
Developers can set this through the `openMethod` attribute in [Entrance](../../developer/develop/package/manifest.md#entrances). We recommend setting this attribute to the `window` mode for certain [Community Applications](../../overview/terminus/application.md#community-application).
:::

### Change Wallpaper

Change your desktop wallpaper in **Settings** > [**Change Wallpaper**](./settings/wallpaper.md).

## Search within Terminus

Our search feature, inspired by [Raycast](https://www.raycast.com/), is currently restrained to open applications. Future updates will include file searching, agent communication, and third-party extensions.


![alt text](/images/how-to/terminus/desktop_search.jpg)

## Upcoming Desktop Enhancements

We aim to enhance the Desktop experience with the following updates:

- Separated front-end and back-end for custom desktop development
- Expanded the search functionality
- Integrate a notification system
- Mobile version support
- Custom widget creation for application developers
- Custom theme support


