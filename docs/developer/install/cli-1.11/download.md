# `olares backups download`

## Synopsis
The `download` subcommand downloads the Restic dependency tool. Restic is required for performing backup and restore operations, as well as managing snapshots.

```bash
olares-cli olares backups download [options]
```
## Options

| Name                 | Shorthand | Usage                                                  |
|----------------------|-----------|--------------------------------------------------------|
| `--download-cdn-url` |           | Specifies the CDN URL for downloading the Restic tool. |
| `--help`             | `-h`      | Displays help information.                             |

## Example
```bash
# Download Restic using a custom CDN URL
olares-cli olares backups download --download-cdn-url https://custom-cdn.example.com/restic
```