import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import {
  Chart,
  ArgumentAxis,
  AreaSeries,
  Legend,
  Title,
  ValueAxis
} from '@devexpress/dx-react-chart-material-ui'
import { stackOffsetWiggle, stackOrderInsideOut } from 'd3-shape'
import { Stack, Animation } from '@devexpress/dx-react-chart'
import TitleText from './TitleText'
import Area from './Area'
import style from './style'
import { useData } from '../hooks'

const SteamGraph = () => {
  const [chartData, setChartData] = useState([])
  const [builds, setBuilds] = useState([])
  const { buildingsConsumption, buildings } = useData(4)

  useEffect(() => {
    setBuilds(buildings())
    setChartData(buildingsConsumption())
  }, [])

  if (builds.length && chartData.length) {
    return (
      <Paper style={{ padding: 30, paddingBottom: 50 }}>
        <Chart data={chartData} style={{ paddingLeft: 30 }}>
          <ArgumentAxis tickFormat={() => (tick) => tick} showLabels />
          <ValueAxis tickFormat={() => (tick) => tick} showLabels />

          {builds.map((name, i) => {
            return (
              <AreaSeries
                key={i}
                name={String(name)}
                valueField={name}
                argumentField='time'
                seriesComponent={Area}
              />
            )
          })}
          <Animation />
          <Legend />
          <Title text={`Agregate Buildings Cunsumptions Totals`} textComponent={TitleText} />
          <Stack
            stacks={[{ series: builds }]}
            offset={stackOffsetWiggle}
            order={stackOrderInsideOut}
          />
        </Chart>
      </Paper>
    )
  } else
    return (
      <div style={style.loader}>
        <h2>Loading SteamGraph...</h2>
      </div>
    )
}

export default SteamGraph
