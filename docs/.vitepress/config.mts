import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { en } from "./en";
import { zh } from "./zh";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Olares",
  description: "Let people own their data again",
  lang: "en",
  locales: {
    root: {
      label: "English",
      ...en,
    },
    zh: {
      label: "简体中文",
      ...zh,
    },

  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "0614S1555J",
        apiKey: "cbf4702e9d6bfb5a0ae85bf0d486a591",
        indexName: "olares",
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
  },

  sitemap: {
    hostname: "https://docs.olares.com/",
  },
  lastUpdated: true,
  base: process.env.DOC_BASE || "/",
  vite: {
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
  },
});
