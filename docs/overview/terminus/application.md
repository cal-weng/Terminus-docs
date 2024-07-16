---
outline: [2, 3]
---

# Application

## Motivation

We intend to develop a sandbox environment for applications on Terminus OS, akin to those found in Android and iOS systems, to enable:

- Separation between user applications and system applications.
- Distinct network and storage isolation for different applications.
- Regulation of application resource consumption.

This sandbox mechanism significantly limits the potential damage from malicious programs, facilitating a viable ecosystem for unlicensed Community Applications.

In Kubernetes, a namespace segments cluster resources into several discrete sections.

We have expanded on the concept that each Community Application belongs to an independent namespace with the following mechanisms:

- [Calling mechanism](#service-provider) between Community Application and system
- [Communication mechanism](#service-provider) between Community Applications
- [Collaboration mechanism](#cluster-scoped-application) when different users use the same Community Application

## Application Identifier

Applications in Terminus OS have two identifiers: application name and application ID.

### Application Name

Under [Market Protocol](../protocol/market.md), application names are assigned by Indexer.

For example, the address of the Indexer maintained by the Terminus official team is [apps](https://github.com/beclab/apps), which stipulates that the directory name of the application under the repository is the application name.

### Application ID

The application ID is the first 8 digits of the application name's MD5 hash. For example, if the application name is "hello", then the application ID is "b1946ac9".

The application ID will appear in the [Endpoint](./network.md#endpoint).

Since the application name is submitted by the developer, Indexer mainly resolves conflict issues. This can cause potential fairness and fraud issues, so we considered introducing a semantic-free application ID to solve this problem.

## Application Classification

You can view the applications existing in the system through [ControlHub](../../how-to/terminus/controlhub/browse.md) and distinguish application types according to `namespace`:

### System Application

System Applications include Kubernetes, Kubesphere and Terminus OS's own components, as well as necessary hardware drivers. The following `namespaces` belong to system applications:

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

`os-system` is a component developed by Terminus OS. Cluster-level applications and various database middleware provided by the system are installed under this namespace.

It can only be accessed by applications in the `user-space` and cannot be accessed by any community applications.

### User System Application

Terminus OS is a multi-user system. For both Admin and Member users, there are two User System Application namespaces, namely:

```
user-system-'Local Name'
user-space-'Local Name'
```

:::info
You can view the definition of Local Name in [Terminus Name](../../developer/contribute/snowinning/terminus-name.md).  
:::

**user-space**

The `user-space` namespace is where system applications that users interact with daily are installed. These applications include:
- [Files](../../how-to/terminus/files/)
- [Settings](../../how-to/terminus/settings/)
- [Control Hub](../../how-to/terminus/controlhub/) 
- [Dashboard](../../how-to/terminus/dashboard/)
- [Market](../../how-to/terminus/market/)
- [Profile](../../how-to/terminus/profile.md)
- [Vault](../../how-to/terminus/vault/)

The reasons we put these applications into a special namespace are:

- They require certain calling permissions to the system's underlying interfaces, e.g. call the `api-server` interface of Kubernetes.
- There are many calls among these applications. 
- We need to protect these applications from potential malicious programs under the sandbox.

**user-system** 

System applications and user built-in applications are not allowed to be accessed directly by third-party applications. However, if the database cluster and built-in applications offer [Service Provider](../../developer/develop/advanced/provider.md) for certain interfaces, then community applications can access these services by [declaring these access permissions](../../developer/develop/package/manifest.md#sysdata).

In this case, the system provides network proxies for these resources under the `namespace` of `user-system` and authenticates network request calls from third-party applications.

### Community Application

The namespace of community applications consists of two parts: [Application Name](#application-name) and the user's [Local Name](../../developer/contribute/snowinning/terminus-name.md), for example:

```
n8n-alice
gitlab-client-bob
```

Terminus OS has completely inherited the existing web software ecosystem: the technology stack required to develop applications is exactly the same as traditional web applications. As such, developers can not only develop new applications, but also integrate existing web applications into Terminus OS with slight modifications.

Developers can refer to the [Developer Documentation](../../developer/develop/index.md) to develop applications, and [Submit](../../developer/develop/submit/index.md). Other users can view and install applications through [Market](../../how-to/terminus/market/).

Building the Terminus ecosystem together with developers will always be our most important objective. 

### Cluster Scoped Application

Cluster Scoped Application is a special type of community application. It:

- Can only be installed by Admin.
- Only allows one instance of each `Cluster Scoped Application` to be installed in the entire cluster.
- Requires users to access `Cluster Scoped Application` through `Reference Application` authorized by the `Cluster Scoped Application`.

Typically a `Cluster Scoped Application` will:

1. Listen to [user event callbacks](../../developer/develop/advanced/account.md), to synchronize users in the system.
2. Implement [Auth Server](./account.md#unified-account) so that users do not need to log in separately.  

You can refer to some transplants done by the Terminus team:
- [Gitlab Fusion Client](https://github.com/beclab/apps/tree/main/gitlabfusionclient)
- [Gitlab Fusion](https://github.com/beclab/apps/tree/main/gitlabfusion)

## Calls Between Apps

### Service Provider 

We provide a Service Provider mechanism for community applications to call system applications or services provided by other community applications.

![Service Provider](/images/overview/terminus/image3.jpeg)

As can be seen in the diagram:

- Developers need to [declare as Provider](../../developer/develop/advanced/provider.html#define-provider) for a service interface of an application. The system also has some built-in Providers.
- When other applications want to call this interface, they need to [request the permission to call the Provider](../../developer/develop/advanced/provider.html#request-permission-to-call-provider).  
- When the call actually occurs, the `system-server` service under `user-system` serves as the agent responsible for the request and performs permission checks.

## Market

In Terminus's [Market](../../how-to/terminus/market/), you can install applications, intelligent recommendations and AI models with a consistent experience. Users simply click **Get** in the Market, wait for the system to complete the installation, and then open and use the item. The system handles these installations based on Helm's installation [Chart](../../developer/develop/package/chart.md) package to provide a unified installation process.

For developers, submitting third-party applications, intelligent recommendations, and AI models to Terminus Market follows the same [submission review process](../../developer/develop/submit/index.md).  

For advanced users, Terminus Market also provides an option for custom installation. Users can refer to our [TAC format](../../developer/develop/package/chart.html) to package any application and manually upload it to the system.

## Application Status

The lifecycle of an application will have the following states:

- `pending`: Waiting in queue.
- `installing`: Installation in progress. 
- `running`: Application installation completed.
- `suspend`: Application suspended with number of replicas set to 0.
- `uninstalling`: Uninstallation in progress.
- `upgrading`: Upgrade in progress.

The state change flow chart is as follows:

```
+---------+     +------------+     +--------------+     +---------+     +----------+
| pending | --> | installing | --> |              | --> | suspend | --> | resuming |
+---------+     +------------+     |              |     +---------+     +----------+
                                   |              |                       |
                  +--------------> |   running    | <---------------------+
                  |                |              |
                +------------+     |              |
                | upgrading  | <-- |              |
                +------------+     +--------------+
                                     |
                                     |
                                     v
                                   +--------------+
                                   | uninstalling |
                                   +--------------+

```

## Resource Limit

Application developers should fill in the application's reasonable resource usage limits in [TerminusManifest.yaml](../../developer/develop/package/manifest.md#spec) in the TAC.

- requiredMemory: minimum memory requirement, unit Mi / Gi
- limitedMemory: memory limit, unit Mi / Gi
- requiredDisk: minimum hard disk usage, unit Mi / Gi
- limitedDisk: upper limit of hard disk occupancy, unit Mi / Gi
- requiredCpu: Minimum number of CPU cores required, available decimals
- limitedCpu: the upper limit of the number of CPU cores, available decimals

When a developer submits an application for review, it will be checked whether the total resource usage of all containers configured in the TAC template exceeds the declared amount in `TerminusManifest.yaml`.

When users install an application, Terminus OS checks whether the remaining resources of the current Terminus OS meet the resource requirements declared by the application. If not, it rejects the installation.

## Learn More

- User

  [Manage apps using Market](../../how-to/termipass/account/index.md)<br>
  [Manage applications using Settings](../../how-to/terminus/settings/application.md)<br>

- Developer

  [Learn to develop applications on Terminus](../../developer/develop/index.md)<br>
