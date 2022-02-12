<template>
  <div class="progress">
    <Progress v-model:percentage="percentage" :is-animate="true" />
    {{ percentage }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Progress from '@/components/progress/index.vue'

const percentage = ref(0)
</script>

<style lang="scss" scoped></style>
