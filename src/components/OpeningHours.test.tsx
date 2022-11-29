import { render, screen } from '@testing-library/react'
import { OpeningHoursContainer } from './OpeningHours'
import { DisplayInfo, Weekday } from '../types'

export const data: DisplayInfo[] = [
  {
    day: Weekday.Monday,
    openingHours: '8AM-2PM',
  },
  {
    day: Weekday.Tuesday,
    openingHours: '5PM-2AM',
  },
  {
    day: Weekday.Wednesday,
    openingHours: '8AM-1PM 3PM-8PM',
  },
  {
    day: Weekday.Thursday,
    openingHours: '',
  },
  {
    day: Weekday.Friday,
    openingHours: '',
  },
  {
    day: Weekday.Saturday,
    openingHours: '1AM-6AM',
  },
  {
    day: Weekday.Sunday,
    openingHours: '',
  },
]

describe('opening hours container', () => {
  it("renders today's opening hour info", () => {
    //tuesday
    render(
      <OpeningHoursContainer
        displayHours={data}
        todaysDate={new Date('2022-11-29')}
      />
    )

    const element = screen.getByText('Avoinna tänään 5PM-2AM')
    expect(element).toBeDefined()
  })

  it('renders "Tänään suljettu", if today\'s date is on a day without opening hours', () => {
    //thursday
    render(
      <OpeningHoursContainer
        displayHours={data}
        todaysDate={new Date('2022-12-1')}
      />
    )

    const element = screen.getByText('Tänään suljettu')
    expect(element).toBeDefined()
  })
})
