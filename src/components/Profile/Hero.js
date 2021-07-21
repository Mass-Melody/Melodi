import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '1rem'
  },
  picture: {
    borderRadius: '10px'
  }
}))


function Hero() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img className={classes.picture} src="https://via.placeholder.com/940x500" alt="Hero"/>
    </div>
  )
}

export default Hero
