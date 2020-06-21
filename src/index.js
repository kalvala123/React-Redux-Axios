import { createStore } from 'redux'
//import {todoReducer} from './reducers/todoReducer'
import rootReducer from './reducers/rootReducer'
//import { addTodo } from './actions/todoAction'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import React from 'react'
/*
// creating the store
const store= createStore(todoReducer)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))

// Stop listening to state updates
unsubscribe()
*/

//create store
const store = createStore(rootReducer)

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root'))