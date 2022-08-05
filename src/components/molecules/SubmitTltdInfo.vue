<template>
  <div class="mt-5 mb-n7">
    <v-textarea v-model="msg" label="Text" :rules="rules" auto-grow></v-textarea>
  </div>
  <v-row  justify="center">
    <DoubleIconButton v-bind:loading="btnLoading" v-on:click="deGet"></DoubleIconButton>
    <!-- <p>{{cotohaResText}}</p> -->
  </v-row>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  import DoubleIconButton from "../atoms/DoubleIconButton.vue"
  import axios from "axios"

  const colorMap = {
    amber:"amber lighten-4",
    green:"green lighten-4",
    blue:"blue lighten-4"
  } as const
  const sentimentMap = {
    Negative:"Negative",
    Positive:"Positive",
    Neutral:"Neutral"
  } as const
  type sentiment = typeof sentimentMap[keyof typeof sentimentMap]

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axiosJsonpAdapter  = require('axios-jsonp')

  
  const colorSelector = (sentiment:sentiment) =>{
    switch (sentiment){
      case sentimentMap.Negative:
        return colorMap.blue
      case sentimentMap.Positive:
        return colorMap.amber
      case sentimentMap.Neutral:
       return colorMap.green
      default:
       throw new Error("不正な値です。")
    }
  }
   
  export default defineComponent({
    components:{
      DoubleIconButton
    },
    data:() => ({
      cotohaResText:"",
      itemColor:"",
      msg:"「つぶやく」まえに、その文章の感情を分析してみましょう！",
      rules:[(v:string) => v.length <= 140 || "140文字以上は呟けませんよ！"],
      btnLoading:false
    }),
    emits:["parentMethod"],
    methods:{
      deGet:async  function(){
        
        this.btnLoading = true

        const url = `https://script.google.com/macros/s/AKfycbwCFRzlEUmjOMIiz5NZF9Gx9uZUMfG9dL_56qzzo6GPpkF0_dSoeY4-mpTbCT3pOPCG/exec?text=${this.msg}`  
        console.log("1")
        await axios.get(url,{adapter: axiosJsonpAdapter,})
        .then(res => {
          this.cotohaResText = res.data.Hello
          this.btnLoading = false
        })
        console.log("2")
        this.$emit("parentMethod",
                    this.cotohaResText,
                    this.msg,
                    colorSelector(this.cotohaResText as sentiment))

      }
    }
  })
</script>


