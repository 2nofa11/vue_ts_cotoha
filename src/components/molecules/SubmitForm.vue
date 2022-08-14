<template>
  <div class="mt-5 mb-n7">
    <v-textarea
      v-model="inputText"
      label="YourTweet"
      :rules="rules"
      auto-grow
    ></v-textarea>
  </div>
  <v-row justify="center">
    <DoubleIconButton
      v-bind:is_loading="is_Loading"
      v-on:click="requestToGAS"
    ></DoubleIconButton>
  </v-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import DoubleIconButton from "../atoms/DoubleIconButton.vue"
  import axios from "axios"
  import {
    is_correctTextInfo,
    colorWithSentiment,
    analyzeSentimentWtihGAS,
  } from "./SubmitForm.module"
  import { Sentiment } from "../../types/sentiment.type"
  import { SentimentInfo } from "../../types/sentimentInfo.type"

  // CROSになってしまうため仕方なくjsonpを利用
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axiosJsonpAdapter = require("axios-jsonp")
  const placeholderText =
    "「つぶやく」まえに、あなたの文章の感情を分析してみましょう！"
  const gasURL =
    "https://script.google.com/macros/s/AKfycbwCFRzlEUmjOMIiz5NZF9Gx9uZUMfG9dL_56qzzo6GPpkF0_dSoeY4-mpTbCT3pOPCG/exec"

  export default defineComponent({
    components: {
      DoubleIconButton,
    },
    data: () => ({
      cotohaResText: "" as Sentiment,
      inputText: placeholderText,
      rules: [(v: string) => v.length <= 140 || "140文字以上は呟けませんよ！"],
      is_Loading: false,
    }),
    emits: ["parentMethod"],
    // TODOロジックを書きまくっているから修正すべき
    methods: {
      // 自分が入力した文章の感情を判定するメソッド
      requestToGAS: async function () {
        // GASに投げる文章が適切か判断
        if (is_correctTextInfo(this.inputText, placeholderText)) {
          return
        }
        this.is_Loading = true

        // 文章内容をもとに、感情分析結果を取得
        const url = `${gasURL}?text=${this.inputText}`
        await analyzeSentimentWtihGAS(url).then(
          (data) => (this.cotohaResText = data.Hello)
        )

        // 親コンポーネントにGASから取得できた情報を返却
        const displayInfo: SentimentInfo = colorWithSentiment(
          this.cotohaResText
        )
        this.$emit(
          "parentMethod",
          displayInfo.title,
          this.inputText,
          displayInfo.color
        )

        this.is_Loading = false
        this.inputText = ""
      },
    },
  })
</script>
