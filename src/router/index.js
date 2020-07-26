import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleBlog from "../views/SingleBlog.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/blog/:id", component: SingleBlog },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
