import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import addItemReducer from './addItemReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  addItemReducer
})

export default rootReducer