<template>
  <div id="main-tab-bar">
    <!-- <router-view></router-view> -->
    <tabbar>
        <tabbaritem path="/home" activeColor="pink">
          <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="display">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="display">
          <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path="/shopcart" activeColor="pink">
          <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="display">
          <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="display">
          <div slot="item-text">商城</div> 
        </tabbaritem>
        <tabbaritem path="/category" activeColor="pink">
          <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="display">
          <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="display">
          <div slot="item-text">分类</div> 
        </tabbaritem>
        <tabbaritem path="/profile" activeColor="pink">
          <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="display">
          <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="display">
          <div slot="item-text">我的</div> 
        </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/tabbar/Tabbar';
import Tabbaritem from '@/components/common/tabbar/Tabbaritem';
export default {
  name:'MainTabBar',
  components: {
    Tabbar,
    Tabbaritem
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
