import React, { Component } from 'react'
import { Button, Paper, Typography } from '@material-ui/core'
import style from './style'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error is ---->', error)
    console.log('error info ---->', errorInfo)
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return (
        <div style={style.errorPage}>
          <Paper>
            <Typography variant='h5' component='h5'>
              Something went wrong... Please try again.
            </Typography>
            <Button color='primary' onClick={() => window.location.replace('/ ')}>
              Reload Page
            </Button>
          </Paper>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
