<template>
  <SubmitTltdInfo @parentMethod="updateMessage"></SubmitTltdInfo>
  <!-- GASからのレスポンスが表示されます -->
  {{cotohaResText}}
  <v-row justify="center" class="ma-5">
    <PopupCard></PopupCard>
  </v-row>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  import SubmitTltdInfo from "../molecules/SubmitTltdInfo.vue"
  import PopupCard from "../molecules/PopupCard.vue"

  export default defineComponent({
    components:{
      SubmitTltdInfo,PopupCard
    },
    data(){
      return{
        cotohaResText:"Hello" 
      }
    },
    methods:{
      updateMessage(cotohaResText:string){
        this.cotohaResText = cotohaResText
      }
    }
  })
</script>


