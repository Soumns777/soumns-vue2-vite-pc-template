import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'uno.css'
import ElementUI, { Loading, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vconsole from 'vconsole'

Vue.config.productionTip = false

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message

const vConsole = new Vconsole()
Vue.use(vConsole)

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
