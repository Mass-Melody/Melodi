import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '500px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)'
  },
  title: {
    marginBottom: '2rem',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    fontWeight: 700,
    textDecoration: 'underline'
  }
}))

function Playlist() {
  const classes = useStyles()
  const playlist = useSelector((state) => state.profile.profile.playlist)

  return (
    <Grid
      container
      direction="column"

      className={classes.container}
    >
      <h4 className={classes.title}>Playlist</h4>
      {playlist ?
        <iframe src={playlist} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        :
        <p>'Add a playlist!'</p>
      }

    </Grid>
  )
}

export default Playlist
