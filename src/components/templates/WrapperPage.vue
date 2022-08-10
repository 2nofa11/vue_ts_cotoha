<template>
  <Header></Header>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet elevation="1" rounded="lg">
        <SentimentAnalysis />
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SentimentAnalysis from "../organisms/SentimentAnalysisPart.vue"
import Header from "../organisms/HeaderPart.vue"

export default defineComponent({
  components: {
    SentimentAnalysis,
    Header,
  },
})
</script>
