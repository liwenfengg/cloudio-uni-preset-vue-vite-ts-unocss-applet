<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  phone: '',
  pwd:''
})


</script>

<template>
  <view w-full h18 class="hover:(bg-gray-400 font-black) font-(light mono)">hover:(bg-gray-400 font-black)</view>

  <!-- #ifdef APP-PLUS -->
  <view w-full h18 bg-right bg-no-repeat bg-contain class="bg-[url(static/logo.png)]">class="bg-[url(static/logo.png)]"
  </view>
  <!-- #endif -->

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

  <view w-full text-b-f>text-b-f </view>

  <view class="w-8 h-8 bg-red">hello</view>
  <view class="w-8.5 h-8.5 bg-green">hello</view>
  <view class="w-8 h-8 bg-red">hello</view>

  // from
  <div>{{ 'bg-[hsl(2.7,81.9%,69.6%)]' }}</div>

  // to
  <div>{{ 'uno-98db2v' }}</div>


  <div>{{ 'bg-[123]' }}</div>
  <div>{{ 'gg-gg' }}</div>

  <view w-full mt16 px4 box-border rounded-lg class="bg-[#fff]">
      <uni-forms ref="refForm" border err-show-type="toast"  :model-value="form">
        <uni-forms-item name="phone">
          <template #label>
            <!-- don't delete,for fix uni-ui bug -->
            <!-- https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html#formsitem-props -->
            <!-- https://github.com/dcloudio/uni-ui/issues/570 -->
            <view hidden />
          </template>
          <uni-easyinput
            v-model="form.phone" :input-border="false" :trim="true" type="number" prefix-icon="person"
            placeholder="?????????????????????"
          />
        </uni-forms-item>

        <uni-forms-item name="pwd">
          <template #label>
            <view hidden />
          </template>
          <uni-easyinput
            v-model="form.pwd" :input-border="false" :trim="true" type="password"
            prefix-icon="locked-filled" placeholder="?????????????????????"
          />
        </uni-forms-item>

       
      </uni-forms>
    </view>

  <view mx4 mt4 p4 bg-white rounded>
    <!-- TODO: ??????????????? -->
    <view flex items-center mb6>
      <view flex-1>
        ????????????
      </view>
      <switch scale-75 />
    </view>

    <!-- TODO: https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html#getappauthorizesetting -->
    <view flex items-center>
      <view flex-1>
        ????????????
      </view>
      <switch scale-75 />
    </view>
  </view>
</template>



<style>
</style>
