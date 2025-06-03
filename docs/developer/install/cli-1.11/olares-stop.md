# `olares stop`

## Synopsis
The `olares stop` command is used to stop the components of an installed (or partially installed) Olares system.

```bash
olares-cli olares stop [option]
```

## Options

| Name               | Shorthand | Usage                                                                                                                         |
|--------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| `--check-interval` |           | Specifies the interval between checks for remaining processes during shutdown (e.g., `5s`, `2m`, `3h`). </br> Default: `10s`. |
| `--help`           | `-h`      | Displays help information.                                                                                                    |
| `--timeout`        |           | Sets the maximum time to wait for a graceful shutdown before using SIGKILL (e.g., `5s`, `2m`, `3h`). </br> Default: `1m`.     |

## Example
```bash
# Stop the Olares system
olares-cli olares stop

# Adjust the timeout for shutdown
olares-cli olares stop --timeout 2m

# Specify a custom check interval
olares-cli olares stop --check-interval 5s
```