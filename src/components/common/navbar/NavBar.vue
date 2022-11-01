<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow:0 1px 1px rgb(100,100,100,.1);
}
.left{
  width: 60px;
  /* background-color: blue; */
}
.right{
  width: 60px;
  /* background-color:yellow; */
}
.center{
  flex:1;
  /* background-color: brown; */
  text-align:center;
}

</style>
