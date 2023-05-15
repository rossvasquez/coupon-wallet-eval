import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "log-in"
declare module "C:/Users/rossv/Desktop/coupon-wallet-eval/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}