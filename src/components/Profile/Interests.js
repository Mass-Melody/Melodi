import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '364px',
    height: '360px',
    marginBottom: '1rem',
    padding: '1rem'
  },
  detailTitle: {
    marginRight: '1rem',
    width: '20%',
    background: '#0f8fff',
    color: 'white',
    padding: '3px'
  },
  detailInfo: {
    background: '#94ddff',
    width: '70%'
  }
}))

function Interests() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Interests</h4>
      <Grid
        container>
        <p className={classes.detailTitle}>
          <span>Interest 1</span>
        </p>
        <p  className={classes.detailInfo}>
          Some Info
        </p>
      </Grid>
      <Grid
        container>
        <p className={classes.detailTitle}>
          Interest 2
        </p>
        <p className={classes.detailInfo}>
          Some Info
        </p>
      </Grid>
      <Grid
        container>
        <p className={classes.detailTitle}>
          Interest 3
        </p>
        <p className={classes.detailInfo}>
          Some Info
        </p>
      </Grid>
      <Grid
        container>
        <p className={classes.detailTitle}>
          Interest 4
        </p>
        <p className={classes.detailInfo}>
          Some Info
        </p>
      </Grid>
      <Grid
        container>
        <p className={classes.detailTitle}>
          Interest 5
        </p>
        <p className={classes.detailInfo}>
          Some Info
        </p>
      </Grid>
    </Grid>
  )
}

export default Interests
