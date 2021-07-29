import React from 'react'
import { Avatar } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core';
import Message from './Message.js'

const useStyles = makeStyles((theme) => ({
  picture: {
    width: '50px',
    height: '50px',
    marginRight: '2rem'
  },
  name: {
    fontSize: '1rem',
    marginBottom: '.5rem',
    fontFamily: 'sans-serif'
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
        <Avatar alt="Remy Sharp" src={props.friendObj.picture || `https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg`} className={classes.picture} />
      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="flex-start"
      >
        <p className={classes.name}>{props.friendObj.firstName} {props.friendObj.lastName}</p>
        <Message toggleVisibility={props.toggleVisibility} friendObj={props.friendObj}/>
      </Grid>
    </Grid>
  )
}

export default Picture
