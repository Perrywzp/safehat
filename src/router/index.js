import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/views/Overview'
import Admin from '@/Admin'
import HelMet from '@/views/HelMet'
import Group from '@/views/Group'
import Gateway from '@/views/Gateway'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path:'/admin',
      name: 'Admin',
      component: Admin,
      redirect:'/admin/helmet',
      children:[{
        path:'helmet',
        name: 'HelMet',
        component: HelMet
      },{
        path:'group',
        name: 'Group',
        component: Group
      },{
        path:'gateway',
        name: 'Gateway',
        component: Gateway
      }]
    }
  ]
})
