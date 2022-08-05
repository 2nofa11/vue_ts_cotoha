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
      loader:null
    }
  },
  props:{
    name:{
      type:String,
      required:true
    },
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
