---
outline: [2, 3]
description: Comprehensive tutorial on streaming steam games with Olares. Learn to install Steam Headless, configure the streaming service, and stream games on Moonlight from both local and remote networks.
---

# Stream your favorite steam games with Olares

Want to enjoy some gaming with the power of Olares? You are all set. With the Steam Headless app, Olares easily transforms into a steam streaming server. You can now play your favorite games on any compatible device via Moonlight or Steam Link.

This guide walks you through installing the Steam Headless app on Olares, configuring the streaming service, and using the Moonlight client to stream your games.


## Objectives

By the end of this tutorial, you’ll be able to:

- Install Steam Headless on Olares and configure compatibility for Windows games  
- Configure the streaming service, which involves pairing the Sunshine streaming server with the Moonlight client.
- Stream games on the Moonlight client from both local and remote networks

## Before you begin 

Before you begin, ensure the following:

- Olares is installed and running.
- Your streaming device has Moonlight installed.  
  - **Local streaming**: the device must be on the same LAN as your Olares.  
  - **Remote streaming**: the device must have LarePass installed. Visit the [LarePass official site](https://www.joinolares.cn/larepass) to download the appropriate version.
- You have a valid Steam account.

## Install Steam Headless

1. In Olares Market, find **Steam Headless** under the **Entertainment** category, and click **Install**.  
2. Once installed, open the **Steam Headless** app and click **Connect** to access the console.
3. In the Steam Headless console, click the **Install** button to install and update Steam. Once completed, the Steam login page should appear.
   ![Install Steam](/images/manual/tutorials/install-steam.png#bordered)

4. Log into your Steam account and complete the initial setup.

   ![Steam Login Interface](/images/manual/tutorials/steam-login.png#bordered)

## Configure game compatibility

Since Olares runs on a Linux environment, you'll need to enable **Proton**, a compatibility layer, to support Windows games.

1. Open the Steam **Settings** page.  
2. Go to the **Compatibility** tab and check **Enable Steam Play for all other titles**.  
3. Restart Steam to view your complete game library.  

## Configure the streaming service

To stream games using Moonlight, you need to pair your client device with the Sunshine streaming server integrated in Steam Headless. 

### Prepare for paring

1. From your Steam page in the browser, get the URL and append `:47990`, for example, `https://139ebc4f0.local.<your-olares-name>.olares.com:47990`. Open this URL to access the Sunshine console page.

   ![Sunshine console page](/images/manual/tutorials/access-sunshine.png#bordered)

2. On your first visit, login using the default credentials:  
   - Username: `sam`  
   - Password: `password` 

3. Click the **Pin** tab to open the pairing page, where you’ll be prompted to enter the pairing code.
   ![Sunshine's paring page](/images/manual/tutorials/pin-sunshine.png#bordered)


### Add host in Moonlight

1. Open your Moonlight client and click the <i class="material-symbols-outlined">add_to_queue</i> button in the top-right corner.

2. When promoted to enter the IP address of your host PC, enter the local URL of your Olares device, for example, `139ebc4f0.local.<your-olares-name>.olares.com`.

   ::: tip Note
   Do not include `https://` and make sure to include the `.local` part in the hostname.
   ::: 

3. Click **OK**, and a host icon will appear in locked status.
4. Click the host icon to receive a pairing code.

   ![Get pin code](/images/manual/tutorials/get-pin-code.png#bordered)

### Complete paring

1. In Sunshine's paring page, enter the pairing code.
2. Enter a name for the device and click **Send** to finish pairing. If successful, you will be promoted "Success! Please check Moonlight to continue".
3. Check the host status in Moonlight. The icon should be active now. 

## Stream your game

Now you are done with configuring and ready for gaming. 

### Stream locally 

If you are streaming locally from the same network of Olares:

1. Open Moonlight.
2. Click to enter your steam host, and then click **Steam** to enter the Steam Big Screen mode and play. 

### Stream remotely 

With Olares's VPN feature, you can enjoy a smooth streaming experience even across different networks.

To enable the VPN:

<!--@include: ./remote.reusables.md{4,19}-->

Once VPN is enabled on your device, simply follow the same instructions as local streaming.

## FAQs

### Why isn’t the game displaying in full screen?

This could be due to your resolution settings. Try adjusting the resolution:
- In Moonlight: adjust in **Settings** > **Resolution and FPS**
- On the Steam Headless console page: adjust in **Applications** **Settings** > **Display**.  

### How do I exit full-screen streaming?

To exit streaming in the full-screen mode:
- On **Windows/Mac**: Use the shortcut combo **Ctrl + Alt + Shift + Q**.  
- On **mobile devices**: use the controller button combo **Start + Select + L1 + R1**.  

After finishing your streaming session, exit the Steam Big Picture mode to release system resources on Olares.

### Where are my downloaded games stored?

By default, games are stored at: 

`/Cache/olares/steam-headless/c0/.steam/debian-installation/steamapps/common`

We recommend not changing this default directory.






 



