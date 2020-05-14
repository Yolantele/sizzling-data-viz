import React, { useState, useEffect } from 'react'
import { SteamGraph, ErrorBoundary } from './comps'
import style from './style'
import { useData } from './hooks'

const App = () => {
  const range = { start: '2018-12-01 05:00', end: '2018-12-01 10:00' }
  const [chartData, setChartData] = useState([])
  const [builds, setBuilds] = useState([])
  const { buildingsConsumption, buildings } = useData(4)

  useEffect(() => {
    setBuilds(buildings())
    setChartData(buildingsConsumption(range.start, range.end))
  }, [])

  return (
    <ErrorBoundary>
      <header style={style.head} />
      <main style={style.cont}>
        <SteamGraph
          {...{
            key: 1,
            series: builds,
            chartData,
            title: `Aggregate Totals of Buildings Energy Cunsumption`,
            overlay: false
          }}
        />
        <SteamGraph
          {...{
            key: 2,
            series: builds,
            chartData,
            title: 'Comparative Totals of Buildings Energy Consumption',
            overlay: true
          }}
        />
      </main>
      <footer style={style.foot} />
    </ErrorBoundary>
  )
}

export default App
