import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import InterestsTextBox from './Interests.js'
import DetailsTextBox from './Details.js'
import OtherTextBox from './Other.js'
import {editProfile} from '../../../../store/profile.js'

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
  const [formData, setFormData] = useState(profileData)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangeDetails = (e, name) => {
    let editDetail = {
      id: parseInt(e.target.name),
      name: name,
      info: e.target.value
    }
    let updatedDetail = formData.details.filter(value => value.id !== editDetail.id)
    setFormData({...formData, details: [...updatedDetail, editDetail]})
  }

  const handleChangeInterests = (e, name) => {
    let editInterest = {
      id: parseInt(e.target.name),
      name: name,
      info: e.target.value
    }

    let updatedInterest = formData.interests.filter(value => value.id !== editInterest.id)
    setFormData({...formData, interests: [...updatedInterest, editInterest]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(editProfile(formData))
    handleClose()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Edit Profile</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
        <Grid container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <OtherTextBox handleChange={handleChange} />
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
      <Button className={classes.button} variant="contained" color="primary" onClick={handleOpen}>
        Edit Profile
      </Button>
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