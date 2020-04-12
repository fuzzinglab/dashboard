import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Fuzzers from "./views/Fuzzers.vue";
import Fuzzer from "./views/Fuzzer.vue";

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
      path: "/fuzzer",
      name: "fuzzers",
      component: Fuzzers,
      meta: {
        icon: "cpu",
        name: "Fuzzers"
      }
    },
    {
      path: "/fuzzer/:id",
      name: "Fuzzer",
      component: Fuzzer
    }
  ]
});
