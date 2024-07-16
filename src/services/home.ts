import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 首页广告区域接口
 * @param distributionSite 活动 banner 位置，1 代表首页，2 代表商品分类页，默认为 1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// services/home.ts
/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
