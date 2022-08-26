import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"

/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
  interface
}

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface State {
    resItems: Array<T>
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
