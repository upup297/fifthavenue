<template>
    <div>
         <div class="detail">
                <i class="iconfont icon-forward" @click="handle"></i>
            <div>
				Louis Vuitton/LV路易.威登
            </div>
        </div>
        <div class="tab">
            <ul>
                <li>
                    综合
                    <i class="iconfont icon-lower-triangle"></i>
                </li>
                <li>
                    分类
                </li>
                <li>
                    筛选
                    <i class="iconfont icon-lower-triangle"></i>
                </li>
                
            </ul>
            
        </div>
        <div class="goods_list">
            <ul>
                <li v-for="(item,index) in goodsList" :key="index">
                    <div>
                        <img :src="item.big_thumb">
                    </div>
                    <div>
                        <div class="ms">
                            <p>{{item.brand_enname}}</p>
                            <p>{{item.brand_cnname}}</p>
                            <p>
                                <i>￥{{item.promote_price}}</i>
                                <em>￥{{item.market_price}}</em>
                               
                            </p>
                        </div>
                    </div>
                </li>
                
                
            </ul>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Detail",
   
}
</script>
<style>
.detail{
    width: 100%;
    height: 0.44rem;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 2;
    border-bottom: 1px solid #f5f5f5;
}
.detail>i{
    display: inline;
    width: 20%;
    height: 0.44rem;
    float: left;
    font-size: 24px;
    color: #ccc;
    line-height: 0.44rem;
    padding-left: 0.15rem;
}

.detail>div:nth-child(2){
    display: inline;
    width: 80%;
    height: 0.44rem;
    float: right;
     line-height: 0.44rem;
    font-weight: 400;
    font-size: 16px;
    color: #000
   
}
.tab{
    width: 100%;
    height: 0.39rem;
    background: #fff;
    margin-top: 0.44rem;
    position: fixed;
    z-index: 2;
}
.tab ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;

}
.tab ul>li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 0.39rem;
    margin:0 0.35rem 0 0.355rem;
}


</style>
