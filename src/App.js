import React, { useState } from 'react'
import { SteamGraph, ErrorBoundary, ControlsPanel } from './comps'
import style from './style'

const App = () => {
  const [range, setRange] = useState({ start: '2018-12-01 07:00', end: '2018-12-01 13:00' })
  const [number, setNumber] = useState(6)
  return (
    <ErrorBoundary>
      <header style={style.head} />
      <main style={style.cont}>
        <SteamGraph
          start={range.start}
          end={range.end}
          numberOfBuildings={number}
          style={{ margin: 30 }}
        />
        {/* <ControlsPanel {...{ number, setNumber }} /> */}
      </main>
      <footer style={style.foot} />
    </ErrorBoundary>
  )
}

export default App
