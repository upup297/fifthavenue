export default {
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    meta:{
        tabBar:true,
        auth:false
    },
    // props:true
    /* children:[
        {
            path:"/accesories",
            component:()=>import("views/accesories"),
            name:"accesories"

        }
    ] */
}