<template>
  <section class="section">
      <div class="mine_home">
           <div class="mine_top">
               <div class="tx"><img src="../../assets/img/cat.png" alt=""></div>
                <div class="login" @click="logincheck">{{userinfo}}
                </div>
                <div class="logout" @click="out">注销</div>
                <div class="mi">做任务参与评论互动，签到获大奖</div>
                <div class="jg">
                    <div class="left">军功</div>
                    <div class="right">金币</div>
                </div>
           </div>
           <div class="mine_center">
               <ul class="list">
                   <li v-for="(mi,i) in mineList" :key="i">
                       <i class="iconfont" v-html="mi.icon"></i>
                       <span>{{mi.txt}}</span>
                   </li>
               </ul>
           </div>
      </div>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import router from "./router"
export default {
  data(){
    return{
     userinfo:"请点击登录"
    }
  },
  computed:{
		...mapState([
			"mineList",
		]),
  },
  methods:{
      logincheck(){
          router.push("/login")
      },
      out(){
           localStorage.removeItem("username")
          this.userinfo="请点击登录"
      }
  },
  mounted(){
     this.userinfo=localStorage.username|| "请点击登录"
  }
}
</script>
