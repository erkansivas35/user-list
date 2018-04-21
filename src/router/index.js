import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/user-detail/:id',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})
