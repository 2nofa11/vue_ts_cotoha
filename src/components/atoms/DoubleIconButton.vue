<template>
  <v-btn
    color="primary"
    elevation="1"
    rounded
    x-large
    :loading="loading"
    :disabled="loading"
    v-on:click="loader = 'loading'"
  >
    <V-icon>mdi-emoticon-happy-outline</V-icon>
    or
    <V-icon>mdi-emoticon-cry-outline</V-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{
      loader:null
    }
  },
  props:{
    loading:{
      type:Boolean,
      default:false
    }
  },
  watch:{
    loader(){
      this.loader = null
    }
  }
})
</script>
