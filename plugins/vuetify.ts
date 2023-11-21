import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "../assets/fonts/IRANSans_FaNum.scss";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
