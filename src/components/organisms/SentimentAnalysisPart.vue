<template>
  <SubmitForm @parentMethod="addResItem"></SubmitForm>
  <!-- GASからのレスポンスが表示されます -->
  <v-row justify="center" class="ma-5">
    <PopupCard :itemsProps="cotohaResItems"></PopupCard>
  </v-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import SubmitForm from "../molecules/SubmitForm.vue"
  import PopupCard from "../molecules/PopupCard.vue"

  // TODO 共通の型をPopupCardでも利用している。
  type ResItem = {
    title: string
    description: string
    color: string
  }

  export default defineComponent({
    // TODO moleculesのロジックをここで処理したい
    components: {
      SubmitForm,
      PopupCard,
    },
    data() {
      return {
        cotohaResItems: [] as Array<ResItem>,
      }
    },
    methods: {
      addResItem(cotohaResText: string, inputText: string, itemColor: string) {
        const resItemIns: ResItem = {
          title: cotohaResText,
          description: inputText,
          color: itemColor,
        }
        this.cotohaResItems.push(resItemIns)
      },
    },
  })
</script>
