<template>
  <div class="hello">
    <v-container>
      <v-sheet
        color="white"
        elevation="5"
        rounded="lg"
      >
        <div class="my-5">
          <v-textarea v-model="msg" label="Text" :rules="rules" :value="msg"></v-textarea>
        </div>
        <div class="text-center">
          <Canvas></Canvas>
          <h1 >{{wordCount}}</h1>
        </div>
        <div class="text-right pa-4">
          <button v-on:click="calcWordCount(msg)">送信</button>
        </div>
      </v-sheet>
    </v-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import Canvas from './Canvas.vue'


export default defineComponent({
  name:"WrapperMain",
  components: {
    Canvas,
  },
  data(){
    return{
      msg:"Hello TypeScript",
      wordCount:0,
      rules:[(v:string) => v.length <= 25 || "Max"]
    }
  },
  methods:{
    calcWordCount:function(msg:string){
      this.wordCount = msg.length
    }
  }

})
</script>