import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { populateFriends } from '../../store/profile.js'
import Remove from './Remove.js'
import Picture from './Picture.js'


const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e0e0e0',
    height: "100vh"
  },
  searchResults: {
    width: '680px',
    background: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    padding: '1rem',
    margin: '0px auto'
  },
  searchHeader: {
    width: '680px',
    background: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '6px',
    margin: '100px auto',
    padding: '1rem',
    marginBottom: '1rem'
  },
  addButton: {
    fontSize: 'large'
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'sans-serif'
  }
}))

function Friends() {
  const friendsList = useSelector((state) => state.profile.listOfFriends)
  const currentProfile = useSelector((state) => state.profile.profile.friends)
  const yourProfile = useSelector((state) => state.profile.personalProfile)
  const classes = useStyles()
  const { username } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(populateFriends(currentProfile))
  },[])

  return (
    <Grid
      container
      direction="column"
      align-items="center"
      justifyContent="flex-start"
      className={classes.container}
    >
      <Grid
        item
        className={classes.searchHeader}
      >
        <h3 className={classes.title}>Friends ({friendsList.length})</h3>
      </Grid>
      {friendsList && friendsList.map(friend =>
        <Grid item>
          <Grid
            container
            direction="row"
            align-items="center"
            justifyContent="space-between"
            className={classes.searchResults}
          >
            <Grid item><Picture friendObj={friend} /></Grid>
            <Grid item><Remove friendName={friend} /></Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
export default Friends
