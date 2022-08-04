<template>
  <div class="mt-5 mb-n7">
    <v-textarea v-model="msg" label="Text" :rules="rules" auto-grow></v-textarea>
  </div>
  <v-row  justify="center">
    <RoundButton name="要約" v-on:click="deGet"></RoundButton>
    <!-- <p>{{cotohaResText}}</p> -->
  </v-row>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  import RoundButton from "../atoms/RoundButton.vue"
  import axios from "axios"
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axiosJsonpAdapter  = require('axios-jsonp')

  export default defineComponent({
    components:{
      RoundButton
    },
    data:() => ({
      cotohaResText:"World",
      msg:"要約する文章を入力してください",
      rules:[(v:string) => v.length <= 10 || "1000文字以上は要約ができません"]

    }),
    emits:["parentMethod"],
    methods:{
      deGet:async  function(){
        const url = `https://script.google.com/macros/s/AKfycbwCFRzlEUmjOMIiz5NZF9Gx9uZUMfG9dL_56qzzo6GPpkF0_dSoeY4-mpTbCT3pOPCG/exec?text=${this.msg}`  
        console.log("1")
        await axios.get(url,{adapter: axiosJsonpAdapter,})
        .then(res => this.cotohaResText = res.data.Hello)
        console.log("2")
        this.$emit("parentMethod",this.cotohaResText,this.msg)
      }
    }
  })
</script>


