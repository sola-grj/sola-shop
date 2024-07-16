<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import Customnavbar from './components/Customnavbar.vue'
import CategoryPannel from './components/CategoryPannel.vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem } from '@/types/home'
import { ref } from 'vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
// uniapp 生命周期
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <Customnavbar />
  <!-- 自定义轮播图 -->
  <SolaShopSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPannel :list="categoryList" />
  <view class="index">index12345</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
