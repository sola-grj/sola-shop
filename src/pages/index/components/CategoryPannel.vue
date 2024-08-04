<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
import { defineProps } from 'vue'

defineProps<{
  list: CategoryItem[]
}>()

const onTap = (item: CategoryItem) => {
  console.log('====000', `/pages/category/category?type=${item.id}`)
  uni.switchTab({ url: `/pages/category/category?type=${item.id}` })
}
</script>

<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      v-for="item in list"
      :key="item.id"
      @tap="($event) => onTap(item)"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
