import React from 'react'
import PostModal from './ProfileModals/PostModal.js'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../../store/profile.js'


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
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <Grid
      container
      direction="row"
      className={classes.container}
    >
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        style={{ position: 'relative' }}
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
          style={{ position: 'relative' }}
        >
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <span style={{ position: 'absolute', right: 15, top: 15 }} onClick={() => handleDelete(post.id)}>x</span>
        </Grid>
      )
      }
    </Grid>
  )
}

export default Aboutme




