# Middleware

The **Middleware** section allows you to manage middleware in Terminus OS.

:::tip
Only administrators can access the **Middleware** page.
:::

## Postgres

![postgres](/images/how-to/terminus/controlhub/middleware/01.jpg)

The **Details** section in the Postgres page shows Postgres cluster data, including **cluster name, deployment namespace, access address, and administrator password**.

The **Database** section provides an overview of the PostgreSQL databases utilized by different applications within Terminus OS. It includes details such as **database names, users, and passwords**.

## MongoDB

![mongodb](/images/how-to/terminus/controlhub/middleware/02.jpg)

The detailed information shows MongoDB cluster data, including the **cluster name, deployment namespace, access address, and the administrator password**.

The **Databases list** below provides an overview of the MongoDB databases utilized by different applications within Terminus OS. It includes details such as **database names, users, and passwords**.

## Redis

![redis](/images/how-to/terminus/controlhub/middleware/03.jpg)

The detailed information shows Redis cluster data, including the **cluster name, deployment namespace, access address, administrator password, and the Redis proxy access address**.

The **Databases list** below provides an overview of the Redis datab utilized by different applications within Terminus OS. It includes details such as **namespaces and passwords**.


## Zinc

![zinc](/images/how-to/terminus/controlhub/middleware/04.jpg)

**Zinc** details display a list of indexes utilized by different applications within Terminus OS. The list shows **index names, document counts, and storage space used**. Buttons for **Schema Configuration** and **Search Testing** can be found on the right.


Clicking the **Schema Configuration** button will open a dialogue displaying the schema configuration in JSON format.

![schema](/images/how-to/terminus/controlhub/middleware/05.jpg)

Clicking the **Search** button opens the Zinc Search dialog. You can perform full-text searches within the indexes using the Zinc Search syntax.

![zinc search](/images/how-to/terminus/controlhub/middleware/06.jpg)

## Bytebase

You can use third-party applications to view database status in Terminus OS. For example, [Bytebase](https://www.bytebase.com/) is a multipurpose middleware for working with databases. In the following section, we will use **Bytebase** to demonstrate how to access database in the middleware.

### Installing Bytebase from the Market

In the Terminus Market, locate **Bytebase**, click **Get**, and then click **Install** to install it.

![bytebase](/images/how-to/terminus/controlhub/middleware/07.jpg)

### Adding a PostgreSQL Instance

To add a PostgreSQL instance in Bytebase:

1. In **Bytebase**, click **Add Instance**, and select **PostgreSQL**.
2. Configure the instance as suggested below:
   - Specify the Instance Name to `Terminus` or others.
   - Choose either `PROD` or `TEST` for the Environment.
   - Get the `HOST`, `USERNAME`, `PASSWORD` information in the[Control Hub's Middleware](#postgres) section.

    ![alt text](/images/how-to/terminus/controlhub/middleware/09.jpg)

3. Click **Create** to save the changes and connect the instance. 

Now you should be able to view the details of the PostgreSQL instance you just added.

![alt text](/images/how-to/terminus/controlhub/middleware/10.jpg)

### Add a MongoDB Instance
To add a MongoDB instance in Bytebase:

1. In **Bytebase**, click **Add Instance**, and select **MongoDB**.
2. Configure the instance as suggested below:
- Specify the Instance Name to `Terminus` or others.
    :::info NOTE
    Do not use duplicate instance names.
    :::
- Choose either `PROD` or `TEST` for Environment.
- Get the `HOST`, `USERNAME`, `PASSWORD` information in the [Control Hub's Middleware](#mongodb) section.

![bytebase1](/images/how-to/terminus/controlhub/middleware/11.jpg)

3. Click **Create** to save and connect the instance.

Now you should be able to view the details of the MongoDB instance you just added.

![alt text](/images/how-to/terminus/controlhub/middleware/12.jpg)

### Edit the Database

Click **SQL Editor** in the upper right corner of **Bytebase** to go to the **Editor** page for further operations.

![bytebase1](/images/how-to/terminus/controlhub/middleware/13.jpg)
