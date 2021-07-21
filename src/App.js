import Profile from './components/Profile/Profile.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header/header.js';

function App() {
  return (
    <Router>
      <div styles={{ margin: 'auto' }} className="App">
        <Header />
        <Route exact path="/">
          <Link to='/profile'>
            Profile Page
            </Link>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </div>
    </Router>
  );
}

export default App;
