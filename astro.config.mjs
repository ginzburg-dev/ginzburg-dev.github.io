import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// GitHub Pages user site: served from the domain root, so no `base` is set.
export default defineConfig({
  site: "https://ginzburg-dev.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    // Astro 7 configures remark/rehype plugins through `markdown.processor`.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: false,
    },
  },
  image: {
    responsiveStyles: true,
  },
});
