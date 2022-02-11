<template>
  <div class="choose-date">
    <div class="start-date">
      <el-date-picker
        v-model="dateRange.start"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
        v-bind="$attrs.startOptions"
      ></el-date-picker>
    </div>
    <div class="end-date">
      <el-date-picker
        v-model="dateRange.end"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabledDate="endDisabledDate"
        v-bind="$attrs.endOptions"
      ></el-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { DateRange } from './types'
const props = withDefaults(
  defineProps<{
    range: DateRange
    startPlaceholder?: string
    endPlaceholder?: string
    disableToday?: boolean
  }>(),
  {
    startPlaceholder: '请选择开始日期',
    endPlaceholder: '请选择结束日期',
    disableToday: true
  }
)
const emits = defineEmits(['update:range', 'startChange', 'endChange'])
const dateRange = reactive<DateRange>(props.range)

let endDateDisabled = ref<boolean>(true)

// 禁用开始日期
const startDisabledDate = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
  }
}
// 禁用结束日期
const endDisabledDate = (time: Date) => {
  if (dateRange.start) {
    return (
      time.getTime() < new Date(dateRange.start).getTime() + 1000 * 60 * 60 * 24
    )
  }
}

const updateDate = () => {
  console.log(dateRange)
  emits('update:range', {
    start: dateRange.start,
    end: dateRange.end
  })
}
// 监听开始的日期
watch(
  () => dateRange.start,
  (newVal) => {
    if (newVal == '') {
      endDateDisabled.value = true
      dateRange.end = ''
    } else {
      emits('startChange', newVal)
      endDateDisabled.value = false
    }
    updateDate()
  }
)
// 监听结束的日期
watch(
  () => dateRange.end,
  (newVal) => {
    if (newVal != '') {
      emits('endChange', newVal)
    }
    updateDate()
  }
)
</script>

<style lang="scss" scoped>
.choose-date {
  display: flex;
  .start-date {
    margin-right: 20px;
  }
}
</style>
