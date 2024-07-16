<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import Customnavbar from './components/Customnavbar.vue'
import CategoryPannel from './components/CategoryPannel.vue'
import HotPannel from './components/HotPannel.vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import type { SolaShopGuessInstance } from '@/types/component'

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

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
// uniapp 生命周期
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

// 获取猜你喜欢组件实例
const guessRef = ref<SolaShopGuessInstance>()
// 滚动触底回调
const onScrollToLower = () => {
  console.log('---end---')
  guessRef.value?.getMore()
}
// 当前下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 加载数据
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  // 重置猜你喜欢的数据，然后再调用
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <Customnavbar />
  <scroll-view
    :refresher-triggered="isTriggered"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrollToLower"
    class="sroll-view"
    scroll-y
  >
    <!-- 自定义轮播图 -->
    <SolaShopSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPannel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPannel :list="hotList" />
    <!-- 猜你喜欢 -->
    <SolaShopGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
}
.sroll-view {
  flex: 1;
}
</style>
