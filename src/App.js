import React, { useState, useEffect } from 'react'
import { SteamGraph, ErrorBoundary, ControlsPanel } from './comps'
import style from './style'
import { useData } from './hooks'

const App = () => {
  const [range, setRange] = useState({ start: '2018-12-01 04:00', end: '2018-12-01 11:00' })
  const [number, setNumber] = useState(8)
  const [chartData, setChartData] = useState([])
  const [builds, setBuilds] = useState([])
  const { buildingsConsumption, buildings } = useData(number)

  useEffect(() => {
    setBuilds(buildings())
    setChartData(buildingsConsumption(range.start, range.end))
  }, [number])

  return (
    <ErrorBoundary>
      <header style={style.head} />
      <main style={style.cont}>
        <SteamGraph {...{ series: builds, chartData }} style={{ margin: 30 }} />
        {/* <ControlsPanel {...{ number, setNumber }} /> */}
      </main>
      <footer style={style.foot} />
    </ErrorBoundary>
  )
}

export default App
