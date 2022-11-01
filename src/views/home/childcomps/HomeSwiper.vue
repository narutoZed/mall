<template>
  <div id="swiper">
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
          </a>
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import {getHomeMultidata} from 'network/home.js'
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'HomeSwiper',
  data(){
    return{
      isLoad:false
    }
  },
  props:{
    banners:Array,
    default(){
      return []
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoad) this.$emit('imageLoad')
      this.isLoad=true
    }
  }
}
</script >
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
