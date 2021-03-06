import React from 'react'
import { Avatar } from '@material-ui/core';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigateProfile } from '../../store/profile.js'

const useStyles = makeStyles((theme) => ({
  picture: {
    width: '100px',
    height: '100px',
    marginRight: '2rem'
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
        <Link onClick={() => goToProfile(props.userObj)} to={`/users/account/${props.userObj.username}`}>
          <Avatar alt="Remy Sharp" src={props.userObj.picture} className={classes.picture} />
        </Link>

      </Grid>
      <Grid
        item
        direction="column"
        align-itmes="center"
        justifyContent="space-around"
      >
        <p className={classes.font}>{props.userObj.firstName} {props.userObj.lastName}</p>
        <p className={classes.font}>{props.userObj.location}</p>
        <p className={classes.font}>{props.userObj.instrument}</p>
      </Grid>
    </Grid>
  )
}

export default Picture
