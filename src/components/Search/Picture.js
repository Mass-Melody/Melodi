import React from 'react'
import { Avatar } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  picture: {
    width: '100px',
    height: '100px',
    marginRight: '2rem'
  }
}))

function Picture() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      align-items="center"
      justifyContent="flex-start"
    >
      <Grid
        item
      >
        <Avatar alt="Remy Sharp" src="https://via.placeholder.com/60x60" className={classes.picture} />
      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="flex-start"
      >
        <p>Seattle, WA</p>
        <p>Drummer</p>
      </Grid>
    </Grid>
  )
}

export default Picture
