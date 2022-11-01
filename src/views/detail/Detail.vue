<template>
  <div class="detail">
    <DetailNavBar></DetailNavBar>
    <Bscroll class="content" :pullUpLoad="true" ref="scroll">
      <DetailSwiper :topImages="topImages" @imageLoad="imageLoad"></DetailSwiper>
      <DetailBaseInfo :baseInfo="goods"></DetailBaseInfo>
      <DetailShopInfo :shopInfo="shop"></DetailShopInfo>
      <DetailGoodsInfo :goods-info="detailInfo" @goodsInfoImgLoad="goodsInfoImgLoad"></DetailGoodsInfo>
      <DetailGoodsParams :goodsParams="itemParams"></DetailGoodsParams>
      <DetailCommentInfo></DetailCommentInfo>
      <GoodsList :goods="recommendList"></GoodsList>
    </Bscroll>
  </div>
</template>

<script>
import Bscroll from '../../components/common/scroll/Bscroll.vue'
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailGoodsParams from './childComps/DetailGoodsParams.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

import GoodsList from '../../components/content/goodsItem/GoodsList.vue'



import {getDetailData,getDetailRecommendData,Goods,Shop} from 'network/detail.js'
import { itemListenerMixin } from '../../common/mixin'


export default {
  name:'Detail',
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      detailImages:[],
      itemParams:{},
      commentInfo:{},
      recommendList:[],
      currentIndex:0,
    }
  },
  mixins:[itemListenerMixin],
  components:{
    DetailNavBar,
    Bscroll,
    DetailSwiper,
    DetailGoodsInfo,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList
  },
  created(){
    this.iid=this.$route.params.iid
    this.getDetailData(this.iid)
    this.getDetailRecommendData()
  },
  mounted(){
  
  },
  destroyed(){
    console.log('destroyed');
    this.$bus.$off('goodsItemImageLoad',this.detailRefresh)
  },
  methods:{
    getDetailData(iid){
      getDetailData(iid).then((res)=>{
        console.log(res);
        this.topImages=res.result.itemInfo.topImages
        this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        this.shop=new Shop(res.result.shopInfo)
        this.detailInfo=res.result.detailInfo
        this.itemParams=res.result.itemParams
        this.commentInfo=res.result.commentInfo
      })
    },
    getDetailRecommendData(){
      getDetailRecommendData().then(res=>{
        // console.log(res);
        this.recommendList=res.data.list
        // console.log(this.recommendList);
      })
    },
    goodsInfoImgLoad(){
      this.$refs.scroll.refresh()
      console.log('详情页的衣服图片');
      // debounce(this.$refs.scroll.scroll.refresh(),500)
      // debounce(console.log('1111111'),500)
     
    },
    recommendInfoImgLoad(){
      this.$refs.scroll.refresh()
    },
    imageLoad(){
      console.log('111');
    }
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px);
  overflow: hidden;
  height: 100vh;
}
</style>
