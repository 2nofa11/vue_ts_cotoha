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

const colorMap = {
  amber: "amber lighten-4",
  green: "green lighten-4",
  blue: "blue lighten-4",
} as const
const sentimentMap = {
  Negative: "Negative",
  Positive: "Positive",
  Neutral: "Neutral",
} as const
type Sentiment = typeof sentimentMap[keyof typeof sentimentMap]
const colorWithSentiment = (sentiment: Sentiment) => {
  switch (sentiment) {
    case sentimentMap.Negative:
      return colorMap.blue
    case sentimentMap.Positive:
      return colorMap.amber
    case sentimentMap.Neutral:
      return colorMap.green
    default:
      throw new Error("不正な値です。")
  }
}

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
    cotohaResText: "",
    inputText: placeholderText,
    rules: [(v: string) => v.length <= 140 || "140文字以上は呟けませんよ！"],
    is_Loading: false,
  }),
  emits: ["parentMethod"],
  // TODOロジックを書きまくっているから修正すべき
  methods: {
    requestToGAS: async function () {
      // GASに投げる文章が適切か判断
      if (is_correctTextInfo(this.inputText, placeholderText)) {
        return
      }

      this.is_Loading = true

      const url = `${gasURL}?text=${this.inputText}`
      await axios.get(url, { adapter: axiosJsonpAdapter }).then((res) => {
        this.cotohaResText = res.data.Hello
        this.is_Loading = false
      })

      this.$emit(
        "parentMethod",
        this.cotohaResText,
        this.inputText,
        colorWithSentiment(this.cotohaResText as Sentiment)
      )

      this.inputText = ""
    },
  },
})
</script>
