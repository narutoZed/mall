<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titles" class="tab-control-item" :class="{active:currentIndex==index}" @click="getIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name:'TabControl',
  data(){
    return{
      currentIndex:0,
    }
  },
  props:{
    titles:Array,
    default(){
      return []
    }
  },
  components: {
  },
  methods:{
    getIndex(index){
      this.currentIndex=index;
      this.$emit('tabClick',index);
    }
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
}
  .tab-control-item{
    flex:1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
