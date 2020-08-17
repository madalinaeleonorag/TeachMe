import Vue from "vue";
import Vuex from "vuex";
import "./plugins/vuetify";
import App from "./App.vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import Ionic from "@ionic/vue";
import { IonicVueRouter } from "@ionic/vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Ionic);
Vue.use(IonicVueRouter);
Vue.use(Vuex);

export const router = new IonicVueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/tabs",
      component: () => import("@/components/TabRoot.vue"),
      children: [
        {
          path: "tab1",
          name: "tab1",
          components: {
            tab1Route: () => import("@/components/Tab1.vue"),
          },
        },
        {
          path: "tab1/details",
          name: "tab1-details",
          components: {
            tab1Route: () => import("@/components/Tab1Details.vue"),
          },
        },
      ],
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("@/components/SignUp.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/Login.vue"),
    },
    { path: "/", redirect: "tabs/tab1" },
  ],
});
new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
