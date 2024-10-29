---
outline: [2, 3]
---

# Market

The Market is built on a decentralized and permissionless [application distribution protocol](/overview/protocol/market.html). It is an open market where you can install various applications from Olares and community, recommendation algorithms, and large language models with one click.

![Discover](/images/how-to/olares/market/discover.jpg)

## Discover Apps

Market provides a **Discover** page that allows you to discover applications that interest you quickly through easy navigation. 

### Application Lists

 The **'Discover'** page displays overall ranking lists, and each category page also features its own list. There are 4 types of lists available: 

- **Featured Applications**: Curated by our editorial team, this list showcases the most trending apps on Olares. It focuses on new apps, as well as those with significant updates or seasonal moments.
- **Community's Choices**: This includes apps most loved and recommended by the Olares community. If you're unsure where to start with your Olares, try the apps from this list!
- **Top**: This list contains apps that have recently experienced a significant increase in downloads and installations. It's sorted by the number of downloads on DockerHub over the past month, from most to least.
- **Latest**: This list displays the most recently launched Olares apps, sorted by the time when the app was submitted or updated, from newest to oldest.

### App Categories

The menu on the left categorizes apps by type and purpose.

- **Productivity**: Apps used in work scenarios, and those that make specific processes or tasks more organized or efficient, such as: [OnlyOffice](https://market.olares.com//app/onlyoffice), [Gitlab](https://market.olares.com//app/gitlabfusion), [Nocodb](https://market.olares.com//app/nocodb), [Bytebase](https://market.olares.com//app/bytebase), [AFFiNE](https://market.olares.com//app/affine)

- **Utility**: Apps that help users solve problems or complete specific tasks. For example: [Home Assistant](https://market.olares.com//app/homeassistant), [qBittorrent](https://market.olares.com//app/qbittorrent), [Radicale](https://market.olares.com//app/radicale), [Obsidian LiveSync](https://market.olares.com//app/obsidian), [ShowDoc](https://market.olares.com//app/showdoc).

- **Entertainment**: Interactive apps that meet users' entertainment or information needs with text, images, audio, video, or other content. For example: [Jellyfin](https://market.olares.com//app/jellyfin), [Lidarr](https://market.olares.com//app/lidarr), [Navidrome](https://market.olares.com//app/navidrome), [PhotoPrism](https://market.olares.com//app/photoprism), [Calibre](https://market.olares.com//app/calibre).

- **Social Network**: Apps that connect people through text, sound, photos, videos, and help communities grow. For example: [Mastodon](https://market.olares.com//app/mastodon), [WordPress](https://market.olares.com//app/wordpress), [Ghost](https://market.olares.com//app/ghost), [SealCaster](https://market.olares.com//app/sealcaster).

- **Blockchain**: Apps that utilize blockchain technologies. Such as: [Ethereum](https://market.olares.com//app/geth), [IPFS](https://market.olares.com//app/ipfs), [Otmoic LP](https://market.olares.com//app/otmoiclp).

- **Recommendation**: Decentralized recommendation algorithms that can run on Olares, covering different content topics. For example: [World New](https://market.olares.com//recommend/r4world), [Sport](https://market.olares.com//recommend/r4sport), [Business](https://market.olares.com//recommend/r4business), [Entertainment](https://market.olares.com//recommend/r4entertainment).

- **Model**: Large language models that can run on Olares. For example: [Mistral Instruct](https://market.olares.com//model/mistralins7bq4), [Llama 2](https://market.olares.com//model/llama2chat7bq4), [Openchat-3.5](https://market.olares.com//model/openchat7b).

## Viewing Application Details

You can explore an application thoroughly by viewing its details. To do so, click on the app card on the list page.

![alt text](/images/how-to/olares/market/application-details.jpg)

### Basic Info

The basic information displays on the top of the application page, including:

- Developer: The developer of the application.
- Language: The languages supported by the app.
- Resource Requirements: Memory, disk, CPU, and GPU resources required to install the app.
- Application Type: [Cluster applications](../../../overview/olares/application.md#cluster-scoped-application) will have an additional label here.

### Operation Button

Below the app title, you'll find the **operation button**. It helps you understand the current status of the app and the actions you can take.

- A **Get** button indicates that you can [install this application](#install-application).
- A **'Spinning Symbol** button indicates that the operation is pending for processing, such as queuing for installation. When you hover your mouse over the operation button, it changes to 'Cancel'. Click on it to cancel the operation.
- An **Installing/Updating/Uninstalling** indicates that the operation is in progress. If the operation can be interrupted, the button will change to **Cancel** when you hover your mouse over it.
- An **Installed** button indicates that the application has been installed.
- A **Running/Open** button indicates that the application is functioning.
- A grayed out button indicates that the application cannot be installed.

### Screenshots

View promotional screenshots of the application to get a quick understanding of its features and interface styles.  

### Descriptions

The **'ABOUT THIS APP'** section provides a comprehensive introduction of the app. The **'WHAT'S NEW'** section displays the added features, content, and bug fixes when a new version is available.

![alt text](/images/how-to/olares/market/application-details-2.jpg)

### Permissions

See the system permissions required by the app in the **'Permissions'** section. The permissions are grouped into the following categories:

| Permission Type      | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Files                | Directory access permissions for the app                                                                                                                                               |
| Internet             | Whether the app needs internet connection while installing and running                                                                                                                                                                   |
| Entrance             | Number of different types of app entries.<br> - Visible entrances are displayed on the Olares desktop with icons<br> - Invisible entrances run in the background, often used to cooperate with other apps<br> - Public entrances can be accessed by anyone on the internet<br> - Private entrances require activation of tailscale to access |
| Notifications        | Whether the app can send notifications to you                                                                                                                                                                                  |
| Analytics            | Whether the app has enabled [web analytics features](../../../developer/develop/advanced/analytic.md)                                                                                                                                |
| Websocket            | Whether the app uses [Websocket features](../../../developer/develop/advanced/websocket.md)                                                                                                                                     |
| Secret               | Whether the app uses Olares's [secret management feature](../../../overview/olares/secret.md) to store its sensitive information                                                                                                |
| Knowledgebase        | Whether the app uses your local [knowledge base](../settings/knowledge.md) to enhance the user experience                                                                                                      |
| Relational Database  | Whether the app uses Olares's [PostgreSQL middleware](../../../overview/olares/data.md#postgresql) as a relational database                                                                                                        |
| Document Database    | Whether the app uses Olares's [MongoDB middleware](../../../overview/olares/data.md#mongodb) as a document database                                                                                                               |
| Key-Value Database   | Whether the app uses the Olares's [Redis middleware](../../../overview/olares/data.md#redis) as a KV database                                                                                                                 |
| Cluster App          | Whether the application is a [cluster application](../../../overview/olares/application.md#cluster-scoped-application) |


### Information

This section displays additional information about the application.

- For more information about the application and its user manual, refer to the **Documents** and the developer's **Website**. For open-source applications, you can access the source code via the **Source Code** link.

- The **App Version** refers to the application version contained in the Chart, while **Chart Version** refers to the version of the Olares Application Chart(TAC). These two versions may not correspond and can increase independently or synchronously. The **Version History** provides a record of the **Chart Version** change logs.

- The application's category, the name of developer and submitter, application license, legal documents, and other relevant information are displayed for your reference.

### Client

Some Olares applications can work with clients on mobiles and desktops to achieve multi-platform synchronization, audio and video streaming, and other functions. For example, [Mastodon](<https://market.olares.com//app/mastodon>), [Home Assistant](<https://market.olares.com//app/homeassistant>), [Jellyfin](<https://market.olares.com//app/jellyfin>). You can download the official clients for these applications directly from the **'GET A CLIENT'** section.

### Dependency

Some applications require other applications to function correctly. Before installing these applications, please make sure all applications listed in the **Dependency** section are already installed.

### Reference App

Typically, [cluster applications](../../../overview/olares/application.md#cluster-scoped-application) authorize certain trusted client apps to connect to them via network. If you want to use a cluster application, you can install the app from this list.

## Manage Applications in Olares

This section explains how to install, manage, and update applications in Olares. 
Olares has two categories of applications:

- Market Applications: Downloaded directly from the Olares Market. These are typically stable releases.
- Custom Applications: Installed from an Olares Application Chart (TAC) file. Use these for testing your own applications or unreleased versions.

You can view and manage all your applications on Olares on the **My Olares** page. 

### Install Applications

Follow the steps below to install applications on Olares:

- **Installing from the Olares Market**
    1. Find the app in Market, and click the **Get** button on the application you want to install.
    2. Click **Install** on the operation button to start the installation.
   
    **Note**: If you install multiple applications at once, they will queue and install in order.

- **Install Custom Applications (from TAC files)**

    1. Go to the Custom tab on the My Olares page.
    2. Click Upload Custom Chart.
    3. Select the TAC file (.zip, .tgz, or .tar.gz) from your computer.
    
    Olares will validate the TAC file and begin the installation.

### Uninstall Applications

Follow the steps below to uninstall applications from Olares:

- **From My Olares**:
  1. In Market, navigate to the **My Olares** page (Market or Custom tab).
  2. Click the arrow next to the application's Operation Button, and select **Uninstall**.

- **From the Launchpad**:

  1. Press and hold the application's icon.
  2. Click the **x** button to uninstall the application.

### Update Applications

 Follow the steps below to update installed applications:

- **Update Market Applications**
  
  When updates are available for an installed application, you'll see a badge notification next to My Olares on the left sidebar.

  1. In Market, navigate to the **My Olares** page.
  2. In the upper right corner, click on **Available Updates** to see all updatable applications, where you can: 
     - Use the **Update All** button to update all applications at once. 
     - Click the **Update** button to update each application individually.

    ![alt text](/images/how-to/olares/market/update.jpg)

- **Update Custom Applications**
  
  Custom applications cannot be updated automatically. To update a custom application, upload the new TAC package for the application. After it passes the format check, the Market will update the application according to the configuration of the new TAC package.

### Manage Specific Application Types

In addition to regular applications, you can also manage recommendation algorithms and large language models in Market.

- **Recommendations**:

    You can see the status of all recommendation algorithms on the **My Olares** page. Once installed, the algorithm automatically starts running. You can install or uninstall recommendation algorithms the same way you do with any other applications.


- **Models**:
    
    You can see the status of the installed models on the **My Olares** page.

    - To use a model, select **Load** from the operation button options.
    - To free up resources, select **Unload** from the operation button options.
    - To uninstall the model, select **Uninstall** from the operation button options.

:::Info
  - Only administrators can install and manage models.
  - Only one large language model can be loaded at a time. 
:::

    [Learn more about the details of using AI in Olares](../../../overview/olares/ai.md).

## Troubleshoot Installation Issues

Market may not be able to install some applications due to the following situations:

- **Insufficient system resources**: If your Olares cluster resources or your user resource quota are less than what the application requires, you will not be able to install. To resolve this, try freeing up resources, expanding cluster resources, or increasing resource quotas.

- **Lack of dependencies**: This means that the applications this program depends on have not been installed. To resolve this issue, try installing all dependent apps.

- **Incompatible system version**: This application is not compatible with the current version of your Olares OS. You can upgrade Olares OS to the latest version and then try to install.

- **Cluster application**: This application is a cluster application. Only administrators can install it. You can contact your administrator to install the application.
