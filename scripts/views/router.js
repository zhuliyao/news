
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)

// 单文件组件
import Layout from "./layout.vue"
import Login from "./login.vue"
import Register from "./register.vue"
import Home from "./home.vue"
import Mine from "./mine.vue"
import News from "./news.vue"
import Top from "./top.vue"
import Theme from "./theme.vue"
import Detail from "./details.vue"

const routes = [
    {
        path:"*",
        redirect:"/layout/home"
    },
    {
        path:"/layout",
        component:Layout,
        children:[
                {path:"home",name:"home",component:Home},
                {path:"top",component:Top,name:"top"},
                {path:"theme",component:Theme,name:"theme"},
                {path:"news",component:News,name:"news"},  
                {path:"mine",component:Mine,name:"mine"}, 
                {path:"*",redirect:"/layout/home"}          
            ]
    },
    {
        path:"/login",
        component:Login,
        name:"login"
    },
    {
        path:"/register",
        component:Register,
        name:"register"
    },
    {
        path:"/details",
        component:Detail,
        name:"details"
    }
]


const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;