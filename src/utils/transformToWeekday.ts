import { Weekday } from '../types'

const assertNotValid = (value: string): never => {
  throw new Error(
    `This is not a weekday: ${value}`
  )
}

const transformToWeekday = (day: string): Weekday => {
  switch (day) {
    case 'Monday':
      return Weekday.Monday
    case 'Tuesday':
      return Weekday.Tuesday
    case 'Wednesday':
      return Weekday.Wednesday
    case 'Thursday':
      return Weekday.Thursday
    case 'Friday':
      return Weekday.Friday
    case 'Saturday':
      return Weekday.Saturday
    case 'Sunday':
      return Weekday.Sunday
    default:
      return assertNotValid(day)
  }
}

export default transformToWeekday
