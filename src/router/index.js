import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesContent from "../views/ServicesView.vue";
import WhyContent from "../views/WhyView.vue";
import WorkContent from "../views/WorkView.vue";
import ProcessContent from "../views/ProcessView.vue";
import ClientsContent from "../views/ClientsView.vue";
import ContactContent from "../views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // component: () => import("../views/AboutView.vue"),
    component: AboutView,
  },
  {
    path: "/services",
    name: "ServicesConent",
    component: ServicesContent,
  },
  {
    path: "/why",
    name: "WhyContent",
    component: WhyContent,
  },
  {
    path: "/work",
    name: "WorkContent",
    component: WorkContent,
  },
  {
    path: "/process",
    name: "ProcessContent",
    component: ProcessContent,
  },
  {
    path: "/clients",
    name: "ClientsContent",
    component: ClientsContent,
  },
  {
    path: "/contact",
    name: "ContactContent",
    component: ContactContent,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
