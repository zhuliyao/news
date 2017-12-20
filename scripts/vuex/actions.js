
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// action 是专门被 组件调用  mapActions 接收 action  action commit提交actiontype 发送mutation 修改state


import axios from "axios";

export default {
  
    changeNavIdx({commit},id){
        commit("changeNavIdx",id);
    },
    changeword({commit},url){
        // ajax 
        // axios 
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                console.log(json);
                commit("changeword",json);
            })
    },
    getBanner({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getBanner",json)
            })
    },
    getGames({commit},url){
        axios.get(url,{
            params:{
                limit:10
            }
        })
        .then(res=>{
            // console.log(res.data)
            return res.data;
        })
        .then(json=>{
            commit("getGames",json)
        })
    },
    getNewsList({commit},url){
        axios.get(url,{
            params:{
                limit:10
            }
        })
        .then(res=>{
            // console.log(res.data)
            return res.data;
        })
        .then(json=>{
            commit("getNewsList",json)
        })
    },
    getOriginal({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getOriginal",json)
            })
    },
    getRankList({commit},url){
        axios.get(url)
            .then(res=>{
                console.log(res.data)
                return res.data;
            })
            .then(json=>{
                commit("getRankList",json)
            })
    },
    changeThemeIdx({commit},id){
        commit("changeThemeIdx",id)
    },
    getCmtList({commit},url){
        axios.get(url)
            .then(res=>{
                console.log(res.data)
                return res.data;
            })
            .then(json=>{
                commit("getCmtList",json)
            })
    },
    getUser({commit},data){
        commit("getUser",data)
    },
    getDetail({commit},url){
        commit("getDetail",url)
    }
}