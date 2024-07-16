---
outline: deep
---

# Otmoic

## Introduction

Otmoic is a trustless automatic value exchanging protocol based on Snowinning Protocol, built for Depin, AI Agent, and Crypto Trading.

The vision of Otmoic is to **give public goods a fair price**.

Otmoic Protocol has the following features:

- Provides on-chain [reputation mechanism](../../developer/contribute/snowinning/concepts.md#reputation) for trader and liquidity provider, solving the free mint problem
- Supports [KYC](#kyc) based on [Verifiable Credential](../../developer/contribute/snowinning/concepts.md#verifiable-credential)
- RFQ-based price discovery
- Supports Atomic swap based on-chain transactions
- Supports automatic market making by liquidity providers through applications installation in Terminus OS

With the above design, Otmoic Protocol can be widely used in Depin, AI Bot, Creator Economy, Crypto Trading, Crypto Crossing Chain, Fiat And Crypto Gateway and other scenarios.

## Open-source projects

You can check the protocol codes here:
:::info Code repository

- Contract

  - [contract-evm](https://github.com/otmoic/contract-evm)

- Liquidity Provider Node

  - [lpnode](https://github.com/otmoic/lpnode)
  - [lpnode-admin](https://github.com/otmoic/lpnode-admin)
  - [lpnode-dashboard](https://github.com/otmoic/lpnode-dashboard)
  - [lpnode-monitor](https://github.com/otmoic/lpnode-monitor)
  - [lpnode-graphql](https://github.com/otmoic/lpnode-graphql)

- AMM

  - [lpnode-amm](https://github.com/otmoic/lpnode-amm)
  - [lpnode-index-market](https://github.com/otmoic/lpnode-index-market)
  - [lpnode-exchange-adapter](https://github.com/otmoic/lpnode-exchange-adapter)
  - [lpnode-amm-analyze](https://github.com/otmoic/lpnode-amm-analyze)

- Chain Client

  - [chainclient-evm](https://github.com/otmoic/chainclient-evm)

- Example

  - [lpnode-amm-example](https://github.com/otmoic/lpnode-amm-example)

:::

Below are the details of the protocol.

## Spec

### Resources

:::info Data

- BridgeInfo

  | name         | type   | required | description                                                                      |
  | ------------ | ------ | -------- | -------------------------------------------------------------------------------- |
  | src_chain_id | uint   | ✔        | The chain ID on which the user transfers out tokens, following BIP-44 coin types |
  | dst_chain_id | uint   | ✔        | The chain ID on which the user transfers in tokens, following BIP-44 coin types  |
  | src_token    | String | ✔        | The token which the user transfers out                                           |
  | dst_token    | String | ✔        | The token which the user transfers in                                            |
  | bridge_name  | String | ✔        | <src_chain_id>-<src_token>-<dst_chain_id>-<dst_token>                            |

- QuoteBase

  | name               | type       | required: amm -> lpnode | required: lpnode -> relay | required: ask reply: amm -> lpnode | required: ask reply: lpnode -> relay | description                                                                                             |
  | ------------------ | ---------- | ----------------------- | ------------------------- | ---------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------- |
  | bridge             | BridgeInfo |                         | ✔                         |                                    | ✔                                    | Information of the trading pair to which this quotation belongs                                         |
  | lp_bridge_address  | String     |                         |                           |                                    | ✔                                    | The recepient address of LP                                                                             |
  | lp_node_uri        | String     |                         |                           |                                    | ✔                                    | The publicly accessible address of the LP program, on which the relay relies to communicate with lpnode |
  | quote_hash         | String     |                         |                           | ✔                                  | ✔                                    | The hash of this quotation used as a unique identifier                                                  |
  | price              | String     |                         |                           | ✔                                  | ✔                                    | The exchange price quoted in integer multiples of the token                                             |
  | native_token_price | String     |                         |                           | ✔                                  | ✔                                    | The price to exchange for native token, also quoted in integer multiples of the token                   |
  | native_token_max   | String     |                         |                           | ✔                                  | ✔                                    | How many native tokens can be exchanged this time                                                       |
  | native_token_min   | String     |                         |                           | ✔                                  | ✔                                    | The minimum amount to exchange for native tokens if any                                                 |

- QuoteAuthenticationLimiter

  | name               | type   | required | description                                   |
  | ------------------ | ------ | -------- | --------------------------------------------- |
  | limiter_state      | String | ✔        | Whether to turn on the limiter                |
  | country_white_list | String |          | Limit by country - whitelist separated by "," |
  | country_black_list | String |          | Limit by country - blacklist separated by "," |
  | min_age            | String |          | The minimum age at which users can trade      |

  > [!NOTE]
  >
  > - If the limiter is on, all counterparties that have not done KYC on the relay will be rejected
  > - Only one of the blacklist and whitelist is effective and the whitelist has higher priority. The blacklist takes effect if the whitelist is empty.
  > - If the whitelist is configured, all other countries are blacklisted.

- LPInfo

  | name         | type   | required | description                             |
  | ------------ | ------ | -------- | --------------------------------------- |
  | name         | String | ✔        | The name of LP - must use Terminus Name |
  | profile      | String | ✔        | Introduction of LP - arbitrary content  |
  | credit_score | uint   | ✔        | Credit score of LP in the current relay |

  > [!NOTE]
  >
  > - The calculation of credit_score consists of two parts:
  >   - the basic score is calculated based on the transaction count and average waiting time during a recent period
  >   - the complaint penalty is a permenant scoring when there is a complaint on the transaction and it is confirmed by the system

- Quote

  | name                   | type                       | required | description                 |
  | ---------------------- | -------------------------- | -------- | --------------------------- |
  | quote_base             | QuoteBase                  | ✔        | Quoting information         |
  | authentication_limiter | QuoteAuthenticationLimiter | ✔        | Limiter of this quotation   |
  | lp_info                | LPInfo                     | ✔        | LP information              |
  | timestamp              | Long                       | ✔        | Timestamp of this quotation |

- Ask

  | name   | type   | required | description                                                     |
  | ------ | ------ | -------- | --------------------------------------------------------------- |
  | bridge | String | ✔        | The name of the trading pair, same as bridge_name in BridgeInfo |
  | amount | String | ✔        | Token amount that the user expects to exchange for              |

- SwapAssetInformation

  | name                   | type   | required: FE -> relay | required: relay -> lpnode | required: lpnode -> amm | description                                                         |
  | ---------------------- | ------ | --------------------- | ------------------------- | ----------------------- | ------------------------------------------------------------------- |
  | bridge_name            | String | ✔                     | ✔                         | ✔                       | Name of the trading pair                                            |
  | lp_id                  | String | ✔                     | ✔                         | ✔                       | Name of LP                                                          |
  | sender                 | String | ✔                     | ✔                         | ✔                       | Wallet address that executes transfer-out                           |
  | amount                 | String | ✔                     | ✔                         | ✔                       | Token amount to transfer out                                        |
  | dst_address            | String | ✔                     | ✔                         | ✔                       | Recepient address for transfer-in                                   |
  | dst_amount             | String | ✔                     | ✔                         | ✔                       | Token amount to transfer in                                         |
  | dst_native_amount      | String | ✔                     | ✔                         | ✔                       | Additional native token received during transfer-in                 |
  | step_time_lock         | Long   | ✔                     | ✔                         | ✔                       | The limitation of duration of every step                            |
  | agreement_reached_time | Long   | ✔                     | ✔                         | ✔                       | The time when the agreement is reached                              |
  | requestor              | String | ✔                     | ✔                         | ✔                       | The identity verification address of swap initiator                 |
  | user_sign              | String | ✔                     | ✔                         | ✔                       | The transaction information signature of the user                   |
  | lp_sign                | String |                       |                           |                         | The transaction information signature of the LP                     |
  | quote                  | Quote  | ✔                     | ✔                         | ✔                       | The quotation selected by the transaction initiator                 |
  | system_fee_src         | uint   |                       | ✔                         | ✔                       | Commission charged by the current contract - chain for transfer-out |
  | system_fee_dst         | uint   |                       | ✔                         | ✔                       | Commission charged by the current contract - chain for transfer-in  |
  | dst_amount_need        | String |                       | ✔                         | ✔                       | Whether to exchange for token                                       |
  | dst_native_amount_need | String |                       | ✔                         | ✔                       | Whether to exchange for native token                                |
  | append_information     | String |                       |                           |                         | Additional information                                              |

  > [!NOTE]
  > dst_amount_need and dst_native_amount_need is derived by the relay based on information of this swap
  > system_fee_dst and system_fee_src is fetched on-chain by the relay
  >
  > The above four variables are not necessary parameters of the exchanging process. They exist only for reducing implementation difficulty of later processes and other modules.

- About the operation duration limit of each step
  - transferOut: must be called before agreement_reached_time + 1 \* step_time_lock otherwise it will fail
  - transferIn: must be called before agreement_reached_time + 2 \* step_time_lock otherwise it will fail
  - confirmTransferOut:
    - if using the hashlock of transaction initiator, must be called before agreement_reached_time + 3 \* step_time_lock otherwise it will fail
    - if using the hashlock of the relay, must be called before agreement_reached_time + 6 \* step_time_lock otherwise it will fail
  - confirmTransferIn: must be called before agreement_reached_time + 5 \* step_time_lock otherwise it will fail
  - refundTransferOut: must be called after agreement_reached_time + 7 \* step_time_lock otherwise it will fail
  - refundTransferIn: must be called after agreement_reached_time + 7 \* step_time_lock otherwise it will fail

> [!NOTE]
> The expected normal operation process and time limit are:
>
> - transferOut: 1 \* step_time_lock
> - transferIn: 2 \* step_time_lock
> - confirmTransferOut: 3 \* step_time_lock
> - confirmTransferIn: 4 \* step_time_lock
>
> However, considering possible cheating on both sides, the time limits of confirmTransferOut and confirmTransferIn need to be adjusted.
>
> - If LP have not performed confirmTransferIn until 4 _ step_time_lock, the relay will perform the operation by itself. The duration 4 _ step_time_lock ~ 5 \* step_time_lock is for the relay to prevent cheating.
> - The hashlock used during transferIn is provided by the transaction initiator so relay will use the hashlock of itslef to perform confirmTransferOut if the transaction initiator perform confirmTransferIn near the time limit of 5 _ step_time_lock. The duration 5 _ step_time_lock ~ 6 \* step_time_lock is for the relay to prevent cheating.

- About Transaction signatures

  The transaction initiator should use the requestor to sign the transaction and the signature is filled in `user_sign` field.
  LP should use the address that has been verified by the DID contract to sign the transaction and the signature is filled in `lp_sign` field.

> [!NOTE]
> The signatures follow EIP-712 standard on EVM-compatible chains.
> The signatures follow supported similar protocols on other chains.

- EIP712 Types

  ```
  types: {
    EIP712Domain: [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
    ],
    Message: [
      { name: 'src_chain_id', type: 'uint256' },
      { name: 'src_address', type: 'string' },
      { name: 'src_token', type: 'string' },
      { name: 'src_amount', type: 'string' },
      { name: 'dst_chain_id', type: 'uint256' },
      { name: 'dst_address', type: 'string' },
      { name: 'dst_token', type: 'string' },
      { name: 'dst_amount', type: 'string' },
      { name: 'dst_native_amount', type: 'string' },
      { name: 'requestor', type: 'string' },
      { name: 'lp_id', type: 'string' },
      { name: 'step_time_lock', type: 'uint256' },
      { name: 'agreement_reached_time', type: 'uint256' },
    ],
  }
  ```

  BidId Generation

  ```
  sha3(
    agreement_reached_time +
    src_chain_id +
    lp_bridge_address +
    src_token +
    dst_chain_id +
    dst_address +
    dst_token +
    amount +
    dst_amount +
    dst_native_amount +
    requestor +
    lp_id +
    step_time_lock +
    user_sign +
    lp_sign
  )
  ```

- PreBusiness

  | name                   | type                 | required: relay -> lpnode | required: lpnode -> amm | required: relay -> FE | description                                                           |
  | ---------------------- | -------------------- | ------------------------- | ----------------------- | --------------------- | --------------------------------------------------------------------- |
  | swap_asset_information | SwapAssetInformation | ✔                         | ✔                       |                       | The exchange information                                              |
  | hash                   | String               | ✔                         | ✔                       |                       | The hash generated from main information in the exchange              |
  | relay_hashlock         | String               |                           |                         | ✔                     | The hashlock provided by the relay                                    |
  | is_kyc                 | Boolean              | ✔                         | ✔                       |                       | Whether the transaction initiator have done KYC in the relay's system |
  | kyc_info               | KycInfo              |                           |                         |                       | Complete KYC information of the transaction initiator                 |
  | locked                 | Boolean              |                           |                         | ✔                     | Whether the two parties have reached agreement                        |

- About KYC Info

  Users need to provide their on-chain address when doing KYC with the relay. After KYC is done, the swap initiated with signature of this address will match the limiter with the state of successful KYC and provide complete KYC information like LP for confirmation. For more info see the chapter about KYC below.

- About The Lock Bit

  In the data returned to frontend, the Lock bit tells whether the agreement is reached and the tokens need to be locked. Its value is false in the following cases:

  > [!NOTE]
  >
  > - The recovered address calculated from user_sign and other swap information is different from the requestor address
  > - The recovered address calculated from lp_sign and other swap information have not been verified on-chain
  > - The transaction initiator does not satisfy the limits set in the quotation
  > - Other unknown reasons (e.g. the LP may reject this swap request in cases of insufficient balance or large price deviation)

- TransferOut-EVM

  Below are calling parameters of the contract interface.

  | name                 | type    | required | description                                                                            |
  | -------------------- | ------- | -------- | -------------------------------------------------------------------------------------- |
  | sender               | address | ✔        | The initiator of this operation, same as the requestor in most cases but no such limit |
  | bridge               | address | ✔        | lp_bridge_address in QuoteBase                                                         |
  | token                | address | ✔        | src_token in BridgeInfo                                                                |
  | amount               | uint256 | ✔        | amount in SwapAssetInformation                                                         |
  | hashlock             | bytes32 | ✔        | The hashlock provided by the transaction initiator                                     |
  | relayHashlock        | bytes32 | ✔        | relay_hashlock in PreBusiness                                                          |
  | stepTimelock         | uint64  | ✔        | step_time_lock in SwapAssetInformation                                                 |
  | dstChainId           | uint64  | ✔        | dst_chain_id in BridgeInfo                                                             |
  | dstAddress           | uint256 | ✔        | dst_address in SwapAssetInformation                                                    |
  | bidId                | bytes32 | ✔        | hash in PreBusiness                                                                    |
  | tokenDst             | uint256 | ✔        | dst_token in BridgeInfo                                                                |
  | amountDst            | uint256 | ✔        | dst_amount in SwapAssetInformation                                                     |
  | nativeAmountDst      | uint256 | ✔        | dst_native_amount in SwapAssetInformation                                              |
  | agreementReachedTime | uint64  | ✔        | agreement_reached_time in SwapAssetInformation                                         |
  | requestor            | string  | ✔        | requestor in SwapAssetInformation                                                      |
  | lpId                 | string  | ✔        | lp_id in SwapAssetInformation                                                          |
  | userSign             | string  | ✔        | userSign in SwapAssetInformation                                                       |
  | lpSign               | string  | ✔        | lpSign in SwapAssetInformation                                                         |

  > [!NOTE] About hashlock
  >
  > - The transaction initiator provides bytes32 data as the lock for releasing tokens and will be verified by `keccak256(preimage)` during Confirm operation. The locked tokens are released if this is verified and other conditions are met.
  > - TransferIn uses the same lock as TransferOut.
  > - After publishing the preimage during ConfirmTransferOut, the LP can use the preimage to perform TransferIn.

- EventTransferOut-EVM

  | name                   | type    | required | description                  |
  | ---------------------- | ------- | -------- | ---------------------------- |
  | transfer_id            | bytes32 | ✔        | The ID of this operation     |
  | sender                 | address | ✔        | Same field as in TransferOut |
  | bridge                 | address | ✔        | Same field as in TransferOut |
  | token                  | address | ✔        | Same field as in TransferOut |
  | amount                 | uint256 | ✔        | Same field as in TransferOut |
  | hashlock               | bytes32 | ✔        | Same field as in TransferOut |
  | relay_hashlock         | bytes32 | ✔        | Same field as in TransferOut |
  | step_time_lock         | uint64  | ✔        | Same field as in TransferOut |
  | dst_chain_id           | uint64  | ✔        | Same field as in TransferOut |
  | dst_address            | uint256 | ✔        | Same field as in TransferOut |
  | bid_id                 | bytes32 | ✔        | Same field as in TransferOut |
  | token_dst              | uint256 | ✔        | Same field as in TransferOut |
  | amount_dst             | uint256 | ✔        | Same field as in TransferOut |
  | native_amount_dst      | uint256 | ✔        | Same field as in TransferOut |
  | agreement_reached_time | uint64  | ✔        | Same field as in TransferOut |
  | requestor              | string  | ✔        | Same field as in TransferOut |
  | lp_id                  | string  | ✔        | Same field as in TransferOut |
  | user_sign              | string  | ✔        | Same field as in TransferOut |
  | lp_sign                | string  | ✔        | Same field as in TransferOut |

- TransferIn-EVM

  Below are calling parameters of the contract interface.

  | name                   | type    | required | description                                    |
  | ---------------------- | ------- | -------- | ---------------------------------------------- |
  | sender                 | address | ✔        | The initiator of this operation                |
  | dst_address            | address | ✔        | dst_address in SwapAssetInformation            |
  | token                  | address | ✔        | dst_token in BridgeInfo                        |
  | token_amount           | uint256 | ✔        | dst_amount in SwapAssetInformation             |
  | eth_amount             | uint256 | ✔        | dst_native_amount in SwapAssetInformation      |
  | hashlock               | bytes32 | ✔        | hashlock in EventTransferOut                   |
  | step_time_lock         | uint64  | ✔        | step_time_lock in SwapAssetInformation         |
  | src_chain_id           | uint64  | ✔        | src_chain_id in BridgeInfo                     |
  | src_transfer_id        | bytes32 | ✔        | transfer_id in EventTransferOut                |
  | agreement_reached_time | uint64  | ✔        | agreement_reached_time in SwapAssetInformation |

- EventTransferIn-EVM

  | name                   | type    | required | description                 |
  | ---------------------- | ------- | -------- | --------------------------- |
  | transfer_id            | bytes32 | ✔        | The ID of this operation    |
  | sender                 | address | ✔        | Same field as in TransferIn |
  | receiver               | address | ✔        | Same field as in TransferIn |
  | token                  | address | ✔        | Same field as in TransferIn |
  | token_amount           | uint256 | ✔        | Same field as in TransferIn |
  | eth_amount             | uint256 | ✔        | Same field as in TransferIn |
  | hashlock               | bytes32 | ✔        | Same field as in TransferIn |
  | step_time_lock         | uint64  | ✔        | Same field as in TransferIn |
  | src_chain_id           | uint64  | ✔        | Same field as in TransferIn |
  | src_transfer_id        | bytes32 | ✔        | Same field as in TransferIn |
  | agreement_reached_time | uint64  | ✔        | Same field as in TransferIn |

- ConfirmTransferOut-EVM

  Below are calling parameters of the contract interface.

  | name                   | type    | required | description                    |
  | ---------------------- | ------- | -------- | ------------------------------ |
  | sender                 | address | ✔        | Same field as in TransferOut   |
  | receiver               | address | ✔        | Same field as in TransferOut   |
  | token                  | address | ✔        | Same field as in TransferOut   |
  | token_amount           | uint256 | ✔        | Same field as in TransferOut   |
  | eth_amount             | uint256 | ✔        | Same field as in TransferOut   |
  | hashlock               | bytes32 | ✔        | Same field as in TransferOut   |
  | relay_hashlock         | bytes32 | ✔        | Same field as in TransferOut   |
  | step_time_lock         | uint64  | ✔        | Same field as in TransferOut   |
  | preimage               | bytes32 | ✔        | The preimage of hashlock       |
  | relay_preimage         | bytes32 | ✔        | The preimage of relay_hashlock |
  | agreement_reached_time | uint64  | ✔        | Same field as in TransferOut   |

- EventConfirmTransferOut-EVM

| name        | type    | required | description                         |
| ----------- | ------- | -------- | ----------------------------------- |
| transfer_id | bytes32 | ✔        | transfer_id in EventTransferOut     |
| preimage    | bytes32 | ✔        | Same field as in ConfirmTransferOut |

- ConfirmTransferIn-EVM

  Below are calling parameters of the contract interface.

  | name                   | type    | required | description                         |
  | ---------------------- | ------- | -------- | ----------------------------------- |
  | sender                 | address | ✔        | Same field as in TransferIn         |
  | dst_address            | address | ✔        | Same field as in TransferIn         |
  | token                  | address | ✔        | Same field as in TransferIn         |
  | token_amount           | uint256 | ✔        | Same field as in TransferIn         |
  | eth_amount             | uint256 | ✔        | Same field as in TransferIn         |
  | hashlock               | bytes32 | ✔        | Same field as in TransferIn         |
  | step_time_lock         | uint64  | ✔        | Same field as in TransferIn         |
  | preimage               | bytes32 | ✔        | preimage in EventConfirmTransferOut |
  | agreement_reached_time | uint64  | ✔        | Same field as in TransferIn         |

- EventConfirmTransferIn-EVM

  | name        | type    | required | description                    |
  | ----------- | ------- | -------- | ------------------------------ |
  | transfer_id | bytes32 | ✔        | transfer_id in EventTransferIn |
  | preimage    | bytes32 | ✔        | preimage in ConfirmTransferIn  |

- RefundTransferOut-EVM

  Below are calling parameters of the contract interface.

  | name                   | type    | required | description                  |
  | ---------------------- | ------- | -------- | ---------------------------- |
  | sender                 | address | ✔        | Same field as in TransferOut |
  | receiver               | address | ✔        | Same field as in TransferOut |
  | token                  | address | ✔        | Same field as in TransferOut |
  | token_amount           | uint256 | ✔        | Same field as in TransferOut |
  | eth_amount             | uint256 | ✔        | Same field as in TransferOut |
  | hashlock               | bytes32 | ✔        | Same field as in TransferOut |
  | relay_hashlock         | bytes32 | ✔        | Same field as in TransferOut |
  | step_time_lock         | uint64  | ✔        | Same field as in TransferOut |
  | agreement_reached_time | uint64  | ✔        | Same field as in TransferOut |

- EventRefundTransferOut-EVM

  | name        | type    | required | descript                        |
  | ----------- | ------- | -------- | ------------------------------- |
  | transfer_id | bytes32 | ✔        | transfer_id in EventTransferOut |

- RefundTransferIn-EVM

  Below are calling parameters of the contract interface.

  | name                   | type    | required | description                 |
  | ---------------------- | ------- | -------- | --------------------------- |
  | sender                 | address | ✔        | Same field as in TransferIn |
  | dst_address            | address | ✔        | Same field as in TransferIn |
  | token                  | address | ✔        | Same field as in TransferIn |
  | token_amount           | uint256 | ✔        | Same field as in TransferIn |
  | eth_amount             | uint256 | ✔        | Same field as in TransferIn |
  | hashlock               | bytes32 | ✔        | Same field as in TransferIn |
  | step_time_lock         | uint64  | ✔        | Same field as in TransferIn |
  | agreement_reached_time | uint64  | ✔        | Same field as in TransferIn |

- EventRefundTransferIn-EVM

  | name        | type    | required | descript                       |
  | ----------- | ------- | -------- | ------------------------------ |
  | transfer_id | bytes32 | ✔        | transfer_id in EventTransferIn |

- Business

  | name          | type   | required | description                              |
  | ------------- | ------ | -------- | ---------------------------------------- |
  | step          | uint   | ✔        | Current progress of the exchange process |
  | business_hash | String | ✔        | hash in PreBusiness                      |

  > [!NOTE]
  > The steps are maintained by the relay.
  >
  > - 1: Agreement is reached and LP locks shares
  > - 2: Tokens for transfer-out are locked
  > - 3: Tokens for transfer-in are locked
  > - 4: Tokens for transfer-out are released
  > - 5: Tokens for transfer-in are released
  > - 6: Tokens for transfer-out are refunded
  > - 7: Tokens for transfer-in are refunded

- BusinessFullData

  Packaged struct for all related data

  | ame                        | type                    | required | description |
  | -------------------------- | ----------------------- | -------- | ----------- |
  | pre_business               | PreBusiness             | ✔        |             |
  | business                   | Business                | ✔        |             |
  | event_transfer_out         | EventTransferOut        |          |             |
  | event_transfer_in          | EventTransferIn         |          |             |
  | event_transfer_out_confirm | EventTransferOutConfirm |          |             |
  | event_transfer_in_confirm  | EventTransferInConfirm  |          |             |
  | event_transfer_out_refund  | EventTransferOutRefund  |          |             |
  | event_transfer_in_refund   | EventTransferInRefund   |          |             |

:::

:::info Lpnode Event Command

- structure

  | parameter name | type   | description              |
  | -------------- | ------ | ------------------------ |
  | cmd            | String | The type of this command |
  | cid            | String | The ID of this command   |
  | others         |        |                          |

- type

  | name                       | description                                                                                                                   |
  | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
  | CMD_UPDATE_QUOTE           | Sent from AMM to lpnode - notify lpnode to send bridge keepalive message to relay                                             |
  | EVENT_QUOTE_REMOVER        | Sent from lpnode to AMM - bridge has been removed from the available list as no keepalive messages are received for long time |
  | CMD_ASK_QUOTE              | Sent from lpnode to AMM - ask for quotation                                                                                   |
  | EVENT_ASK_REPLY            | Sent from AMM to lpnode - send real-time quotation                                                                            |
  | EVENT_LOCK_QUOTE           | Sent from lpnode to AMM - new exchange request received                                                                       |
  | CALLBACK_LOCK_QUOTE        | Sent from AMM to lpnode - tell whether AMM agrees on this transaction                                                         |
  | EVENT_TRANSFER_OUT         | Sent from lpnode to AMM - the transaction initiator has locked tokens in the contract                                         |
  | CMD_TRANSFER_IN            | Sent from AMM to lpnode - notify lpnode to perform TransferIn                                                                 |
  | EVENT_TRANSFER_OUT_CONFIRM | Sent from lpnode to AMM - the transaction initiator has released tokens in the contract                                       |
  | CMD_TRANSFER_IN_CONFIRM    | Sent from AMM to lpnode - notify lpnode to perfor ConfirmTransferIn                                                           |
  | EVENT_TRANSFER_OUT_REFUND  | Sent from lpnode to AMM - the transaction initiator has performed refund in the contract                                      |
  | CMD_TRANSFER_IN_REFUND     | Sent from AMM to lpnode - notify lpnode to perform RefundTransferIn                                                           |
  | EVENT_TRANSFER_IN          | Sent from lpnode to AMM - lpnode has locked tokens in the contract                                                            |
  | EVENT_TRANSFER_IN_CONFIRM  | Sent from lpnode to AMM - lpnode has released tokens in the contract                                                          |
  | EVENT_TRANSFER_IN_REFUND   | Sent from lpnode to AMM - lpnode has performed refund in the contract                                                         |

:::

### Message

:::info Quotation process

- Trading pair survives

  Flow Direction

  ```mermaid
    graph LR
      amm-->lpnode-->relay

  ```

  Data

  | flow            | data                            |
  | --------------- | ------------------------------- |
  | amm -> lpnode   | `LpnodeEventCommand<QuoteBase>` |
  | lpnode -> relay | `QuoteBase`                     |

- Ask

  Flow Direction

  ```mermaid
    graph LR
      fe["front end"]-->relay-->lpnode-->amm

  ```

  Data

  | flow               | data                      |
  | ------------------ | ------------------------- |
  | front end -> relay | `Ask`                     |
  | relay -> lpnode    | `Ask`                     |
  | lpnode -> amm      | `LpnodeEventCommand<Ask>` |

- Ask Reply

  Flow Direction

  ```mermaid
    graph LR
      amm-->lpnode-->relay-->fe["front end"]

  ```

  Data

  | flow               | data                            |
  | ------------------ | ------------------------------- |
  | amm -> lpnode      | `LpnodeEventCommand<QuoteBase>` |
  | lpnode -> relay    | `QuoteBase`                     |
  | relay -> front end | `Quote`                         |

:::

:::info Exchange process

- Confirm Quotation

  Flow Direction

  ```mermaid

    sequenceDiagram
      participant FrontEnd
      participant Relay
      participant Lpnode
      participant Amm

      FrontEnd->>+Relay:Confirm Quotation
      Relay->>+Lpnode:Confirm Quotation
      Lpnode->>Amm:Confirm Quotation
      Amm->>Lpnode:agree/not
      Lpnode-->>-Relay:agree/not
      Relay-->>-FrontEnd:agree/not
  ```

  Data

  | flow                                | data                              |
  | ----------------------------------- | --------------------------------- |
  | Confirm Quotation - FE -> relay     | `SwapAssetInformation`            |
  | Confirm Quotation - relay -> lpnode | `PreBusiness`                     |
  | Confirm Quotation - lpnode -> amm   | `LpnodeEventCommand<PreBusiness>` |
  | agree/not - amm -> lpnode           | `LpnodeEventCommand<PreBusiness>` |
  | agree/not - lpnode -> relay         | `PreBusiness`                     |
  | agree/not - relay -> FE             | `PreBusiness`                     |

- TransferOut

  Flow Direction

  ```mermaid

    sequenceDiagram
      participant FrontEnd
      participant OtmoicContract
      participant Relay
      participant Lpnode
      participant Amm

    FrontEnd->>OtmoicContract:TransferOut
    OtmoicContract->>Relay:Event TransferOut
    OtmoicContract->>Lpnode:Event TransferOut
    Relay->>Lpnode:Business update
    Lpnode->>Amm:Business update
    Relay->>FrontEnd:Business update

  ```

  Data

  | flow                             | data                                   |
  | -------------------------------- | -------------------------------------- |
  | TransferOut                      | `TransferOut`                          |
  | EventTransferOut                 | `EventTransferOut`                     |
  | BusinessUpdate - relay -> FE     | `Business`                             |
  | BusinessUpdate - relay -> lpnode | `BusinessFullData`                     |
  | BusinessUpdate - lpnode -> amm   | `LpnodeEventCommand<BusinessFullData>` |

- TransferIn

  Flow Direction

  ```mermaid

    sequenceDiagram
      participant FrontEnd
      participant OtmoicContract
      participant Relay
      participant Lpnode
      participant Amm

    Amm->>Lpnode:DoTransferIn
    Lpnode->>OtmoicContract:TransferIn
    OtmoicContract->>Relay:Event TransferIn
    OtmoicContract->>Lpnode:Event TransferIn
    Lpnode->>Relay:TransferInFinished
    Relay->>FrontEnd:Business update
  ```

  Data

  | flow               | data                                   |
  | ------------------ | -------------------------------------- |
  | DoTransferIn       | `LpnodeEventCommand<BusinessFullData>` |
  | TransferIn         | `TransferIn`                           |
  | EventTransferIn    | `EventTransferIn`                      |
  | TransferInFinished | `BusinessFullData`                     |
  | BusinessUpdate     | `Business`                             |

- ConfirmTransferOut

  Flow Direction

  ```mermaid

    sequenceDiagram
      participant FrontEnd
      participant OtmoicContract
      participant Relay
      participant Lpnode
      participant Amm

    FrontEnd->>OtmoicContract:ConfirmTransferOut
    OtmoicContract->>Relay:Event ConfirmTransferOut
    OtmoicContract->>Lpnode:Event ConfirmTransferOut
    Relay->>Lpnode:Business update
    Lpnode->>Amm:Business update
    Relay->>FrontEnd:Business update

  ```

  Data

  | flow                             | data                                   |
  | -------------------------------- | -------------------------------------- |
  | ConfirmTransferOut               | `ConfirmTransferOut`                   |
  | EventConfirmTransferOut          | `EventConfirmTransferOut`              |
  | BusinessUpdate - relay -> FE     | `Business`                             |
  | BusinessUpdate - relay -> lpnode | `BusinessFullData`                     |
  | BusinessUpdate - lpnode -> amm   | `LpnodeEventCommand<BusinessFullData>` |

- ConfirmTransferIn

  Flow Direction

  ```mermaid

    sequenceDiagram
      participant FrontEnd
      participant OtmoicContract
      participant Relay
      participant Lpnode
      participant Amm

    Amm->>Lpnode:DoConfirmTransferIn
    Lpnode->>OtmoicContract:ConfirmTransferIn
    OtmoicContract->>Relay:Event ConfirmTransferIn
    OtmoicContract->>Lpnode:Event ConfirmTransferIn
    Lpnode->>Relay:ConfirmTransferInFinished
    Relay->>FrontEnd:Business update
  ```

  Data

  | flow                      | data                                   |
  | ------------------------- | -------------------------------------- |
  | DoTransferIn              | `LpnodeEventCommand<BusinessFullData>` |
  | TransferIn                | `ConfirmTransferIn`                    |
  | EventTransferIn           | `EventConfirmTransferIn`               |
  | ConfirmTransferInFinished | `BusinessFullData`                     |
  | BusinessUpdate            | `Business`                             |

:::

### KYC

Use the TermiPass browser plugin to sign "Otmoic KYC Verifiable Credential Request Schema" and submit it to the relay. After manual review by managers of the relay, the system will issue "Otmoic KYC Verifiable Credential Schema" and synchronize the issued VC to TermiPass in the frontend, then submit "Otmoic KYC Presentation Definition" to the relay to finish KYC.

:::info Main Information in KYC

| name             | description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| address          | Real address                                                       |
| address_on_chain | Wallet address separated by ","                                    |
| birthday         | Birthday, will be matched with the limiter                         |
| country          | Country, will be matched with the limiter                          |
| email            | E-mail address                                                     |
| first_name       | First name                                                         |
| last_name        | Last name                                                          |
| gender           | Gender                                                             |
| id_number        | Identity document number                                           |
| id_type          | Identity document type                                             |
| phone            | Phone number                                                       |
| id_end_image     | Photo of the back of the identity document                         |
| id_front_image   | Photo of the front of the identity document                        |
| image1           | Other identity verification documents (eg. bills with the address) |
| image2           | Other identity verification documents (eg. bills with the address) |

:::
