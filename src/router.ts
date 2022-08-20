import { createRouter } from "vue-router"
import AboutService from "./components/organisms/AboutService.vue"

const routes = [{ path: "/about", component: AboutService }]

export default function (history: any) {
  return createRouter({
    history,
    routes,
  })
}
