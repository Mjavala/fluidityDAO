import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import VueSmoothScroll from "vue3-smooth-scroll";

createApp(App)
  .use(AOS.init({ duration: 1500 }))
  .use(VueSmoothScroll, {
    duration: 750,
  })
  .mount("#app");
