export interface AreaCard {
  code: string
  name: string
}
export interface AreaItem extends AreaCard {
  children?: AreaCard[]
}
export interface BindArea {
  province: AreaCard
  city: AreaCard
  area: AreaCard
}
