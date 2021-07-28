import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '1rem'
  },
  picture: {
    borderRadius: '10px',
    width: 940,
    height: 500
  }
}))


function Hero() {
  const picture = useSelector((state) => (state.profile.profile.hero) || `https://via.placeholder.com/940x500`)
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img className={classes.picture} src={picture} alt="Hero" />
    </div>
  )
}

export default Hero
