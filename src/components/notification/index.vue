<template>
  <div class="notification">
    <el-popover
      popper-class="notification-popper-class"
      placement="bottom"
      :width="300"
      trigger="click"
    >
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge
          style="cursor: pointer"
          :value="value"
          :max="max"
          :is-dot="isShowDot"
        >
          <component :is="`el-icon-${humpToLine(icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { humpToLine } from '@/utils/shared'

const props = withDefaults(
  defineProps<{
    icon?: string
    value: string | number
    max?: string | number
    isShowDot?: boolean
  }>(),
  {
    icon: 'Bell',
    max: 99,
    isShowDot: false
  }
)
</script>

<style lang="scss" scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
