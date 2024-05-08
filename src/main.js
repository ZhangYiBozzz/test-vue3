import { createApp } from "vue";
import {
  Swipe,
  SwipeItem,
  Image,
  Popup,
  Field,
  CellGroup,
  Icon,
  Switch,
  Tabbar,
  TabbarItem,
} from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import BetterScroll from "./components/BetterScroll.vue";
import drawer from "./components/drawer";
// import Bscroll from "./components/BetterScroll.vue";
// import { Icon } from "@iconify/vue";

const app = createApp(App);
app.component("co-button", Button);
app.component("co-input", Input);
app.component("BetterScroll", BetterScroll);
app.use(drawer);
app
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .use(Image)
  .use(Popup)
  .use(Field)
  .use(CellGroup)
  .use(Icon)
  .use(Switch)
  .use(TabbarItem)
  .use(Tabbar)
  .mount("#app");
