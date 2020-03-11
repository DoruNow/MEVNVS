import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

Vue.config.productionTip = false;
const socket = io("http://localhost:3000");

new Vue({
  vuetify,
  VueSocketIOExt,
  socket,
  render: h => h(App)
}).$mount("#app");
