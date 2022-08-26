<template>
  <div>
    <v-sheet elevation="1" rounded="lg">
      <SubmitForm
        @parent-method="requestToGAS"
        :is-loading="isLoading"
      ></SubmitForm>
      <!-- GASからのレスポンスが表示されます -->
      <v-container fluid justify="center" class="ma-5">
        <transition-group
          name="anime"
          enter-active-class="animate__animated animate__backInRight"
        >
          <div v-for="item in cotohaResItems" v-bind:key="item">
            <NormalCard :item-info="item"></NormalCard>
          </div>
        </transition-group>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import SubmitForm from "../molecules/SubmitForm.vue"
  import NormalCard from "@/components/atoms/NormalCard.vue"
  import { ResItem } from "../../types/resItem.type"
  import {
    colorWithSentiment,
    analyzeSentimentWithGAS,
  } from "./SentimentAnalysisPart.module"
  import { SentimentInfo } from "@/types/sentimentInfo.type"
  import { Sentiment } from "@/types/sentiment.type"
  // CROSになってしまうため仕方なくjsonpを利用
  const gasURL =
    "https://script.google.com/macros/s/AKfycbwCFRzlEUmjOMIiz5NZF9Gx9uZUMfG9dL_56qzzo6GPpkF0_dSoeY4-mpTbCT3pOPCG/exec"

  export default defineComponent({
    // TODO moleculesのロジックをここで処理したい
    components: {
      SubmitForm,
      NormalCard,
    },
    data() {
      return {
        cotohaResItems: [] as Array<ResItem>,
        isLoading: false,
      }
    },
    methods: {
      // GASから取得した判定結果をカードに追加
      async requestToGAS(inputText: string) {
        this.isLoading = true

        let result = "" as Sentiment
        // 文章内容をもとに、感情分析結果を取得
        const url = `${gasURL}?text=${inputText}`
        await analyzeSentimentWithGAS(url).then((data) => (result = data.Hello))
        // 親コンポーネントにGASから取得できた情報を返却
        const displayInfo: SentimentInfo = colorWithSentiment(result)

        // カード情報を設定
        const resItemIns: ResItem = {
          title: displayInfo.title,
          description: inputText,
          color: displayInfo.color,
        }
        this.cotohaResItems.unshift(resItemIns)
        this.isLoading = false
      },
    },
    computed: {
      storeItems() {
        return this.$store.getters.backResItems
      },
    },
    mounted() {
      if (this.cotohaResItems.length == 0) {
        this.cotohaResItems = this.storeItems
      }
    },
    beforeRouteLeave(to, from, next) {
      this.$store.commit("holdResult", this.cotohaResItems)
      next()
    },
  })
</script>

<style scoped>
  .anime-move {
    transition: transform 0.8s;
  }
</style>
