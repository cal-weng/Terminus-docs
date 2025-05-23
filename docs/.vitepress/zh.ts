import { defineConfig, type DefaultTheme } from "vitepress";

const side = {
  "/zh/manual/": [
    {
      text: "文档站",
      link: "/zh/manual/docs-home",
      items: [
        { text: "应用场景", link: "/zh/manual/why-olares" },
        //{ text: "功能对比", link: "/zh/manual/feature-overview" },
        { text: "系统架构", link: "/zh/manual/system-architecture" },
        {
          text: "帮助与支持",
          collapsed: true,
          items: [
            { text: "常见问题", link: "/zh/manual/help/faqs" },
            {
              text: "技术支持",
              link: "/zh/manual/help/request-technical-support",
            },
            //     {
            //       text: "Troubleshooting Guide",
            //       link: "/zh/manual/help/troubleshooting-guide",
            //     },
          ],
        },
      ],
    },
    {
      text: "快速开始",
      collapsed: false,
      link: "/zh/manual/get-started/",
      items: [
        // { text: "Quick start", link: "/zh/manual/get-started/quick-start" },
        {
          text: "创建 Olares ID",
          link: "/zh/manual/get-started/create-olares-id",
        },
        {
          text: "安装激活",
          link: "/zh/manual/get-started/install-olares",
        },
        {
          text: "备份助记词",
          link: "/zh/manual/get-started/back-up-mnemonics",
        },
        {
          text: "探索",
          link: "/zh/manual/get-started/next-steps",
        },
      ],
    },
    {
      text: "教程",
      collapsed: true,
      link: "/zh/manual/tutorials/",
      items: [
        {
          text: "设置自定义域名",
          link: "/zh/manual/tutorials/set-custom-domain",
        },
        {
          text: "使用 Wise 管理知识",
          link: "/zh/manual/tutorials/organize-content",
        },
        {
          text: "安装多节点",
          link: "/zh/manual/tutorials/install-olares-multi-node",
        },
        {
          text: "远程观看视频",
          link: "/zh/manual/tutorials/stream-media",
        },
        {
          text: "串流 Steam 游戏",
          link: "/zh/manual/tutorials/stream-game",
        },
        {
          text: "Krita + ComfyUI 实时绘画",
          link: "/zh/manual/tutorials/comfyui-for-krita",
        },
        {
          text: "搭建云端 Android",
          link: "/zh/manual/tutorials/host-cloud-android",
        },
        {
          text: "设置 SMTP 邮件服务",
          link: "/zh/manual/tutorials/set-up-SMTP-service",
        },
      ],
    },
    {
      text: "应用示例",
      collapsed: true,
      link: "/zh/manual/use-cases/",
      items: [
        {
          text: "Stable Diffusion",
          link: "/zh/manual/use-cases/stable-diffusion",
        },
        {
          text: "ComfyUI",
          link: "/zh/manual/use-cases/comfyui",
          collapsed: true,
              items: [
                {
                  text: "管理 ComfyUI",
                  link: "/zh/manual/use-cases/comfyui-launcher",
                },
              ],
        },
        {
          text: "Ollama 下载开源模型",
          link: "/zh/manual/use-cases/ollama",
        },
        {
          text: "Open WebUI",
          link: "/zh/manual/use-cases/openwebui",
        },
        {
          text: "Perplexica 本地 AI 搜索",
          link: "/zh/manual/use-cases/perplexica",
        },
        {
          text: "Dify 定制 AI 助手",
          link: "/zh/manual/use-cases/dify",
        },
      ],
    },
    {
      text: "操作指导",
      collapsed: true,
      link: "/zh/manual/tasks/",
      items: [
        {
          text: "个性化",
          collapsed: true,
          items: [
            {
              text: "设计主页",
              link: "/zh/manual/tasks/profile",
            },
            {
              text: "设置外观和主题",
              link: "/zh/manual/tasks/language-appearance",
            },
            {
              text: "添加集成",
              link: "/zh/manual/tasks/integrations",
            },
            {
              text: "使用 NFT 图像",
              link: "/zh/manual/tasks/nft-image",
            },
          ],
        },
        {
          text: "应用管理",
          collapsed: true,
          items: [
            {
              text: "安装、卸载&升级",
              link: "/zh/manual/tasks/install-uninstall-update",
            },
            {
              text: "自定义应用网址",
              link: "/zh/manual/tasks/access-settings",
            },
            {
              text: "管理 GPU",
              link: "/zh/manual/tasks/gpu-resource",
            },
            {
              text: "设置专用网络",
              link: "/zh/manual/tasks/private-network",
            },
          ],
        },
        {
          text: "文件管理",
          collapsed: true,
          link: "/zh/manual/tasks/files",
          items: [
            {
              text: "添加、编辑&下载",
              link: "/zh/manual/tasks/add-edit-download",
            },
            {
              text: "同步与分享",
              link: "/zh/manual/tasks/sync-share",
            },
            {
              text: "挂载 SMB 共享文件夹",
              link: "/zh/manual/tasks/mount-SMB-shares",
            },
          ],
        },
        {
          text: "密钥管理",
          collapsed: true,
          link: "/zh/manual/tasks/vault",
          items: [
            {
              text: "Vault 基本操作",
              link: "/zh/manual/tasks/vault-items",
            },
            {
              text: "分享 Vault 项目",
              link: "/zh/manual/tasks/share-vault-items",
            },
            //{
            //  text: "Generate strong passwords",
            //  link: "/zh/manual/tasks/strong-passwords",
            //},
            {
              text: "双重验证",
              link: "/zh/manual/tasks/two-factor-verification",
            },
            {
              text: "自动填充",
              link: "/zh/manual/tasks/autofill",
            },
          ],
        },
        {
          text: "内容智能聚合",
          collapsed: true,
          link: "/zh/manual/tasks/wise",
          items: [
            {
              text: "Wise 基本操作",
              link: "/zh/manual/tasks/wise-basics",
            },
            {
              text: "推荐算法",
              link: "/zh/manual/tasks/recommend",
            },
            {
              text: "订阅",
              link: "/zh/manual/tasks/subscribe",
            },
            {
              text: "过滤",
              link: "/zh/manual/tasks/filter",
              collapsed: true,
              items: [
                {
                  text: "示例",
                  link: "/zh/manual/tasks/filter-examples",
                },
                {
                  text: "过滤语法",
                  link: "/zh/manual/tasks/filter-syntax-guide",
                },
              ],
            },
          ],
        },
        {
          text: "团队",
          link: "/zh/manual/tasks/team",
          collapsed: true,
          items: [
            {
              text: "用户角色",
              link: "/zh/manual/tasks/roles-permissions",
            },
            {
              text: "管理团队",
              link: "/zh/manual/tasks/manage-team",
            },
            {
              text: "协作",
              link: "/zh/manual/tasks/collaborate",
            },
          ],
        },
        {
          text: "维护",
          collapsed: true,
          items: [
            {
              text: "监控系统与应用",
              link: "/zh/manual/tasks/resources-usage",
            },
            {
              text: "修改 Hosts 配置",
              link: "/zh/manual/tasks/set-up-hosts",
            },
            {
              text: "升级",
              link: "/zh/manual/tasks/update",
            },
            {
              text: "控制面板",
              link: "/zh/manual/tasks/navigate-control-hub",
              collapsed: true,
              items: [
                {
                  text: "编辑系统资源",
                  link: "/zh/manual/tasks/edit-resource",
                },
                {
                  text: "查看数据库状态",
                  link: "/zh/manual/tasks/view-database-status",
                },
              ],
            },
          {
           text: "远程访问",
           link: "zh/manual/tasks/remote-access",
           }
          ],
        },
      ],
    },
    {
      text: "Olares Space",
      link: "/zh/manual/space/",
      collapsed: true,
      items: [
        {
          text: "管理账号",
          link: "/zh/manual/space/manage-accounts",
        },
        {
          text: "托管 Olares",
          collapsed: true,
          items: [
            {
              text: "创建 Olares",
              link: "/zh/manual/space/create-olares",
            },
            {
              text: "管理 Olares",
              link: "/zh/manual/space/manage-olares",
            },
          ],
        },
        {
          text: "托管域名",
          collapsed: true,
          items: [
            {
              text: "设置自定义域名",
              link: "/zh/manual/space/host-domain",
            },
            {
              text: "管理域名",
              link: "/zh/manual/space/manage-domain",
            },
          ],
        },
        {
          text: "备份与恢复",
          link: "/zh/manual/space/backup-restore",
        },
        { text: "计费", link: "/zh/manual/space/billing" },
      ],
    },
    {
      text: "概念",
      collapsed: true,
      link: "/zh/manual/concepts/",
      items: [
        { text: "架构", link: "/zh/manual/concepts/architecture" },
        { text: "Olares ID", link: "/zh/manual/concepts/olares-id" },
        { text: "账户", link: "/zh/manual/concepts/account" },
        { text: "应用", link: "/zh/manual/concepts/application" },
        { text: "网络", link: "/zh/manual/concepts/network" },
        { text: "数据", link: "/zh/manual/concepts/data" },
        { text: "密钥", link: "/zh/manual/concepts/secrets" },
      ],
    },
    { text: "术语", link: "/zh/manual/glossary" },
  ],

  "/zh/developer/": [
  {
    text: "安装 Olares",
    link: "/zh/developer/install/",
    items: [
      {
        text: "安装概述",
        link: "/zh/developer/install/installation-overview",
      },
      {
        text: "安装流程",
        link: "/zh/developer/install/installation-process",
      },
      {
        text: "Olares Home",
        link: "/zh/developer/install/olares-home",
      },
      {
        text: "环境变量",
        link: "/zh/developer/install/environment-variables",
      },
      {
          text: "Olares CLI",
        link: "/zh/developer/install/cli/olares-cli",
        collapsed: true,
          items: [
            { text: "gpu", link: "/zh/developer/install/cli/gpu" },
            { text: "osinfo", link: "/zh/developer/install/cli/osinfo" },
            { text: "node", link: "/zh/developer/install/cli/node" },
            {
              text: "backups",
              link: "/zh/developer/install/cli/backups",
              collapsed: true,
              items: [
                  {text: "download", link: "/zh/developer/install/cli/backups-download"},
                  {text: "region", link: "/zh/developer/install/cli/backups-region"},
                  {text: "backup", link: "/zh/developer/install/cli/backups-backup"},
                  {text: "restore", link: "/zh/developer/install/cli/backups-restore"},
                  {text: "snapshots", link: "/zh/developer/install/cli/backups-snapshots"},
                  ],
            },
            {
              text: "change-ip",
              link: "/zh/developer/install/cli/change-ip",
            },
            {
              text: "download",
              link: "/zh/developer/install/cli/download",
            },
            { text: "info", link: "/zh/developer/install/cli/info" },
            {
              text: "install",
              link: "/zh/developer/install/cli/install",
            },
            {
              text: "logs",
              link: "/zh/developer/install/cli/logs",
            },
            {
              text: "precheck",
              link: "/zh/developer/install/cli/precheck",
            },
            {
              text: "prepare",
              link: "/zh/developer/install/cli/prepare",
            },
            {
              text: "release",
              link: "/zh/developer/install/cli/release",
            },
            {
              text: "start",
              link: "/zh/developer/install/cli/start",
            },
            {
              text: "stop",
              link: "/zh/developer/install/cli/stop",
            },
            {
              text: "uninstall",
              link: "/zh/developer/install/cli/uninstall",
            },
          ],
        },
        {
          text: "版本说明",
          link: "/zh/developer/install/versioning",
        },
       // {
       //   text: "其他安装方式",
       //    link: "/zh/developer/install/additional-installations",
       //   collapsed: true,
       //   items: [
       //     { text: "Linux（Docker 镜像）", link: "/zh/developer/install/linux-via-docker-compose" },
       //     {
       //       text: "macOS",
       //       collapsed: true,
       //       items: [
       //         {
       //           text: "使用脚本（推荐）",
       //           link: "/zh/developer/install/mac",
       //         },
       //         {
       //           text: "使用 Docker 镜像",
       //           link: "/zh/developer/install/mac-via-docker-image",
       //         },
       //       ],
       //     },
       //     {
       //       text: "Windows (WSL 2)",
       //       collapsed: true,
       //       items: [
       //         {
        //          text: "使用脚本（推荐）",
        //          link: "/zh/developer/install/windows",
        //        },
        //        {
        //          text: "使用 Docker 镜像",
        //          link: "/zh/developer/install/windows-via-docker-image",
        //        },
        //      ],
        //    },
        //    { text: "PVE", link: "/zh/developer/install/pve" },
         //   { text: "LXC", link: "/zh/developer/install/lxc" },
         //   { text: "树莓派", link: "/zh/developer/install/raspberry-pi" },
        //  ],
       // },
      ],
    },
    {
      text: "开发 Olares 应用",
      link: "/zh/developer/develop/",
      items: [
        {
          text: "教程",
          collapsed: true,
          link: "/zh/developer/develop/tutorial/",
          items: [
            {
              text: "了解 Studio",
              link: "/zh/developer/develop/tutorial/studio",
            },
            {
              text: "创建首个应用",
              collapsed: true,
              link: "/zh/developer/develop/tutorial/note/",
              items: [
                {
                  text: "1. 创建应用",
                  link: "/zh/developer/develop/tutorial/note/create",
                },
                {
                  text: "2. 开发后端",
                  link: "/zh/developer/develop/tutorial/note/backend",
                },
                {
                  text: "3. 开发前端",
                  link: "/zh/developer/develop/tutorial/note/frontend",
                },
              ],
            },
          ],
        },
        {
          text: "应用包管理",
          collapsed: true,
          items: [
            {
              text: "应用 Chart 包",
              link: "/zh/developer/develop/package/chart",
            },
            {
              text: "OlaresManifest",
              link: "/zh/developer/develop/package/manifest",
            },
            {
              text: "模型",
              link: "/zh/developer/develop/package/model",
            },
            {
              text: "推荐算法",
              link: "/zh/developer/develop/package/recommend",
            },
            {
              text: "Helm 扩展",
              link: "/zh/developer/develop/package/extension",
            },
          ],
        },
        {
          text: "进阶",
          collapsed: true,
          items: [
            {
              text: "terminus-info",
              link: "/zh/developer/develop/advanced/terminus-info",
            },
            {
              text: "Service Provider",
              link: "/zh/developer/develop/advanced/provider",
            },
            {
              text: "AI",
              link: "/zh/developer/develop/advanced/ai",
            },
            { text: "Cookie", link: "/zh/developer/develop/advanced/cookie" },
            { text: "数据库", link: "/zh/developer/develop/advanced/database" },
            {
              text: "账户",
              link: "/zh/developer/develop/advanced/account",
            },
            {
              text: "应用市场",
              link: "/zh/developer/develop/advanced/market",
            },
            // {
            //   text: "Analytic",
            //   link: "/zh/developer/develop/advanced/analytic",
            // },
            {
              text: "Websocket",
              link: "/zh/developer/develop/advanced/websocket",
            },
            {
              text: "文件上传",
              link: "/zh/developer/develop/advanced/file-upload",
            },
            // {
            //   text: "Rss",
            //   link: "/zh/developer/develop/advanced/rss",
            // },
            {
              text: "密钥",
              link: "/zh/developer/develop/advanced/secret",
            },
            // {
            //   text: "Notification",
            //   link: "/zh/developer/develop/advanced/notification",
            // },
            // {
            //   text: "Frontend",
            //   link: "/zh/developer/develop/advanced/frontend",
            // },
            {
              text: "Kubesphere",
              link: "/zh/developer/develop/advanced/kubesphere",
            },
          ],
        },

        {
          text: "提交应用",
          collapsed: true,
          link: "/zh/developer/develop/submit/",
        },
      ],
    },
    {
      text: "参与贡献",
      items: [
        {
          text: "开发系统应用",
          collapsed: true,
          items: [
            {
              text: "概述",
              link: "/zh/developer/contribute/system-app/overview",
            },
            {
              text: "`deployment.yaml`",
              link: "/zh/developer/contribute/system-app/deployment",
            },
            {
              text: "`OlaresManifest.yaml`",
              link: "/zh/developer/contribute/system-app/olares-manifest",
            },
            {
              text: "安装",
              link: "/zh/developer/contribute/system-app/install",
            },
            {
              text: "其他",
              link: "/zh/developer/contribute/system-app/other",
            },
          ],
        },
      ],
    },
  ],
};

export const zh = defineConfig({
  lang: "zh",
  themeConfig: {
    //logo: "/icon.png",
    socialLinks: [{ icon: "github", link: "https://github.com/beclab/olares" }],

    nav: [
      { text: "使用指南", link: "/zh/manual/docs-home" },
      { text: "开发者文档", link: "/zh/developer/install/" },
    ],

    sidebar: side,
  },
});
