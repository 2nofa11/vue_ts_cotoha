<template>
  <v-app>
    <v-app-bar color="white" dark>
      <!-- タイトル -->
      <v-toolbar-title>Test</v-toolbar-title>
      <!-- テーブルアイコンのボタン -->
      <v-btn icon to="/">
        <v-icon>mdi-file-table-outline</v-icon>
      </v-btn>
</v-app-bar>
    <v-main class="grey lighten-3">
      <Wrapper/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Wrapper from './components/Wrapper.vue'

export default defineComponent({
  name: 'App',

  components: {
    Wrapper,
  },

  data () {
    return {
      //
    }
  },
})
</script>
