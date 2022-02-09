<template>
  <div class="component-container">
    <el-container>
      <el-aside width="auto">
        <slot name="side"
          ><default-side :collapse="isCollapse" :menu-list="menuList"
        /></slot>
      </el-aside>
      <el-container>
        <el-header
          ><slot name="header">
            <default-header v-model:collapse="isCollapse" /> </slot
        ></el-header>
        <el-main><router-view></router-view></el-main
      ></el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import DefaultSide from './default-nav-side/index.vue'
import DefaultHeader from './defalut-nav-header/index.vue'
import { MenuItem } from './default-nav-side/types'
import { ref } from 'vue'

const props = defineProps<{
  menuList: Array<MenuItem>
}>()
let isCollapse = ref(false)
</script>

<style lang="scss" scoped></style>
