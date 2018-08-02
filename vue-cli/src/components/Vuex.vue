<template>
    <div>
        page
        <h3>{{$store.state.count}} {{num}}</h3>
        <h3>{{count}} {{num}}</h3>
        <button @click="$store.commit('add',4)">+</button>
        <button @click="add(2)">+++</button>
        <h1>getters {{count1}}</h1>
    </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters} from 'vuex'//{}结构
    export default {
        // data(){
        //     return{
                
        //     }
        // },
        // store:{

        // }
        store,  //初始化  (es6简写)
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // }//1
        // computed:mapState({
        //     // count:function(state){
        //     //     return state.count;
        //     // },
        //     count:state=>state.count//简写
        // })//2

        computed:{//computed:{}只能存放一个对象
        //mapState(['count','num'])、mapGetters(['count1'])取出二个对象，需要解构到一个对象中
            ...mapState(['count','num']),
            ...mapGetters(['count1'])
            }, //3
        methods:mapMutations(['add'])
    }
</script>

<style scoped>

</style>