import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import Edit from './ProfileModals/EditModal/EditModal.js'
import { useSelector } from 'react-redux';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'white',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)'
  },
  imageContainer: {
    marginRight: '1.5rem'
  },
  image: {
    width: '150px',
    height: '150px',
    marginBottom: '1rem'
  },
  font: {
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    marginBottom: '1rem'
  },
  title: {
    marginBottom: '2rem',
    fontSize: '2rem',
    fontFamily: 'sans-serif'
  }
}))

function Picture() {
  const classes = useStyles()
  const profile = useSelector((state) => state.profile.profile)

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4 className={classes.title}>{profile.firstName} {profile.lastName}</h4>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item
          className={classes.imageContainer}>
          <img className={classes.image} src={profile.picture} alt="Profile" />
        </Grid>
        <Grid item>
          <p className={classes.font}>{profile.age} Years Old</p>
          <p className={classes.font}>{profile.location}</p>
        </Grid>
      </Grid>
      <Grid item>
          <Edit />
        </Grid>
    </Grid>
  )
}

export default Picture
