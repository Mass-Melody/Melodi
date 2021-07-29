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
  interestTitle: {
    marginRight: '.5rem',
    width: '20%',
    background: '#0f8fff',
    color: 'white',
    padding: '2px',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    border: '3px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  interestContainer: {
    marginBottom: '.5rem'
  },
  interestInfo: {
    background: '#94ddff',
    color: 'black',
    width: '70%',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    padding: '0.1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    border: '3px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    fontWeight: 700,
    textDecoration: 'underline'
  }
}))

function Interests() {
  const classes = useStyles()
  const interests = useSelector((state) => state.profile.profile.interests)


  return (
    <Grid
      container
      className={classes.container}
    >
      <h4 className={classes.title}>Interests</h4>
      {interests && interests.map(interest =>
        <Grid
          className={classes.interestContainer}
          container>
          <p className={classes.interestTitle}>
            {interest.name}
          </p>
          <p className={classes.interestInfo}>
            {interest.info}
          </p>
        </Grid>
      )
      }
    </Grid>
  )
}

export default Interests
