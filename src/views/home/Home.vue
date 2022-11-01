<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl  :titles="['流行','新款','精选']" ref="tabControl1" class="tabControl" v-show="tabIsFixed" @tabClick="tabClick"></TabControl>
    <Bscroll 
    class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll"
    @pullingUp="loadMore"
    :pullUpLoad='true'>
    <HomeSwiper :banners="banners" @imageLoad="imageLoad"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <Feature></Feature>
    <TabControl :titles="['流行','新款','精选']" ref="tabControl2"  @tabClick="tabClick"></TabControl>
    <goods-list :goods="goods[currentType].list"></goods-list>
    <!-- <ul>
      <li>我我我1</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我10</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我20</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我30</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>
      <li>我我我</li>

    </ul> -->
  </Bscroll>
    
    <BackToTop @click.native="backClick" v-show=" BackToTopIsShow"></BackToTop>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import Bscroll from '../../components/common/scroll/Bscroll.vue';
import BackToTop from '../../components/common/backToTop/BackToTop.vue';
import TabControl from 'components/content/tabcontrol/TabControl.vue';
import GoodsList from '../../components/content/goodsItem/GoodsList.vue';

import HomeSwiper from './childcomps/HomeSwiper.vue';
import RecommendView from './childcomps/RecommendView.vue';
import Feature from './childcomps/Feature.vue';

import {getHomeMultidata} from 'network/home.js'
import {getHomeData} from 'network/home.js'


import { itemListenerMixin } from 'common/mixin';


export default {
  name:'Home',
  data(){
    return{
      banners:[],
      recommends:[],
      BackToTopIsShow:true,
      tabOffsetTop:0,
      tabIsFixed:false,
      currentType:'pop',
      // currentPage:0,
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      }
    }
  },
  mixins:[itemListenerMixin],
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    Feature,
    Bscroll,
    BackToTop,
    GoodsList
},
  created(){
    this.getHomeMultidata()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
    //监听item的图片加载完成,调用滚动刷新scrollerHeight
   
  },
  mounted(){
    this.tabClick(0)
  },
  deactivated(){
    this.$bus.$off('goodsItemImageLoad',this.goodsItemImageRefresh)
  },
  methods:{
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop';
          break
        case 1:
          this.currentType='new';
          break
        case 2:
          this.currentType='sell';
          break
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index

      // console.log( this.$refs.tabControl1.currentIndex );
      // console.log( this.$refs.tabControl2.currentIndex );
      
    },
    imageLoad(){

    // console.log('111');
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    // console.log(`我是图片加载完后的离顶距离${this.$refs.tabControl.$el.offsetTop}`);
  },
    contentScroll(position){
      //设置下拉大于1000px,显示回到顶部按钮
      this.BackToTopIsShow=-position.y>1000;
      //设置tab是否具有fixed属性
      // console.log(-position.y,`我是初始的离顶距离${this.tabOffsetTop}`);
      this.tabIsFixed=(-position.y)>this.tabOffsetTop

    },
  
    //点击按钮回到顶部
    backClick(){
      this.$refs.scroll&&this.$refs.scroll.scrollTo(0,0);
    },

    // //设置拉到底,加载更多
    loadMore(){
      this.getHomeData(this.currentType)
      this.$refs.scroll.scroll&& this.$refs.scroll.scroll.refresh()
  
    },
    //请求数据
    getHomeMultidata(){
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
    .catch(err=>{
      console.log(err);
    })
    },
    getHomeData(type){
      const currentPage = this.goods[type].page+1
      getHomeData(type,currentPage).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[this.currentType].page+=1;
      this.$refs.scroll.scroll&&this.$refs.scroll.scroll.finishPullUp()
    })
    .catch(err=>{
      console.log(err);
    })
    }
  },
    //定义防抖函数
    // debounce(func,delay){
    //   let timer = null
    //   return (...args)=>{
    //     if(timer) clearTimeout(timer)
    //     timer=setTimeout(()=>{
    //       func.apply(this,args)
    //     },delay)
    //   }
    // }
}
</script >
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}

.home-nav{
  background-color: var(--color-tint);
  color: white;
 
/* 使用浏览器原生滚动时,让首页保持固定的位置 */
  /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9px; */
}
/* .tab-control{
  position: sticky;
  top:44px;
  background-color: #fff;
} */
.content{
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 100px;
  left: 0;
  right: 0;
  /* background-color: red; */
  height: calc(100% - 93px);
  /* overflow: hidden; */
  /* margin-top:44px;   */
}
.tabControl{
  position: relative;
  z-index:9;
  background-color: #fff;
}
</style>
