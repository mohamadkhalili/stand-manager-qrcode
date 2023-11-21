import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // proxy: {
  //   options: {
  //     target: "http://192.168.1.102:8000",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/proxy/develop": "/products",
  //       "^/api/users": "/users",
  //     },
  //     pathFilter: ["/proxy/develop", "/api/users"],
  //   },
  // },
  // nitro: {
  //   routeRules: {
  //     "/proxy/develop": {
  //       proxy: "http://192.168.1.102:8000",
  //     },
  //   },
  // },
  plugins: [{ src: "~/plugins/apexcharts", mode: "client" }],
  devServer: {
    port: 8000,
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    server: {
      proxy: {
        "/proxy/develop/": {
          target: "http://192.168.1.102:8000",
          secure: false,
          changeOrigin: true,
          rewrite(path) {
            return path.replace(/\/proxy\/develop\//i, "/");
          },
        },
      },
    },
  },
});
