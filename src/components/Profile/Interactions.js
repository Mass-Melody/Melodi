import React from 'react'
import { Link } from "react-router-dom";
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
// import { populateFriends } from '../../store/profile.js'

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
  const username = useSelector((state) => state.profile.profile.username)
  const dispatch = useDispatch()
  // const uploadFriends = (friendsList) => {
  //   dispatch(populateFriends)
  // }


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
          <Link to={`/friends/${username}`}>
            Friends
          </Link>
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
