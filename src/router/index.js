import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import goto from './goto'
import shop from './shop'
import servers from './servers'
import mime from './mime'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    home,
    shop,
    servers,
    goto,
    mime
  ]
})
