<template>
      <section class="section">
          <div class="home-box">
              <div class="home-top">
                   <i class="iconfont i1" v-html="'&#xe678;'"></i>
                   <i  v-html="'&#xe70b;'" class="iconfont i2"></i>
                  <div class="center">
                       <nav @click="changeidx(i)" v-for="(n,i) in nav" :key="i" :class="swiperIndex==i?'nav-active':''">{{n}}</nav>
                  </div>
              </div>
               <div class="home-swiper">
                    <div class="swiper-container mt-1" id="swipe">
                         <div class="swiper-wrapper">
                            <div class="swiper-slide mt-2 slide1" >
                                 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                               <ul class="list">
                                   
                                   <li v-for="(ga,i) in games" :key="i">
                                       <div class="li_top">
                                           <img :src="ga.sourceIcon" alt="" id="img1">
                                           <p>来自虎哥推荐</p>
                                           <p id="p1">{{ga.gradeScore}}</p>
                                           <img src="../../assets/img/star.png" alt="" id="img2">

                                       </div>
                                       <div class="li_center">
                                           <img :src="ga.thumbList" alt="" id="img3">
                                       </div>
                                       <div class="li_bottom">
                                            <div class="zleft">
                                                <p id="p3">{{ga.articleTitle}}</p>
                                                <p id="p4">{{ga.slogan}}</p>
                                            </div>
                                       </div>

                                   </li>
                               </ul>
                                 </mt-loadmore>


                            </div>
                            <div class="swiper-slide mt-2 slide2">
                                 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                                 <ul class="list1">

                                     <li @click="getDetail(ne.shareUrl)"    v-for="(ne,i) in newslist" :key="i">
                                           <router-link  :to="{name:'details'}">
                                                    <div class="top">{{ne.articleTitle}}</div>
                                                    <div class="center2">
                                                        <img :src="ne.articleThumb[0]" alt="" >
                                                        <img :src="ne.articleThumb[1]" alt="" >
                                                        <img :src="ne.articleThumb[2]" alt="" >
                                                    </div>
                                                    <div class="bottom2">
                                                        <p>{{ne.articleTime}}</p>
                                                        <p>{{ne.commentNum}}评论</p>
                                                    </div>

                                        </router-link>
                                     </li>
                                     
                                 </ul>
</mt-loadmore>


                            </div>
                            <div class="swiper-slide mt-2 slide3">
                                <div class="top3">
                                    <div>
                                         <img src="../../assets/img/jt1.png" alt="" >
                                            <p>迷彩虎讲堂</p>
                                    </div>
                                    <div>
                                        <img src="../../assets/img/jq1.png" alt="" >
                                            <p>迷彩虎军情</p>
                                    </div>
                                    <div>
                                        <img src="../../assets/img/zp.png" alt="" >
                                            <p>虎视频</p>
                                    </div>
                                </div>
                                 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
                               <ul class="list3">
                                   
                                    <li v-for="(or,i) in original" :key="i">
                                       <div class="top4">{{or.articleTitle}}</div>
                                        <div class="center3">
                                            <img :src="or.articleThumb" alt="">
                                                <p><img :src="or.attrIcon" alt="" id="i1"></p>
                                        </div>
                                        <div class="bottom4">
                                            <p>{{or.clickNum}}</p>
                                            <p>{{or.commentNum}}评论</p>
                                        </div>
                                   </li>
                               </ul>
                                </mt-loadmore>
                            </div>
                         </div>
                    </div>

               </div>
          </div>

      </section>
</template>


<script>
import "../utils/swiper-3.3.1.min.js";
import { Indicator } from "mint-ui";
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      swiperIndex: 0,
      mySwiper: "",
      activeIndex: 0
    };
  },
  computed: {
    ...mapState(["nav", "games", "newslist", "original"])
  },
  methods: {
    


    ...mapActions(["getGames", "getNewsList", "getOriginal","getDetail"]),
    changeidx(i) {
      this.swiperIndex = i;
      console.log(this.mySwiper)
      this.mySwiper.slideTo(i);
    },
    loadTop() {},
    loadBottom() {this.loading = true;},
    allLoaded() {},
    loadMore() {
      // ajax.....
      this.loading = true;
    }
  },
  mounted() {
    // this.getGames("http://localhost:7777/game");
    // this.getNewsList("http://localhost:7777/newslist");
    // this.getOriginal("http://localhost:7777/original");
    this.getGames("/game");
    this.getNewsList("/newslist");
    this.getOriginal("/original");
    var that = this;
    this.$nextTick(() => {
      var timer = setTimeout(()=>{
        this.mySwiper = new Swiper("#swipe", {
          loop: false,
          autoplay: false,
          direction: "horizontal",
          pagination: ".swiper-pagination",
          resistanceRatio: 0,
          autoHeight: true,
          onSlideChangeEnd(swiper) {
            that.swiperIndex = swiper.activeIndex;
          },
          onInit() {}
        });
      }, 1000);
    
    });


  }
};
</script>
