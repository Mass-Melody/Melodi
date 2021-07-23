// Create the Store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import profile from './profile.js'
import users from './users.js'

// Import Middleware
import loggerMiddleware from './middleware/logger.js'
import thunk from './middleware/thunk.js'

const reducers = combineReducers({ profile, users })
const store = () => {
  // Also apply Middleware
  return createStore(reducers, composeWithDevTools(applyMiddleware(loggerMiddleware, thunk)))
}

export default store();