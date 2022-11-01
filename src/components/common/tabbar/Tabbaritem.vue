<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  // data(){
  //   return{
  //   }
  // },
  computed:{
    isActive(){
      // console.log('我进行判断了,');
      // console.log(this.$route.path.indexOf(this.path) !== -1);
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
      // console.log(this.$route.path)
      // console.log(this.path)
      // console.log(this.$route.path.indexOf(this.path))
      // console.log(this.activeStyle);
      // console.log(this.isActive);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
/* .active{
  color: red;
} */
</style>
