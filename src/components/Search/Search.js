import React from 'react'
import Add from './Add.js'
import Picture from './Picture.js'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e0e0e0',
    height: "100vh"
  },
  searchResults: {
    width: '680px',
    background: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '6px',
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
    fontSize: 'large',
    cursor: 'pointer'
  }
}))


function Search() {
  const classes = useStyles()
  const currentState = useSelector((state) => state.profile)
  const filteredUsers = currentState.users.filter(value => value.username !== currentState.personalProfile)

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
        <h3>Search results for -Search goes here-</h3>
      </Grid>
      {filteredUsers && filteredUsers.map(user =>
        <Grid item>
          <Grid
            container
            direction="row"
            align-items="center"
            justifyContent="space-between"
            className={classes.searchResults}
          >
            <Grid item><Picture userObj={user} /></Grid>
            <Grid item><Add userObj={user} /></Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
export default Search
