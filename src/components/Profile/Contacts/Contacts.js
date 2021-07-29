import React, { useState } from 'react'
import Window from './Window.js'
import Picture from './Picture.js'
import { Grid, makeStyles, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { If, Then } from 'react-if'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '280px',
    border: '2px solid #E2F1F5',
    borderRadius: '15px',
    height: '500px',
    position: 'fixed',
    top: 260,
    right: 0
  },
  contactContainer: {
    width: '280px',
    maxHeight: '400px',
    overflow: 'auto',
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

  title: {
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    cursor: 'pointer'
  }
}))

function Contacts() {
  const friendsList = useSelector((state) => state.profile.listOfFriends)
  const classes = useStyles()
  const [visibility, setVisibility] = useState('500px')
  const toggleFriendsList = () => {
    let show = visibility === '500px' ? '2rem' : '500px'
    setVisibility(show)
  }

  return (
    <>
      <Grid container style={{ width: 160, height: 540, position: 'fixed', bottom: 0, right: 175, margin: 0 }}>
        <Window />
      </Grid>

      <Grid
        container
        direction="column"
        align-items="flex-start"
        justifyContent="flex-start"
        style={{background: 'white'}}
        className={classes.container}
      >
        <Grid item
          className={classes.friendHeading}>
          <p onClick={() => toggleFriendsList()} className={classes.title}>Friends List</p>
        </Grid>
        <Grid
          container
          direction="row"
          align-items="center"
          className={classes.contactContainer}
        >
          <If condition={friendsList.length >= 1}>
            <Then>
            {friendsList.map(friend =>
            <Grid item className={classes.searchResults}>
              <Grid
                container
                direction="row"
                align-items="center"
                justifyContent="space-between"
              >
                <Grid item><Picture friendObj={friend} /></Grid>
              </Grid>
            </Grid>
          )}
            </Then>
          </If>
        </Grid>
      </Grid>
    </>
  )
}
export default Contacts
