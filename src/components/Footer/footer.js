import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'black',
    width: '100%',
    minHeight: '200px',
    padding: '1rem',
    dispaly: 'inline',
    marginTop: '3rem'
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
    color: 'white'
  }
}));

function Footer() {
  const classes = useStyles();
  const date = new Date().getFullYear();

  return (
    <Grid
      container direction="row"
      className={classes.container}

      alignItems="center"
    >
      <Grid item className={classes.item}>
        <HomeIcon style={{color: 'white', cursor: 'pointer'}} fontSize="large" />
      </Grid>
      <Grid item className={classes.item}>
      <GroupIcon style={{color: 'white', cursor: 'pointer'}} fontSize="large" />
      </Grid>
      <Grid item className={classes.item}>
        <GitHubIcon style={{color: 'white', cursor: 'pointer'}} fontSize="large"/>
      </Grid>
      <Grid item className={classes.copyright}>
        &copy; {date} Mass-Melody
      </Grid>
    </Grid>
  );
}

export default Footer;
