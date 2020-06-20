import { createStore } from 'redux'
import { todoReducer } from './reducers/todoReducer'
import { todo } from './actions/todoAction'

// creating the store
const store= createStore(todoReducer)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(todo('Learn about actions'))

// Stop listening to state updates
unsubscribe()