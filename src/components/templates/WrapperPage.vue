<template>
  <Header>
    <v-slot>
      <router-link to="/about">About</router-link>
      <router-link to="/vue_ts_cotoha">Use</router-link>
    </v-slot>
  </Header>
  <v-main class="grey lighten-3">
    <v-container>
      // TODO画面遷移したらコンポーネントが消えるのは修正Vuex使う？
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import Header from "../organisms/HeaderPart.vue"

  export default defineComponent({
    components: {
      Header,
    },
  })
</script>
