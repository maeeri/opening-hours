import { ChangeOpenStatus, DateInfo, DisplayInfo } from '../types'

//transforms opening hour info
const transformOpeningHours = (openingHours: DateInfo[]): DisplayInfo[] => {
  const openingHoursAfterChange: DateInfo[] = []

  for (let i = 0; i < openingHours.length; i++) {
    const hours = getHours(openingHours[i])
    sortHours(hours)

    //if the first value of a day's opening hour info is closing time, the time object is moved to the previous day
    if (hours[0] && hours[0].type === 'close') {
      openingHoursAfterChange[i - 1].value.push(hours[0])
      hours.splice(0, 1)
    }

    openingHoursAfterChange.push({ day: openingHours[i].day, value: hours })
  }

  //transforms data into displayable form
  const result: DisplayInfo[] = openingHoursAfterChange.map((info) => {
    const temp = info.value.map((h) => {
      const time =
        typeof h?.value === 'number' && h?.value > 12
          ? `${h?.value - 12}PM`
          : `${h?.value}AM`

      return h?.type === 'open' ? `${time}-` : `${time} `
    })
    return { day: info.day, openingHours: temp.join().replaceAll(',', '') }
  })

  return result
}

//sorts opening hour info by time
const sortHours = (hours: ChangeOpenStatus[]) => {
  hours.sort(function (a: ChangeOpenStatus, b: ChangeOpenStatus) {
    if (a === undefined || b === undefined) return -1
    else if (a.value === b.value) return 0
    else if (a.value > b.value) return 1
    else return -1
  })
}

//extracts opening hour info from string in data
const getHours = (data: DateInfo) => {
  return data?.value.map((v) => {
    if (v && typeof v.value === 'string') {
      const [hour, minute, second] = v.value.split(': ')
      return { type: v.type, value: Number(hour) }
    }
  })
}

export default transformOpeningHours
