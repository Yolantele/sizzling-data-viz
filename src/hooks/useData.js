import buildingData from '../data/building_data'
import halfHourlyData from '../data/halfhourly_data'
import meterData from '../data/meter_data'
import moment from 'moment'

const HALF_HOUR = 1800000
const SHORTEN = 5

const useData = (numberOfBuildings = 5) => {
  const A_SELECTION = numberOfBuildings
  const findBuildingMeters = (buildingId) => {
    return meterData.filter((b) => b.building_id === buildingId)
  }

  const calculateTotal = (meters, time, dataRange) => {
    let totalConsumption = 0
    meters.forEach((m) => {
      let slice = dataRange.filter(
        (half) => half.meter_id === m.id && half.reading_date_time === time
      )
      if (slice.length) totalConsumption += slice[0].consumption
    })
    return Math.floor(totalConsumption)
  }

  const slotSnapshot = (dataRange, time) => {
    let slice = { time }
    buildingData.slice(0, A_SELECTION).forEach((building) => {
      const meters = findBuildingMeters(building.id)
      dataRange.forEach((r) => {
        slice[building.name.slice(0, SHORTEN)] = calculateTotal(meters, time, dataRange)
      })
    })
    return slice
  }
  const calculateTimeSlots = (startTime, endTime) => {
    let timeDif = moment(endTime) - moment(startTime)
    var tempTime = moment.duration(timeDif)
    return tempTime.hours() * 2
  }

  const buildingsConsumption = (startTime = '2018-12-01 11:00', endTime = '2018-12-01 16:00') => {
    let range = []
    let times = calculateTimeSlots(startTime, endTime)
    let dataRange = halfHourlyData.filter(
      (r) => r.reading_date_time <= endTime && r.reading_date_time >= startTime
    )

    for (var i = 0; i < times; i++) {
      let time = moment(startTime) + i * HALF_HOUR
      time = moment(time).format('YYYY-MM-DD hh:mm')
      let slice = slotSnapshot(dataRange, time)
      range.push(slice)
    }

    return range
  }

  const buildings = () => {
    let names = []
    buildingData.slice(0, A_SELECTION).forEach((build) => names.push(build.name.slice(0, SHORTEN)))
    return names
  }
  return { buildingsConsumption, buildings }
}

export default useData
