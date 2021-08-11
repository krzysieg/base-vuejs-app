import Vue from 'vue';
import Vuex from 'vuex';
import {IState} from '@/type';

Vue.use(Vuex);

const state: IState = {
    data: []
};

export default new Vuex.Store({
    state: state,
    mutations: {},
    getters: {},
    actions: {},
    modules: {}
});
