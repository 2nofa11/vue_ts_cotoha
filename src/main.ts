import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { createWebHistory } from "vue-router"
import createRouter from "./router"
import { loadFonts } from "./plugins/webfontloader"
import "animate.css"

loadFonts()

const app = createApp(App)
app.use(vuetify)

const router = createRouter(createWebHistory())
app.use(router)

app.mount("#app")
