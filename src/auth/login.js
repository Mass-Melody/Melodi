import React, { useState, useContext } from "react";
import { Button } from 'react-bootstrap';
import { If, Then, Else } from 'react-if';
import { LoginContext } from './context.js';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, yourProfile } from '../store/profile.js'
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({})
  const userContext = useContext(LoginContext);
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.profile.personalProfile)
  const listOfUsers = useSelector((state) => state.profile)

  // WE NEED TO FIND A WAY TO UPDATE WHEN WE GO CLICK GO TO PROFILE SO THAT IT BRINGS REDIRECTS US TO THE PAGE WITH THE  CORRECT INFO
  // useEffect(() => {
    
  // }, [allState])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    userContext.login(user)
    dispatch(setProfile(user))
  }

  // Maintains the user profile from the very first render
  function homePage(personalProfile, users) {
    console.log("THIS IS IN LOGIN COMPONET", personalProfile)
    dispatch(yourProfile(personalProfile, users))
  }

  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <Button type="button" variant="danger" onClick={userContext.logout}>Logout</Button>
        <Link onClick={() => homePage(currentUser, listOfUsers)} to={`/users/account/${user.username}`}>
          GO TO PROFILE
          </Link>
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
