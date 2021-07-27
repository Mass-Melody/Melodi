import React from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { addFriend, removeFriend } from '../../store/profile.js'

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontSize: '2.5rem',
    color: '#69b2f7',
    cursor: 'pointer'
  },
  removeButton: {
    fontSize: '2.5rem',
    color: '#f64c4c',
    cursor: 'pointer'
  }
}))


function Add(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isFriend = useSelector((state) => state.profile.profile.friends)

  const addNewFriend = (user) => {
    dispatch(addFriend(user))
  }

  const removePerson = (person) => {
    dispatch(removeFriend(person.username))
  }

  return (
    <div>
      {
        isFriend.includes(props.userObj.username) ?
          <RemoveCircleIcon onClick={() => removePerson(props.userObj.username)} className={classes.removeButton} />
          :
          <AddCircleIcon onClick={() => addNewFriend(props.userObj.username)} className={classes.addButton} />
      }
    </div>
  )
}

export default Add
