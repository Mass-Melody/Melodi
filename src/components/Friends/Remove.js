import React from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core';
import { removeFriend } from '../../store/profile.js';
import { useDispatch, useSelector  } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  removeButton: {
    fontSize: '2.5rem',
    color: '#f64c4c',
    cursor: 'pointer'
  }
}))


function Remove({friendName}) {
  const profileData = useSelector((state) => state.profile.profile)
  const personalProfile = useSelector((state) => state.profile.personalProfile)
  const classes = useStyles()
  const dispatch = useDispatch()

  const removePerson = (person) => {
    dispatch(removeFriend(person.username))
  }

  return (
    <div>
      <RemoveCircleIcon onClick={() => removePerson(friendName)} className={classes.removeButton} />
    </div>
  )
}
export default Remove
