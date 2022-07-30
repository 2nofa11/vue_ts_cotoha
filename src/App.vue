<template>
  <v-app>
    <Page/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WrapperPage from './components/pages/WrapperPage.vue'

export default defineComponent({
  name: 'App',
  components:{
    Page:WrapperPage
  }
})

</script>
