<template>
    <div class="goodsdetailwarppers">
        <div class="top">
            <i class="iconfont icon-forward" @click="handle"></i>
        </div>
         <div class="swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item ,index) in this.banners" :key="index">
                <img :src="item.silde_original" />
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        
        <div class="extrawarpper">
            <div class="extra">
                <div>
                    <span>￥</span>
                    8030
                </div>
                <div>
                    #11434
                </div>
                <div>
                    红卡价>
                </div>
            </div>
        </div>
        <div class="tittlewarpper">
            <div class="burberry">Burberry巴宝莉 Rersby skirt in red Vermilion Monogram</div>
            <div class="pre">
                <i class="iconfont icon-diqiu"></i>
                <span class="cont">15-25个工作日</span>
                <span class="underline">LA ROSA旗舰店发货 意大利直发</span>
            </div>
        </div>

        <div class="premote">
            <div class="cost1">
                <span>分期支付</span>
                <span>分期12期，每期仅需￥719.35</span>
                <span>◦◦◦</span>
            </div>
            <div class="cost2">
                <ul>
                   <!--  <li>
                        <i class="iconfont icon-wode"></i>
                        <span>正品保证</span>
                    </li> -->
                     <!-- <li>
                        <i class="iconfont icon-wode"></i>
                        <span>正品保证</span>
                    </li>
                     <li>
                        <i class="iconfont icon-wode"></i>
                        <span>正品保证</span>
                    </li>
                     <li>
                        <i class="iconfont icon-wode"></i>
                        <span>正品保证</span>
                    </li>

                     <li>
                        <i class="iconfont icon-wode"></i>
                        <span>正品保证</span>
                    </li> -->
                </ul>
                <span>◦◦◦</span>
            </div>
        </div>

        <div class="canshu">
            <div>
                <span>产品参数</span>
                <span>></span>
            </div>
            <div>
                <span>选择：颜色尺码</span>
                <span>></span>
            </div>
        </div>
        
        <div class="house">
            <div class="house_con">
                <div class="left">
                    <span class="pto">
                        <img src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477284515625.png">
                    </span>
                    <span class="wz">Burberry巴宝莉</span>
                </div>
                <div class="right">查看&nbsp;&nbsp;></div>
            </div>
        </div>

        <div class="lunbo"></div>
    </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
export default {
    name:"detailpage",
    data(){
        return{
            banners: [],
        }
         
    },
    methods:{
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
        },
       
        handle(){
            this.$router.go(-1) 
        }
   
    },
    created(){
        axios.get("https://apim.restful.5lux.com.cn/index/index_slider")

        .then(data => data.data)
        .then(data => {
            this.banners = data.data;
            console.log(this.banners)
            this.$nextTick(() => {
            this.initBanner();
            });
        })
        .catch(err => {
            console.log(err)
        });
    }
   
}
</script>
<style scoped>
.goodsdetailwarppers{
    padding-bottom: 0.5rem;
    background: #f2f2f2;
}
.top{
    width: 100%;
    height: 0.44rem;
    background: #f3f3f3;
    position: fixed;
    top: 0;

}
.top i{
    font-size: 14px;
    width: 20%;
    height: 0.44rem;
    color: #000;
    line-height: 0.44rem;
    padding-left: 0.15rem;
}
 .swiper-container {
  /* top:0.44rem; */
  width: 100%;
  height: 3.75rem;
  margin-top: 0.44rem;
}
 .swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide > img {
  width: 100%;
  height: 3.75rem;
  display: block;
} 
.extrawarpper{
    width: 100%;
    height: 0.49rem;
    background: #fff;
}
.extrawarpper .extra{
    margin: 0 15px;
    padding: 20px 0 5px;
    height: 24px;
    /* background: #fff; */
    font-size: 0;
    /* background: skyblue; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start
}
.extrawarpper .extra div{
    width: 0.65rem;
    height: 0.24rem;
}
.extrawarpper .extra div:nth-child(1){
    /* background: red; */
    font-size: 24px;
    margin-right: 5px;
    color: #9b885f;
    width: 0.8rem;
    padding-bottom: 0.2rem;
    

}
.extrawarpper .extra div:nth-child(1) span{
    font-size: 12px;
}
.extrawarpper .extra div:nth-child(2){
     font-size: 13px;
    text-decoration: line-through;
    color: #999;
    margin-right: 5px;
    line-height: 0.4rem;
    display:table-cell; 
    vertical-align:bottom;
}
.extrawarpper .extra div:nth-child(3){
     font-size: 10px;
     width: 0.4rem;
    color: #9b885f;
    border: 1px solid #9b885f;
    /* margin: 0 5px; */
    /* padding: 0 5px; */
    line-height: 0.20rem;
    height: 0.2rem;
    display:table-cell; 
    vertical-align:bottom;
    
 
  
}
 .tittlewarpper{
     width: 100%;
     height: 0.87rem;
     background: #fff;
     padding: 15px 15px 10px;
     margin-bottom: 10px;
 }
.tittlewarpper .burberry{
      height: 0.43rem;
      /* background: red; */
      line-height: 21px;
      font-size: 15px;
  }
.tittlewarpper .pre{
    font-size: 10px;
    height: 21px;
    line-height: 21px;
    color: #999;
    /* background: rebeccapurple */
}
.tittlewarpper .pre i{
     width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 20px 20px;
    vertical-align: top;    
}
 .tittlewarpper .pre .cont{
     vertical-align: middle;
 }  
  .tittlewarpper .pre .underline{
       text-decoration: underline;
    color: #c8a985; 
  }

.premote{
    width:100%;
    height: 1.15rem;
    background: #fff;
    margin-bottom: 0.1rem;
}
.goodsdetailwarppers .premote .cost1{
    margin-left: 15px;
    position: relative;
    text-align: left;
    padding: 7.5px 0;
    height: 0.44rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #ccc
} 
.goodsdetailwarppers .premote .cost1 span{
    margin-top: 0.1rem;
}
.goodsdetailwarppers .premote .cost1 span:nth-child(1){
    height: 14px;
    width: 0.56rem;
    border-radius: 2px;
    font-size: 11px;
    color: #fff;
    border: 1px solid #9b885f;
    background-color: #9b885f;
    padding: 0 5px;
    line-height: 0.14rem;
    background:#9b885f;
    font-size: 10px;
    color: #fff;
    line-height: 14px;


}
.goodsdetailwarppers .premote .cost1 span:nth-child(2){
    width: 60%;
    height: 0.14rem;
    line-height: 0.14rem;
    /* background: #c8a985; */
     font-size: 14px;
    color: #333;
    line-height: 14px;
}
.goodsdetailwarppers .premote .cost1 span:nth-child(3){
     width: 11%;
    height: 0.14rem;
    line-height: 0.14rem;
    /* background: #fff; */
     font-size: 25px;
    color: #333;
    line-height: 14px;
} 
.goodsdetailwarppers .premote .cost2{
    
    background: #fff;
    height: 0.71rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around
}
.goodsdetailwarppers .premote .cost2 ul{
    width: 80%;
    height: 0.71rem;
    /* background: red */

} 
.goodsdetailwarppers .premote .cost2 ul li{
    /* width: 30%; */
    height: 0.3rem;
    line-height: 0.3rem;
    float: left;

}
.goodsdetailwarppers .premote .cost2 ul li i{
  
}
.goodsdetailwarppers .premote .cost2 ul li span{
    font-size: 12px;
    color: #333;
     /* float: left; */
}
.goodsdetailwarppers .premote .cost2 span{
     width: 10%;
    height: 0.14rem;
    line-height: 0.14rem;
     font-size: 25px;
    color: #333;
    line-height: 14px;
}
.canshu{
    width: 100%;
    height: 0.88rem;;
    background: #fff;
    margin-bottom: 0.1rem;
}
.canshu div{
    display: flex;
    height: 44px;
    font-size: 14px;
    color: #333;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
}
.canshu div span{
    color: #333;
    font-size: 14px;
}
.canshu div span:nth-child(2){
    padding-right: 15px;
    font-size: 22px;
    color: #999
}
.house{
    width: 100%;
    height: 0.65rem;
    background: #fff;
    margin-bottom: 0.1rem;
    
}
.house .house_con{
    height: 65px;
    margin-left: 15px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: saddlebrown */
}
.house .house_con .left{
     display: flex;
    align-items: center;
    width: 80%;
    /* background: darkcyan; */
    height: 0.65rem;
}
.house .house_con .left .pto {
    display: flex;
    width: 0.45rem;
    height: 0.45rem;
    border: 1px solid #e5e5e5;
    justify-content: center;
    align-items: center;
    margin-right: 0.1rem
}
.house .house_con .left .pto  img{
    width: 0.4rem;
    height: 0.2rem;
}
.house .house_con .left .wz{
    font-size: 14px;
    color: #333;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: left;

}

.house .house_con .right{
     margin-right: 15px;
     height: 0.65rem;
    font-size: 14px;
    line-height: 0.65rem;
    color: #999
}  

.lunbo{
    width: 100%;
    height: 3.1rem;
    background: #999;
}
</style>
