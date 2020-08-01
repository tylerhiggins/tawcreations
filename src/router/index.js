import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "TAWCreations - About" }
  },
  {
    path: "/TOS",
    name: "tos",
    component: () => import("../views/TOS.vue"),
    meta: { title: "TAWCreations - TOS" }
  },
  {
    path: "/digitalprices",
    name: "digitalprices",
    component: () => import("../views/DigitalPrices.vue"),
    meta: { title: "TAWCreations - Prices" }
  },
  {
    path: "/traditionalprices",
    name: "traditionalprices",
    component: () => import("../views/TraditionalPrices.vue"),
    meta: { title: "TAWCreations - Traditional Prices" }
  },
  {
    path: "/sfwgallery",
    name: "sfwgallery",
    component: () => import("../views/SafeGallery.vue"),
    meta: { title: "TAWCreations - Gallery" }
  },
  {
    path: "/adopts",
    name: "adopts",
    component: () => import("../views/Adopts.vue"),
    meta: { title: "TAWCreations - Adopts" }
  },
  {
    path: "/ych",
    name: "ych",
    component: () => import("../views/YCH.vue"),
    meta: { title: "TAWCreations - YCH" }
  },
  {
    path: "/nsfwgallery",
    name: "nsfwGallery",
    component: () => import("../views/NSFWGallery.vue"),
    meta: { title: "TAWCreations - 18+ Gallery" }
  },
  {
    path: "/nsfwych",
    name: "nsfwych",
    component: () => import("../views/NSFWYCH.vue"),
    meta: { title: "TAWCreations - 18+ YCH" }
  },
  {
    path: "/merch",
    name: "merch",
    component: () => import("../views/Merch.vue"),
    meta: { title: "TAWCreations - Merch" }
  },
  {
    path: "*",
    component: () => import("../views/PageNotFound.vue"),
    meta: { title: "TAWCreations - 404" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
