import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/auth/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegistrationView.vue"),
    },
    {
      path: "/auth/recover",
      name: "recover",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RecoverView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/UserLanding.vue"),
    },
  ],
});

export default router;
