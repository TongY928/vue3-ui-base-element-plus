<template>
  <div class="default-header">
    <span class="check-icon" @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  collapse: boolean
}>()
const emits = defineEmits(['update:collapse'])
const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
.default-header {
  height: 60px;
  display: flex;
  align-items: center;
  .check-icon {
    cursor: pointer;
  }
}
</style>
