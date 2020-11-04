import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import MainSearch from '@/components/MainSearch'
import Borrow from '@/components/Borrow'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'MainSearch',
      component: MainSearch
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow
    }
  ]
})
