import React, { useState, useContext } from "react";
import { Button, Grid, makeStyles } from '@material-ui/core';
import { If, Then, Else } from 'react-if';
import { LoginContext } from './context.js';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, yourProfile, populateFriends } from '../store/profile.js'
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    height: '8rem',
    padding: '1rem',
    background: 'black'
  },
  button: {
    color: 'white',
    borderLeft: '1px solid white',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    padding: '1rem',
    borderRadiusBottomleft: '15px',
    borderRadiusTopleft: '15px',
    fontFamily: 'sans-serif'
  },
  logout: {
    color: 'white',
    border: '1px solid white',
    borderBottom: '1px solid white',
    padding: '1rem',
    borderRadius: '15px',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    fontSize: '1rem'
  },
  login: {
    color: 'white',
    border: '1px solid white',
    borderBottom: '1px solid white',
    padding: '1rem',
    borderRadius: '15px',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
  },
  input: {
    fontsize: '1rem',
    padding: '10px',
    marginRight: '1rem'
  }
}))

function Login() {
  const classes = useStyles();
  const [user, setUser] = useState({})
  const userContext = useContext(LoginContext);
  const dispatch = useDispatch()
  const profilePicture = useSelector((state) => state.profile.profilePicture)
  const currentUser = useSelector((state) => state.profile.profile)
  const personalProfile = useSelector((state) => state.profile.personalProfile)
  // WE NEED TO FIND A WAY TO UPDATE WHEN WE GO CLICK GO TO PROFILE SO THAT IT BRINGS REDIRECTS US TO THE PAGE WITH THE  CORRECT INFO
  // useEffect(() => {

  // }, [allState])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    if (!user.username || !user.password) {
      alert('Please fill out the form completely!')
    } else {
      e.preventDefault();
      userContext.login(user)
      dispatch(setProfile(user))
    }
  }

  // Maintains the user profile from the very first render
  async function homePage() {
    await dispatch(yourProfile(personalProfile))
      .then(dispatch(populateFriends(currentUser.friends)))
  }

  return (
    <Grid container
      direction="row"
      alignItems='center'
      justifyContent="space-between"
    >
      <If condition={userContext.isLoggedIn}>
        <Then>
          <Link onClick={() => homePage()} to={`/users/account/${personalProfile}`}>
            {currentUser.picture ?
              <img style={{ width: 50, height: 50, marginRight: '1rem', borderRadius: '50%' }} src={profilePicture} alt="user profilepic" />
              :
              <p className={classes.button}>Home</p>
            }
          </Link>
          <button style={{background: 'transparent', border: 'none'}} type="button" onClick={userContext.logout}>
            <Link className={classes.logout} to="/" >
              Logout
          </Link>
          </button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
            <input className={classes.input} placeholder="username" name="username" onChange={handleChange} />
            <input className={classes.input} name="password" type="password" onChange={handleChange} />
            <Button className={classes.login} type="submit" variant="outline-light primary">Login</Button>
          </form>
        </Else>
      </If >
    </Grid >
  )

}

export default Login;
