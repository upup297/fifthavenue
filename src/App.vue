<template>
  <div id="app">
    <router-view></router-view>
    <tabBar/>
    <!-- <Loading/> -->
  </div>
</template>
<script>

import tabBar from './common/tabBar'
import http from './utils/http.js'
// import Loading from "./lib/loading/index.js"
// console.log(Loading().handlemount())
import axios from 'axios'
export default {
  name:"App",
  components:{
    tabBar,
    // Loading
  },
  // created(){
  //   axios.get('https://apim.restful.5lux.com.cn/shop/catalist').then((data)=>{
  //     // console.log(data)
  //   })
  //   // http("get","shop/catalist","data").then((data)=>{
  //   //   console.log(data)
  //   // })
  // }
}
</script>

<style lang="scss">

</style>
