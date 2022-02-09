<template>
  <div class="defalut-side">
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="collapse"
    >
      <template v-for="item in menuList" :key="item.icon">
        <el-menu-item :index="item.path">
          <component
            v-if="item.icon"
            :is="`el-icon-${humpToLine(item.icon)}`"
          ></component>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template> </el-menu
    >>
  </div>
</template>

<script lang="ts" setup>
import { humpToLine } from '@/utils/shared'
import { MenuItem } from './types'
const props = defineProps<{
  collapse: boolean
  menuList: Array<MenuItem>
}>()
</script>

<style lang="scss" scoped>
svg {
  margin-right: 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
