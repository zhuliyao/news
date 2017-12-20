
<template>
     <section class="section">
         <div class="big_home">
             <div class="list_top">排行榜</div>
            <ul class="top_rank">
                <!-- <li>
                    <div class="left">2</div>
                    <div class="center">
                        <img src="../../assets/img/cat.png" alt="">
                    </div>
                    <div class="right">
                        <p>日本军工隐藏了多少实力？跟中国差的不是一点半点355555555555555555</p>
                        <div class="bf">
                            <span>666播放</span>
                            <span>11-10期</span>
                        </div>
                    </div>
                </li> -->

                 <li v-for="(rank,i) in rankList" :key="i">
                    <div class="left">{{i+1}}</div>
                    <div class="center">
                        <img :src="rank.articleThumb" alt="">
                    </div>
                    <div class="right">
                        <p>{{rank.articleTitle}}</p>
                        <div class="bf">
                            <span>{{rank.clickNum}}</span>
                            <span>{{rank.period}}</span>
                        </div>
                    </div>
                </li>
            </ul>

         </div>






     </section>
</template>

<script>

import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
     computed: {
    ...mapState(["rankList"])
  },
  methods:{
      ...mapActions([
            "getRankList"
        ]),
  },
  mounted(){
       this.getRankList("/rankList");
       console.log(this.rankList)
  }
}
</script>


