import React from 'react';
import store from './store'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import LoginContext from './auth/context.js'
import Melodi from './components/Melodi.js'
import './App.css'


function App() {
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
