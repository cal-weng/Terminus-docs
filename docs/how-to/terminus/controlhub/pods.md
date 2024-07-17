# Pods

The **Pods** section page provides a comprehensive view of all Pods in your Terminus OS environment, allowing you to manage them at the smallest granularity offered by Kubernetes.

## View Pod Info

The Pod List displays all Pods within your Terminus OS.

![pod list](/images/how-to/terminus/controlhub/pods/01.jpg)

Use the following methods to view Pod info:

- **Filter by Node**: Use the dropdown menu in the upper right corner to view Pods running on a specific node.
- **Search by Name**: Enter keywords in the search box in upper right corner to find specific Pods.

## View Container Status

To view the container status of a specific Pod, you can:

- In the **Operation** column, click the **More Options (...)** button on the right, and then select the **View YAML** option to view the Pod configuration in YAML.
  
    ![pod yaml](/images/how-to/terminus/controlhub/pods/03.jpg)

    :::tip
    You cannot edit the YAML configuration directly from this view. The YAML is managed by Terminus OS through workload templates and webhooks.
    :::

- Clicking on a Pod in the list takes you to the Pod details page, where you can:

    ![pod detail](/images/how-to/terminus/controlhub/pods/02.jpg)

  - View container logs.
  - Access the container environment.
  - View container ports and environment variables.
  - Open the Pod's YAML configuration in a read-only view.

This feature is similar to the [Pod Detail](./browse.md#view-resource-details) in the **Browse** section.

## Resource 

The Resources section provides a visual representation of the physical resources consumed by your Pods. This view helps you understand how your cluster's resources are being utilized.

### View Resource Consumption

The resource consumption chart shows both current and historical resource usage. View this data by selecting a view from the top-right corner of the page:

**Cluster-wide**: This view shows the total resource usage for all Pods running on all nodes in your cluster.

**Node-specific**: This view focuses on a particular node. It filters the chart to display resource consumption only for Pods running on that specific node. 


![resources](/images/how-to/terminus/controlhub/pods/04.jpg)
