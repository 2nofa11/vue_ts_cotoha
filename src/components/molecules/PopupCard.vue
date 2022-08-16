<template>
  <v-container fluid>
    <transition-group name="card-anim">
      <div row warp v-for="(item, index) in itemsProps" v-bind:key="index">
        <NormalCard :item-info="item"></NormalCard>
      </div>
    </transition-group>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import NormalCard from "../atoms/NormalCard.vue"

  export default defineComponent({
    components: {
      NormalCard,
    },
    props: {
      itemsProps: { required: true },
    },
  })
</script>

<style scoped>
  .card-anim-enter-active {
    animation: fadeInUp 0.7s;
    animation-delay: 0.1s;
    opacity: 0;
  }

  @keyframes fadeInUp {
    0% {
      transform: translateY(60px);
      opacity: 0;
    }
    60% {
      opacity: 0.3;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
