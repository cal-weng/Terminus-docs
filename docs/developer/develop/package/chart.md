# Olares Application Chart Structure

The **Olares Application Chart (TAC)** is built upon the structure of **Helm Chart**, with extensions to accommodate specific **Olares** information. A standard **TAC** should contain the following files:
```
|-- Chart.yaml                   # chart metadata
|-- OlaresManifest.yaml        # Olares Application configuration
|-- templates                    # chart deployment template files
|   |-- deployment.yaml          # APP deployment script
|-- values.yaml                  # chart deployment parameters
```
:::info NOTE
To make the templates directory easier to understand, you can split the deployment into several files.
:::

- A typical **TAC** for `App`:
```
AppName
|-- Chart.yaml                # Required: YAML file containing chart metadata
|-- OlaresManifest.yaml     # Required: containing App configuration
|-- values.yaml               # Required: default configuration values of the chart
|-- templates                 # Required: template directory, when combined with values, it can generate valid Kubernetes manifest files
|   |-- NOTES.txt             # Optional: plain text file containing brief usage instructions
|   |-- deployment.yaml       # Defines the deployment for App installation
|   |-- service.yaml          # Defines the Service that provides the Entrance for the App
|   |-- provider.yaml         # Optional: if you need to expose the Provider API 
|-- LICENSE                   # Optional: plain text file containing the chart license
|-- README.md                 # Optional: readable README file
```

- A typical **TAC** for `Recommend`:

```
RecommendName
|-- Chart.yaml                # Required: YAML file containing chart metadata
|-- OlaresManifest.yaml     # Required: containing Recommend configuration
|-- values.yaml               # Required: default configuration values of the chart
|-- templates                 # Required: template directory, when combined with values, it can generate valid Kubernetes manifest files
|   |-- NOTES.txt             # Optional: plain text file containing brief usage instructions
|   |-- train.yaml            # Defines the train process in recommend workflows
|   |-- prerank.yaml          # Defines the prerank process in recommend workflows
|   |-- rank.yaml             # Defines the rank process in recommend workflows
|   |-- embedding.yaml        # Defines the embedding process in recommend workflows
|-- LICENSE                   # Optional: plain text file containing the chart license
|-- README.md                 # Optional: readable README file
```

- A typical **TAC** for `Large Language Model`:

```
ModelName
|-- Chart.yaml                # Required: YAML file containing chart metadata
|-- OlaresManifest.yaml     # Required: containing LLM configuration
|-- values.yaml               # Required: default configuration values of the chart
├── modelConfig.yaml          # Required: containing model configuration
|-- templates                 # Required: template directory, it is usually empty in TAC for Model.
|-- LICENSE                   # Optional: plain text file containing the chart license
└── README.md                 # Optional: readable README file
```
