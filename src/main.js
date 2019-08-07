import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store'
import '../public/common.css'
import '../public/css/iconfont/iconfont.css'
import Swiper from 'swiper'
import axios from 'axios';
import Mint from 'mint-ui';
import { Popup } from 'mint-ui'
Vue.use(Mint);
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.component(Popup.name, Popup);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
