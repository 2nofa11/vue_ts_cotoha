import { createRouter } from "vue-router"
import AboutService from "./components/organisms/AboutService.vue"
import SentimentAnalysisPart from "./components/organisms/SentimentAnalysisPart.vue"

const routes = [
  {
    path: "/about",
    component: AboutService,
  },
  {
    path: "/vue_ts_cotoha",
    component: SentimentAnalysisPart,
  },
  {
    path: "/",
    redirect: "/vue_ts_cotoha",
  },
]

export default function (history: any) {
  return createRouter({
    history,
    routes,
  })
}
