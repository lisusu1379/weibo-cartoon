import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cate from '../views/Cate'
import ComicEnd from '../views/ComicEnd'
import Daypub from '../views/Daypub'
import Detail from '../views/Detail'
import Login from '../views/Login'
import My from '../views/My'
import Rank from '../views/Rank'
import RecommendList from '../views/RecommendList'
import Register from '../views/Register'
import Search from '../views/Search'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cate',
      component: Cate
    },
    {
      path: '/comic-end',
      component: ComicEnd
    },
    {
      path: '/daypub',
      component: Daypub
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/login',
      component: Login
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
      path: '/recommend-list',
      component: RecommendList
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

export default router
