import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    height: '400px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)',
    background: 'white'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Aboutme() {
  const classes = useStyles()
  const about = useSelector((state) => state.profile.profile.aboutMe)

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>About Me</h4>
      <p> {about} </p>
    </Grid>
  )
}

export default Aboutme
