<template>
  <section class="section">
      <div class="reg_head">
        <div class="close" @click="close1"></div>
      </div>
      <div class="reg_main">
        <input type="text" name="username" id="username" placeholder="请输入用户名" v-model="username">
        <input type="text" name="password" id="password" placeholder="请输入密码" v-model="password">
         <button id="btn" @click="regbtn">注册</button>
          <div class="yy" @click="yy">已有账号</div>
      </div>




  </section>
</template>
<script>
import axios from "axios";
import router from "../views/router";
import { mapState, mapActions } from "vuex";
import { Toast } from 'mint-ui';
export default {
   data(){
        return {
            username:"",
            password:"",
        }
    },
    methods:{
        yy(){
            router.push("/login")
        },
        close1(){
            router.go(-1)
        },
        regbtn(){
            axios.post("/register",{
                params:{
                    username:this.username,
                    password:this.password
                }
            }).then(res=>{
                if(res.data=="1"){        //注册成功
                    // alert("注册成功");
                      var instance = Toast({
                        message: '注册成功',
                        position: 'center',
                        //  duration:500000
                      })
                    var zz = new Promise(function(resolve){
                        setTimeout(() => {
                            instance.close();
                            resolve();
                        }, 1500);
                    })
                    
                    zz.then(function(){
                        router.push("/login");
                    })

                 
                }else{
                     Toast({
                        message: '注册失败',
                        position: 'center',
                         duration:2000
                      })
                }
            })
        }
    }
}
</script>
