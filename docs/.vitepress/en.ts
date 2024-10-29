import { defineConfig, type DefaultTheme } from "vitepress";

const side = {
  "/overview/": [
    {
      text: "Introduction",
      items: [
        {
          text: "What is Olares?",
          link: "/overview/introduction/what-is-olares",
        },
        {
          text: "Getting Started",
          link: "/overview/introduction/getting-started/",
          collapsed: true,
          items: [
            { text: "Linux", link: "/overview/introduction/getting-started/linux" },
            { text: "Raspberry Pi", link: "/overview/introduction/getting-started/raspberry" },
            { text: "MacOS", link: "/overview/introduction/getting-started/mac" },
            { text: "Windows", link: "/overview/introduction/getting-started/windows" },
          ]
        },
        // { text: "BEC Architecture", link: "/overview/introduction/bec" },
        { text: "FAQ", link: "/overview/introduction/faq" },
      ],
    },
    {
      text: "Olares OS",
      items: [
        { text: "Overview", link: "/overview/olares/overview" },
        { text: "Account", link: "/overview/olares/account" },
        { text: "Olares ID", link: "/overview/olares/olares-id" },
        { text: "Application", link: "/overview/olares/application" },
        { text: "Network", link: "/overview/olares/network" },
        { text: "Data", link: "/overview/olares/data" },
        { text: "Secret", link: "/overview/olares/secret" },
        { text: "AI Framework", link: "/overview/olares/ai" },
      ],
    },
    {
      text: "Protocol",
      items: [
        { text: "Overview", link: "/overview/protocol/overview" },
        { text: "Otmoic", link: "/overview/protocol/otmoic" },
        { text: "Market", link: "/overview/protocol/market" },
        { text: "Recommend", link: "/overview/protocol/recommend" },
      ],
    },
  ],
  "/how-to/": [
    {
      text: "Olares OS",
      items: [
        { text: "Overview", link: "/how-to/olares/" },
        {
          text: "Setup",
          collapsed: true,
          items: [
            { 
              text: "Install",
              link: "/how-to/olares/setup/install/",
              collapsed: true, 
              items: [
                { text: "Linux", link: "/how-to/olares/setup/install/linux" },
                { text: "Raspberry Pi", link: "/how-to/olares/setup/install/raspberry" },
                { text: "MacOS", link: "/how-to/olares/setup/install/mac" },
                { text: "Windows", link: "/how-to/olares/setup/install/windows" },
              ]
            }, 
            { text: "Wizard", link: "/how-to/olares/setup/wizard" },
            { text: "Login", link: "/how-to/olares/setup/login" },
          ],
        },
        { text: "Desktop", link: "/how-to/olares/desktop" },
        {
          text: "Vault",
          link: "/how-to/olares/vault/",
          collapsed: true,
          items: [
            { text: "Web", link: "/how-to/olares/vault/web" },
            { text: "Vault & Item", link: "/how-to/olares/vault/vault" },
            { text: "Team", link: "/how-to/olares/vault/team" },
          ],
        },
        {
          text: "Files",
          link: "/how-to/olares/files/",
        },
        {
          text: "Market",
          link: "/how-to/olares/market/",
        },
        {
          text: "Wise",
          link: "/how-to/olares/wise/",
        },
        {
          text: "Settings",
          collapsed: true,
          link: "/how-to/olares/settings/",
          items: [
            {
              text: "Home",
              link: "/how-to/olares/settings/home",
            },
            {
              text: "Account",
              link: "/how-to/olares/settings/account",
            },
            {
              text: "Application",
              link: "/how-to/olares/settings/application",
            },
            {
              text: "Integration",
              link: "/how-to/olares/settings/integration",
            },
            {
              text: "Wallpaper",
              link: "/how-to/olares/settings/wallpaper",
            },
            {
              text: "Knowledge Base",
              link: "/how-to/olares/settings/knowledge",
            },
            {
              text: "Backup",
              link: "/how-to/olares/settings/backup",
            },
            {
              text: "Upgrade",
              link: "/how-to/olares/settings/upgrade",
            },
          ],
        },
        { text: "Profile", link: "/how-to/olares/profile" },
        {
          text: "Dashboard",
          link: "/how-to/olares/dashboard/",
        },
        {
          text: "ControlHub",
          collapsed: true,
          link: "/how-to/olares/controlhub/",
          items: [
            {
              text: "Browse",
              link: "/how-to/olares/controlhub/browse",
            },
            {
              text: "Namespace",
              link: "/how-to/olares/controlhub/namespace",
            },
            {
              text: "Pods",
              link: "/how-to/olares/controlhub/pods",
            },
            {
              text: "Resource",
              link: "/how-to/olares/controlhub/resource",
            },
            {
              text: "Middleware",
              link: "/how-to/olares/controlhub/middleware",
            },
          ],
        },
        { text: "Dify.ai", link: "/how-to/olares/dify" },
      ],
    },
    {
      text: "LarePass",
      items: [
        { text: "Overview", link: "/how-to/larepass/overview" },
        {
          text: "Account",
          link: "/how-to/larepass/account/",
        },
        {
          text: "Manage Olares",
          link: "/how-to/larepass/manage-olares",
        },
        {
          text: "Password Autofill",
          link: "/how-to/larepass/password-autofill",
        },
        {
          text: "Local File Sync",
          link: "/how-to/larepass/local-file-sync",
        },
      ],
    },
    {
      text: "Olares Space",
      items: [
        { text: "Quick Start", link: "/how-to/space/" },
        { text: "Account", link: "/how-to/space/account" },
        {
          text: "Host Olares",
          collapsed: true,
          link: "/how-to/space/host/",
          items: [
            {
              text: "Create Olares",
              link: "/how-to/space/host/create-olares",
            },
            {
              text: "Management Olares",
              link: "/how-to/space/host/management-olares",
            },
          ],
        },
        {
          text: "Organization Domain",
          collapsed: true,
          link: "/how-to/space/domain/",
          items: [
            {
              text: "Host Domain",
              link: "/how-to/space/domain/host-domain",
            },
            {
              text: "Management Domain",
              link: "/how-to/space/domain/management-domain",
            },
          ],
        },
        { text: "Backup & Restore", link: "/how-to/space/backup" },
        { text: "Bill", link: "/how-to/space/bill" },
      ],
    },
    {
      text: "Otmoic",
      items: [
        {
          text: "How to use",
          link: "/how-to/otmoic/",
        },
      ],
    },
  ],
  "/developer/": [
    {
      text: "Developing Olares App",
      items: [
        {
          text: "Overview",
          link: "/developer/develop/",
        },
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
              text: "Create Your First Apps",
              collapsed: true,
              link: "/developer/develop/tutorial/note/",
              items: [
                {
                  text: "1. Create App",
                  link: "/developer/develop/tutorial/note/create",
                },
                {
                  text: "2. Develop Backend",
                  link: "/developer/develop/tutorial/note/backend",
                },
                {
                  text: "3. Develop Frontend",
                  link: "/developer/develop/tutorial/note/frontend",
                },
              ],
            },
          ],
        },
        {
          text: "Application Package",
          collapsed: true,
          items: [
            {
              text: "Application Chart",
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
              text: "Recommend",
              link: "/developer/develop/package/recommend",
            },
            {
              text: "Helm Extension",
              link: "/developer/develop/package/extension",
            },
          ],
        },
        {
          text: "Advanced",
          collapsed: true,
          items: [
            {
              text: "CLI",
              link: "/developer/develop/advanced/cli",
            },
            {
              text: "Olares Info",
              link: "/developer/develop/advanced/olares-info",
            },
            {
              text: "Service Provider",
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
              text: "File Upload",
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
          text: "Submit Application",
          collapsed: true,
          link: "/developer/develop/submit/",
        },
      ],
    },

    {
      text: "Contributing To Olares",
      items: [
        {
          text: "Olares OS",
          link: "/developer/contribute/olares-os",
        },
        // {
        //   text: "LarePass",
        //   link: "/developer/contribute/larepass",
        // },
        {
          text: "Snowinning Protocol",
          collapsed: true,

          items: [
            {
              text: "Overview",
              link: "/developer/contribute/snowinning/overview",
            },
            {
              text: "Concepts",
              link: "/developer/contribute/snowinning/concepts",
            },
            {
              text: "Olares ID",
              link: "/developer/contribute/snowinning/olares-id",
            },
            {
              text: "Contract",
              collapsed: true,
              link: "/developer/contribute/snowinning/contract-overview",
              items: [
                {
                  text: "OlaresDID",
                  link: "/developer/contribute/snowinning/contract-tdid",
                },
                {
                  text: "Reputation",
                  link: "/developer/contribute/snowinning/contract-reputation",
                },
                {
                  text: "Manager",
                  link: "/developer/contribute/snowinning/contract-manager",
                },
              ],
            },
            {
              text: "VC Service",
              link: "/developer/contribute/snowinning/vc",
            },
          ],
        },
        {
          text: "Develop System App",
          collapsed: true,

          items: [
            {
              text: "Overview",
              link: "/developer/contribute/system-app/overview",
            },
            {
              text: "deyploment.yaml",
              link: "/developer/contribute/system-app/deployment",
            },
            {
              text: "OlaresManifest.yaml",
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
  lang: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.png",
    socialLinks: [{ icon: "github", link: "https://github.com/beclab" }],

    nav: [
      { text: "Overview", link: "/overview/introduction/what-is-olares" },
      { text: "How To Use", link: "/how-to/olares/" },
      { text: "Developer", link: "/developer/develop/" },
    ],

    sidebar: side,
  },
});
