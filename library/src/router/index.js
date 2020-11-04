import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import Search from '@/components/Search'
import Bookadd from '@/components/Bookadd'
import Bookupdate from '@/components/Bookupdate'
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
      name: 'Search',
      component: Search
    },
    {
      path: '/bookadd',
      name: 'Bookadd',
      component: Bookadd
    },
    {
      path: '/bookupdate',
      name: 'Bookupdate',
      component: Bookupdate
    }
  ]
})
