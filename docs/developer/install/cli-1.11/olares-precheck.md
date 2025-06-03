# `olares precheck`

## Synopsis
The `olares precheck` command verifies whether the system environment satisfies all prerequisites required for Olares installation.

```bash
olares-cli olares precheck [option]
```

## Options

| Name                 | Shorthand | Usage                                                                                                                                                                                                                                                     |
|----------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir`         | `-b`      | Sets the base directory for Olares.<br> Defaults to `$HOME/.olares`.                                                                                                                                                                                      |
| `--help`             | `-h`      | Displays help information.                                                                                                                                                                                                                                |
| `--version`          | `-v`      | Specifies the Olares version. <br>Version values follow the format `x.y.z` (e.g., `1.10.0`) or include a build date (e.g., `1.10.0-20241109`).<br> Refer to the [GitHub Releases page](https://github.com/beclab/Olares/releases) for available versions. |