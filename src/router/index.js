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
  {
    path: '/dialog',
    name: 'i-dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '../views/dialog.vue')
  },
  {
    path: '/input',
    name: 'i-input',
    component: () => import(/* webpackChunkName: "input" */ '../views/input.vue')
  },
  {
    path: '/switch',
    name: 'i-switch',
    component: () => import(/* webpackChunkName: "switch" */ '../views/switch.vue')
  },
  {
    path: '/radio',
    name: 'i-radio',
    component: () => import(/* webpackChunkName: "radio" */ '../views/radio.vue')
  },
  {
    path: '/checkbox',
    name: 'i-checkbox',
    component: () => import(/* webpackChunkName: "checkbox" */ '../views/checkbox.vue')
  },
  {
    path: '/form',
    name: 'i-form',
    component: () => import(/* webpackChunkName: "checkbox" */ '../views/form.vue')
  },
  {
    path: '/uploadImage',
    name: 'i-upload-image',
    component: () => import(/* webpackChunkName: "uploadImage" */ '../views/uploadImage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
