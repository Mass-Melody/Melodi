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
import { useParams } from "react-router-dom";
import { If, Then } from 'react-if'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '940px',
    margin: 'auto',
    marginTop: '1rem'
  },
  left: {
    width: '400px'
  },
  right: {
    width: '500px'
  }
}))

function Profile() {
  const classes = useStyles()
  const { username } = useParams();
  const currentProfile = useSelector((state) => state.profile.profile.username)
  const yourProfile = useSelector((state) => state.profile.personalProfile)


  return (
    <div style={{position: 'relative'}}>
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
      <If condition={currentProfile === yourProfile}>
        <Then>
          <Contacts />
        </Then>
      </If>
    </div>
  )
}

export default Profile
