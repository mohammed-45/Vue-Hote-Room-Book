import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Rooms from "../views/Rooms.vue";
import SingleRoom from "../views/SingleRoom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/rooms/:slug",
      name: "single-room",
      component: SingleRoom,
    },
    {
      path: "/rooms",
      name: "rooms",
      component: Rooms,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
