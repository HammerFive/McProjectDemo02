import Vue from 'vue'
import Router from 'vue-router'
import Bookadd from '@/components/wy/book-add'
import Bookupdate from '@/components/wy/book-update'
import MainSearch from '@/components/cxw/main-search'
import Reservation from '@/components/cxw/reservation'
import Search from '@/components/cxw/search'
import BookList from '@/components/lqz/book-list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/bookadd',
      name: 'book_add',
      component: Bookadd
    },
    {
      path: '/bookupdate',
      name: 'Bookupdate',
      component: Bookupdate
    },
    {
      path: '/mainsearch',
      name: 'main-search',
      component: MainSearch
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: Reservation
    },
    {
      path: '/books',
      name: 'book-list',
      component: BookList
    }
  ]
})
