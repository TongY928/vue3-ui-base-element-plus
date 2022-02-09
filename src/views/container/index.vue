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
    icon: 'Sort',
    name: '趋势标记',
    path: '/trend'
  },
  {
    icon: 'Timer',
    name: '时间选择',
    path: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    path: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    path: '/menu'
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
    icon: 'Setting',
    name: '弹出框表单',
    path: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    path: '/table'
  }
]
</script>

<style lang="scss" scoped></style>
