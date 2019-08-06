export default {
    path:"/shop",
    component:()=>import("views/shop"),
    name:"shop",
    meta:{
        tabBar:true,
        auth:false
    }
}