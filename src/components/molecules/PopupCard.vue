<template>
        <v-container fluid>
            <transition-group name="card-anim" >
                <div row warp v-for="(item,index) in itemsProps" v-bind:key="index">
                    <NormalCard :item="item"></NormalCard>
                </div>
            </transition-group>
        </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NormalCard from "../atoms/NormalCard.vue"

type ItemInfo = {
    title:string,
    description:string,
    color:string
}

export default defineComponent({
    components:{
        NormalCard
    },
    data(){
        return{
            itemIndex:0,
            items:[] as Array<ItemInfo>
        }
    },
    props:{
        itemsProps:{required:true}
    }
})
</script>

<style scoped>
.card-anim-enter-active{
    animation: fadeInUp .7s;
    animation-delay: .1s;
    opacity: 0;
}

@keyframes fadeInUp{
    0%{
        transform: translateY(60px);
        opacity: 0;
    }
    60%{
        opacity: .3;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>