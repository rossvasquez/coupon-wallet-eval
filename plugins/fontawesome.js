import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWallet, faInfinity, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser, faCircleXmark, faCircleLeft } from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faWallet, faCircleUser, faInfinity, faCircleXmark, faBuilding, faCircleLeft)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
