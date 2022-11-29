import Day from './Day'
import { useEffect } from 'react'
import { useStateValue } from '../state'
import useData from '../hooks/useData'
import { DisplayInfo, Weekday } from '../types'
import transformToWeekday from '../utils/transformToWeekday'

export type OpeningHourProps = {
  displayHours: DisplayInfo[]
  todaysDate: Date
}

export const OpeningHoursContainer = ({displayHours, todaysDate}: OpeningHourProps) => {
  const today: Weekday = transformToWeekday(
    todaysDate.toLocaleDateString('en-UK', { weekday: 'long' })
  )

  const todaysOpeningHours = displayHours.find(
    (d) => d.day === today
  )?.openingHours

  return (
    <div>
      <h1>Myymälä</h1>
      {todaysOpeningHours ? <div>Avoinna tänään {todaysOpeningHours}</div> : <div>Tänään suljettu</div>}
      <br/>
      <table>
        <tbody>
          {displayHours.map((item: DisplayInfo) => (
            <Day
              key={item.day}
              day={item.day}
              openingHours={item.openingHours}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const OpeningHours = () => {
  const [{ displayHours }] = useStateValue()
  const { getData } = useData()

  useEffect(() => {
    getData()
  }, [])

  return <OpeningHoursContainer displayHours={displayHours} todaysDate={new Date()} />
}

export default OpeningHours
