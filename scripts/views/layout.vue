<template>
  <section class="section">
      
      <div class="layout">
          <transition :name="transitionName" >
             <router-view></router-view>
          </transition>
      <v-foot></v-foot> 

      </div>
  </section>
</template>
<script>
import Foot from "../components/foot.vue"
export default {
  components:{
      'v-foot':Foot
  }
}
</script>
