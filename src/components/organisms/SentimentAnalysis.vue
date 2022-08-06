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

  // TODO 共通の型をPopupCardでも利用している。
  type resItem = {
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
        cotohaResItems:[] as Array<resItem>
      }
    },
    methods:{
      updateMessage(cotohaResText:string,inputText:string,itemColor:string){
        const resItemIns:resItem ={
          title : cotohaResText,
          description : inputText,
          color : itemColor
        }
        this.cotohaResItems.push(resItemIns)

      }
    }
  })
</script>


