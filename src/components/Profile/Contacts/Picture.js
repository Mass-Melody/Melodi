import React from 'react'
import { Avatar } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core';
import Message from './Message.js'

const useStyles = makeStyles((theme) => ({
  picture: {
    width: '50px',
    height: '50px',
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
        <Avatar alt="Remy Sharp" src={props.friendObj.picture} className={classes.picture} />
      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="flex-start"
      >
        <p>{props.friendObj.firstName} {props.friendObj.lastName}</p>
        <Message />
      </Grid>
    </Grid>
  )
}

export default Picture
