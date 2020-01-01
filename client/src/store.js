import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import userReducer from './reducers/userReducer'
import errorsReducer from './reducers/errorsReducer'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  user: userReducer,
  errors: errorsReducer
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
