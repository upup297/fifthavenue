<template>
  <div class="con">
      <!-- 顶部 -->
    <div class="top">
      <div class="search">
        <i class="iconfont icon-8"></i>
        <div class="input">5LUX.COM</div>
      </div>

      <i class="iconfont icon-bao1">
        <i class="s">1</i>
      </i>
    </div>
    <div class="warp">
    <!-- 轮播图 -->
        <div class="swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item ,index) in banners" :key="index">
                <img :src="item.silde_original" />
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    <!-- 上新 -->
        <div class="fun_nav">
            <ul>
                <router-link to="/sea" tag="li" v-for="(item,index) in this.funNavs" :key="index">
                    <!-- <i>{{item.ad_code}}</i> -->
                    <img :src="item.ad_code">
                    <span>{{item.ad_name}}</span>
                </router-link>
            </ul>
        </div> 
    <!-- Burberry -->
        <div class="adv">
            <ul>
                <router-link :to="'/detail/'+item.ad_id" tag="li" v-for="(item,index) in dataa" :key="index">
                    <img :src="item.ad_code">
                </router-link>
            
            </ul>
        </div>

        <!-- 新人特权 -->
        <!--  v-for="(item,index) in register" :key="index" -->
        <div class="content" >
            <div class="new_register" v-for="(item,index) in register.new_register" :key="index">
               <img :src="item.ad_code">
            </div>
            <div class="new_register">
            <!-- <div class="new_register" v-for="(item,index) in register.vip_member" :key="index"> -->
              <!-- <img :src="item.ad_code"> -->
                <img src="http://img550.5lux.com.cn/2019/07/04/ab/156220549787_750x586.jpg">
                <div class="resgister_new">
                    <ul>
                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>
                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>
                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>

                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="new_register">
                <img src="http://img550.5lux.com.cn/2019/07/04/hi/156220549519_750x586.jpg">
            </div>

            <div class="hook"  v-for="(item,index) in register.article_list" :key="index">
                <div>
                  <img :src="item.ads_info.ad_code">
                    <!-- <img src="http://img550.5lux.com.cn/2019/08/02/qr/156474033256_750x586.jpg"> -->
                </div>
                <div>
                    <strong>{{item.ads_info.ad_name}}</strong>
                    <p>{{item.ads_info.ad_title}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      dataa:[],
      register:[],
     funNavs:[],
     
    };
  },

  methods: {
    initBanner() {
      new Swiper(".swiper-container", {
        autoplay: {
          delay: 800
        }, //可选选
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  created() {
    // console.log(this);

     axios.get("https://apim.restful.5lux.com.cn//index/index_button")
     .then(data=>data.data)
     .then(data=>{
        this.funNavs = data.data.list
        //  console.log(this.funNavs)
     })
    axios.get("https://apim.restful.5lux.com.cn/index/index_slider")

      .then(data => data.data)
      .then(data => {
        this.banners = data.data;
        this.$nextTick(() => {
          this.initBanner();
        });
      })
      .catch(err => {
        console.log(err)
      });

     axios.get("https://apim.restful.5lux.com.cn//index/columu_recommend")
     .then(data=>data.data)
     .then(data=>{
         this.dataa = data.data
        //  console.log(data.data)
     })

      axios.get("https://apim.restful.5lux.com.cn/index/other_advert")
     .then(data=>data.data)
     .then(data=>{
         this.register = data.data
     })

     /* axios.get("https://apim.restful.5lux.com.cn/index/other_advert")
     .then(data=>data.data)
     .then(data=>{
         this.data = data.data
         console.log(this.data.vip_member)
     }) */
    
  }
};
</script>

<style>

.top {
  width: 100%;
  height: 0.44rem;
  /* background: #ccc; */
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top > .search {
  width: 3rem;
  height: 0.3rem;
  background-color: hsla(0, 0%, 100%, 0.25);
  /* background: red; */
  border-radius: 0.04rem;
  margin-left: 17px;
  margin-right: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top > .search i {
  width: 0.13rem;
  height: 13px;
  margin: 0 0.08rem;
  color: #fff;
  line-height: 0.13rem;
  font-size: 16px;
}
.top > .search > .input {
  width: 0.75rem;
  height: 0.12rem;
  color: #ccc;
  font-size: 14px;
  line-height: 0.12rem;
}
.top i {
  width: 0.22rem;
  height: 0.24rem;
  margin-right: 0.17rem;
  position: relative;
  font-size: 20px;
  color: #fff;
}
.top > i > .s {
  position: absolute;
  width: 0.15rem;
  height: 0.15rem;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  background: #f33;
  color: #fff;
  font-size: 10px;
  text-align: center;
  line-height: 0.15rem;
  left: 0.12rem;
  top: -0.03rem;
}
.warp{
    padding-bottom: 0.5rem;
}
.swiper-container {
  /* top:0.44rem; */
  width: 100%;
  height: 4.12rem;
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide > img {
  width: 100%;
  height: 4.12rem;
  display: block;
}
.fun_nav {
  width: 100%;
  height: 0.70rem;
  background: #fff;
}
.fun_nav ul li{
     width: 100%;
    height: 100%
}
.fun_nav ul{
    display: flex;
}
.fun_nav ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #ccc;
    margin-top: 0.15rem;
}
.fun_nav ul li span{
    color: #7e8c8d;
    margin-top: 0.05rem;
}

.fun_nav ul li img{
    width: 30%;
    height: 30%;
}

.adv{
   
}
.adv ul{
     width: 100%;
    height: 2.74rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}
.adv li{
    width: 49%;
    margin-bottom: 7px;
    float: left;
}
.adv li img{
    width: 100%;
}
.content{

}
.content .new_register{
    margin-bottom: 10px;
    position: relative
}
.content .new_register img{
        width: 100%;
    vertical-align: top;
}
.content .new_register .resgister_new{
    width: 100%;
    padding: 10px 3.5px;
    background: #fff;
}
.content .new_register .resgister_new ul{
    width: 100%;
    display: flex;
     flex-direction: row;
    justify-content: space-between;
}
.content .new_register .resgister_new ul li{
   
     display: flex;
     flex-direction: row;
    justify-content: space-between;
        
}
.content .new_register .resgister_new ul li img{
        width: 0.85rem;
        height: 0.85rem;
}
.content .hook{
    width: 100%;
    height: 4rem;
    /* background: #ccc; */
}
.content .hook img{
    width: 100%;
    height: 2.93rem;
}
.content .hook div:nth-child(2){
    width: 100%;
    height: 1.07rem;
    background: #fff;
    padding: 18px 20px 20px;
    
}
.content .hook div:nth-child(2) strong{
    font-family: \\9ED1\4F53;
    font-weight: 700;
    display: block;
    font-size: 14px;
    color: #333;
    height: 0.18rem;
    line-height: 0.18rem;
    padding-bottom: 0.30rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.content .hook div:nth-child(2) p{
    font-family: \\9ED1\4F53;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    height: 34px;
    line-height: 18px;
}
</style>
