import { defineConfig, type DefaultTheme } from "vitepress";

const side = {
  "/manual/": [
    {
      text: "What is Olares",
      link: "/manual/docs-home",
      items: [
        { text: "Why Olares", link: "/manual/why-olares" },
        //{ text: "Feature comparison", link: "/manual/feature-overview" },
        { text: "Olares architecture", link: "/manual/system-architecture" },
        {
          text: "Help and support",
          collapsed: true,
          items: [
            { text: "FAQs", link: "/manual/help/faqs" },
            {
              text: "Request support",
              link: "/manual/help/request-technical-support",
            },
            //{
            //  text: "Troubleshooting Guide",
            //  link: "/manual/help/troubleshooting-guide",
            // },
          ],
        },
      ],
    },
    {
      text: "Get started",
      collapsed: false,
      link: "/manual/get-started/",
      items: [
        // { text: "Quick start", link: "/manual/get-started/quick-start" },
        {
          text: "Create an Olares ID",
          link: "/manual/get-started/create-olares-id",
        },
        {
          text: "Install Olares",
          link: "/manual/get-started/install-olares",
          items: [
            {
              text: "Using the script",
              collapsed: true,
              items: [
                {
                  text: "General Linux",
                  link: "/manual/get-started/install-olares-linux",
                },
                { text: "PVE", link: "/manual/get-started/install-olares-pve" },
                { text: "LXC", link: "/manual/get-started/install-olares-lxc" },
                {
                  text: "Raspberry Pi",
                  link: "/manual/get-started/install-olares-raspberry-pi",
                },
                {
                  text: "macOS",
                  link: "/manual/get-started/install-olares-mac",
                },
                {
                  text: "Windows (WSL)",
                  link: "/manual/get-started/install-olares-windows",
                },
              ],
            },

            {
              text: "Using Docker image",
              link: "/manual/get-started/install-olares-docker",
            },
          ],
        },
        {
          text: "Back up mnemonics",
          link: "/manual/get-started/back-up-mnemonics",
        },
        {
          text: "What's next",
          link: "/manual/get-started/next-steps",
        },
      ],
    },
    {
      text: "Tutorials",
      collapsed: true,
      link: "/manual/tutorials/",
      items: [
        {
          text: "Set up custom domain",
          link: "/manual/tutorials/set-custom-domain",
        },
        {
          text: "Manage knowledge with Wise",
          link: "/manual/tutorials/organize-content",
        },
        {
          text: "Install a multi-node Olares cluster",
          link: "/manual/tutorials/install-olares-multi-node",
        },
        {
          text: "Stream videos remotely",
          link: "/manual/tutorials/stream-media",
        },
        {
          text: "Use ComfyUI in Krita",
          link: "/manual/tutorials/comfyui-for-krita",
        },
        {
          text: "GPU passthrough for PVE",
          link: "/manual/tutorials/set-gpu-passthrough",
        },
      ],
    },
    {
      text: "Use cases",
      collapsed: true,
      link: "/manual/use-cases/",
      items: [
        {
          text: "Stable Diffusion",
          link: "/manual/use-cases/stable-diffusion",
        },
        {
          text: "ComfyUI",
          link: "/manual/use-cases/comfyui",
        },
        {
          text: "Open WebUI",
          link: "/manual/use-cases/openwebui",
        },
        {
          text: "Perplexica",
          link: "/manual/use-cases/perplexica",
        },
        {
          text: "Dify",
          link: "/manual/use-cases/dify",
        },
      ],
    },
    {
      text: "How-to",
      collapsed: true,
      link: "/manual/tasks/",
      items: [
        {
          text: "Personalize Olares",
          collapsed: true,
          items: [
            {
              text: "Design Olares profile",
              link: "/manual/tasks/profile",
            },
            {
              text: "Set language and appearance",
              link: "/manual/tasks/language-appearance",
            },
            {
              text: "Add integrations",
              link: "/manual/tasks/integrations",
            },
            {
              text: "Use NFT images",
              link: "/manual/tasks/nft-image",
            },
          ],
        },
        {
          text: "Manage applications",
          collapsed: true,
          items: [
            {
              text: "Install, uninstall & update",
              link: "/manual/tasks/install-uninstall-update",
            },
            {
              text: "Customize URLs",
              link: "/manual/tasks/access-settings",
            },
            {
              text: "Manage GPU usage",
              link: "/manual/tasks/gpu-resource",
            },
            {
              text: "Access via VPN",
              link: "/manual/tasks/private-network",
            },
          ],
        },
        {
          text: "Manage files",
          collapsed: true,
          link: "/manual/tasks/files",
          items: [
            {
              text: "Add, edit & download",
              link: "/manual/tasks/add-edit-download",
            },
            {
              text: "Sync and share",
              link: "/manual/tasks/sync-share",
            },
            //{
            //  text: "Sharing and collaboration",
            //  link: "/manual/tasks/sharing-collaboration",
            // },
          ],
        },
        {
          text: "Secure sensitive data",
          collapsed: true,
          link: "/manual/tasks/vault",
          items: [
            {
              text: "Vault basics",
              link: "/manual/tasks/vault-items",
            },
            {
              text: "Share vault items",
              link: "/manual/tasks/share-vault-items",
            },
            //{
            //  text: "Generate strong passwords",
            //  link: "/manual/tasks/strong-passwords",
            //},
            {
              text: "Set up 2FA",
              link: "/manual/tasks/two-factor-verification",
            },
            {
              text: "Use autofill",
              link: "/manual/tasks/autofill",
            },
          ],
        },
        {
          text: "Curate information hub",
          collapsed: true,
          link: "/manual/tasks/wise",
          items: [
            {
              text: "Wise basics",
              link: "/manual/tasks/wise-basics",
            },
            {
              text: "Discover",
              link: "/manual/tasks/recommend",
            },
            {
              text: "Subscribe",
              link: "/manual/tasks/subscribe",
            },
            //{
            //  text: "Subscribe to an RSS feed",
            //  link: "/manual/tasks/subscribe",
            //},
          ],
        },
        {
          text: "Start a team",
          link: "/manual/tasks/team",
          collapsed: true,
          items: [
            {
              text: "User roles",
              link: "/manual/tasks/roles-permissions",
            },
            {
              text: "Manage your team",
              link: "/manual/tasks/manage-team",
            },
            {
              text: "Collaborate",
              link: "/manual/tasks/collaborate",
            },
          ],
        },
        {
          text: "Maintain",
          collapsed: true,
          items: [
            {
              text: "Monitor system and apps",
              link: "/manual/tasks/resources-usage",
            },
            {
              text: "Set up hosts",
              link: "/manual/tasks/set-up-hosts",
            },
            {
              text: "Update Olares",
              link: "/manual/tasks/update",
            },
            {
              text: "Navigate Control Hub",
              link: "/manual/tasks/navigate-control-hub",
              collapsed: true,
              items: [
                {
                  text: "Edit system resource",
                  link: "/manual/tasks/edit-resource",
                },
                {
                  text: "View database status",
                  link: "/manual/tasks/view-database-status",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "Olares Space",
      link: "/manual/space/",
      collapsed: true,
      items: [
        {
          text: "Manage accounts",
          link: "/manual/space/manage-accounts",
        },
        {
          text: "Host Olares",
          collapsed: true,
          items: [
            {
              text: "Create Olares",
              link: "/manual/space/create-olares",
            },
            {
              text: "Manage Olares",
              link: "/manual/space/manage-olares",
            },
          ],
        },
        {
          text: "Host domains",
          collapsed: true,
          items: [
            {
              text: "Set up a custom domain",
              link: "/manual/space/host-domain",
            },
            {
              text: "Manage a domain",
              link: "/manual/space/manage-domain",
            },
          ],
        },
        {
          text: "Back up and restore",
          link: "/manual/space/backup-restore",
        },
        { text: "Billing", link: "/manual/space/billing" },
      ],
    },
    {
      text: "Concepts",
      collapsed: true,
      link: "/manual/concepts/",
      items: [
        { text: "Architecture", link: "/manual/concepts/architecture" },
        { text: "Olares ID", link: "/manual/concepts/olares-id" },
        { text: "Account", link: "/manual/concepts/account" },
        { text: "Application", link: "/manual/concepts/application" },
        { text: "Network", link: "/manual/concepts/network" },
        { text: "Data", link: "/manual/concepts/data" },
        { text: "Secrets", link: "/manual/concepts/secrets" },
      ],
    },
    { text: "Glossary", link: "/manual/glossary" },
  ],

  "/developer/": [
    {
      text: "Olares installation",
      link: "/developer/install/",
      items: [
        {
          text: "Installation overview",
          link: "/developer/install/installation-overview",
        },
      {
      text: "Installation breakdown",
      link: "/developer/install/installation-process",
    },
    {
      text: "Olares Home",
      link: "/developer/install/olares-home",
    },
      {
        text: "Environment variables",
        link: "/developer/install/environment-variables",
      },
      {text: "Olares CLI",
        link: "/developer/install/cli/olares-cli",
        collapsed: true,
        items: [
        {text: "info",
        link: "/developer/install/cli/info"},
        {text: "olares info",
        link: "/developer/install/cli/olares-info"},
        {text: "olares precheck",
        link: "/developer/install/cli/olares-precheck"},
        {text: "olares download",
        link: "/developer/install/cli/olares-download"},
        {text: "olares prepare",
        link: "/developer/install/cli/olares-prepare"},
        {text: "olares install",
        link: "/developer/install/cli/olares-install"},
        {text: "olares change-ip",
        link: "/developer/install/cli/olares-change-ip"},
        {text: "olares release",
        link: "/developer/install/cli/olares-release"},
        {text: "olares uninstall",
        link: "/developer/install/cli/olares-uninstall"},
        {text: "gpu",
        link: "/developer/install/cli/gpu"},
        {text: "node",
        link: "/developer/install/cli/node"},
        ],
        },
        {
          text: "Olares versioning",
          link: "/developer/install/versioning",
        },
      ],
    },
    {
      text: "Develop Olares app",
      link: "/developer/develop/",
      items: [
        {
          text: "Tutorial",
          collapsed: true,
          link: "/developer/develop/tutorial/",
          items: [
            {
              text: "Learn DevBox",
              link: "/developer/develop/tutorial/devbox",
            },
            {
              text: "Create your first app",
              collapsed: true,
              link: "/developer/develop/tutorial/note/",
              items: [
                {
                  text: "1. Create app",
                  link: "/developer/develop/tutorial/note/create",
                },
                {
                  text: "2. Develop backend",
                  link: "/developer/develop/tutorial/note/backend",
                },
                {
                  text: "3. Develop frontend",
                  link: "/developer/develop/tutorial/note/frontend",
                },
              ],
            },
          ],
        },
        {
          text: "Application package",
          collapsed: true,
          items: [
            {
              text: "Application chart",
              link: "/developer/develop/package/chart",
            },
            {
              text: "OlaresManifest",
              link: "/developer/develop/package/manifest",
            },
            {
              text: "Model",
              link: "/developer/develop/package/model",
            },
            {
              text: "Recommendation",
              link: "/developer/develop/package/recommend",
            },
            {
              text: "Helm extension",
              link: "/developer/develop/package/extension",
            },
          ],
        },
        {
          text: "Advanced",
          collapsed: true,
          items: [
            {
              text: "terminus-info",
              link: "/developer/develop/advanced/terminus-info",
            },
            {
              text: "Service provider",
              link: "/developer/develop/advanced/provider",
            },
            {
              text: "AI",
              link: "/developer/develop/advanced/ai",
            },
            { text: "Cookie", link: "/developer/develop/advanced/cookie" },
            { text: "Database", link: "/developer/develop/advanced/database" },
            {
              text: "Account",
              link: "/developer/develop/advanced/account",
            },
            {
              text: "Market",
              link: "/developer/develop/advanced/market",
            },
            // {
            //   text: "Analytic",
            //   link: "/developer/develop/advanced/analytic",
            // },
            {
              text: "Websocket",
              link: "/developer/develop/advanced/websocket",
            },
            {
              text: "File upload",
              link: "/developer/develop/advanced/file-upload",
            },
            // {
            //   text: "Rss",
            //   link: "/developer/develop/advanced/rss",
            // },
            {
              text: "Secret",
              link: "/developer/develop/advanced/secret",
            },
            // {
            //   text: "Notification",
            //   link: "/developer/develop/advanced/notification",
            // },
            // {
            //   text: "Frontend",
            //   link: "/developer/develop/advanced/frontend",
            // },
            {
              text: "Kubesphere",
              link: "/developer/develop/advanced/kubesphere",
            },
          ],
        },

        {
          text: "Submit application",
          collapsed: true,
          link: "/developer/develop/submit/",
        },
      ],
    },
    {
      text: "Contribute to Olares",
      items: [
        {
          text: "Develop system app",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/developer/contribute/system-app/overview",
            },
            {
              text: "`deployment.yaml`",
              link: "/developer/contribute/system-app/deployment",
            },
            {
              text: "`OlaresManifest.yaml`",
              link: "/developer/contribute/system-app/olares-manifest",
            },
            {
              text: "Install",
              link: "/developer/contribute/system-app/install",
            },
            {
              text: "Other",
              link: "/developer/contribute/system-app/other",
            },
          ],
        },
      ],
    },
  ],
};

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    //logo: "/icon.png",
    socialLinks: [{ icon: "github", link: "https://github.com/beclab/olares" }],

    nav: [
      { text: "Manual", link: "/manual/docs-home" },
      { text: "Developer Guide", link: "/developer/install/" },
    ],

    sidebar: side,
  },
});
