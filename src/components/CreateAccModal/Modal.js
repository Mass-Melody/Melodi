import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import { createProfile } from '../../store/profile.js'
import { useDispatch } from 'react-redux'

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
    width: 400,
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
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({})
  const [verify, setVerify] = useState('')
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    if (e.target.name === 'verify') {
      setVerify(e.target.value)
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== verify) {
      alert('Please retype your password correctly')
    }
    dispatch(createProfile(formData))
    handleClose()
  }


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">CREATE NEW ACCOUNT</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={(e) => handleChange(e)}
          required
          id="outlined-required"
          label="Username"
          name="username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          required
          id="outlined-password-input"
          label="Re-type Password"
          type="password"
          name="verify"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Create Account
      </Button>
      </form>
      <button className={classes.close} type="button" onClick={handleClose}>
        X
       </button>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
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