<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar.vue';
import router from './router'
export default {
  name: 'app',
  components: {
    MainTabBar
  },router
}
</script>

<style>
@import './assets/css/base.css'
</style>
