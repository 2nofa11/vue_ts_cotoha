<template>
        <v-container fluid>
            <transition-group name="card-anim" >
                <div row warp v-for="(item,index) in items" v-bind:key="index">
                    <NormalCard :item="item"></NormalCard>
                </div>
            </transition-group>
        </v-container>
        <div>
            <v-container>
                <v-btn color="success" v-on:click="addList">
                    More
                </v-btn>
            </v-container>
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NormalCard from "./NormalCard.vue"

type zelda = {
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
            itemMaster:[] as Array<zelda>,
            itemIndex:0,
            items:[] as Array<zelda>
        }
    },
    mounted(){
        this.itemMaster = [
            {title:"A",description:"Aの説明Aの説Aの説",color:"green darken-4"},
            {title:"B",description:"Bの説明",color:"green darken-4"},
            {title:"C",description:"Cの説明",color:"green darken-4"},
            {title:"D",description:"Dの説明",color:"green darken-4"},
            {title:"E",description:"Eの説明",color:"green darken-4"},
        ]
    },
    methods:{
        addList(){
            console.log(this.items)
            if(this.itemMaster.length > this.itemIndex){
                this.items.push(this.itemMaster[this.itemIndex++])
            }
            console.log(this.items)
        }
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