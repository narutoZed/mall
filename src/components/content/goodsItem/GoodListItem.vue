<template>
    <div class="goods-item" @click="goodsClick">
      <img :src="showImage" alt="" @load="goodsItemImageLoad" >
      <div class="goods-info">
        <p class="title">{{items.title}}</p>
        <span class="price">{{items.price}}</span>
        <span class="collect">{{items.cfav}}</span>
      </div>
    </div>
</template>

<script>


export default {
  name:'GoodListItem',
  data(){
    return{}
      
  },
  props:{
    items:{
    type:Object,
    default(){
      return{}
    }
   }
  },
  computed:{
    showImage(){
      return this.items.show&&this.items.show.img||this.items.image
    }
  },
  // mounted(){
  //   console.log(this.items);
  // },
  // components:{
    
  // },
  methods:{
    goodsClick(){
      console.log(this.items);
      //动态路由跳转
      this.$router.push('/detail/'+this.items.iid)
      //使用query传递数据
      // this.$router.push({
      //   path:'/detail',
      //   query:{
      //     iid:this.items.iid
      //   }
      // })
    },
    goodsItemImageLoad(){
      this.$bus.$emit('goodsItemImageLoad')
    }
  }
}
</script >
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .goods-item {
    padding-bottom: 40px;
    position: relative;


    width: 45%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
