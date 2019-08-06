export default {
    path:"/news",
    component:()=>import("views/news"),
    name:"news",
    meta:{
        tabBar:false,
        auth:false
    }
}