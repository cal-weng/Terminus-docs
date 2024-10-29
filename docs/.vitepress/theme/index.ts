// docs/.vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import Layout from "./Layout.vue";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

import { onMounted, watch, nextTick } from "vue";
import mediumZoom from "medium-zoom";

export default {
  extends: DefaultTheme,
  Layout,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      inject();
      injectSpeedInsights();
      initZoom();

      document
        .querySelector(".wrapper .container a.title")
        ?.setAttribute("href", "https://olares.xyz/");

      document
        .querySelector(".wrapper .container a.title")
        ?.setAttribute("target", "_blank");
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          initZoom();

          document
            .querySelector(".wrapper .container a.title")
            ?.setAttribute("href", "https://olares.xyz/");

          document
            .querySelector(".wrapper .container a.title")
            ?.setAttribute("target", "_blank");
        });
      }
    );
  },
};
