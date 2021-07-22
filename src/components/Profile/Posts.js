import React  from 'react'
import PostModal from './ProfileModals/PostModal.js'
import { Grid, makeStyles, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    height: '800px',
    marginBottom: '1rem',
    overflowX: 'auto',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Aboutme() {
  const classes = useStyles()
  const posts = useSelector((state) => state.profile.profile.posts)


  return (
    <Grid
      container
      direction="row"
      className={classes.container}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        style={{position: 'relative'}}
      >
        <h3 style={{ margin: 'auto', position: 'static' }}>Posts</h3>
        <PostModal />
      </Grid>
      {posts && posts.map(post =>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </Grid>
      )
      }
    </Grid>
  )
}

export default Aboutme




