<template>
  <v-btn
    color="primary"
    elevation="2"
    rounded
    x-large
  >{{name}}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    name:{
      type:String,
      required:true
    }
  }
})
</script>
