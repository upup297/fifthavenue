<template>
  <div id="app">
    <router-view></router-view>
    <tabBar v-if="$route.meta.tabBar"/>
    <!-- <Loading/> -->
  </div>
</template>
<script>

import tabBar from './common/tabBar'
import http from './utils/http.js'
import Loading from "./lib/loading/index.js"
// console.log(Loading().handlemount())
import axios from 'axios'
export default {
  name:"App",
  components:{
    tabBar,
    Loading
  },
  
}
</script>

<style lang="scss">

</style>
