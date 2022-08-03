<template>
  <SubmitTltdInfo @parentMethod="updateMessage"></SubmitTltdInfo>
  <!-- GASからのレスポンスが表示されます -->
  <v-row justify="center" class="ma-5">
    <PopupCard :itemsProps="cotohaResItems"></PopupCard>
  </v-row>
</template>

<script lang="ts">
  import {defineComponent} from "vue"
  import SubmitTltdInfo from "../molecules/SubmitTltdInfo.vue"
  import PopupCard from "../molecules/PopupCard.vue"

  type zelda = {
    title:string,
    description:string,
    color:string
  }
  

export default defineComponent({
    components:{
      SubmitTltdInfo,PopupCard
    },
    data(){
      return{
        cotohaResText:"Hello" ,
        cotohaResItems:[] as Array<zelda>
      }
    },
    methods:{
      updateMessage(cotohaResText:string){
        const zeldaIns:zelda ={
          title : "要約",
          description : cotohaResText,
          color : "green darken-4"
        }
        this.cotohaResItems.push(zeldaIns)

      }
    }
  })
</script>


