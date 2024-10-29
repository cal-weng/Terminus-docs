---
outline: [2, 3]
---

# ControlHub

**ControlHub** is the console for Olares OS. 

For Olares OS users, especially developers, **ControlHub** provides a more precise and autonomous status control over the system's operation and the underlying environment.

## Features

- Olares - Monitor the status of applications in three different views.
  - [Browse](./browse.md): Provides an application view to help you quickly locate various resource usages related to an application. 
  - [Namespace](./namespace.md): Provides a **user view** to give you detailed insights into resource consumption of each application per user.
  - [Pods](./pods.md): Provides a **node view** that delivers the status and resource consumption for pods at the finest granularity.
- [Resource](./resource.md): View the usage of Kubernetes system resources.
  - [Networks](./resource.md#network): Displays the network security policies implemented in the system and the network connectivity of each namespace.
  - [CRDs](./resource.md#crds): Manages various custom resource declarations in the system.
- [Middleware](./middleware.md): View the usage of various middleware in Olares OS.
  - [Postgres](./middleware.md#postgres): Displays detailed information about the PostgreSQL database in cluster.
  - [MongoDB](./middleware.md#mongodb): Displays detailed information about the MongoDB database in cluster.
  - [Redis](./middleware.md#redis): Displays detailed information about the Redis database in the cluster.