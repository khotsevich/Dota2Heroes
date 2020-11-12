import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  main: reducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
