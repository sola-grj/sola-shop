<template name="skeleton">
  <view is="components/SolaShopSwiper">
    <view class="carousel SolaShopSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator SolaShopSwiper--navigator" hover-class="none">
            <image class="image SolaShopSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator SolaShopSwiper--indicator">
        <text class="dot SolaShopSwiper--dot active SolaShopSwiper--active"></text>
        <text class="dot SolaShopSwiper--dot"></text>
        <text class="dot SolaShopSwiper--dot"></text>
        <text class="dot SolaShopSwiper--dot"></text>
        <text class="dot SolaShopSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPannel">
    <view class="category CategoryPannel--category">
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-169 sk-text"
          >居家</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-637 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-266 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-171 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-314 sk-text"
          >个护</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-471 sk-text"
          >严选</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-748 sk-text"
          >数码</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-96 sk-text"
          >运动</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-359 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator class="category-item CategoryPannel--category-item" hover-class="none">
        <image class="icon CategoryPannel--icon sk-image"></image>
        <text class="text CategoryPannel--text sk-transparent sk-text-14-2857-27 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPannel">
    <view class="panel HotPannel--panel hot HotPannel--hot">
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-787 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-907 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-488 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-18 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-324 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-963 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-412 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-877 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-635 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-602 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-169 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-637 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-266 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-171 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-314 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-471 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-748 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-96 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-359 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-27 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-787 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-907 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-488 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-18 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-324 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-963 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-412 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-877 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
