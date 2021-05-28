import { wrapFunctional } from './utils'

export { default as FooterSection } from '../../components/footer-section.vue'
export { default as HeaderSection } from '../../components/header-section.vue'
export { default as HomeAbout } from '../../components/home-about.vue'
export { default as ServicesCard } from '../../components/services-card.vue'

export const LazyFooterSection = import('../../components/footer-section.vue' /* webpackChunkName: "components/footer-section" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderSection = import('../../components/header-section.vue' /* webpackChunkName: "components/header-section" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeAbout = import('../../components/home-about.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const LazyServicesCard = import('../../components/services-card.vue' /* webpackChunkName: "components/services-card" */).then(c => wrapFunctional(c.default || c))
