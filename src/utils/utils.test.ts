import { Weekday } from '../types'
import transformOpeningHours from './transformOpeningHours'
import transformToWeekday from './transformToWeekday'
import { DateInfo } from '../types'

const data: DateInfo[] = [
  {
    day: Weekday.Monday,
    value: [
      {
        type: 'open',
        value: '13: 00: 00',
      },
    ],
  },
  {
    day: Weekday.Tuesday,
    value: [
      {
        type: 'close',
        value: '2: 00: 00',
      },
      {
        type: 'open',
        value: '8: 00: 00',
      },
      {
        type: 'close',
        value: '17: 00: 00',
      },
    ],
  },
  {
    day: Weekday.Wednesday,
    value: [
      {
        type: 'open',
        value: '8: 00: 00',
      },
      {
        type: 'close',
        value: '17: 00: 00',
      },
    ],
  },
  {
    day: Weekday.Thursday,
    value: [],
  },
  {
    day: Weekday.Friday,
    value: [
      {
        type: 'open',
        value: '17: 00: 00',
      },
      {
        type: 'close',
        value: '23: 00: 00',
      },
    ],
  },
  {
    day: Weekday.Saturday,
    value: [
      {
        type: 'open',
        value: '8: 00: 00',
      },
      {
        type: 'close',
        value: '18: 00: 00',
      },
    ],
  },
  {
    day: Weekday.Sunday,
    value: [],
  },
]

describe('opening hour transform', () => {
  it('works', () => {
    const displayHours = transformOpeningHours(data)

    expect(displayHours).toContainEqual({
      day: 'Maanantai',
      openingHours: '1PM-2AM ',
    })
  })
})

describe('transform to weekdays', () => {
  it('works with vadid weekdays', () => {
    const monday = transformToWeekday('Monday')
    const tuesday = transformToWeekday('Tuesday')
    const wednesday = transformToWeekday('Wednesday')
    const thursday = transformToWeekday('Thursday')
    const friday = transformToWeekday('Friday')
    const saturday = transformToWeekday('Saturday')
    const sunday = transformToWeekday('Sunday')

    expect(monday).toBe(Weekday.Monday)
    expect(tuesday).toBe(Weekday.Tuesday)
    expect(wednesday).toBe(Weekday.Wednesday)
    expect(thursday).toBe(Weekday.Thursday)
    expect(friday).toBe(Weekday.Friday)
    expect(saturday).toBe(Weekday.Saturday)
    expect(sunday).toBe(Weekday.Sunday)
  })

  it('returns error on non-valid weekday', () => {
    try {
      transformToWeekday('testing')
      expect(true).toBe(false)
    } catch (e: any) {
      expect(e.message).toBe('This is not a weekday: testing')
    }
  })
})
