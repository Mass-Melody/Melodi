import React from 'react'
// import Window from './Window.js'
import Picture from './Picture.js'
import { Grid, makeStyles, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: '280px',
    border: '2px solid black',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    overflow: 'auto'
  },
  searchResults: {
    width: '100%',
    background: 'white',
    padding: '1rem',
    margin: '0px auto',
  },
  friendHeading: {
    background: '#69bef7',
    color: 'white',
    padding: '10px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    margin: '0 auto',
    width: '100%'
  },
  contacts: {
    position: 'fixed',
    top: '30%',
    bottom: 0,
    right: 0,
    width: '700px',
    display: 'flex',
    alignItems: "flex-end",
justifyContent:"flex-end"
  }
}))

function Contacts() {
  const friendsList = useSelector((state) => state.profile.profile.friends)
  const classes = useStyles()
  return (
    <Grid container
      direction="row"
      align-items="flex-end"
      justifyContent="flex-end"
      className={classes.contacts}>
      {/* <Window /> */}

      <Grid
        container
        direction="row"
        align-items="center"
        justifyContent="flex-start"
        className={classes.container}
      >
        <Grid item
          className={classes.friendHeading}>
          <p >Friends List</p>
        </Grid>
        {friendsList && friendsList.map(friend =>
          <>
            <Grid item className={classes.searchResults}>
              <Grid
                container
                direction="row"
                align-items="center"
                justifyContent="space-between"

              >
                <Grid item><Picture friendObj={friend} /></Grid>
              </Grid>
              <Divider />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  )
}
export default Contacts
