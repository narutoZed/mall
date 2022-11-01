import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 给vue实例的原型加入$bus属性
Vue.prototype.$bus = new Vue()



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
