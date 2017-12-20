
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)

//  接收store 发送过来的 action  commit 

//  mutation 只能定义同步 

export default {
   
    changeNavIdx(state,id){
        state.navIndex = id;
    },
    changeword(state,data){
        state.word = data;
    },
    getBanner(state,data){
        state.banner = data;
    },
    getGames(state,data){
        state.games = data;
    },
    getNewsList(state,data){
        state.newslist = data;
    },
    getOriginal(state,data){
        state.original = data;
    },
    getRankList(state,data){
        state.rankList = data;
    },
    changeThemeIdx(state,id){
        state.themeIndex=id;
        state.show = (id==0)?true:false
    },
    getCmtList(state,data){
        state.cmtList = data;
    },
    getUser(state,data){
        state.userinfo=data;
    },
    getDetail(state,url){
        state.todetail=url;
        console.log(url)
    }
}