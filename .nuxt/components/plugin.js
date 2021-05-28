import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  FooterSection: () => import('../..\\components\\footer-section.vue' /* webpackChunkName: "components/footer-section" */).then(c => wrapFunctional(c.default || c)),
  HeaderSection: () => import('../..\\components\\header-section.vue' /* webpackChunkName: "components/header-section" */).then(c => wrapFunctional(c.default || c)),
  HomeAbout: () => import('../..\\components\\home-about.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c)),
  ServicesCard: () => import('../..\\components\\services-card.vue' /* webpackChunkName: "components/services-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
