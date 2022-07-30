<template>
  <div class="mt-5 mb-n7">
    <v-textarea v-model="msg" label="Text" :rules="rules" auto-grow></v-textarea>
  </div>
  <v-row  justify="center">
    <RoundButton name="要約" v-on:click="deGet"></RoundButton>
    <p>{{tltdMsg}}</p>
  </v-row>
  <v-row justify="center" class="ma-5">
    <PopupCard></PopupCard>
  </v-row>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  import RoundButton from "../atoms/RoundButton.vue"
  import PopupCard from "../atoms/PopupCard.vue"
  import axios from "axios"
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axiosJsonpAdapter  = require('axios-jsonp')

  export default defineComponent({
    components:{
      RoundButton,PopupCard
    },
    data:() => ({
      tltdMsg:"",
      msg:"要約する文章を入力してください",
      rules:[(v:string) => v.length <= 10 || "1000文字以上は要約ができません"]

    }),
    methods:{
      deGet:async  function(){
        console.log("1")
        await axios.get('/api/',{adapter: axiosJsonpAdapter,})
        .then(res => this.tltdMsg = res.data.Hello)
        console.log("2")
      }
    }
  })
</script>


