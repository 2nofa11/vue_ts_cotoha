<template>
    <v-card class="ma-1" v-bind:color="item.color" >
        <v-card-title primary-title >
            <div class="headline" >
                {{item.title}}
            </div>
            <div>
                {{item.description}}
            </div>
        </v-card-title>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    'item':{
      type:Object,
      required:true
    }
  }
})
</script>