import { hopeTheme } from "vuepress-theme-hope";
import { NavbarConfig } from "./navbar.js";

export default hopeTheme({
  favicon: "/favicon.png",
  logo: "/favicon.png",
  hostname: "https://lightinsighter.github.io/",
  iconAssets: [
    "https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  ],
  iconPrefix: "fas fa-",
  sidebarIcon: true,
  sidebar: {
    "/ailab/": "structure",
    "/web/": "structure",
    "/notes/": "structure",
    "/resources/": "structure",
    "/": [],
  },
  navbarIcon: true,
  sidebarSorter: ["date", "order", "readme", "title", "filename"],
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  navbar: NavbarConfig,
  repo: "lightinsighter",
  repoLabel: "GitHub",
  repoDisplay: true,
  editLink: false,
  contributors: false,
  copyright: "MIT Licensed | Copyright © 2023-Present 浅见AI",
  displayFooter: true,
  darkmode: "disable",
  fullscreen: false,
  pure: false,
  breadcrumb: true,
  blog: {
    name: "浅见AI",
    avatar: "/favicon.png",
    roundAvatar: true,
    description: "公众号：浅见AI (全网同名) ，专注于互联网技术与AI算法。",
    intro: "https://lightinsighter.github.io/",
    medias: {
      Github: "https://github.com/lightinsighter",
      BiliBili: "https://space.bilibili.com/3493291456727316",
      Email: "mailto:lightinsighter@outlook.com",
      Weibo: "https://weibo.com/lightinsighter",
      Zhihu: "https://www.zhihu.com/people/lightinsighter",
      Twitter: "https://twitter.com/lightinsighter",
      Youtube: "https://www.youtube.com/@lightinsighter",
    },
  },
  plugins: {
    photoSwipe: true,
    autoCatalog: true,
    blog: {
      article: "/",
      category: "/category",
      categoryItem: "/category/:name/",
      tag: "/tag/:name/",
      tagItem: "/tag/:name/",
      star: "/star",
      timeline: "/notes-timeline",
      filter: ({ filePathRelative, frontmatter }) => {
        if (!filePathRelative) return false;
        if (!filePathRelative.startsWith("notes/")) return false;
        if (frontmatter.home || frontmatter.layout) return false;

        return true;
      },
    },
    feed: {
      atom: false,
      json: false,
      rss: false,
    },
    mdEnhance: {
      tabs: true,
      codetabs: true,
      chart: true,
      echarts: true,
      mermaid: true,
      katex: true,
      mathjax: true,
      sub: true,
      sup: true,
      tasklist: true,
      card: true,
      figure: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      attrs: true,
      presentation: true,
      mark: true,
      footnote: true,
      container: true,
      align: true,
    },
    comment: {
      provider: "Giscus",
      repo: "lightinsighter/mytools",
      repoId: "R_kgDOJfo09A",
      category: "General",
      categoryId: "DIC_kwDOJfo09M4CXbRC",
    },
  },
});