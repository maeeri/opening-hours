import { render, screen } from '@testing-library/react'
import { DisplayInfo } from '../types'
import Day from './Day'
import { data } from './OpeningHours.test'

describe('day view', () => {
  it('renders full opening hours for a day that has two opening times', () => {
    const info: DisplayInfo = data[2]
    render(<Day day={info.day} openingHours={info.openingHours} />)

    const element = screen.getByText('8AM-1PM 3PM-8PM')
    expect(element).toBeDefined()
  })

  it('renders "suljettu" when there are no opening hours', () => {
    const info: DisplayInfo = data[3]
    render(<Day day={info.day} openingHours={info.openingHours} />)

    const element = screen.getByText('suljettu')
    expect(element).toBeDefined()
  })
})
