import React from 'react'
import { makeStyles, Button } from '@material-ui/core';
import { removeFriend } from '../../../store/profile.js';
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  removeButton: {
    fontSize: '2.5rem',
    color: '#f64c4c',
    cursor: 'pointer'
  }
}))


function Message({friendName}) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const removePerson = (person) => {
    dispatch(removeFriend(person.username))
  }

  return (
    <div>
      <Button variant="contained" color="primary">
        Message
      </Button>
    </div>
  )
}
export default Message
