export default {
    path:"/mime",
    component:()=>import("views/mime"),
    name:"mime",
    meta:{
        tabBar:false,
        auth:true
    }
}