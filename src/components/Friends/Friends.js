import React from 'react'
import Remove from './Remove.js'
import Picture from './Picture.js'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#e0e0e0',
    height: "100vh"
  },
  searchResults: {
    width: '680px',
    background: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '6px',
    padding: '1rem',
    margin: '0px auto'
  },
  searchHeader: {
    width: '680px',
    background: 'white',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '6px',
    margin: '100px auto',
    padding: '1rem',
    marginBottom: '1rem'
  },
  addButton: {
    fontSize: 'large'
  }
}))

function Friends() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      align-items="center"
      justifyContent="flex-start"
      className={classes.container}
    >
      <Grid
        item
        className={classes.searchHeader}
      >
        <h3>Friends (393)</h3>
      </Grid>
      <Grid
        item
      >
        {/* Item 1 */}
        <Grid
          container
          direction="row"
          align-items="center"
          justifyContent="space-between"
          className={classes.searchResults}
        >
          <Grid
            item
          >
            <Picture />
          </Grid>
          <Grid
            item
          >
            <Remove />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* Item 2 */}
        <Grid
          container
          direction="row"
          align-items="center"
          justifyContent="space-between"
          className={classes.searchResults}
        >
          <Grid
            item
          >
            <Picture />
          </Grid>
          <Grid
            item
          >
            <Remove />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Item 3 */}
        <Grid
          container
          direction="row"
          align-items="center"
          justifyContent="space-between"
          className={classes.searchResults}
        >
          <Grid
            item
          >
            <Picture />
          </Grid>
          <Grid
            item
          >
            <Remove />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Friends
