import { App } from 'vue'
import { humpToLine } from '../utils/shared'
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElMessage,
  ElDialog
} from 'element-plus'
import 'element-plus/dist/index.css'

import * as Icons from '@element-plus/icons-vue'
const icons: Record<string, any> = Icons
export const registerIcons = (app: App<Element>) => {
  for (const key in icons) {
    const name = `el-icon-${humpToLine(key)}`
    app.component(name, icons[key])
  }
}

const components = [
  ElAside,
  ElAvatar,
  ElButton,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElMessage,
  ElDialog
]
export const registerComponent = (app: App): void => {
  for (const component of components) {
    app.component(component.name, component)
  }
}
