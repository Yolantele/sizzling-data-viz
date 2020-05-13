import React, { useState, useEffect } from 'react'
import { Paper } from '@material-ui/core'
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
import PropTypes from 'prop-types'
import { prototype } from 'module'

const SteamGraph = ({ start, end, numberOfBuildings }) => {
  const [chartData, setChartData] = useState([])
  const [builds, setBuilds] = useState([])
  const { buildingsConsumption, buildings } = useData(numberOfBuildings)

  useEffect(() => {
    setBuilds(buildings())
    setChartData(buildingsConsumption(start, end))
  }, [numberOfBuildings])

  if (builds.length && chartData.length) {
    return (
      <Paper style={{ padding: 30, paddingBottom: 50 }}>
        <Chart data={chartData} style={{ paddingLeft: 30 }}>
          <ArgumentAxis tickFormat={() => (tick) => tick} />
          <ValueAxis tickFormat={() => (tick) => tick} />

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
          <Title text={`Aggregate Buildings Cunsumptions Totals`} textComponent={TitleText} />
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
        <h2>Loading Aggregate Buildings Enery Consumption Totals...</h2>
      </div>
    )
}

SteamGraph.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  numberOfBuildings: PropTypes.number
}

export default SteamGraph
