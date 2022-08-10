<template>
  <v-card class="ma-1" v-bind:color="item.color">
    <v-card-title primary-title>
      {{ item.title }}
    </v-card-title>
    <v-card-text>
      {{ item.description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
.v-card-title {
  color: grey;
}
.v-card-text {
  color: gray;
}
</style>
