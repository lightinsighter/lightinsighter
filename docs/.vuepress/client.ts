import { defineClientConfig } from "@vuepress/client";
import { onMounted } from "vue";

export default defineClientConfig({
  setup() {
    onMounted(() => {
      console.log("Welcome to 浅见AIの技术笔记。");
    });
  },
});
