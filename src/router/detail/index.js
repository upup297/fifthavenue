export default {
    path:"/detail/:ad_id/:ad_name",
    component:()=>import("views/detail"),
    name:"detail",
    meta:{
        tabBar:false,
        auth:false
    },
    props:true
}