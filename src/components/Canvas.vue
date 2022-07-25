<template>
  <canvas width="100" height="200" ref="canvas">aaa</canvas>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  export default defineComponent({
    name:"MyCanvas",
  })
</script>


<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>