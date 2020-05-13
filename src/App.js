import React from 'react'
import { SteamGraph } from './comps'
import style from './style'

const App = () => {
  return (
    <>
      <header style={style.head} />
      <div style={style.cont}>
        <SteamGraph />
      </div>
      <footer style={style.foot} />
    </>
  )
}

export default App
