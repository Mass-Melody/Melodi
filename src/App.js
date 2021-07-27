import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from "react-router-dom";
import store from './store'
import LoginContext from './auth/context.js'
import Melodi from './components/Melodi.js'

function App() {
  // Create use effect to database containing all users info
  // Create a store that will store this array of usernames
  // Use the store to create dynamic routes for each of the usernames
  // Clicking on profile, will bring you to the dynamic route based on your username
  // useEffect(() => {
  //   dispatch(setProfile(cookie.auth.username))
  // }, [])

  return (
    <Router>
      <LoginContext>
        <Provider store={store}>
          <div styles={{ margin: 'auto', background: '#e0e0e0', position: 'relative' }} className="App">
            <Melodi />
          </div>
        </Provider>
      </LoginContext>
    </Router>
  );
}

export default App;
