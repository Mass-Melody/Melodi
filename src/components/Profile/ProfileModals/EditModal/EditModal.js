import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button, Grid } from '@material-ui/core';
import InterestsTextBox from './Interests.js'
import DetailsTextBox from './Details.js'
import OtherTextBox from './Other.js'

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
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Edit Profile</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <OtherTextBox />
          </Grid>
          <Grid item>
            <InterestsTextBox />
            <DetailsTextBox />
          </Grid>
        </Grid>


      </form>
      <Button variant="contained" color="primary">
        SAVE CHANGES
      </Button>
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