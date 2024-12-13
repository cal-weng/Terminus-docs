---
outline: [2, 3]
---

# Applications
 
This documents covers essential concepts for managing application identifiers, types, permissions, and Market integrations within Olares. 

## Application identifier

In Olares, each application is assigned two identifiers: an application name and an application ID.

### Application name

Application names are assigned by Indexers. The official Indexer address maintained by Olares is [apps](https://github.com/beclab/apps). The directory name of an application within this repository serves as the application name.

### Application ID

The application ID is derived as the first eight characters of the MD5 hash of the application name. For instance, if the application name is "hello," the application ID becomes "b1946ac9." Application IDs are utilized in various system endpoints.

## Application types

There are multiple types of applications in Olares. You can distinguish a specific application type according to the namespace shown in Control Hub.

### System applications

System applications encompass Kubernetes, Kubesphere, Olares components, and essential hardware drivers. The system-level namespaces include:

```
os-system
kubesphere-monitoring-federated
kubesphere-controls-system
kubesphere-system
kubesphere-monitoring-system
kubekey-system
default
kube-system
kube-public
kube-node-lease
gpu-system
```

### User system applications

Olares supports multiple users and provides two distinct namespaces for system applications accessible to Admin and Member users:

- **user-space-{Local Name}**

    The `user-space` namespace is where system applications that users interact with daily are installed. These applications include:
    - Files
    - Settings 
    - Control Hub
    - Dashboard
    - Market
    - Profile 
    - Vault

- **user-system-{Local Name}**

  System applications and user-built applications are generally restricted from direct access by third-party applications. However, if the database cluster and built-in applications offer [Service Provider](../../developer/develop/advanced/provider.md) for certain interfaces, then community applications can access these services by [declaring these access permissions](../../developer/develop/package/manifest.md#sysdata).
  
   However, if built-in applications or database clusters make specific service interfaces available through a service provider, community applications can request access by declaring these permissions. When such access is granted, the system routes these network requests through secure proxies in the user-system namespace, ensuring proper authentication and protection of resources.
  
  In this case, the system provides network proxies for these resources under the namespace of `user-system` and authenticates network request calls from third-party applications.

### Community applications

Community applications are applications created and maintained by third-party developers. They encompass a wide range of purposes, from productivity tools and entertainment applications to data analysis utilities.

The namespace of community applications consists of two parts: application name and the user's [local name](olares-id.md#what-is-an-olares-id), for example:

```
n8n-alice
gitlab-client-bob
```

### Cluster-scoped applications

Cluster-scoped applications are special community applications designed to share resources or services across the entire Olares cluster. They run continuously as service providers, with the following operating rules:

- Only one instance is permitted per cluster.
- Only administrators can install and manage cluster-scoped applications.
- They are identifiable by their "for Cluster" suffix and a "Cluster-scoped" label in the Olares app market. 
- Users need to access a cluster-scoped application through its authorized applications. For example, "ComfyUI for Cluster" provides cluster-wide services that users access through its authorized client application "ComfyUI".

### Authorized applications
Authorized applications serve as client-side interfaces for cluster-scoped applications. Both administrators and regular members can install these applications.

### Dependencies
Dependencies are prerequisite applications that must be present for certain applications to function properly. Before installing an application with dependencies, users must ensure all required dependencies are already installed in the cluster.

### Service provider

The Service Provider mechanism enables community applications to interact with system applications and services from other community applications.

![Service Provider](/images/overview/olares/image3.jpeg)

The mechanism consists of three procedures：

1. Provider declaration: Developers must [declare their application as a provider](../../developer/develop/advanced/provider#define-provider) for specific service interfaces.
  The system includes built-in Providers.

2. Permission request: Applications seeking to use a service interface must explicitly [request provider access permissions](../../developer/develop/advanced/provider#request-permission-to-call-provider). 

3. Request handling: `system-server` services under `user-system` act as an agent that handles incoming requests and performs necessary permission validations.


## Learn More

- User

  [Manage apps in Market](../tasks/install-uninstall-update.md)<br>

- Developer

  [Learn to develop applications on Olares](../../developer/develop/index.md)<br>