<template>
  <v-btn
    color="primary"
    elevation="1"
    rounded
    x-large
    :loading="loading"
    :disabled="loading"
    v-on:click="loader = 'loading'"
  >{{name}}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{
      loading:false,
      loader:null
    }
  },
  props:{
    name:{
      type:String,
      required:true
    }
  },
  watch:{
    loader(){
      this.loading = true
      setTimeout(() => (this.loading = false),3000)
      this.loader = null
    }
  }
})
</script>
