import { App } from 'vue'
import { registerIcons, registerComponent } from './register'

export const globalRegister = (app: App) => {
  registerIcons(app)
  registerComponent(app)
}
