import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import MainSearch from '@/components/MainSearch'
import Borrow from '@/components/Borrow'
import Bookadd from '@/components/wy/book_add'
import Bookupdate from '@/components/wy/book_update'
import Search from '@/components/Search'

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
    },
    {
      path: '/mainsearch',
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
