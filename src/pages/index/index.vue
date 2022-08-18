<template>


  <view w8 h8 class="hover:(bg-gray-400 font-medium) font-(light mono)">test</view>
  <view w18 h18 class="bg-['url(/static/logo.png')]">test</view>
  <view w18 h18 class="bg-[url(/static/logo.png)]">test</view>
  <view w28 h28 bg-center class="bg-[url(https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg)]">
    test</view>
  <view w8 h8 class="bg-red">test</view>
  <view w8 h8 bg-green>test</view>
  <view w8 h8 class="bg-#F2FF2F">test</view>
  <view w8 h8 class="bg-[#F2FF2F]">test</view>
  <view w8 h8 text="base #F2FF" font="serif">test</view>

  <uni-easyinput v-model="form.phone" :input-border="false" :trim="true" type="number" prefix-icon="person"
    placeholder="请输入手机号码" />

  <view mx4 mt4 p4 bg-white rounded>
    <!-- TODO: 先做个假的 -->
    <view flex items-center mb6>
      <view flex-1>
        自动签到
      </view>
      <switch scale-75 />
    </view>

    <!-- TODO: https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html#getappauthorizesetting -->
    <view flex items-center>
      <view flex-1>
        消息通知
      </view>
      <switch scale-75 />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const title = ref('Hello')

const form = reactive({
  phone: '',
})

async function logout() {
  uni.showLoading({ title: '退出登录中...' })

  // await apiWitUserLogout()

  uni.hideLoading()

  uni.showToast({
    title: '已退出',
    icon: 'success',
    duration: 800,
    success() {
      setTimeout(() => {
        uni.navigateTo({ url: '/pages/login/login' })
      }, 800)
    },
  })
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
