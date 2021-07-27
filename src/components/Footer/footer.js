import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    minHeight: '200px',
    marginBottom: '1rem',
    padding: '1rem',
    dispaly: 'inline'
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

  return (
    <Grid
      container direction="row"
      className={classes.container}

      alignItems="center"
    >
      <Grid item className={classes.item}>
        <HomeIcon fontSize="large" />
      </Grid>
      <Grid item className={classes.item}>
      <GroupIcon fontSize="large" />
      </Grid>
      <Grid item className={classes.item}>
        <GitHubIcon fontSize="large"/>
      </Grid>
      <Grid item className={classes.copyright}>
        &copy; {date} Mass-Melody
      </Grid>
    </Grid>
  );
}

export default Footer;
