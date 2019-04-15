import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
    state:{
        tasks: [],
        access_token: '',
        refresh_token: '',
        user_login: []
    }
})

export default Store;