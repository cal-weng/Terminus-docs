# Local File Sync

:::info
This feature is supported only on Windows and Mac versions.
:::

The **TermiPass** desktop client allows real-time syncing between a local folder and a **Library** in **Sync Drive**.

## Create and Manage Libraries

Please refer to [Library Operations in Files](../terminus/files/index.md#libraries-operations).

## Sync between Library and Local Folder

You can use **TermiPass** desktop client for real-time syncing between a local folder and a **Library** in **Sync Drive**. Use the **Files** app and **TermiPass** on your mobile device to view the synchronized files.

### Library to Local

To sync library files to a local folder:

1. In the **TermiPass** client, open **Files**. 
2. Right-click on a **Library** in **Sync**, and then select **Synchronize to Local** from the drop-down menu. 
3. Choose the location of the local folder and click **Complete** to start syncing from the remote library.

![alt text](/images/how-to/termipass/sync.jpg)

You can use the default local directory or set a custom local directory. For example, if you select `D:/Sync/` as your local directory, **TermiPass** will create a folder with the same name as the **Library**. All the data from that Library will then be synced to this location.

## Sync Local to Library

To sync local files to the Library, simply move the local files or folders into the local sync folder of the Library. 
If you remove a local file from the synced folder, the corresponding file in the Library will also be removed.

To set a local folder as a Sync Library, you must first create a Library with the same name. Then, sync the local files to that Library.

## Unsynchronize

If you decide not to sync a **Library** with a local folder anymore, you can unsynchronize the **Library**.

After disconnecting, changes to your local files and folders won't be synced to the **Library**, and likewise, updates from the **Library** won't be downloaded to your local computer. The data in your local folder is safe and will not be deleted.

## Sync Immediately

Sync is usually automatic, but certain conditions (e.g. network drives) may require manually syncing to detect changes promptly.

## Read-only Sync

If your permission to the **Library** is `read-only`, you cannot sync changes from the local folder to the Library. Your newly added and modified files will be `read-only`, indicated by a gray disabled icon **(—)**.


## Resolve File Conflicts

If you and your colleague edit the same file simultaneously, conflicts may happen:

- **TermiPass** saves the first edited version of the file to the **Library**.
- The other version becomes a "conflict file".
- The name of the conflict file starts with the author's **Terminus Name** and ends with the present time. For example, a conflict file could be named like this: `test.txt(SFConflict name 2024-04-17-12-12-12)`.