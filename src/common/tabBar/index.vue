<template>
    <div id="footer">
        <ul>
            <router-link v-for="(item,index) in navs" 
            :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"tabBar",
    data(){
        return{
            navs:[
                {
                    icon:"&#xe50a;",
                    text:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe61a;",
                    text:"商城",
                    path:"/shop"
                },
                {
                    icon:"&#xe728;",
                    text:"海外服务",
                    path:"/servers"
                },
                {
                    icon:"&#xe616;",
                    text:"到店",
                    path:"/goto"
                },
                {
                    icon:"&#xe607;",
                    text:"我的",
                    path:"mime"
                }
            ]
        }
    }
}
</script>
<style>
#footer{
    width: 100%;
    height: 0.5rem;
    background: #000;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    z-index: 2;
}
#footer ul,#footer ul li{
    width: 100%;
    height: 100%
}
#footer ul{
    display: flex;
}
#footer ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: #ccc;
}
#footer ul li i{
    font-size: 20px;
    /* color: #ccc */
}
#footer ul .router-link-active{
    color: #fff;
}
</style>
