import React from 'react'
import './App.css'
import { SteamGraph } from './comps'

const App = (props) => {
  return (
    <>
      <header
        style={{ height: 70, boxShadow: '0px  10px  15px  hsla(0,0%,0%,.1)', width: '100%' }}
      />
      <div style={{ minHeight: '100%', margin: 50 }}>
        <SteamGraph />
      </div>
      <footer style={{ height: 400, width: '100%' }} />
    </>
  )
}

export default App
