<template>
  <div class="choose-icon">
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <div class="choose-icon-dialog">
      <el-dialog :title="title" v-model="dialogVisible">
        <div class="icon-dialog-container">
          <div
            class="item-icon"
            v-for="(icon, index) in Object.keys(ElIcons)"
            :key="icon + '-' + index"
            @click="clickIcon(icon)"
          >
            <div class="text">
              <component :is="`el-icon-${humpToLine(icon)}`"></component>
            </div>
            <div class="icon">{{ icon }}</div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import * as ElIcons from '@element-plus/icons-vue'
import { humpToLine } from '@/utils/shared'
import useCopy from '@/hook/useTextCopy'
// 设置带默认值的 props
const props = withDefaults(
  defineProps<{
    visible: boolean
    title?: string
  }>(),
  {
    title: '选择图标'
  }
)
let emits = defineEmits(['update:visible'])

let dialogVisible = ref<boolean>(props.visible)
// 点击按钮
const handleClick = () => {
  emits('update:visible', !props.visible)
}
watch(
  () => props.visible,
  (newVal) => {
    dialogVisible.value = newVal
  }
)
watch(
  () => dialogVisible.value,
  (newVal) => {
    emits('update:visible', newVal)
  }
)
// 点击图标
const clickIcon = (item: string) => {
  let text = `<el-icon-${humpToLine(item)} />`
  // 复制文本
  useCopy(text)
  // 关闭弹框
  dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.icon-dialog-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item-icon {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    height: 70px;
    .text {
      font-size: 14px;
    }
    .icon {
      flex: 1;
    }
  }
}
svg {
  width: 2em;
  height: 2em;
}
.choose-icon-dialog ::v-deep .el-dialog__body {
  height: 500px;
  overflow: scroll;
}
</style>
