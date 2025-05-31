import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
<<<<<<< HEAD
  base: "/blog/",
=======
  base: "/",
>>>>>>> 1050e04a8846ffb8378bb855c41d67253b33c286

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
