import { navbar } from "vuepress-theme-hope";

export const NavbarConfig = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "AI实验室",
    icon: "lightbulb",
    link: "/ailab",
  },
  {
    text: "Web技术",
    icon: "server",
    link: "/web",
  },
  {
    text: "随笔",
    icon: "book-open",
    link: "/notes",
  },
  {
    text: "资源站",
    icon: "toolbox",
    link: "/resources",
  },
  {
    text: "关于",
    icon: "circle-exclamation",
    link: "/about",
  },
]);
