import React from 'react'
import { Grid } from '@material-ui/core';
import Hero from './Hero.js'
import Picture from './Picture.js'
import Posts from './Posts.js'
import Interactions from './Interactions.js'
import Playlist from './Playlist.js'
import Interests from './Interests.js'
import Details from './Details.js'
import Aboutme from './Aboutme.js'
import Contacts from './Contacts/Contacts.js'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '940px',
    margin: 'auto'
  },
  left: {
    width: '360px'
  },
  right: {
    width: '500px'
  }
}))

function Profile() {
  const classes = useStyles()

  return (
    <>
    <Grid 
    container
    direction="row"
    justifyContent="space-around"
    alignItems="flex-start"
    className={classes.container}
    >
      <Hero />
      <Grid item
        className={classes.left}
      >
        {/* LEFT */}
        <Picture />
        <Interactions />
        <Playlist />
        <Interests />
        <Details />
      </Grid>
      <Grid item
        className={classes.right}>
        {/* RIGHT */}
        <Aboutme />
        <Posts />
      </Grid>
    </Grid>
    <Contacts />
</>
  )
}

export default Profile
