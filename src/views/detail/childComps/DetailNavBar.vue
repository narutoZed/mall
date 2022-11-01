<template>
  <div id="detail-nav-bar">
    <NavBar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center"  class="title">
        <div  v-for="item,index in titles" 
        class="title-item" 
        @click="itemClick(index)" 
        :class="{active:currentIndex==index}">
        {{item}}</div>
      </div>
        
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'Detail',
  props:{
    
  },
  data(){
    return{
      titles:['商品','评论','参数','推荐'],
      currentIndex:0,
      isActive:false
    }
  },
  components:{
    NavBar
  },
  created(){
   
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      // this.$emit('topNavClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }

}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  display: flex;
}
.title-item{
  flex: 1;
}
.active{
  color:var(--color-tint)
}
.back img{
  margin-top: 10px;
  margin-left: 10%;
}
</style>
