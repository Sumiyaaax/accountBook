import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import InputDetail from '@/components/InputDetail'
import NewInputDetail from '@/components/NewInputDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/inputDetail',
      name: 'InputDetail',
      component: InputDetail
    },
    {
      path: '/newInputDetail',
      name: 'NewInputDetail',
      component: NewInputDetail
    }
  ]
})
