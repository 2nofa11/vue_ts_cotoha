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
  import { is_correctTextInfo } from "./SubmitForm.module"
  import { Color, colorMap } from "../../types/color.type"
  import { Sentiment, sentimentMap } from "../../types/sentiment.type"

  type SentimentInfo = {
    color: Color
    title: string
  }

  const colorWithSentiment = (sentiment: Sentiment): SentimentInfo => {
    switch (sentiment) {
      case sentimentMap.Negative:
        return {
          color: colorMap.blue,
          title: "悲観的な文章です...",
        }
      case sentimentMap.Positive:
        return {
          color: colorMap.amber,
          title: "元気になる文章です!!",
        }
      case sentimentMap.Neutral:
        return {
          color: colorMap.green,
          title: "ノーマルな文章です",
        }
      default:
        throw new Error("不正な値です。")
    }
  }

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
        await axios
          .get(url, { adapter: axiosJsonpAdapter })
          .then((response) => {
            this.cotohaResText = response.data.Hello
          })
          .catch((error) => console.log(error))

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
