import { createRouter, createWebHistory } from "vue-router";
import About from "@/pages/About";
import Main from "@/pages/Main";

import PageAPI from "@/pages/PageAPI";
import PageLeague from "@/pages/PageLeague";
import PageTeams from "@/pages/PageTeams";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/league",
    component: PageLeague,
  },
  {
    path: "/api_list",
    component: PageAPI,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/teams",
    component: PageTeams,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
