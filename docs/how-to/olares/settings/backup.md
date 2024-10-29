---
outline: [2, 3]
---

# Backup Management

Backup Management helps you create and manage **backups** and **snapshots** of Olares. 

Currently, backup can be stored in **Olares Space**, while **AWS S3** and **local drive** options are coming soon. 

## Login to Olares Space

Currently, you need to log in to **Olares Space** to use the backup service. Please use **LarePass** to scan the QR code and log in to **Olares Space**.

## Create a Backup

1. Log in to [Olares Space](https://space.olares.com/) by scanning the QR code using LarePass.
    
    ![alt text](/images/how-to/olares/login_olares_space.png)

2. Create a backup task in **Settings**. You will need to:
    - Provide a name for your backup task.
    - Choose a daily or weekly backup frequency and set the start time.
    - Set a strong backup password (at least 4 characters) and remember it! This password is crucial for data restoration.
  
        ![alt text](/images/how-to/olares/create_a_backup.png)

3. Click **Submit** to submit the task.

## Manage Backups

Once you have created backup tasks, you can enter the task to view the details, including parameters, total size, and individual snapshot information.

![alt text](/images/how-to/olares/view_backup_logs.png)

### Modify Backup Settings

For created backup tasks, you cannot modify the backup name for the moment. However, you can adjust the backup frequency and time.

### Remove Backup Job

If a backup task is no longer required, you can delete it to save storage.

:::warning
Deleting a backup task will also remove all associated backup snapshots. Please ensure your data is safe before proceeding.
:::

## Restore from Backup

Please refer to [Olares Space Backup & Restore](/how-to/space/backup.md) for instructions on restoring from a backup.
