<template>
  <div class="back-to-top" >
		<img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>

	export default {
		name: "BackToTop",
    methods:{
      
    }
  }

</script>

<style scoped>
.back-to-top{
  position: fixed;
  right:10px;
  bottom:60px;
}
.back-to-top img{
  width: 49px;
  height: 49px;
}
</style>
