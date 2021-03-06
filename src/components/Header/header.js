import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid, makeStyles, Modal, TextField, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import Login from '../../auth/login.js'
import { createProfile, setProfile } from '../../store/profile.js';

// will need to access state to check whether user is logged in -- this will affect whether the login/signup form is rendering, or the user's name with avatar

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
    border: '2px black solid',
    width: '100%',
    height: '8rem',
    padding: '1rem',
    background: 'black'
  },
  picture: {
    marginRight: '1.5rem'
  },
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
  },
  title: {
    fontSize: '8rem',
    color: 'white',
    fontFamily: 'sans-serif',
    padding: '1rem'
  }
}));

function Header() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({})
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    console.log("hello can you see me")
    e.preventDefault();
    console.log(formData);
    dispatch(createProfile(formData));
    //dispatch(setProfile(formData));

    // Return the created account object
    // Set state to object
    // Create new dynamic route with the username
    // Go to the created profile/route
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">CREATE NEW ACCOUNT</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Username"
          variant="outlined"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Re-type Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="verify"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Account
      </Button>
      </form>

      <button className={classes.close} type="button" onClick={handleClose}>
        X
       </button>
    </div>
  );

  return (
    <>
      <Grid
        container direction="row"
        className={classes.container}
        alignContent="space-around"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          item
        >
          <Link to='/'>
            <img style={{height: 100, width: 150, borderRadius: '170px'}} src="https://e7.pngegg.com/pngimages/784/381/png-clipart-white-and-red-musical-note-logo-text-symbol-brand-music-text-trademark.png" alt="company logo"/>
          </Link>
        </Grid>
        <Grid item>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <h1 className={classes.title}>Melodi</h1>
          </Link>
        </Grid>
        <Grid item>
          <Grid container
            direction="column"
          >
            <Login />
            <p onClick={handleOpen} style={{ textDecoration: 'none', marginTop: '5px', cursor: 'pointer', color: 'blue', }}>Create an account</p>??
          </Grid>

        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}

export default Header;
