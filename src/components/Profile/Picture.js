import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import Edit from './ProfileModals/EditModal/EditModal.js'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'white',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)'
  },
  imageContainer: {
    marginRight: '1.5rem'
  },
  image: {
    width: '100px',
    height: '100px'
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
      <h4>{profile.firstName} {profile.lastName}</h4>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid className={classes.imageContainer}>
          <img className={classes.image} src={profile.pictures.full} alt="Profile"/>
        </Grid>
        <Grid>
          <p>{profile.age} Years Old</p>
          <p>{profile.location}</p>
        </Grid>
        <Edit />
      </Grid>
    </Grid>
  )
}

export default Picture
