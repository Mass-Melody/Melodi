import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    height: '500px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Playlist() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Playlist</h4>
      <iframe src="https://open.spotify.com/embed/playlist/6BnKZ1GGADXMxtjZLjzAMa?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="playlist"></iframe>
    </Grid>
  )
}

export default Playlist
