import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken'
import cookie from 'react-cookies';
import superagent from 'superagent'

export const LoginContext = React.createContext();

function LoginProvider(props) {
  // Toggle for login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Saves User Record
  const [user, setUser] = useState({});

  const validateToken = (token) => {
    try {
      const tokenUser = jwt.verify(token, process.env.REACT_APP_SECRET)
      setIsLoggedIn(true)
      setUser(tokenUser);
      cookie.save('auth', token)
    } catch (e) {
      setUser({})
      setIsLoggedIn(false);
      console.warn('Token Validation Error', e)
    }
  }

  const logout = () => {
    setUser({})
    setIsLoggedIn(false);
    cookie.remove('auth')
  }

  const can = (permission) => {
    return user.capabilities && user.capabilities.includes(permission) && user.profile.includes('name')
  }

  // const canEdit = (permission) => {
  //   return user.profile.includes('name')
  // }

  const login = async (input) => {
    const API = `${process.env.REACT_APP_API}/signin`;
    try {
      const response = await superagent.post(API)
        .auth(input.username, input.password);

      const { token } = response.body;
      validateToken(token)
    } catch (e) {
      console.warn('Login Attempt Failed')
    }
  }

  useEffect(() => {
    const token = cookie.load('auth') || null;
    validateToken(token)
  }, [])

  const sharedThings = {
    login,
    logout,
    can,
    user,
    isLoggedIn
  };

  return (
    <LoginContext.Provider value={sharedThings}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider