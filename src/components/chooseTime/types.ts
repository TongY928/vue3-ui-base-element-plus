export interface TimeRange {
  start: string
  end: string
}
export interface BaseTimerSetting {
  timeStart?: string
  timeEnd?: string
  timeStep?: string
  placeholder?: string
}
export interface EndTimerSetting extends BaseTimerSetting {
  minTime?: string
}
