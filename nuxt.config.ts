import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  target: 'static',
  supabase: {
    redirect: {
      login: '/',
      callback: '/wallet'
    }
  },
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons'
    ]
  },
}

export default config