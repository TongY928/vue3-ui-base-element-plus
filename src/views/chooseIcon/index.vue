<template>
  <div class="choose-icon">
    <choose-icon v-model:visible="visible">选择图标</choose-icon>
  </div>
</template>

<script lang="ts" setup>
import ChooseIcon from '@/components/chooseIcon/index.vue'
import { ref } from 'vue'
let visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
