# `olares precheck`

## 命令说明
`olares precheck` 命令用于检查系统环境是否满足安装 Olares 的所有前置条件。

```bash
olares-cli olares precheck [选项]
```

## 选项

| 名称           | 简写   | 用途                                                                                                                                                 |
|--------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base-dir` | `-b` | 设置 Olares 的基础目录。<br>默认为 `$HOME/.olares`。                                                                                                           |
| `--help`     | `-h` | 显示帮助信息。                                                                                                                                            |
| `--version`  | `-v` | 指定 Olares 版本。<br>版本号格式为 `x.y.z`（如 `1.10.0`）或包含构建日期（如 `1.10.0-20241109`）。<br> 可用版本请参考 [GitHub Releases](https://github.com/beclab/Olares/releases)。 |