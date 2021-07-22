import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)'
  }
}))

function Interactions() {
  const classes = useStyles()
 
  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Interactions</h4>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <a href="/friends">Friends</a>
        </Grid>
        <Grid item>
          <a href="/">Follow</a>
        </Grid>
        <Grid item>
          <a href="/">Other1</a>
        </Grid>
        <Grid item>
          <a href="/">Other2</a>
        </Grid>
        <Grid item>
          <a href="/">Other3</a>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Interactions
