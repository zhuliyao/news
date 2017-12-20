
import router  from "./router";

import Vue from "vue";
import axios from "axios";
Vue.use(axios);
axios.defaults.baseURL = "http://39.106.5.212:7777"; 
import VueAwesomeSwiper from 'vue-awesome-swiper'

// mount with global
Vue.use(VueAwesomeSwiper)  // 全局使用

// import vueResource from "vue-resource";
// Vue.use(vueResource);
// import element from "element-ui";
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(element);


import MintUI from "mint-ui";
import 'mint-ui/lib/style.css'
Vue.use(MintUI);   //  全局使用

// import "./ui.js";

import Vuex from "vuex";

Vue.use(Vuex);  //全局使用 Vuex

import store from "../vuex/store.js"  // 导入store 容器

const app = new Vue({
    el:"#app",
    data:{
        transitionName:"slide-right"
    },
    router,
    store,     // 注入根组件
    watch:{
        "$route":function(to,from){
            console.log(to);
            console.log(from);
            var toLength = to.path.split("/").length;
            var fromLength = from.path.split("/").length;

            this.transitionName = toLength>fromLength?"slide-left":"slide-right";
        }
    }
})