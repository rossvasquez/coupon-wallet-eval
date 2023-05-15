import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
}

export default config