import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import cookie from 'react-cookies';
import { yourProfile } from '../../store/profile.js'

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
    padding: '1rem',
    background: '#424242',
    color: 'white',
    display: 'flex'
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  title: {
    fontSize: '2rem',
    color: 'white',
    fontFamily: 'sans-serif',
    marginRight: '1.5rem',
    border: '2px solid white',
    cursor: 'pointer',
    padding: '1rem',
    background: 'transparent'
  },
  input: {
    padding: '5px',
    fontSize: '1rem',
    fontFamily: 'sans-serif',
    marginTop: '1rem'
  }
}));

function Search() {
  const classes = useStyles();
  const [search, setSearch] = React.useState('')
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch({ search: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("THIS IS HANDLE SUBMIT")
    const username = cookie.load('username') || null;

    if (username) {
      dispatch(yourProfile(username))
    }
  }
  
  return (
    <div className={classes.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Link to='/search'>
          <button className={classes.title}>SEARCH</button>
        </Link>
      </form>
    </div>
  );
}

export default Search;
