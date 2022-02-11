<template>
  <div class="choose-date">
    <choose-date v-model:range="dateRange"></choose-date>
    {{ dateRange }}
  </div>
</template>

<script lang="ts" setup>
import ChooseDate from '@/components/chooseDate/index.vue'
import { DateRange } from '@/components/chooseDate/types'
import { reactive } from 'vue'
const dateRange = reactive<DateRange>({
  start: '',
  end: ''
})
</script>

<style lang="scss" scoped></style>
