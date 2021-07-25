import React, { useState, useContext } from "react";
import { Button } from 'react-bootstrap';
import { If, Then, Else } from 'react-if';
import { LoginContext } from './context.js';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../store/profile.js'
import axios from 'axios'

function Login() {
  const [user, setUser] = useState({})
  const userContext = useContext(LoginContext);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    userContext.login(user)
    dispatch(setProfile(user))
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   userContext.login(user)
  //   let userProfile = await axios.get(`${process.env.REACT_APP_API}/api/v1/allUsers/${user.username}`)
  //   dispatch(setProfile(userProfile))
  // }

  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <Button type="button" variant="danger" onClick={userContext.logout}>Logout</Button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input placeholder="username" name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <Button type="submit" variant="outline-light primary">Login</Button>
        </form>
      </Else>
    </If>
  )

}

export default Login;
