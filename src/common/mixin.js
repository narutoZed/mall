import {debounce} from 'common/untils.js'


export const itemListenerMixin = {
  data(){
    return{
      goodsItemImageRefresh:null
    }
  },
  mounted(){
    const newRefresh = debounce(this.$refs.scroll.refresh,50)
    this.goodsItemImageRefresh=()=>{newRefresh()}
    this.$bus.$on('goodsItemImageLoad',this.goodsItemImageRefresh)
    console.log('我是mixin');
    console.log(this.goodsItemImageRefresh);
  }
}