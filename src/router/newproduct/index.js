export default {
    path:"/newproduct",
    component:()=>import("views/newproduct"),
    name:"Newproduct",
    meta:{
        tabBar:false,
        auth:false
    }
}