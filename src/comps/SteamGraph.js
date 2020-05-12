import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import {
  Chart,
  ArgumentAxis,
  AreaSeries,
  Legend,
  Title
} from '@devexpress/dx-react-chart-material-ui'
import { stackOffsetWiggle, stackOrderInsideOut, curveCatmullRom, area } from 'd3-shape'
import { Stack, Animation } from '@devexpress/dx-react-chart'
import { booksSale } from '../data/testData'
import TitleText from './TitleText'
import Area from './Area'
import buildinData from '../data/building_data'
import halfHourlyData from '../data/halfhourly_data'

const energyUse = [
  {
    reading_date_time: '"2018-12-01 00:00"',
    water_consumption: 57.8,
    gas: 131.9423,
    electricity: 302.0
  },
  {
    water_consumption: 89.1447,
    reading_date_time: '2018-12-01 01:00',
    gas: 11.9423,
    electricity: 40.0
  },
  {
    water_consumption: 183.7,
    reading_date_time: '2018-12-01 02:00',
    gas: 81.9423,
    electricity: 38.0
  },
  {
    water_consumption: 70.6502,
    reading_date_time: '2018-12-01 03:00',
    gas: 100.9423,
    electricity: 48.0
  },
  {
    water_consumption: 70.1,
    reading_date_time: '2018-12-01 04:00',
    gas: 71.9423,
    electricity: 20.0
  },
  {
    water_consumption: 17.153,
    reading_date_time: '2018-12-01 05:00',
    gas: 41.9423,
    electricity: 90
  }
]

const SteamGraph = (props) => {
  //   const [chartData, setChartData] = useState(booksSale)
  const [chartData, setChartData] = useState(energyUse)

  return (
    <Paper>
      <Chart data={chartData} style={{ paddingLeft: '20px' }}>
        <ArgumentAxis tickFormat={() => (tick) => tick} />

        <AreaSeries
          name='Water'
          valueField='water_consumption'
          argumentField='reading_date_time'
          seriesComponent={Area}
        />
        {/* <AreaSeries
          name='Science Fiction'
          valueField='scienceFiction'
          argumentField='year'
          seriesComponent={Area}
        />
        <AreaSeries
          name='Romance'
          valueField='romance'
          argumentField='year'
          seriesComponent={Area}
        />*/}
        <AreaSeries
          name='Electricity'
          valueField='electricity'
          argumentField='reading_date_time'
          seriesComponent={Area}
        />
        <AreaSeries
          name='Gas'
          valueField='gas'
          argumentField='reading_date_time'
          seriesComponent={Area}
        />
        <Animation />
        <Legend />
        <Title text='Energy Usage' textComponent={TitleText} />
        <Stack
          stacks={[{ series: ['Water', 'Gas', 'Electricity'] }]}
          offset={stackOffsetWiggle}
          order={stackOrderInsideOut}
        />
      </Chart>
    </Paper>
  )
}

export default SteamGraph
