<template>
  <div id="recommendView">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
   </div>
  </div>
</template>

<script>


export default {
  name:'RecommendView',
  props:{
    recommends:Array,
    default(){
      return []
    }
  },
  components:{
  }
}
</script >
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#recommendView{
  display: flex;
  padding: 15px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex:1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
