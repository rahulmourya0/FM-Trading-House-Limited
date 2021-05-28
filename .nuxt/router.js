import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fef80bf2 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _11075c35 = () => interopDefault(import('..\\pages\\brands.vue' /* webpackChunkName: "pages/brands" */))
const _723e9dd4 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _5d3304f2 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _2741b676 = () => interopDefault(import('..\\pages\\why-choose-us.vue' /* webpackChunkName: "pages/why-choose-us" */))
const _b73a4b0e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _fef80bf2,
    name: "about-us"
  }, {
    path: "/brands",
    component: _11075c35,
    name: "brands"
  }, {
    path: "/contact-us",
    component: _723e9dd4,
    name: "contact-us"
  }, {
    path: "/services",
    component: _5d3304f2,
    name: "services"
  }, {
    path: "/why-choose-us",
    component: _2741b676,
    name: "why-choose-us"
  }, {
    path: "/",
    component: _b73a4b0e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
