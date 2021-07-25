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
        <Avatar alt="Remy Sharp" src={props.userObj.picture} className={classes.picture} />
      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="flex-start"
      >
        <p>{props.userObj.firstName} {props.userObj.lastName}</p>
        <p>{props.userObj.location}</p>
        <p>{props.userObj.instrument}</p>
      </Grid>
    </Grid>
  )
}

export default Picture
