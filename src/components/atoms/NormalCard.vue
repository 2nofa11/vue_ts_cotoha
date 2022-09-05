<template>
  <v-card class="ma-1" v-bind:color="itemInfo.color">
    <v-card-title primary-title>
      {{ itemInfo.title }}
    </v-card-title>
    <v-card-text>
      {{ itemInfo.description }}
    </v-card-text>
    <slot></slot>
  </v-card>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    props: {
      itemInfo: {
        type: Object,
        required: true,
      },
    },
  })
</script>

<style scoped>
  .v-card-title {
    color: white;
  }
  .v-card-text {
    color: gray;
  }
</style>
