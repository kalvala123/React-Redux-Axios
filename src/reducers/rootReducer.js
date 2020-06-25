import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import items from './addItemReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  items
})

export default rootReducer