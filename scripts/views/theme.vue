<template>
  <section class="section">
      <div class="theme_home">
            <div class="theme_top">
                <div class="theme_nav">
                        <div @click="changes(i)" class="nav" v-for="(n,i ) in themeList" :key="i" :class="themeIndex==i?'theme_active':''">{{n.txt}}</div>
                </div>
            </div>
            <div class="conntent">
                    <div class="tj" v-show="show">
                       <ul class="list">
                           <!-- <li>
                               <div class="tj_top">
                                   <img src="../../assets/img/cat.png" alt="" id="img1">
                                    <div class="tj_author">
                                        <div class="to">
                                            <p>铁血巴顿</p><i>|</i><img src="../../assets/img/cat.png" alt=""><span>二级军士长</span>
                                        </div>
                                        <div class="bo">
                                            1小时前
                                        </div>
                                    </div>
                                    <div class="gz">
                                        
                                        <p>关注</p>
                                    </div>
                               </div>
                               <div class="ti">
                                   F86佩刀战斗机
                               </div>
                               <div class="center">
                                    <img src="../../assets/img/cat.png" alt="">
                                     <img src="../../assets/img/cat.png" alt="">
                                      <img src="../../assets/img/cat.png" alt="">
                               </div>
                               <div class="liuyan">
                                   <div class="liu1">10</div>
                                   <div class="liu2">
                                       <p>88</p>
                                   </div>
                               </div>
                           </li> -->
                            <li v-for="(cm,i) in cmtList" :key="i">
                               <div class="tj_top">
                                   <img :src="cm.headPic" alt="" id="img1">
                                    <div class="tj_author">
                                        <div class="to">
                                            <p>{{cm.nickName}}</p><i>|</i><img :src="cm.rankIcon" alt=""><span>{{cm.rankName}}</span>
                                        </div>
                                        <div class="bo">
                                            {{cm.publishTime}}
                                        </div>
                                    </div>
                                    <div class="gz">
                                        
                                        <p>关注</p>
                                    </div>
                               </div>
                               <div class="ti">
                                   {{cm.content}}
                               </div>
                               <div class="center">
                                    <img :src="cm.imgList[0]" alt="">
                                     <img :src="cm.imgList[1]" alt="">
                                      <img :src="cm.imgList[2]" alt="">
                               </div>
                               <div class="liuyan">
                                   <div class="liu1">{{cm.replyNum}}</div>
                                   <div class="liu2">
                                       <p>{{cm.praiseNum}}</p>
                                   </div>
                               </div>
                           </li>
                       </ul>
                    </div>
                    <div class="yc" v-show="!show">
                        <h1>原创</h1>
                    </div>
                </div>
        </div>
    
  </section>
</template>
<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
//   data(){
//           return{
//               themeIndex:0,
//                 show:true,
//           }
//       },
  computed: {
      
    
    // ...mapState(["themeList"])
    ...mapState(["themeList", "themeIndex", "show","cmtList"])
  },
  methods: {
      ...mapActions({
      changeThemeIdx: "changeThemeIdx"
    }),
    ...mapActions([
            "getCmtList"
        ]),
      changes(idx){
        this.changeThemeIdx(idx)
      }
  },
  mounted(){
       this.getCmtList("/cmtList");
  }
};
</script>

