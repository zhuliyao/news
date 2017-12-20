<template>
<section class="section">
  <div class="detail_home">
    <p @click="sj"><</p>
  </div>
  <iframe :src=todetail frameborder="0">


  </iframe>


</section>
  
</template>
<script>
import { mapState, mapActions } from "vuex";
import router from "./router";
export default {
  computed:{
    ...mapState(["todetail"])
  },
  methods:{
    sj(){
      router.go(-1)
    }
  }
}

</script>