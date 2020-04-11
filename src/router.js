import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "stats",
      component: Home,
      meta: {
        icon: "folder",
        name: "Projects"
      }
    },
    {
      path: "/fuzz",
      name: "fuzz",
      component: Home,
      meta: {
        icon: "cpu",
        name: "Fuzzers"
      }
    }
  ]
});
