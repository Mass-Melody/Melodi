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

function Picture(props) {
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
        <Avatar alt="Remy Sharp" src={props.friendObj.pictures.lg} className={classes.picture} />
      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="flex-start"
      >
        <p>{props.friendObj.firstName} {props.friendObj.lastName}</p>
        <p>{props.friendObj.location}</p>
        <p>{props.friendObj.instrument}</p>
      </Grid>
    </Grid>
  )
}

export default Picture
