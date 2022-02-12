<template>
  <div class="progress">
    <el-progress :percentage="p" v-bind="$attrs"></el-progress>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

let props = withDefaults(
  defineProps<{
    percentage: number
    max?: number
    isAnimate?: boolean
    time?: number
  }>(),
  {
    max: 100,
    isAnimate: false,
    time: 3000
  }
)
const emits = defineEmits(['update:percentage'])
let p = ref<number>(props.percentage)

onMounted(() => {
  if (props.isAnimate) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage)
    let timer = setInterval(() => {
      p.value += 1
      emits('update:percentage', p.value)
      if (p.value >= props.max) {
        p.value = props.max
        clearInterval(timer)
      }
    }, t)
  }
})
</script>

<style lang="scss" scoped></style>
