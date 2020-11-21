import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tag',
    name: 'Tag',
    component: () => import(/* webpackChunkName: "Tag" */ '../views/Tag.vue')
  },
  {
    path: '/icon',
    name: 'i-icon',
    component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue')
  },
  {
    path: '/button',
    name: 'i-button',
    component: () => import(/* webpackChunkName: "button" */ '../views/button.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
