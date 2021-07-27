import React, { useEffect } from 'react'
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile/Profile.js'
import Hero from './Home/Hero.js'
import Modal from './CreateAccModal/Modal.js'
import Search from './Search/Search.js'
import Friends from './Friends/Friends.js'
import Header from './Header/header.js';
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
    if(username){
      dispatch(yourProfile(username))
    }
  }, [])


  return (
    <div>
      <Header />
      <Route exact path="/">
        <Hero />
        <Link to='/search'>
          <p>Search Page</p>
        </Link>
        {/* <Link to='/friends'>
          <p>Friends Page</p>
        </Link> */}
        <Modal />
      </Route>
      <Route path="/users/account/:username" component={Profile} />
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/friends/:username" component={Friends}>
        <Friends />
      </Route>
      <Footer />
    </div>
  )
}

export default Melodi
