import React, {  useContext } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { LoginContext } from '../../auth/context.js';
import { makeStyles } from '@material-ui/core';
import { If, Then } from 'react-if';
import { useDispatch, useSelector } from 'react-redux'
import { editProfile} from '../../store/profile.js'


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

  const addNewFriend = (user, userObj) => {
    let addFriend = userObj.username
      user.friends = [...user.friends, addFriend]
      dispatch(editProfile(user, personalProfile))
  }




  return (
    <div>
      <If condition={userContext.isLoggedIn && !profileData.friends.includes(props.userObj.username)}>
        <Then>
          <AddCircleIcon onClick={() => addNewFriend(profileData, props.userObj)} className={classes.addButton} />
        </Then>
      </If>
    </div>
  )
}

export default Add