<template>
  <section class="section">
      <div class="login_head">
        <div class="close" @click="close"></div>
      </div>
      <div class="login_main">
        <input type="text" name="username" id="username" placeholder="手机号" v-model="username">
        <input type="password" name="password" id="password" placeholder="密码" v-model="password">
        <button id="btn" @click="loginbtn">登录</button>
        <div class="new" @click="reg">注册新账号</div>
      </div>
  </section>
</template>
<script>
import axios from "axios";
import router from "./router";

import { mapState, mapActions } from "vuex";
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      username:"",
      password:""
    }
  },
  
  methods:{
    close(){
        router.push("/layout/home")
    },
    ...mapActions(["getUser"]),
    reg(){
      router.push("/register")
    },
    loginbtn(){
      axios.get("/login",{
        params:{
          username:this.username,
          password:this.password
        }
      }).then(res=>{
        if(res.data.length>0){
          localStorage.username = res.data[0].username;
          // this.getUser(res.data[0].username)
          
          router.push("/layout/mine")
        }else{
          // MessageBox('登录失败', '用户名或密码错误');
          MessageBox({
            width:660,
            height:400,
            title:"登录失败",
            message:"用户名或密码错误!"
          });
           mini.parse()
        }
      })
    }
  }
}
</script>

