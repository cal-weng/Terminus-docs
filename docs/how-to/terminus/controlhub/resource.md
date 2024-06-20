---
outline: [2, 3]
---

# Resources

The **Resources'** section includes resources related to both software and hardware in Terminus OS. For software, it encompasses cluster descriptions, feature definitions, and declarations of cluster states, etc. For hardware, it contains details about networks, storage, devices, etc.

:::tip
Only administrators can see the **Resource** page.
:::

## Network

![networks](/images/how-to/terminus/controlhub/resources/01.jpg)

### Network Policies

**Network Policies** is one of the most important network resource in Terminus OS. They define how the network connects. The system utilizes a **sandbox mechanism** for network policies, which restricts interactions based on the namespace. This provides isolation between the networks of different users and applications.

As shown in the image above, the **Network Policies** in the **Control Hub** have two parts:

- **Ingress Rule**<br>
  Shows a list of rules that specify which `incoming traffic` is allowed into a Namespace: <br>
  **1.** Only the traffic from the pod in the `namespace`, which matches the label specified in the rule, is allowed.<br>
  **2.** The `AND` logic is applied for each label within a rule.<br>
  **3.** The `OR` logic is applied between the rules in the list.

- **Egress Rule**<br>
  Similar to the Ingress Rule, it also displays a list of rules that specify which `outgoing traffic` is allowed out of a Namespace.

## CRDs

![CRDs](/images/how-to/terminus/controlhub/resources/02.jpg)

CRDs list all the Kubernetes-based Custom Resource Definitions (CRDs) in Terminus OS. Many cloud-native features of Terminus OS depend on these CRDs.

### Details

Shows the name, group, scope level, and creation time of the CRD. There are two types of CRD scopes:

- **Namespace**<br>
  Indicates that each `custom resource` belongs to a namespace.

- **Cluster**<br>
  Indicates that each `custom resource` must be globally unique and does not belong to any Namespace. For instance, the Namespace itself is a resource at the cluster level.

### Custom Resource

Lists all the `custom resources` under this CRD, including their names and creation times. Each `custom resource` has two action buttons to the right.

- **Delete**<br>
Deletes this resource.

- **Edit YAML**<br>
Manually edits the YAML file of the `custom resource`. After editing, click **OK** to save the change to the system.

  ![Edit yaml](/images/how-to/terminus/controlhub/resources/03.jpg)
