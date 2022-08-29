<template>
  <view w-full h18 class="hover:(bg-gray-400 font-black) font-(light mono)">hover:(bg-gray-400 font-black)</view>

  <view w-full h18 bg-right bg-no-repeat bg-contain class="bg-[url(static/logo.png)]">class="bg-[url(static/logo.png)]"
  </view>

  <view w-full h18 bg-right bg-no-repeat bg-contain class="bg-[url(/static/logo.png)]">
    class="bg-[url(/static/logo.png)]"</view>

  <view w-full h18 bg-right bg-no-repeat bg-contain style="background-image: url('/static/logo.png');">test bg</view>

  <view w-full h18 bg-right bg-no-repeat bg-contain
    class="bg-[url(https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg)]">
    class="bg-[url(https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg)]"</view>

  <view w-full h18 class="bg-red">class="bg-red"</view>

  <view w-full h18 bg-green>bg-green</view>

  <view w-full h18 class="bg-#F2FF2F">class="bg-#F2FF2F"</view>


  <view w-full h18 bg="green">bg="green"</view>


  <view w-full h18 class="bg-[#F2FF2F]">class="bg-[#F2FF2F]"</view>

  <view w-full h18 text="base #F2FF" font="serif">text="base #F2FF" font="serif"</view>

  <view w-full text-b-f text-base text-black>text-b-f text-base text-black</view>

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

const form = reactive({
  phone: '',
})


</script>

<style>
</style>
