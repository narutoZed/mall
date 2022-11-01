<template>
  <div>
    <div id="tab-bar">
     <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  padding:0;
  margin:0;
}
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  box-shadow: 0 -2px 1px rgba(100,100,100,.1);
}

</style>
