# Kubesphere

Olares 集成了 Kubesphere 的相关组件，多用户体系、集群数据监控等采用了 Kubesphere 的先用功能。

用户如果想安装 Kubesphere 的官方 console 管理工具。可在 Olares 的代码仓库中下载安装。

```sh
curl -LO https://github.com/Above-Os/olares-os/raw/main/third-party/ks-console/ks-console-v3.3.0.tgz

# username 为 olares 的登录用户
sudo helm install console ./ks-console-v3.3.0.tgz \
    -n user-space-<username> \
    --set username=<username>
```

安装后，刷新桌面。即可在 Olares 中看到 Console 的图标。

打开 Console，可用 Olares 的用户名和密码登录
