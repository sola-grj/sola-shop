/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import SolaShopSwiperVue from '@/components/SolaShopSwiper.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    SolaShopSwiper: typeof SolaShopSwiper
  }
}
