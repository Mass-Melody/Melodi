import React from 'react'
import { makeStyles, Button } from '@material-ui/core';
import { messageUser } from '../../../store/profile.js';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  removeButton: {
    fontSize: '2.5rem',
    color: '#f64c4c',
    cursor: 'pointer'
  }
}))


function Message(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const chooseUser = (username) => {
    props.toggleVisibility('visible')
    dispatch(messageUser(username))
  }


  return (
    <div>
      <Button onClick={() => chooseUser(props.friendObj.username)}variant="contained" color="primary">
        Message
      </Button>
    </div>
  )
}
export default Message
