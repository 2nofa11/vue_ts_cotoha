<template>
  <div>
    <v-sheet elevation="1" rounded="lg">
      <SubmitForm
        @parent-method="requestToGAS"
        :is-loading="isLoading"
      ></SubmitForm>
      <!-- GASからのレスポンスが表示されます -->
      <v-row justify="center" class="ma-5">
        <PopupCard :items-props="cotohaResItems"></PopupCard>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import SubmitForm from "../molecules/SubmitForm.vue"
  import PopupCard from "../molecules/PopupCard.vue"
  import { ResItem } from "../../types/resItem.type"
  import {
    colorWithSentiment,
    analyzeSentimentWtihGAS,
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
      PopupCard,
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
        await analyzeSentimentWtihGAS(url).then((data) => (result = data.Hello))
        // 親コンポーネントにGASから取得できた情報を返却
        const displayInfo: SentimentInfo = colorWithSentiment(result)

        // カード情報を設定
        const resItemIns: ResItem = {
          title: displayInfo.title,
          description: inputText,
          color: displayInfo.color,
        }
        this.cotohaResItems.push(resItemIns)
        this.isLoading = false
      },
    },
  })
</script>
