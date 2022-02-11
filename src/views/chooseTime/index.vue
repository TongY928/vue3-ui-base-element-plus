<template>
  <div class="choose-time">
    <choose-time v-model:range="timeRange"></choose-time>
    {{ timeRange }}
  </div>
</template>

<script lang="ts" setup>
import ChooseTime from '@/components/chooseTime/index.vue'
import { reactive } from 'vue'
import { TimeRange } from '@/components/chooseTime/types'
const timeRange = reactive<TimeRange>({
  start: '',
  end: ''
})
</script>

<style lang="scss" scoped></style>
