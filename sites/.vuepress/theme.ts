import { recoTheme } from "vuepress-theme-reco";

const navbar = [
  { text: "AI实验室", link: "/ailab", icon: "Idea" },
  {
    text: "教程",
    icon: "SubVolume",
    children: [
      {
        text: "unitorch框架",
        children: [
          { text: "文档指南", link: "/unitorch/" },
          { text: "快速开始", link: "/unitorch/configuration" },
        ],
      },
      {
        text: "lightinsighter工具箱",
        children: [
          { text: "文档指南", link: "/lightinsighter/" },
          { text: "工具列表", link: "/lightinsighter/spaces" },
        ],
      },
    ],
  },
  { text: "关于我", link: "/about", icon: "Information" },
];

export default recoTheme({
  logo: "/favicon.png",
  hostname: "https://lightinsighter.vercel.app/",
  colorMode: "light",
  autoSetBlogCategories: false,
  autoAddCategoryToNavbar: false,
  autoSetSeries: false,
  catalogTitle: "目录",
  navbar: navbar,
  commentConfig: {
    type: "giscus",
    options: {
      repo: "lightinsighter/lightinsighter",
      repoId: "R_kgDOJfo09A",
      category: "General",
      categoryId: "DIC_kwDOJfo09M4CXbRC",
    },
  },
});
