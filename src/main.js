import "./App.css";
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
const app = createApp(App);
library.add(
  faAlignRight,
  faMartiniGlassCitrus,
  faPersonHiking,
  faVanShuttle,
  faBeerMugEmpty
);
app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
