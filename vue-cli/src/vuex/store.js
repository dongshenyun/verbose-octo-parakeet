import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = { //state存值
    count: 5,
    num: 10
}

const mutations = {
    add(state, plus) { //简写
        state.count += plus;
    }
}

const getters = {
    count1(state) {
        return state.count + state.num
    }
}
export default new Vuex.Store({
    state,
    mutations, //暴露出去
    getters
})