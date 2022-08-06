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
        
        cotohaResItems:[] as Array<zelda>
      }
    },
    methods:{
      updateMessage(cotohaResText:string,msg:string,itemColor:string){
        const zeldaIns:zelda ={
          title : cotohaResText,
          description : msg,
          color : itemColor
        }
        this.cotohaResItems.push(zeldaIns)

      }
    }
  })
</script>


