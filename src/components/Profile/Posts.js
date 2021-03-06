import React from 'react'
import PostModal from './ProfileModals/PostModal.js'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile } from '../../store/profile.js'
import { If, Then } from 'react-if'


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '800px',
    marginBottom: '1rem',
    overflowX: 'auto',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)'
  },
  picture: {
    marginRight: '1.5rem'
  },
  title: {
    fontSize: '1.5rem',
    fontFamily: 'sans-serif',
    position: 'absolute',
    left: '1rem',
    top: '2rem',
    fontWeight: 700,
    textDecoration: 'underline'
  },
  postTitle: {
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    marginBottom: '1rem',
    fontWeight: 700
  },
  postContent: {
    fontSize: '1rem',
    fontFamily: 'sans-serif',
  },
  delete: {
    fontStyle: 'bold',
    padding: '.2rem',
    color: 'white',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    border: '2px red solid',
    cursor: 'pointer',
    background: 'red'
  }
}))

function Posts() {
  const classes = useStyles()
  const posts = useSelector((state) => state.profile.profile.posts)
  const profileData = useSelector((state) => state.profile.profile)
  const personalProfile = useSelector((state) => state.profile.personalProfile)

  const dispatch = useDispatch()
  const handleDelete = (id, userObj) => {
    let removePost = posts.filter(post => post.id !== id)
    userObj.posts = removePost
    console.log(removePost)
    dispatch(editProfile(userObj, personalProfile))
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      className={classes.container}
    >
      <h3 className={classes.title}>Posts</h3>
      <PostModal />
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        style={{ position: 'relative' }}
      >
      </Grid>
      {posts && posts.map(post =>
        <>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            style={{ position: 'relative', borderBottom: '1px' }}
          >
            <h4 className={classes.postTitle}>{post.title}</h4>
            <p className={classes.postContent}>{post.content}</p>
            <If condition={personalProfile === profileData.username}>
              <Then>
                <span className={classes.delete} style={{ position: 'absolute', right: 5 }} onClick={() => handleDelete(post.id, profileData)}>X</span>
              </Then>
            </If>
          </Grid>
        </>
      )
      }
    </Grid>
  )
}

export default Posts




