import Vue from "vue";
import VueRouter from "vue-router";
import Pages from "@/pages";

import login from "@/pages/auth";

Vue.use(VueRouter);
const mainRouteChildren = [
  {
    path: "/404error",
    name: "404Error",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/404error/404error.vue"),
    },
  },
  {
    path: "/example",
    name: "example",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/example/index.vue"),
    },
  },
  {
    path: "/example/create",
    name: "add_example",
    components: {
      default: Pages,
      pageContent: () => import("@/pages/example/create.vue"),
    },
  },
];

let allRoutes = [];
var routesConcat = allRoutes.concat(mainRouteChildren);

const routes = [
  { path: "/login", component: login, name: "login" },

  {
    path: "/",
    name: "home",
    component: Pages,
    children: routesConcat,
  },
];

const router = new VueRouter({
  routes,
  hashbang: false,
  history: true,
  mode: "history",
  props: true,
  transitionOnLoad: true,
  root: "/",
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/404error");
  } else {
    next();
  }
});

export default router;
