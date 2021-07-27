import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '360px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)'
  },
  detailContainer: {
    marginBottom: '.5rem'
  },
  detailTitle: {
    marginRight: '.5rem',
    width: '20%',
    background: '#0f8fff',
    color: 'white',
    padding: '2px',
    fontSize:'1rem',
    fontFamily: 'sans-serif',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
  },
  detailInfo: {
    background: '#94ddff',
    color: 'white',
    width: '70%',
    fontSize:'1rem',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    padding: '0.1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
  },
  title: {
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    fontWeight: 700
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
      <h4 className={classes.title}>Details</h4>
      {details && details.map(detail =>
        <Grid
        className={classes.detailContainer}
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
