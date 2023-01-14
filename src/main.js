import Vue from "vue";
import App from "./App.vue";
import "./global/styles.scss";
import router from "./router";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Font Awesome
// Vue Typer
import VueTyperPlugin from "vue-typer";
Vue.use(VueTyperPlugin);
// Vue Typer
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

library.add(fas, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
