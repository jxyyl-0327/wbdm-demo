import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Register from '../views/Register'
import Login from '../views/Login'
import Cate from '../views/Cate'
import ComicEnd from '../views/ComicEnd'
import My from '../views/My'
import Rank from '../views/Rank'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Daypub from '../views/Daypub'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/cate',
    component: Cate
  },
  {
    path: '/comicEnd',
    component: ComicEnd
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/searchResult',
    component: SearchResult
  },
  {
    path: '/daypub',
    component: Daypub
  },
  {
    path: '/',
    redirect: '/home'
  }
  ]
})

export default router
