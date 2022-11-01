<template>
    <swiper class="detailswiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
          <a></a>
            <img :src="item" alt="" @load="imageLoad">
        </swiper-item>
    </swiper>
</template>

<script>
// import {getHomeMultidata} from 'network/home.js'
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'DetailSwiper',
  data(){
    return{
      isLoad:false
    }
  },
  props:{
    topImages:{Array,
    default(){
      return []
    }}
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
.detailswiper{
  height: 300px;
  overflow: hidden;
}
</style>
