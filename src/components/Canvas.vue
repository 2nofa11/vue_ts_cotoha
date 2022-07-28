<template>
  <canvas width="100" height="200" ref="canvas">aaa</canvas>
  <button v-on:click="deGet">{{btnName}}</button>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  import axios from "axios"
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axiosJsonpAdapter  = require('axios-jsonp')

  export default defineComponent({
    name:"MyCanvas",
    data:() => ({
      btnName:"hoge"
    }),
    methods:{
      deGet:async  function(){
        console.log("1")
        await axios.get('/api/',{adapter: axiosJsonpAdapter,}).then(res => console.log(res))
        console.log("2")
      }
    }

  })
</script>


<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>