---
description: Manage Olares system resources efficiently by editing YAML configurations, modifying Pod replicas, and monitoring container status through the Control Hub interface.
---
# View container status

The Pods page provides a comprehensive view of all Pods in your Olares environment, allowing you to manage them at the smallest granularity offered by Kubernetes.

This guide shows you how to view the status of your container.

## View container status

Click on a Pod in the list takes you to the Pod details page, where you can:
- View container logs.
- Access the container environment.
- View container ports and environment variables.
- Open the Pod's YAML configuration in a read-only view.
  :::tip
  You cannot edit the YAML configuration directly from this view. The YAML is managed by Olares through workload templates and webhooks.
  :::
![pod detail](/images/how-to/olares/controlhub/pods/02.jpg#bordered)

## Export container logs