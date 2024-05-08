import Mine from "@/views/mine.vue";
import Home from "../views/home.vue";
import login from "@/views/login.vue";
import star from "@/views/star.vue";
import SingingListDetails from "@/views/SingingListDetails.vue";

export default [
  { path: "/", component: Home },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/SingingListDetails",
    name: "SingingListDetails",
    component: SingingListDetails,
  },
];
