import { defineUserConfig } from "@vuepress/cli";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "浅见AIの技术主站",
  description: "专注于互联网技术与AI算法",
  theme,
  plugins: [
    shikiPlugin({
      theme: "dracula",
    }),
    searchProPlugin({
      indexContent: true,
      autoSuggestions: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
