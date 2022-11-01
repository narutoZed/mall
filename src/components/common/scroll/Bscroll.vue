<template>
  <div class="wrapper" ref="wrapper">
			<div class="content"><slot></slot></div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'

	export default {
		name: "Bscroll",
		props:{
			probeType:{
				type:Number,
				default:0
				},
		pullUpLoad:{
			type:Boolean,
			default:false
		}
		},
		data(){
			return{
				scroll:null,
				position:[],

			}
		},
		mounted(){
			this.initBscroll()
			console.log(this.scroll.scrollerHeight);
		
		},
    methods:{
			initBscroll(){
					//创建scroll对象,初始化
				this.scroll = new BScroll(this.$refs.wrapper,{
					//打开全程滚动监听
					probeType:this.probeType,
					pullUpLoad:this.pullUpLoad,
					mouseWheel: true,//开启鼠标滚轮
          disableMouse: false,//启用鼠标拖动
          disableTouch: false,//启用手指触摸
					click:true,
					// wheel: true,
					// scrollbar: true,
				})
			// const debounce = (fn, duration) => {    
      //   let timeout = null;    
      //   return () => {        
      //     if(timeout !== null) {
      //       clearTimeout(timeout)
      //     }        
      //     timeout = setTimeout(fn, wait);
      //   }
      // }
			// debounce(this.scroll.refresh(),500)
				//监听滚动事件的位置
				// this.scroll.refresh()
				this.scroll.on('scroll',position=>{
					this.$emit('scroll',position)
				})
				//监听上拉事件的位置
				// console.log(this.pullUpLoad);
				this.scroll.on('pullingUp',()=>{
					this.$emit('pullingUp')
				})
				},
			scrollTo(x,y,time=500){
			this.scroll.scrollTo(x,y,time)
			},
			refresh(){
				this.scroll&&this.scroll.refresh()
				console.log(1111);
			}
    }
	}
</script>

<style scoped>
</style>
