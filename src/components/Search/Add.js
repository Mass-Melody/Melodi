import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { addFriend } from '../../store/profile.js'

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontSize: '2.5rem',
    color: '#69b2f7'
  }
}))


function Add(props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const addNewFriend = (user) => {
    dispatch(addFriend(user))
  }

  return (
    <div>
      <AddCircleIcon onClick={() => addNewFriend(props.userObj)} className={classes.addButton} />
    </div>
  )
}

export default Add
