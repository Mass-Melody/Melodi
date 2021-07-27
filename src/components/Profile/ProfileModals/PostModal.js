import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { newPost } from '../../../store/profile.js'
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
  button: {
    '& .MuiButton-label': {
      display: 'block'
    },
    display: 'block',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    position: 'absolute',
    right: '1rem',
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
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const profileData = useSelector((state) => state.profile)

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else if (e.target.name === 'content') {
      setContent(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: title,
      content: content
    }
    dispatch(newPost(data))
    handleClose()
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">CREATE NEW POST</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Title of Post"
          variant="outlined"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.textField}
          id="outlined-multiline-static"
          label="Content"
          name="content"
          multiline
          rows={8}
          placeholder="What's on your mind?"
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" variant="contained" color="primary">
          POST
      </Button>
      </form>
      <button className={classes.close} type="button" onClick={handleClose}>
        X
       </button>
    </div>
  );

  return (
    <div>
      <If condition={profileData.personalProfile === profileData.profile.username}>
        <Then>
          <Button className={classes.button} variant="contained" color="primary" onClick={handleOpen}>
            New Post
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