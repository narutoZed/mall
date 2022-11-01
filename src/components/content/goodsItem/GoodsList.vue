<template>
  <div class="goods-list">
    <!-- <div v-for="item in goods" :items="item">{{goods}}</div> -->
    <GoodListItem v-for="item,i in goods" :items="item" :key="i" ></GoodListItem>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue';
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
     
    }
  },
  components:{
    GoodListItem
  },
  methods:{
    
  }
 
}
</script >
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
/* .item{
  flex:1;
} */
</style>
