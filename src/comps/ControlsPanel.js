import React from 'react'
import style from '../style'
import { Button, Typography } from '@material-ui/core'

const NUMBER_OF_BUILDINGS = [1, 3, 5, 7]

const ControlsPanel = ({ number, setNumber }) => (
  <section style={style.controls}>
    <Typography variant='h5' component='h5'>
      Choose the number of Buildings to display
    </Typography>
    {NUMBER_OF_BUILDINGS.map((val) => (
      <Button
        color={number == val ? 'primary' : 'default'}
        onClick={() => setNumber(val)}
        style={style.button}
        size='large'>
        {val}
      </Button>
    ))}
  </section>
)

export default ControlsPanel
