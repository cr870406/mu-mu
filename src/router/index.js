import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Products.vue"),
      children: [
        {
          path: "/product",
          component: () => import("../views/productBanner/table-banner.vue"),
        },
        {
          path: "sofa",
          component: () => import("../views/productBanner/sofa-banner.vue"),
        },
        {
          path: "liv",
          component: () => import("../views/productBanner/liv-banner.vue"),
        },
        {
          path: "bed",
          component: () => import("../views/productBanner/bed-banner.vue"),
        },
        {
          path: "chair",
          component: () => import("../views/productBanner/chair-banner.vue"),
        },
        {
          path: "small",
          component: () => import("../views/productBanner/small-banner.vue"),
        },
      ],
    },
    {
      path: "/:id",
      name: "details",
      component: () => import("../views/productDetails.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/checkout.vue"),
      children: [
        {
          path: "/checkout",
          component: () => import("../views/checkout/checkoutOne.vue"),
        },
        {
          path: "write",
          component: () => import("../views/checkout/checkoutTwo.vue"),
        },
        {
          path: "orderCheck",
          component: () => import("../views/checkout/checkoutThree.vue"),
        },
        {
          path: "finish",
          component: () => import("../views/checkout/checkoutFinish.vue"),
        },
      ],
    },
    {
      path: "/inspiration",
      name: "inspiration",
      component: () => import("../views/inspiration.vue"),
    },
    {
      path: "/inside/:id",
      name: "inside",
      component: () => import("../views/inspirationInside.vue"),
    },
    {
      path: "/brandConcept",
      name: "brandConcept",
      component: () => import("../views/brandConcept.vue"),
    },
    {
      path: "/maintainance",
      name: "maintainance",
      component: () => import("../views/maintainance.vue"),
    },
  ],
});

export default router;
