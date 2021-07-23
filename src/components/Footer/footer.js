import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100vw',
    minHeight: '200px',
    marginBottom: '1rem',
    padding: '1rem'
  },
  picture: {
    marginRight: '1.5rem'
  },
  item: {
    width: '100vw',
    paddingLeft: '200px',
    lineHeight: '30px'
  },
  copyright: {
    width: '100vw',
    paddingLeft: '200px',
    marginTop: '50px',
    lineHeight: '30px',
  }
}));

function Footer() {
  const classes = useStyles();
  const date = new Date().getFullYear();

  return(
    <Grid
      container direction="column"
      className={classes.container}

      alignItems="center"
    >
      <Grid item className={classes.item}>
        HOME
      </Grid>
      <Grid item className={classes.item}>
        ABOUT US
      </Grid>
      <Grid item className={classes.item}>
        TECHNICAL REQUIREMENTS
      </Grid>
      <Grid item className={classes.item}>
        GITHUB
      </Grid>
      <Grid item className={classes.copyright}>
        &copy; {date} Mass-Melody
      </Grid>
    </Grid>
  );
}

export default Footer;
