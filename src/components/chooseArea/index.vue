<template>
  <div class="choose-area">
    <el-select
      clearable
      placeholder="请选择省份"
      v-model="ChooseAreas.province.code"
    >
      <el-option
        v-for="item in Areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!ChooseAreas.province.code"
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="ChooseAreas.city.code"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!ChooseAreas.province.code || !ChooseAreas.city.code"
      placeholder="请选择区域"
      v-model="ChooseAreas.area.code"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import areas from './lib/pca-code.json'
import { AreaCard, AreaItem, BindArea } from './types'

const props = defineProps<{
  area: BindArea
}>()
// 返回选择的联级列表
const emits = defineEmits(['change', 'update:area'])
const Areas = ref<AreaItem[]>(areas)
// 选择的 target
let ChooseAreas = reactive<BindArea>(props.area)

// select-list
let selectCity = ref<AreaItem[]>([])
let selectArea = ref<AreaItem[]>([])

const selectMap = [
  {
    areaType: 'p',
    map: Areas
  },
  {
    areaType: 'c',
    map: selectCity
  },
  {
    areaType: 'a',
    map: selectArea
  }
]
const initCard = (card: AreaCard) => {
  card.code = ''
  card.name = ''
  emits('update:area', {
    province: ChooseAreas.province,
    city: ChooseAreas.city,
    area: ChooseAreas.area
  })
}
const updateCard = (type: string, card: AreaCard) => {
  const map = selectMap || []
  const select = map.find((item) => item.areaType == type)?.map.value || []
  const name = select.find((item) => item.code == card.code)?.name || ''
  card.name = name
  emits('update:area', {
    province: ChooseAreas.province,
    city: ChooseAreas.city,
    area: ChooseAreas.area
  })
  emits('change', card)
}
// 选择省份
watch(
  () => ChooseAreas.province.code,
  (newVal) => {
    if (newVal != '') {
      const cities =
        Areas.value.find((item) => item.code == ChooseAreas.province.code)
          ?.children || []
      selectCity.value = cities
    }
    initCard(ChooseAreas.city)
    initCard(ChooseAreas.area)
    // update
    updateCard('p', ChooseAreas.province)
  }
)
// 选择城市
watch(
  () => ChooseAreas.city.code,
  (newVal) => {
    if (newVal != '') {
      let area =
        selectCity.value.find((item) => item.code === ChooseAreas.city.code)
          ?.children || []
      selectArea.value = area
    }
    initCard(ChooseAreas.area)
    // update
    updateCard('c', ChooseAreas.city)
  }
)
// 选择区域
watch(
  () => ChooseAreas.area.code,
  () => {
    // update
    updateCard('a', ChooseAreas.area)
  }
)

watch(
  () => props.area,
  (newVal) => {
    ChooseAreas = newVal
  }
)
</script>

<style lang="scss" scoped></style>
