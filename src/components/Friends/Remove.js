import React, { useState } from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core';
import { removeFriend, populateFriends } from '../../store/profile.js';
import { useDispatch, useSelector } from 'react-redux'
import { If, Then } from 'react-if';

const useStyles = makeStyles((theme) => ({
  removeButton: {
    fontSize: '2.5rem',
    color: '#f64c4c',
    cursor: 'pointer'
  }
}))


function Remove({ friendName }) {
  const profileData = useSelector((state) => state.profile.profile)
  const [formData, setFormData] = useState(profileData)
  const personalProfile = useSelector((state) => state.profile.personalProfile)
  const classes = useStyles()
  const dispatch = useDispatch()

  const removePerson = (data, person) => {
    let removeUser = profileData.friends.filter(friend => person !== friend)
    console.log(removeUser)
    data.friends = removeUser
    dispatch(removeFriend(data, personalProfile))
    dispatch(populateFriends(removeUser))
  }

  return (
    <div>
      <If condition={profileData.username === personalProfile}>
        <Then>
      <RemoveCircleIcon onClick={() => removePerson(formData, friendName.username)} className={classes.removeButton} />
      </Then>
      </If>
    </div>
  )
}
export default Remove
