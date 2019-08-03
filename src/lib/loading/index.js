import Loading from './index.vue';
import Vue from 'vue'

export default ()=>{
    let LoadingComponent = Vue.extend(Loading);
    // console.log(LoadingComponent)

     let vm = new LoadingComponent({
         el:document.createElement("div"),
         
         methods:{
             handlemount(){
                document.body.appendChild(vm.$mount().$el)
             },
             handleDestrory(){
                document.body.removeChild(vm.$mount().$el)
                 
             }
         }
     })
    //  document.body.appendChild(vm.$mount().$el)
    // console.log(vm)
    return vm;

}