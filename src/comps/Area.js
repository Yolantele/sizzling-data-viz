import React from 'react'
import { AreaSeries } from '@devexpress/dx-react-chart-material-ui'
import { curveCatmullRom, area } from 'd3-shape'

const Area = (props) => {
  const path = area()
    .x(({ arg }) => arg)
    .y1(({ val }) => val)
    .y0(({ startVal }) => startVal)
    .curve(curveCatmullRom)

  return <AreaSeries.Path {...props} path={path} />
}
export default Area
