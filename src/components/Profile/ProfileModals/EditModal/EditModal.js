import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import InterestsTextBox from './Interests.js'
import DetailsTextBox from './Details.js'
import OtherTextBox from './Other.js'
import RenderSnackbar from '../../../snackbar/snackbar.js';
import SimpleBackdrop from '../../../backdrop/backdrop.js';
import { editProfile } from '../../../../store/profile.js'
import { If, Then } from 'react-if'

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
  paper: {
    position: 'absolute',
    width: '1000px',
    height: '800px',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: '25ch',
      display: 'block'
    }
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  button: {
    display: 'block'
  },
  textField: {
    width: '15rem'
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const profileData = useSelector((state) => state.profile.profile)
  const personalProfile = useSelector((state) => state.profile.personalProfile)

  const [formData, setFormData] = useState({})

  const handleOpen = () => {
    console.log('THIS IS FORM DATA', profileData)
    setFormData(profileData)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePicture = (e, imageUrl) => {
    setFormData({ ...formData, picture: imageUrl })
  }

  const handleChangeDetails = (e, name) => {
    let editDetail = {
      id: parseInt(e.target.name),
      name: name,
      info: e.target.value
    }
    let updatedDetail = formData.details.filter(value => parseInt(value.id) !== editDetail.id)
    setFormData({ ...formData, details: [...updatedDetail, editDetail] })
  }

  const handleChangeInterests = (e, name) => {
    let editInterest = {
      id: parseInt(e.target.name),
      name: name,
      info: e.target.value
    }

    let updatedInterest = formData.interests.filter(value => parseInt(value.id) !== editInterest.id)
    setFormData({ ...formData, interests: [...updatedInterest, editInterest] })
  }

  const handleSubmit = (e, userData, userProfileName) => {
    e.preventDefault()
    let regex = /"https.*?"/
    if (regex.test(userData.playlist)) {
      console.log('THis is the playlist: ', userData.playlist);
      let url = userData.playlist.match(regex)[0];
      userData.playlist = url.slice(1, url.length-1)
    } else {
      userData.playlist = profileData.playlist
    }
    dispatch(editProfile(userData, userProfileName))
    handleClose()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Edit Profile</h2>
      <form onSubmit={(e) => handleSubmit(e, formData, personalProfile)} className={classes.root} noValidate autoComplete="off">
        <Grid container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <RenderSnackbar>
              <SimpleBackdrop>
                <OtherTextBox handlePicture={handlePicture} handleChange={handleChange} />
              </SimpleBackdrop>
            </RenderSnackbar>
          </Grid>
          <Grid item>
            <InterestsTextBox handleChangeInterests={handleChangeInterests} />
            <DetailsTextBox handleChangeDetails={handleChangeDetails} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          SAVE CHANGES
      </Button>
      </form>
      <button className={classes.close} type="button" onClick={handleClose}>
        X
       </button>
    </div>
  );

  return (
    <div>
      <If condition={personalProfile === profileData.username}>
        <Then>
          <Button className={classes.button} variant="contained" color="primary" onClick={handleOpen}>
            Edit Profile
      </Button>
        </Then>
      </If>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}