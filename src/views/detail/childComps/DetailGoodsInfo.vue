<template>
    <div class="goods-info"  v-if="Object.keys(goodsInfo).length !== 0">
        <div class="info-desc">
           <div class="desc">{{goodsInfo.desc}}</div>
        </div>
        <!-- <div class="info-key">{{goodsInfo[0].key}}</div> -->
        <div class="info-list">
            <img 
               v-for="(item, index) in goodsInfo.detailImage[0].list" 
               :key="index" 
               :src="item" 
               alt="goods-img" 
               @load="goodsInfoImgLoad">
        </div>
        <div></div>
    </div>
    <!-- <div>
        <div v-for="item,key in goods">
            {{key}}:{{item}}
            <img src="goodsInfo.service.icon" alt="">
        </div>
        <div>{{goods.title}}</div>
        <div>{{goods.desc}}</div>
        <div>{{goods.oldPrice}}</div>
        <div>{{goods.newPrice}}</div>
        <div>{{goods.discount}}</div>
        <div v-for="item in goods.columns ">{{item}}</div>
        <div v-for="item,keys in goods.services[0].icon ">
          <img :src="item.icon" alt=""> 
          <div>{{item.name}}</div>
        </div>
        <div>{{goods.realPrice}}</div>
    </div> -->
</template>

<script>
export default {
    name: 'DetailGoodsInfo',
    data() {
        return {
            imgLength: 0,
            counter:0
        }
    },
    props: {
        goodsInfo:{
            type: Object,
            default(){
                return {};
            }
        }
    },
    create(){
        console.log(this.goods);
    },
    methods: {
        goodsInfoImgLoad(){
            //判断所有图片都加载了，只发出一次$emit
            if(++this.counter === this.imgLength ){
                console.log(this.counter);
                console.log(this.imgLength);
                this.$emit("goodsInfoImgLoad");
            }
        }
    },
    watch:{
        //当goodsInfo改变时,获取图片的个数
        goodsInfo(){
            this.imgLength=this.goodsInfo.detailImage[0].list.length;
        }
    }
}
</script>
<style scoped>
.goods-info {
    padding: 30px 8px 0;
    border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-desc {
    padding: 0 8px 0;
    font-size: 14px;
}
.info-desc .desc {
    text-indent: 2em;
}
.info-key {
    padding: 8px;
}
.info-list img{
    width: 100%;
}

</style>
