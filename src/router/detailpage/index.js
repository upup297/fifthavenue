export default {
    path:"/detailpage",
    component:()=>import("views/detailpage"),
    name:"detailpage",
    meta:{
        tabBar:false,
        auth:false
    }
}