import { createApp } from "vue";
import App from "@/App";
import components from "@/components/UI";
import router from "@/router/index";
import "./assets/css/index.css";
// import "tailwindcss/tailwind.css";


const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
