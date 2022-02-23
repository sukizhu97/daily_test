import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  // 登录的路由规则
  routes:[
    {path:'',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home}
  ]
})
router.beforeEach(function(to,from,next){
  if(to.path === '/home'){
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router
