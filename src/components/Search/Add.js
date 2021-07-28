import React, { useState, useEffect, useContext } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { LoginContext } from '../../auth/context.js';
import { makeStyles } from '@material-ui/core';
import { If, Then } from 'react-if';
import { useDispatch, useSelector } from 'react-redux'
import { editProfile, yourProfile } from '../../store/profile.js'
import cookie from 'react-cookies';
import { Socket } from 'socket.io-client';


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
  const userContext = useContext(LoginContext);
  const profileData = useSelector((state) => state.profile.profile)
  const personalProfile = useSelector((state) => state.profile.personalProfile)
  const [formData, setFormData] = useState(profileData)

  const addNewFriend = (e, data, userObj) => {
    let addFriend = userObj.username
    console.log('DATA BEFORE,', data)
    data.friends = [...data.friends, addFriend]
    console.log('ADDING FRIEND...',addFriend)
    console.log('DATA FRIENDS',data.friends)
    dispatch(editProfile(data, personalProfile))
  }

  // useEffect(() => {
  //   const username = cookie.load('username') || null;
  //   if (username) {
  //     dispatch(yourProfile(username))
  //     setFormData(profileData)
  //   }
  // }, [])

  return (
    <div>
      <If condition={userContext.isLoggedIn}>
        <Then>
          <AddCircleIcon onClick={(e) => addNewFriend(e, formData, props.userObj)} className={classes.addButton} />
        </Then>
      </If>
    </div>
  )
}

export default Add


// const removePerson = (person) => {
//   dispatch(removeFriend(person.username))
// }

// {
//   isFriend.includes(props.userObj.username) ?
//     <RemoveCircleIcon onClick={() => removePerson(props.userObj)} className={classes.removeButton} />
//     :
//     <AddCircleIcon onClick={() => addNewFriend(props.userObj)} className={classes.addButton} />
// }