import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import XSSExample from "./components/XSSExample.vue";
import Login from "./components/Login.vue";
import App from "./App.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: XSSExample },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
