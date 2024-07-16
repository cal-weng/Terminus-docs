---
outline: [2, 4]
---

# VC Service

The purpose of this documentation is to help you understand how to configure various schema and use [verifiable-credential-gate](https://github.com/Above-Os/verifiable-credential-gate) and [did-gate](https://github.com/Above-Os/did-gate) by Terminus and [SSI Service](https://github.com/TBD54566975/ssi-service) by tbd team to create Issuers and Verifiers for your own scenarios.

:::tip
If you want to engage in lower-level development, read the [protocol standard](#reference) together with the source code in [SSI SDK](https://github.com/TBD54566975/ssi-sdk).
:::

## Introduction

In [VC](concepts.md#verifiable-credential) we introduced the basic process for applying VCs.

In the real communication process of Wallet, Verifier and Issuer we will see more nouns, which we go through here:

| Term                    | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Holder                  | Holders are entities that have one or more verifiable credentials in their possession. Holders are also the entities that submit proofs to Verifiers to satisfy the requirements described in a Presentation Definition.                                                                                                                                                                                                                                                                                                        |
| Issuer                  | A role an entity can perform by asserting claims about one or more subjects, creating a verifiable credential from these claims, and transmitting the verifiable credential to a holder.                                                                                                                                                                                                                                                                                                                                        |
| Verifier                | Verifiers are entities that define what proofs they require from a Holder (via a Presentation Definition) in order to proceed with an interaction.                                                                                                                                                                                                                                                                                                                                                                              |
| Verifiable Credential   | Is a tamper-evident credential that has authorship that can be cryptographically verified. Verifiable credentials can be used to build Verifiable Presentations, which can also be cryptographically verified. The claims in a credential can be about different subjects. PEX accepts Verifiable credential in 3 forms: 1. JSON_LD which is know in our system as IVerifiableCredential, 2. JWT-Wrapped VC which is known in our system as JwtWrappedVerifiableCredential or string which is a valid Verifiable credential jwt |
| Verifiable Presentation | s a tamper-evident presentation encoded in such a way that authorship of the data can be trusted after a process of cryptographic verification.                                                                                                                                                                                                                                                                                                                                                                                 |
| Manifest                | Credential Manifests are used to describe which credentials are available for issuance.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Application             | The format provided by Holder to Issuer, including                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Presentation Definition | Presentation Definitions are objects that articulate what proofs a Verifier requires.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Presentation            | Data derived from one or more verifiable credentials, issued by one or more issuers                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Submission              | TBC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Definition              | TBC                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Schema                  | All different Manifest, Application, Credential, Presentation, Definition need to define Schema with JSON. The service will verify the correctness of submitted data and then go into business process.                                                                                                                                                                                                                                                                                                                                                        |

## Issuer Service

![alt text](image-1.png)

Process

1. Holder gets Manifest from Issuer
2. Holder signs by himself and submits Application
3. Issuer reviews Application automatically or manually
4. Holder gets results of Review from Issuer and get VC if passed or reason if rejected

### Manifest

This file will be returned to Holder.
The parameter `outputDescriptors` is given for wallets to display VCs.
`presentationDefinition` is in fact the later `manifest_presentation` file, used to confirm the format of Application submitted by users.

```json
{
  "name": "Facebook Verifiable Credential Manifest",
  "description": "Facebook Verifiable Credential Manifest",
  "issuerDid": "",
  "issuerName": "",
  "outputDescriptors": [
    {
      "id": "",
      "schema": "",
      "name": "Facebook Verifiable Credential Manifest",
      "description": "Facebook Verifiable Credential Manifest",
      "display": {
        "title": {
          "path": ["$.credentialSubject.name", "$.vc.credentialSubject.name"],
          "schema": { "type": "string" }
        },
        "subtitle": {
          "path": ["$.credentialSubject.title", "$.vc.credentialSubject.title"],
          "schema": { "type": "string" }
        },
        "description": {
          "path": [
            "$.credentialSubject.description",
            "$.vc.credentialSubject.description"
          ],
          "schema": { "type": "string" }
        },
        "properties": [
          {
            "path": ["$.credentialSubject.id", "$.vc.credentialSubject.id"],
            "schema": { "type": "string" },
            "label": "ID"
          },
          {
            "path": [
              "$.credentialSubject.email",
              "$.vc.credentialSubject.email"
            ],
            "schema": { "type": "string" },
            "label": "Email"
          }
        ]
      },
      "styles": {
        "background": {
          "color": "#FFFFFF"
        },
        "text": {
          "color": "#000000"
        }
      }
    }
  ],
  "format": {
    "jwt_vc": {
      "alg": ["EdDSA"]
    }
  },
  "presentationDefinition": {}
}
```

### Manifest Presentation

Issuer uses this file to validate the format of Application submitted by Holder.

```json
{
  "name": "Facebook Manifest Presentation Definition",
  "purpose": "Provide your token required to Facebook",
  "inputDescriptors": [
    {
      "id": "token",
      "name": "Access Token",
      "purpose": "Provide your token required to Facebook",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.token"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    }
  ],
  "author": ""
}
```

### Application Verifiable Credential

Although users only need `manifest_presentation` to construct VC data in client, servers need a schema to verify whether `manifest_presentation` meets the format requirements.
This file will be returned to Holder so that Holder knows the format of data required to submit for verification.
In the scenarios of Facebook, Twitter and Gmail, users login in client and get the access token, then submit it to the Issuer server, which can get the basic information of the user with the access token from e.g. the Facebook server etc. So users only need to submit the token which is simple.
But in the scenario of KYC, users need to submit full name, ID photo or even verification video etc., and the fields in this file can become much more complicated.

```json
{
  "author": "",
  "name": "Facebook Verifiable Credential Request Schema",
  "schema": {
    "$id": "facebook-schema-1.0",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "Facebook Verifiable Credential Schema",
    "type": "object",
    "properties": {
      "token": {
        "type": "string"
      }
    },
    "required": ["token"],
    "additionalProperties": true
  },
  "sign": false
}
```

### Verifiable Credential

The VC format returned to Holder by Issuer

```json
{
  "author": "",
  "name": "Facebook Verifiable Credential Schema",
  "schema": {
    "$id": "facebook-schema-1.0",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "description": "Facebook Verifiable Credential Schema",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },

      "facebook_name": {
        "type": "string"
      },
      "profile_image": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "facebook_id": {
        "type": "string"
      },
      "picture_is_silhouette": {
        "type": "boolean"
      }
    },
    "required": ["name", "title", "description", "facebook_name"],
    "additionalProperties": true
  },
  "sign": false
}
```

## Verifer Service

Refer to [Presentation Exchange](https://identity.foundation/presentation-exchange/)
![alt text](image-2.png) for the process.

### Presentation Definition

Verifier returns the file to Holder, and Holder returns packaged Submission which meets the format requirements to Verifier after filling in the contents according to the requirements.

```json
{
  "name": "Facebook Basic Info Presentation Definition",
  "purpose": "Provide your facebook basic info",
  "inputDescriptors": [
    {
      "id": "name",
      "name": "Name",
      "purpose": "Provide vc name",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.name"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "title",
      "name": "Title",
      "purpose": "Provide vc title",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.title"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "description",
      "name": "description",
      "purpose": "Provide vc description",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.description"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },

    {
      "id": "facebook_name",
      "name": "Provide your facebook name",
      "purpose": "Provide your facebook name",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.facebook_name"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "profile_image",
      "name": "Provide your facebook profile image",
      "purpose": "Provide your facebook profile image",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.profile_image"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "email",
      "name": "Provide your facebook email email info",
      "purpose": "Provide your facebook email info",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.email"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "facebook_id",
      "name": "Provide your facebook id",
      "purpose": "Provide your facebook id",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.facebook_id"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    },
    {
      "id": "picture_is_silhouette",
      "name": "Provide your facebook Picture is Silhouette",
      "purpose": "Provide your facebook picture_is_silhouette",
      "format": {
        "jwt_vc": {
          "alg": ["EdDSA"]
        }
      },
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.picture_is_silhouette"]
          }
        ],
        "subject_is_issuer": "preferred"
      }
    }
  ],
  "author": ""
}
```

## Start service

TODO

## Reference

The following references come from the [SSI SDK](https://github.com/TBD54566975/ssi-sdk) project.

### Specifications

Here are a set of references to specifications that this library currently supports. It is a dynamic set that will change as the library evolves.

- [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-core/) W3C Proposed Recommendation 03 August 2021
- [Verifiable Credentials Data Model v1.1](https://www.w3.org/TR/vc-data-model/) W3C Recommendation 09 November 2021
  - Supports [Linked Data Proof](https://www.w3.org/TR/vc-data-model/#data-integrity-proofs) formats.
  - Supports [VC-JWT and VP-JWT](https://www.w3.org/TR/vc-data-model/#json-web-token) formats.
- [Verifiable Credentials JSON Schema Specification](https://w3c-ccg.github.io/vc-json-schemas/v2/index.html) Draft Community Group Report, 21 September 2021
- [Presentation Exchange 2.0.0](https://identity.foundation/presentation-exchange/) Working Group Draft, March 2022
- [Wallet Rendering Strawman](https://identity.foundation/wallet-rendering/), June 2022
- [Credential Manifest](https://identity.foundation/credential-manifest/) Strawman, June 2022
- [Status List 2021](https://w3c-ccg.github.io/vc-status-list-2021/) Draft Community Group Report 04 April 2022

### Signing Methods

> - [Data Integrity 1.0](https://w3c.github.io/vc-data-integrity/) Draft Community Group Report
> - [Linked Data Cryptographic Suite Registry](https://w3c-ccg.github.io/ld-cryptosuite-registry/) Draft Community Group Report 29 December 2020
> - [JSON Web Signature 2020](https://w3c-ccg.github.io/lds-jws2020/) Draft Community Group Report 09 February 2022
>   - [VC Proof Formats Test Suite, VC Data Model with JSON Web Signatures](https://identity.foundation/JWS-Test-Suite/) Unofficial Draft 09 March 2022 This implementation's compliance with the JWS Test Suite can be found here.
>   - Supports both JWT and Linked Data proof formats with [JOSE compliance](https://jose.readthedocs.io/en/latest/).
