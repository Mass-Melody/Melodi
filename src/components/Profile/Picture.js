import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'white',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Picture() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Name will go here</h4>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid className={classes.picture}>
          <img src="https://via.placeholder.com/171x180" alt="Hero" />
        </Grid>
        <Grid>
          <p>Age goes here</p>
          <p>Location goes here</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Picture
