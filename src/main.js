import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faInstagram,
  faDeviantart, faTrello, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faTwitterSquare,faInstagram,faDeviantart,faTrello, faPaw, faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
