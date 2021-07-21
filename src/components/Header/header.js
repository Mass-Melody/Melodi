import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Add from '../Search/add.js';
// import Search from '../Search/search.js';
// import Picture from '../Search/picture.js';

// will need to access state to check whether user is logged in -- this will affect whether the login/signup form is rendering, or the user's name with avatar

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100vw',
    height: '200px',
    marginBottom: '1rem',
    padding: '1rem'
  },
  picture: {
    marginRight: '1.5rem'
  }
}));

function Header() {
  const classes = useStyles();

  return(
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
          <img src="https://via.placeholder.com/100x100" alt="company logo" style={{borderRadius: 50 + 'px'}}/>
        </Link>
      </Grid>
      <Grid item>
        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
          <h1>Melodi</h1>
        </Link>
      </Grid>
      <Grid item>
          <form>
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            <input type="submit" value="Login"></input>
          </form>
          <Link to='/forgot-password' style={{textDecoration: 'none'}}>
            Forgot Password?
          </Link>
          <Link to='/signup' style={{textDecoration: 'none', paddingLeft: '35px'}}>Create an account</Link>
      </Grid>
    </Grid>
  );
}

export default Header;
