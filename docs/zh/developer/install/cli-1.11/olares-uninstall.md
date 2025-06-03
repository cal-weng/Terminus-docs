# `olares uninstall`

## 命令说明
卸载 Olares。

```bash
olares-cli olares uninstall [选项]
```

## 选项

| 名称           | 简写   | 用途                                                                                                     |
|--------------|------|--------------------------------------------------------------------------------------------------------|
| `--all`      |      | 完全卸载 Olares，包括在“准备”阶段安装的所有依赖项。                                                                         |
| `--base-dir` | `-b` | 设置 Olares 的基础目录。<br>默认为 `$HOME/.olares`。                                                               |
| `--help`     | `-h` | 显示帮助信息。                                                                                                |
| `--phase`    |      | 从指定阶段卸载 Olares 并回退到前一个阶段。 <br> 例如，使用 `--phase install` 将移除“安装”阶段执行的任务，使系统回退到“准备”阶段。<br> 默认为 `install`。 |
| `--quiet`    |      | 启用静默模式（不显示输出信息）。 <br> 默认为 `false`。                                                                     |
| `--version`  | `-v` | 指定要卸载的 Olares 版本。<br>建议先使用 `olares-cli olares info` 命令查看已下载的版本。                                        |
