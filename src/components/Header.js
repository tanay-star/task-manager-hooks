import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#a685e2',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar></Toolbar>
    </AppBar>
  )
}

export default Header
