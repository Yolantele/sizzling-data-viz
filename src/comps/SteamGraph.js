import React from 'react'
import { Paper, Typography } from '@material-ui/core'
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
import PropTypes from 'prop-types'

const SteamGraph = ({ series, chartData, overlay, title, key }) => {
  if (series.length > 0 && chartData.length > 0) {
    return (
      <Paper style={style.paper} key={key}>
        {chartData.length && (
          <Chart data={chartData} style={{ paddingLeft: 30 }}>
            <ArgumentAxis tickFormat={() => (tick) => tick} />
            <ValueAxis tickFormat={() => (tick) => tick} />
            {series.length &&
              series.map((name, i) => {
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
            <Title text={title} textComponent={TitleText} />
            {!overlay && (
              <Stack stacks={[{ series }]} offset={stackOffsetWiggle} order={stackOrderInsideOut} />
            )}
          </Chart>
        )}
      </Paper>
    )
  } else
    return (
      <Typography variant='h5' component='h5'>
        Loading the Aggregate data view for Buildings Energy Use...
      </Typography>
    )
}

SteamGraph.propTypes = {
  series: PropTypes.arrayOf(PropTypes.string).isRequired,
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
  overlay: PropTypes.bool,
  title: PropTypes.string.isRequired,
  key: PropTypes.Number
}

export default SteamGraph
