import { DisplayInfo } from '../types'

const Day = ({ day, openingHours }: DisplayInfo) => {
  const style = {
    display: 'inline',
  }

  return (
    <tr>
      <td>{day.toString()}</td>
      <td>
        {openingHours.length > 0 ? (
          <div style={style}>{openingHours} </div>
        ) : (
          <div style={style} key={Math.floor(Math.random() * 10000000)}>
            suljettu
          </div>
        )}
      </td>
    </tr>
  )
}

export default Day
