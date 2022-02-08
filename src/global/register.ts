import { App } from 'vue'
import { humpToLine } from '../utils/shared'
export const registerIcons = (
  app: App<Element>,
  icons: Record<string, any>
) => {
  for (const key in icons) {
    const name = `el-icon-${humpToLine(key)}`
    app.component(name, icons[key])
  }
}
