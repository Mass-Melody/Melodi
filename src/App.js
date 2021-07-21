import React from 'react';
import Profile from './components/Profile/Profile.js'
import Hero from './components/Home/Hero.js'
import Modal from './components/CreateAccModal/Modal.js'
import Search from './components/Search/Search.js'
import Friends from './components/Friends/Friends.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <Router>
      <div styles={{ margin: 'auto', background: '#e0e0e0' }} className="App">
        <Header />
        <Hero />
        <Route exact path="/">
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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
