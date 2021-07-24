import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    height: '360px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)'
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
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

function Details(props) {
  const classes = useStyles()
  const details = useSelector((state) => state.profile.profile.details)

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Details</h4>
      {details && details.map(detail =>
        <Grid
          container>
          <p className={classes.detailTitle}>
            {detail.name}
          </p>
          <p className={classes.detailInfo}>
            {detail.info}
          </p>
        </Grid>
      )
      }
    </Grid>
  )
}

export default Details
