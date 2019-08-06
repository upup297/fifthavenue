export default {
    path:"/servers",
    component:()=>import("views/servers"),
    name:"servers",
    meta:{
        tabBar:true,
        auth:false
    }
}