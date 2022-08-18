import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'uno.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()
// Vue.use(vConsole)

// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
