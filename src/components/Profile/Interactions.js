import React from 'react'
import { Link } from "react-router-dom";
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
// import { populateFriends } from '../../store/profile.js'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)'
  },
  font: {
    fontSize:'1rem',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
  },
  title: {
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    marginBottom:'3rem',
    fontWeight: 700
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
      direction="column"
      alignItems="flex-start"
      justifyContent="space-around"
      className={classes.container}
    >
      <h4 className={classes.title}>Interactions</h4>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Link to={`/friends/${username}`} className={classes.font}>
            Friends
          </Link>
        </Grid>
        <Grid item>
          <a href="/" className={classes.font}>Follow</a>
        </Grid>
        {/* <Grid item>
          <a href="/" className={classes.font}>Other1</a>
        </Grid>
        <Grid item>
          <a href="/" className={classes.font}>Other2</a>
        </Grid>
        <Grid item>
          <a href="/" className={classes.font}>Other3</a>
        </Grid> */}
      </Grid>
    </Grid>
  )
}

export default Interactions
