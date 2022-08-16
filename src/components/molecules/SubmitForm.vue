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
      :is-loading="isLoading"
      v-on:click="submitTextInfo"
    ></DoubleIconButton>
  </v-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import DoubleIconButton from "../atoms/DoubleIconButton.vue"
  import { is_correctTextInfo } from "./SubmitForm.module"

  // CROSになってしまうため仕方なくjsonpを利用
  const placeholderText =
    "「つぶやく」まえに、あなたの文章の感情を分析してみましょう！"
  export default defineComponent({
    components: {
      DoubleIconButton,
    },
    data: () => ({
      inputText: placeholderText,
      rules: [(v: string) => v.length <= 140 || "140文字以上は呟けませんよ！"],
    }),
    props: {
      isLoading: { required: true },
    },
    emits: ["parentMethod"],
    methods: {
      submitTextInfo: function () {
        // GASに投げる文章が適切か判断
        if (is_correctTextInfo(this.inputText, placeholderText)) {
          return
        }
        this.$emit("parentMethod", this.inputText)
        this.inputText = ""
      },
    },
  })
</script>
