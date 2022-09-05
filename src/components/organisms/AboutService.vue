<template>
  <v-carousel
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    height="auto"
  >
    <v-carousel-item v-for="info in serviceInfo" :key="info">
      {{ info }}
      <NormalCard :item-info="item">
        <v-img
          class="ma-15"
          :aspect-ratio="16 / 9"
          src="@/assets/about.svg"
        ></v-img
      ></NormalCard>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import NormalCard from "@/components/atoms/NormalCard.vue"
  import { ResItem } from "../../types/resItem.type"
  export default defineComponent({
    components: { NormalCard },
    data() {
      return {
        serviceInfo: ["アプリ名", "説明", "使い方", "今後どうしていきたいか"],
        // カード情報を設定
        item: {
          title: "title",
          description: "ここが説明です",
          color: "white",
        } as ResItem,
      }
    },
  })
</script>

<style scoped></style>
