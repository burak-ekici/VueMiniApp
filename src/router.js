import { createWebHistory, createRouter } from "vue-router";
import DcHeroes from "./pages/dcheroes";
import Calendar from "./pages/calendar";
import Markdown from "./pages/markdown";
import Home from "./pages/home";
import Slider from "./pages/slider";
import Calculator from "./pages/Calculator";
import ReusableModal from "./pages/ReusableModal";
import Chats from "./pages/Chats";
import store from "./store/index";
import UserCrud from "./pages/UserCrud";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dc-heroe",
    component: DcHeroes,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/markdown",
    component: Markdown,
  },
  {
    path: "/slider",
    component: Slider,
  },
  {
    path: "/calculator",
    component: Calculator,
  },
  {
    path: "/reusablemodal",
    component: ReusableModal,
  },
  {
    path: "/chats",
    component: Chats,
    meta: { middleware: "auth" },
  },
  {
    path: "/usercrud",
    component: UserCrud,
    meta: { middleware: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    }
  } else {
    next();
  }
});

export default router;
