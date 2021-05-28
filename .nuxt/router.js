import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _98c2f46e = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _b5141f12 = () => interopDefault(import('../pages/brands.vue' /* webpackChunkName: "pages/brands" */))
const _48e54116 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _04810949 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _511233f4 = () => interopDefault(import('../pages/why-choose-us.vue' /* webpackChunkName: "pages/why-choose-us" */))
const _358fb5f7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _98c2f46e,
    name: "about-us"
  }, {
    path: "/brands",
    component: _b5141f12,
    name: "brands"
  }, {
    path: "/contact-us",
    component: _48e54116,
    name: "contact-us"
  }, {
    path: "/services",
    component: _04810949,
    name: "services"
  }, {
    path: "/why-choose-us",
    component: _511233f4,
    name: "why-choose-us"
  }, {
    path: "/",
    component: _358fb5f7,
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
