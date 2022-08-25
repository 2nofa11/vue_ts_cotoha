import { ResItem } from "@/types/resItem.type"
import { createStore } from "vuex"

export const store = createStore({
  state: { resItems: [] as Array<ResItem> },
  getters: {
    backResItems(state) {
      return state.resItems
    },
  },
  mutations: {
    holdResult(state, targetLists) {
      state.resItems = targetLists
    },
  },
})
