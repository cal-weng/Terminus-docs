# Open Application Distribution Protocol

## Concept

The vision of Open Application Distribution Protocol is to **create a permissionless application distribution ecosystem where user payments fully belong to the developer**.

## Tech solution

To realize this vision, technologically we need to acheive:

- Unified installation format

  Terminus provided [TAC format](../../developer/develop/package/chart.md), allowing users the same experience as installing and managing traditional applications, recommendation algorithms and models, and all future "software".

- Application Sandbox

  Terminus provides[Community Application Mode](../terminus/application.md#community-application) to minimize the impact of malware.

- Decentralized application evaluation system

  Terminus provides [Application Reputation](../../developer/contribute/snowinning/smart-contract.md#application-reputation) to help users make purchasing decisions and identify reputable developers. 

- Users can freely choose Indexer services for Market. The following figure shows the relationship between Developer, Indexer, and Market.

  ![alt text](/images/overview/protocol/distribute.jpeg)

  Developer can freely submit applications to any Indexer, and Market can choose any Indexer to display the application list to users.

  [apps](https://github.com/beclab/apps) is the official Indexer of Terminus. It is automatically maintained by a Gitbot robot according to the rules. Developers only need to follow [the process](../../developer/develop/submit/index.md) to submit an application in line with the TAC format, Gitbot will merge the developer's submission into the trunk, and the user can see this app in [Market](../../how-to/terminus/market/index.md) and installed it.

  You can also refer to this case to build your own Indexer.
