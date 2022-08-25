<template>
  <v-carousel hide-delimiter-background delimiter-icon="mdi-minus">
    <v-carousel-item v-for="info in serviceInfo" :key="info">
      {{ info }}
      <transition>
        <div class="circle" />
      </transition>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    data() {
      return {
        serviceInfo: ["アプリ名", "説明", "使い方", "今後どうしていきたいか"],
        // title: "アプリ名",
        // description: "説明",
        // howToUse: "使い方",
        // roadmap: "今後どうしていきたいか",
      }
    },
  })
</script>

<style scoped>
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: blue;
  }
</style>
