<template>
  <v-btn
    color="primary"
    elevation="1"
    rounded
    x-large
    :loading="is_loading"
    :disabled="is_loading"
    v-on:click="loader = 'loading'"
  >
    {{ name }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      loader: null,
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    is_loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    loader() {
      this.loader = null
    },
  },
})
</script>
