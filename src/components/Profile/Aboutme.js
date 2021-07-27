import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '400px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)',
    background: 'white'
  },
  title: {
    fontSize: '1.4rem',
    fontFamily: 'sans-serif',
    marginBottom:'3rem',
    fontWeight: 700
  },
  font: {
    fontSize:'1rem',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
  }
}))

function Aboutme() {
  const classes = useStyles()
  const about = useSelector((state) => state.profile.profile.aboutMe)

  return (
    <Grid
      container
      direction="column"
      align="flex-start"
      className={classes.container}
    >
      <h4 className={classes.title}>About Me</h4>
      <p className={classes.font}> {about} </p>
    </Grid>
  )
}

export default Aboutme
