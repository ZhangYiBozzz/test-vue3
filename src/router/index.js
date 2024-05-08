import { createRouter, createWebHashHistory } from "vue-router";
//createWebHashHistory 历史记录模式
import routes from "./routes";

// createRouter创建路由实例 创建router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
