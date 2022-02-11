<template>
  <div class="choose-time">
    <div class="start-time">
      <el-time-select
        v-model="range.start"
        :placeholder="startTimeSettings.placeholder"
        :start="startTimeSettings.timeStart"
        :step="startTimeSettings.timeStep"
        :end="startTimeSettings.timeEnd"
        v-bind="$attrs.startOptions"
      ></el-time-select>
    </div>
    <div class="end-time">
      <el-time-select
        v-model="range.end"
        :min-time="minTime"
        :placeholder="endTimeSettings.placeholder"
        :start="endTimeSettings.timeStart"
        :step="endTimeSettings.timeStep"
        :end="endTimeSettings.timeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      ></el-time-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { TimeRange, BaseTimerSetting, EndTimerSetting } from './types'
const props = defineProps<{
  range: TimeRange
  startTimeSetting?: BaseTimerSetting
  endTimeSetting?: EndTimerSetting
}>()
const emits = defineEmits(['update:timeRange', 'startChange', 'endChange'])

const baseSettings = {
  timeStart: '08:00',
  timeEnd: '24:00',
  timeStep: '00:30'
}
const startTimeSettings: BaseTimerSetting = Object.assign(
  baseSettings,
  props.startTimeSetting,
  {
    placeholder: '请选择开始时间'
  }
)
const endTimeSettings: EndTimerSetting = Object.assign(
  baseSettings,
  props.startTimeSetting,
  {
    placeholder: '请选择结束时间'
  }
)
const range = reactive<TimeRange>(props.range)
const endTimeDisabled = ref<boolean>(true)
const minTime = ref<string>('')

const updateTimeRange = () => {
  emits('update:timeRange', {
    start: range.start,
    end: range.end
  })
}
watch(
  () => range.start,
  (newVal) => {
    if (newVal == '') {
      range.end = ''
      endTimeDisabled.value = true
    } else {
      endTimeDisabled.value = false
      emits('startChange', newVal)
    }
    updateTimeRange()
  }
)
watch(
  () => range.end,
  (newVal) => {
    if (newVal != '') {
      emits('endChange', newVal)
    }
    updateTimeRange()
  }
)
</script>

<style lang="scss" scoped>
.choose-time {
  display: flex;
  .start-time {
    margin-right: 20px;
  }
}
</style>
