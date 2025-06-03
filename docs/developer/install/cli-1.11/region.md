# `olares backups region`

## Synopsis
The `region` subcommand is used to retrieve the cloud name and region ID. It is specifically used when the storage backend is Olares Space.
```bash
olares-cli olares backups region space [options]
```

## Options

| Name                          | Shorthand | Usage                                        |
|-------------------------------|-----------|----------------------------------------------|
| `--access-token` <sup>1</sup> |           | Specifies the access token for Olares Space. |
| `--cloud-api-mirror`          |           | Specifies the cloud API mirror.              |
| `--help`                      | `-h`      | Displays help information.                   |
| `--olares-did` <sup>1</sup>   |           | Specifies the Olares DID.                    |

1. To retrieve the access token and Olares DID, inspect the payload of the network requests made by the Olares Space web interface after logging in. The `token` field corresponds to the access token, and the `userid` field corresponds to the Olares DID.

## Example
```bash
# Query cloud name and region ID
olares-cli olares backups region space \
  --access-token YOUR_ACCESS_TOKEN \
  --cloud-api-mirror https://api-mirror.example.com \
  --olares-did did:xyz123
```