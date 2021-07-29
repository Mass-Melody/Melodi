import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    paddingBottom: "10rem"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12}>
        <Grid container 
        style={{padding: '3rem', background: '#EEEEEE'}}
        alignItems="center"
        justifyContent="space-evenly" spacing={2}>
          <div style={{fontSize: '4rem', fontStyle: 'italic'}}>About Melodi</div>
          <div style={{ fontSize: '1.5rem', fontFamily: 'sans-serif', maxWidth: '25%', textAlign: 'center' }}>By keeping a focus on music, hobbies, and interests of individuals, Melodi strives to organically build communities and meaningful connections based on passion. 
Whether you are an artist, musician, or music lover, Melodi will facilitate relationships centered around music.
</div>
        </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}
