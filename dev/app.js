require('bootstrap');
import Vue from "vue/dist/vue";
import router from './router';
import {sync} from 'vuex-router-sync';
import VueRouter from 'vue-router';
import store from "./store";

sync(store, router);

Vue.use(VueRouter);
const app = new Vue({
    // template: "<div>dsfsdf</div>",
    store,
    router,

    components: {},
}).$mount('#app');