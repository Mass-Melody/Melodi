import React from 'react';
import Profile from './components/Profile/Profile.js'
import Hero from './components/Home/Hero.js'
import Modal from './components/CreateAccModal/Modal.js'
import Search from './components/Search/Search.js'
import Friends from './components/Friends/Friends.js'
import store from './store'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import LoginContext from './auth/context.js'

function App() {
  // Create use effect to  database containing all user info
  // Create a store that will store this array of username
  // Use the store to create dynamic routes for each of the usernames
  // Clicking on profile, will bring you to the dynamic route based on your username
  
  return (
    <Router>
      <LoginContext>
        <Provider store={store}>
          <div styles={{ margin: 'auto', background: '#e0e0e0', position: 'relative' }} className="App">
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
        </Provider>
      </LoginContext>
    </Router>
  );
}

export default App;
