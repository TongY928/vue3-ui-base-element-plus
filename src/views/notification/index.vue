<template>
  <div class="notification">
    <Notification value="50">
      <template #default>
        <List
          @clickItem="clickItem"
          @clickAction="clickAction"
          :listInfo="list"
          :actions="actions"
        ></List>
      </template>
    </Notification>
  </div>
</template>

<script lang="ts" setup>
import Notification from '@/components/notification/index.vue'
import List from '@/components/list/index.vue'
import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>

<style lang="scss" scoped></style>
