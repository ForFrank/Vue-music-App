import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  //   { path: "/login", component: Login, hidden: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router;
