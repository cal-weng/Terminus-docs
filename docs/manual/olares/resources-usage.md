---
outline: [2, 3]
description: Monitor your Olares system and application performance with comprehensive dashboards tracking CPU, memory, disk usage, and application analytics for optimal resource management.
---

# Monitor system and application status
The Dashboard app in Olares works similarly to Windows Explorer, providing a centralized view of your system's status without requiring technical expertise. From the main dashboard, you can view resource usage patterns and detailed metrics.
:::info
When applications in your Olares are exposed to the public internet, they generate FRP traffic costs from external access. To monitor these costs and traffic, see [VIew system status](../space/manage-olares#view-system-status).
:::

## Access monitoring dashboards
View your system's status through these specialized dashboards:
- **Overview**: Shows current resource usage and system health.
- **Applications**: Displays running applications and their status.
- **Analytics**: Presents detailed performance metrics with up to one year of historical data.

## Overview

### View physical resources

Monitor four fundamental metrics directly from **Overview**:
- CPU utilization
- Memory consumption
- Disk usage
- Pod status

![Dashboard overview](/images/manual/tasks/dashboard-overview.png#bordered)
### Access detailed metrics

For deeper analysis, click **More details** to view comprehensive monitoring data for the past 7 days.

Use the dropdown menu in the top right to change the time range, or click <i class="material-symbols-outlined">refresh</i> to update monitoring data.

The following metrics help you maintain optimal system performance:

| Metric           | Description                        | Impact                                        |
|------------------|------------------------------------|-----------------------------------------------|
| CPU usage        | Percentage of CPU resources used   | Prolonged spikes can slow down the system     |
| Memory usage     | Percentage of memory in use        | Impacts application performance and stability |
| Average CPU load | Average number of active processes | High load indicates system overload           |
| Disk usage       | Percentage of disk space used      | Crucial for data reliability, prevent overuse |
| Inode usage      | Percentage of inodes used          | Exhaustion prevents new file creation         |
| Disk throughput  | Data transfer rate (MB/s)          | Important for large file transfers            |
| IOPS             | Input/Output Operations Per Second | Critical for small file or random data access |
| Network traffic  | Network usage (Mbps)               | Reflects network speed and quality            |
| Pod status       | Count of pods by state             | Reflects application health                   |

![Physical resource monitoring](/images/manual/tasks/physical-resource-monitoring.png#bordered)
### Check resource quota
You can view your resource quota allocated by the Olares admin.

![Resource quota](/images/manual/tasks/resource-quota.png#bordered)

:::warning
When your resource quota runs low, you may experience:

* Slower system performance.
* Inability to install new applications.
* Automatic suspension of resource-intensive applications.
:::


### Track application performance
The **Usage ranking** section displays the top 5 applications consuming CPU and memory resources. To access the complete list of application resource usage, click **More**.

![Usage ranking](/images/manual/tasks/usage-ranking.png#bordered)

The **Analytics** section shows view traffic for all applications within the last 24 hours. For detailed analytics of individual applications, click **More**.

![Analytics](/images/manual/tasks/overview-analytics.png#bordered)
## Applications

The **Applications** dashboard helps you monitor resource usage patterns across your applications through various sorting and filtering options.

Use the dropdown menu in the upper right corner to sort applications based on their resource consumption:
- CPU usage
- Memory usage
- Inbound traffic
- Outbound traffic

![Applications](/images/manual/tasks/applications.png#bordered)

Toggle between ascending and descending order to identify which applications are consuming the most or least resources.

For applications supporting multiple entrances (such as Wordpress), you can click icons to switch between different entrance types and view their corresponding resource metrics.
![Multiple entrances](/images/manual/tasks/multiple-entrances.png){width=40%}
:::tip
* When your application list grows large, quickly locate specific applications by typing their names in the search box at the top of the page.
* Regularly checking resource consumption patterns helps you identify applications that might need optimization or attention.
:::

## Analytics

Olares features powerful built-in analytic, helping you understand application usage patterns, optimize user experience, and make data-driven decisions. The **Analytics** dashboard displays key metrics for each application spanning up to one year, including page views, unique visitors, and average visit time.

:::info
Analytics data is only available for applications that have declared the analytics function in their `OlaresManifest.yaml` file.
:::

![Analytics](/images/manual/tasks/analytics.png#bordered)

Key metrics include:

| Metric             | What it shows                                                                 |
|--------------------|-------------------------------------------------------------------------------|
| Views              | Total webpage accesses, counted individually even for the same user           |
| Visitors           | Unique individuals accessing your site (multiple visits count as one visitor) |
| Average visit time | Time spent per user session                                                   |
| Referrer           | Previous webpage before reaching your Olares application                      |
| Visitor info       | Device, browser, OS, and location data                                        |
