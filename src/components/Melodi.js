import React, { useEffect } from 'react'
import { Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Profile from './Profile/Profile.js'
import Hero from './Home/Hero.js'
import Modal from './CreateAccModal/Modal.js'
import Search from './Search/Search.js'
import Friends from './Friends/Friends.js'
import Header from './Header/header.js';
import Footer from './Footer/footer.js';
import { getAllUsers } from '../store/profile.js'


function Melodi() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllUsers())
  }, [])


  return (
    <div>
      <Header />
      <Route exact path="/">
        <Hero />
        <Link to='/profile'>
          <p>Profile Page</p>
        </Link>
        <Link to='/search'>
          <p>Search Page</p>
        </Link>
        <Link to='/friends'>
          <p>Friends Page</p>
        </Link>
        <p>Toggle Modal</p>
        <Modal />
      </Route>
      <Route path="/users/account/:username" component={Profile} />
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/friends">
        <Friends />
      </Route>
      <Footer />
    </div>
  )
}

export default Melodi
