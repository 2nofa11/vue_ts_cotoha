<template>
  <div>
    <v-sheet elevation="1" rounded="lg">
      <SubmitForm
        @parent-method="requestToGAS"
        :is-loading="isLoading"
      ></SubmitForm>
      <!-- GASからのレスポンスが表示されます -->
      <v-container fluid justify="center" class="ma-5">
        <transition-group name="anime">
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
        await analyzeSentimentWtihGAS(url).then((data) => (result = data.Hello))
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
  })
</script>

<style scoped>
  .anime-enter-from {
    opacity: 0;
  }
  .anime-enter-active {
    transition: 3s;
    animation: animeInUp 0.7s;
  }
  .anime-enter-to {
    opacity: 1;
  }
  .anime-move {
    transition: transform 0.8s;
  }

  .card-anime-enter-active {
    animation: animeInUp 0.7s;
    animation-delay: 0.1s;
    opacity: 0;
  }
  .card-anime-move {
    transition: taransform 0.8s;
  }

  @keyframes animeInUp {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }
    60% {
      opacity: 0.3;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
