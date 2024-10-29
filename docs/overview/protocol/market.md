# Open Application Distribution Protocol

## Motivation

The application market in Olares is built on the Open Application Distribution Protocol, aiming to **create a permissionless application distribution ecosystem where developers retain complete ownership of user payments**.

## Technical Implementations

To achieve this mission, Olares OS incorporates several key technical implementations:


- Unified Installation Format

  Olares OS utilizes the [Olares Application Chart (TAC)](../../developer/develop/package/chart.md) format. This format allows users to install and manage applications, recommendation algorithms, and LLMs the same way as they do traditional applications.

- Application Sandbox

  Olares OS provides [Community Application Mode](../olares/application.md#community-application) designed to minimize the impact of malware, ensuring a safer application environment.

- Decentralized Application Evaluation System

  Olares OS supports [Application Reputation](../../developer/contribute/snowinning/smart-contract.md#application-reputation) to assist users in making informed purchase decisions and identifying reputable developers. 

- Flexible Indexer Services for Market
  
  Users can choose Indexer services freely for the Market. The following figure shows the relationship between Developer, Indexer, and Market.

  ![alt text](/images/overview/protocol/distribute.jpeg)

  Developer can freely submit applications to any Indexer, and Market can choose any Indexer to display the application list to users.

  [apps](https://github.com/beclab/apps) is the official Indexer of Olares. It is automatically maintained by a GitBot according to predefined rules. Developers only need to follow [the submission process](../../developer/develop/submit/index.md) to submit an application in the TAC format. After Gitbot merges the developer's submission into the trunk, this app will be visible in [Market](../../how-to/olares/market/index.md) for users to install.
