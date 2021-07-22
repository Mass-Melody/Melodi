import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

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
  interestTitle: {
    marginRight: '1rem',
    width: '20%',
    background: '#0f8fff',
    color: 'white',
    padding: '3px'
  },
  interestInfo: {
    background: '#94ddff',
    width: '70%'
  }
}))

function Interests() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const interests = useSelector((state) => state.profile.profile.interests)


  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Interests</h4>
      {interests && interests.map(interest =>
        <Grid
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
