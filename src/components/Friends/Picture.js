import React from 'react'
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, makeStyles } from '@material-ui/core';
import { navigateProfile } from '../../store/profile.js'


const useStyles = makeStyles((theme) => ({
  picture: {
    width: '100px',
    height: '100px',
    marginRight: '2rem',  
  },
  font: {
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    marginBottom: '1rem'
  }
}))

function Picture(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const goToProfile = (user) => {
    dispatch(navigateProfile(user))
  }

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
        <Link onClick={() => goToProfile(props.friendObj)} to={`/users/account/${props.friendObj.username}`}>
          <Avatar alt="Remy Sharp" src={props.friendObj.picture} className={classes.picture} />
        </Link>
      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="flex-start"
      >
        <p className={classes.font}>{props.friendObj.firstName} {props.friendObj.lastName}</p>
        <p className={classes.font}>{props.friendObj.location}</p>
        <p className={classes.font}>{props.friendObj.instrument}</p>
      </Grid>
    </Grid>
  )
}

export default Picture
