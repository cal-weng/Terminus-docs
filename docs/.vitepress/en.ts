import { defineConfig, type DefaultTheme } from "vitepress";

const side = {
  "/overview/": [
    {
      text: "Introduction",
      items: [
        {
          text: "What is Terminus?",
          link: "/overview/introduction/what-is-terminus",
        },
        {
          text: "Getting Started",
          link: "/overview/introduction/getting-started",
        },
        // { text: "BEC Architecture", link: "/overview/introduction/bec" },
        { text: "FAQ", link: "/overview/introduction/faq" },
      ],
    },
    {
      text: "Terminus OS",
      items: [
        { text: "Overview", link: "/overview/terminus/overview" },
        { text: "Account", link: "/overview/terminus/account" },
        { text: "Application", link: "/overview/terminus/application" },
        { text: "Network", link: "/overview/terminus/network" },
        { text: "Data", link: "/overview/terminus/data" },
        { text: "Secret", link: "/overview/terminus/secret" },
        { text: "AI Framework", link: "/overview/terminus/ai" },
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
      text: "Terminus OS",
      items: [
        { text: "Overview", link: "/how-to/terminus/" },
        {
          text: "Setup",
          collapsed: true,
          items: [
            { text: "Install", link: "/how-to/terminus/setup/install" },
            { text: "Wizard", link: "/how-to/terminus/setup/wizard" },
            { text: "Login", link: "/how-to/terminus/setup/login" },
          ],
        },
        { text: "Desktop", link: "/how-to/terminus/desktop" },
        {
          text: "Vault",
          link: "/how-to/terminus/vault/",
          collapsed: true,
          items: [
            { text: "Web", link: "/how-to/terminus/vault/web" },
            { text: "Vault & Item", link: "/how-to/terminus/vault/vault" },
            { text: "Team", link: "/how-to/terminus/vault/team" },
          ],
        },
        {
          text: "Files",
          link: "/how-to/terminus/files/",
        },
        {
          text: "Market",
          link: "/how-to/terminus/market/",
        },
        {
          text: "Wise",
          link: "/how-to/terminus/wise/",
        },
        {
          text: "Settings",
          collapsed: true,
          link: "/how-to/terminus/settings/",
          items: [
            {
              text: "Home",
              link: "/how-to/terminus/settings/home",
            },
            {
              text: "Account",
              link: "/how-to/terminus/settings/account",
            },
            {
              text: "Application",
              link: "/how-to/terminus/settings/application",
            },
            {
              text: "Integration",
              link: "/how-to/terminus/settings/integration",
            },
            {
              text: "Wallpaper",
              link: "/how-to/terminus/settings/wallpaper",
            },
            {
              text: "Knowledge Base",
              link: "/how-to/terminus/settings/knowledge",
            },
            {
              text: "Backup",
              link: "/how-to/terminus/settings/backup",
            },
            {
              text: "Upgrade",
              link: "/how-to/terminus/settings/upgrade",
            },
          ],
        },
        { text: "Profile", link: "/how-to/terminus/profile" },
        {
          text: "Dashboard",
          link: "/how-to/terminus/dashboard/",
        },
        {
          text: "ControlHub",
          collapsed: true,
          link: "/how-to/terminus/controlhub/",
          items: [
            {
              text: "Browse",
              link: "/how-to/terminus/controlhub/browse",
            },
            {
              text: "Namespace",
              link: "/how-to/terminus/controlhub/namespace",
            },
            {
              text: "Pods",
              link: "/how-to/terminus/controlhub/pods",
            },
            {
              text: "Resource",
              link: "/how-to/terminus/controlhub/resource",
            },
            {
              text: "Middleware",
              link: "/how-to/terminus/controlhub/middleware",
            },
          ],
        },
        { text: "Dify.ai", link: "/how-to/terminus/dify" },
      ],
    },
    {
      text: "TerimPass",
      items: [
        { text: "Overview", link: "/how-to/termipass/overview" },
        {
          text: "Account",
          link: "/how-to/termipass/account/",
        },
        {
          text: "Manage Terminus",
          link: "/how-to/termipass/manage-terminus",
        },
        {
          text: "Password Autofill",
          link: "/how-to/termipass/password-autofill",
        },
        {
          text: "Local File Sync",
          link: "/how-to/termipass/local-file-sync",
        },
      ],
    },
    {
      text: "Terminus Space",
      items: [
        { text: "Quick Start", link: "/how-to/space/" },
        { text: "Account", link: "/how-to/space/account" },
        {
          text: "Host Terminus",
          collapsed: true,
          link: "/how-to/space/host/",
          items: [
            {
              text: "Create Terminus",
              link: "/how-to/space/host/create-terminus",
            },
            {
              text: "Management Terminus",
              link: "/how-to/space/host/management-terminus",
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
      text: "Developing Terminus App",
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
              text: "TerminusManifest",
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
              text: "Terminus Info",
              link: "/developer/develop/advanced/terminus-info",
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
            {
              text: "Zinc",
              link: "/developer/develop/advanced/zinc",
            },
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
      text: "Contributing To Terminus",
      items: [
        {
          text: "Terminus OS",
          link: "/developer/contribute/terminus-os",
        },
        // {
        //   text: "TermiPass",
        //   link: "/developer/contribute/termipass",
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
              text: "Terminus Name",
              link: "/developer/contribute/snowinning/terminus-name",
            },
            {
              text: "Contract",
              collapsed: true,
              link: "/developer/contribute/snowinning/contract-overview",
              items: [
                {
                  text: "TerminusDID",
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
              text: "TerminusManifest.yaml",
              link: "/developer/contribute/system-app/terminus-manifest",
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
      { text: "Overview", link: "/overview/introduction/what-is-terminus" },
      { text: "How To Use", link: "/how-to/terminus/" },
      { text: "Developer", link: "/developer/develop/" },
    ],

    sidebar: side,
  },
});
