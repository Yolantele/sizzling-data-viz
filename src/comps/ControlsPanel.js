import React from 'react'
import style from '../style'
import { Button, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const NUMBER_OF_BUILDINGS = [1, 3, 5, 7]

const ControlsPanel = ({ number, setNumber }) => (
  <section style={style.controls}>
    <Typography variant='h5' component='h5'>
      Choose the number of Buildings to display
    </Typography>
    {NUMBER_OF_BUILDINGS.map((val) => (
      <Button
        color={number === val ? 'primary' : 'default'}
        onClick={() => setNumber(val)}
        style={style.button}
        size='large'>
        {val}
      </Button>
    ))}
  </section>
)

ControlsPanel.propTypes = {
  setNumber: PropTypes.func,
  number: PropTypes.number
}

export default ControlsPanel
