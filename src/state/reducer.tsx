import { DisplayInfo } from '../types'
import { State } from './state'

export type Action = {
  type: 'SET_DISPLAY_HOURS'
  data: DisplayInfo[]
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_DISPLAY_HOURS':
      return {
        ...state,
        displayHours: action.data,
      }
    default:
      return state
  }
}

export const setDisplayHours = (displayHours: DisplayInfo[]): Action => {
  return { type: 'SET_DISPLAY_HOURS', data: displayHours }
}
