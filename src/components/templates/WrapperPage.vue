<template>
  <Header></Header>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet elevation="1" rounded="lg">
        <TltdForm/>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import TltdForm from '../organisms/TltdForm.vue'
import Header from '../organisms/HeaderPart.vue'

export default defineComponent({
  components: {
    TltdForm,Header
  },
})
</script>

