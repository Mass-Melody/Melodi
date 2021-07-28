import React, { useEffect } from 'react'
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile/Profile.js'
import Hero from './Home/Hero.js'
import Modal from './CreateAccModal/Modal.js'
import SearchPage from './Search/Search.js'
import Friends from './Friends/Friends.js'
import Header from './Header/header.js';
import Search from './Header/search.js';
import Footer from './Footer/footer.js';
import { getAllUsers, yourProfile } from '../store/profile.js'
import cookie from 'react-cookies';


function Melodi() {
  // const currentUser = useSelector((state) => state.profile.personalProfile)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllUsers())
    const username = cookie.load('username') || null;
    //admin
    if (username) {
      dispatch(yourProfile(username))
    }
  }, [])


  return (
    <div>
      <Search />
      <Header />
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
      <Route path="/users/account/:username" component={Profile} />
      <Route exact path="/friends/:username" component={Friends}>
        <Friends />
      </Route>
      <Footer />
    </div>
  )
}

export default Melodi
