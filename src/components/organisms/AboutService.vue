<template>
  <div>
    <p>{{ title }}</p>
    <div>{{ description }}</div>
    <div>{{ roadmap }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    data() {
      return {
        title: "アプリ名",
        description: "説明",
        roadmap: "今後どうしていきたいか",
      }
    },
  })
</script>
