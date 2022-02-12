<template>
  <div class="container">
    <container :menu-list="data" />
  </div>
</template>

<script lang="ts" setup>
import Container from '@/components/container/index.vue'
let data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    path: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    path: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    path: '/chooseArea'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    path: '/chooseTime'
  },
  {
    icon: 'Calendar',
    name: '日期选择',
    path: '/chooseDate'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    path: '/notification'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    path: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    path: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    path: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    path: '/form'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    path: '/table'
  }
]
</script>

<style lang="scss" scoped></style>
