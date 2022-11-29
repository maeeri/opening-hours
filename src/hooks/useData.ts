import {
  useStateValue,
  setDisplayHours,
} from '../state'
import { ChangeOpenStatus, DisplayInfo } from '../types'
import transformOpeningHours from '../utils/transformOpeningHours'
import transformToWeekday from '../utils/transformToWeekday'

const useData = () => {
  const [, dispatch] = useStateValue()

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        const hours = Object.keys(myJson).map((key: string) => {
          return {
            day: transformToWeekday(key),
            value: myJson[key] as ChangeOpenStatus[],
          }
        })
        if (hours) {
          const display: DisplayInfo[] = transformOpeningHours(hours)
          dispatch(setDisplayHours(display))
        }
      })
  }
  return { getData }
}

export default useData
