<template>
  <div class="choose-area">
    <choose-area v-model:area="area" @change="co" />
    {{ area }}
    <el-button @click="handleChange" type="success">修改值</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import ChooseArea from '@/components/chooseArea/index.vue'
import { BindArea } from '@/components/chooseArea/types'
let area = reactive<BindArea>({
  province: {
    code: '',
    name: ''
  },
  city: {
    code: '',
    name: ''
  },
  area: {
    code: '',
    name: ''
  }
})
const co = (val: any) => {
  console.log(val)
}
const handleChange = () => {
  area.province = {
    code: '11',
    name: '北京市'
  }
}
</script>

<style lang="scss" scoped></style>
