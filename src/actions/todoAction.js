/*Actions are payloads of information that send data from your application to your store. 
They are the only source of information for the store. 
You send them to the store using store.dispatch().*/

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//other constants
let nextTodoId = 0

/*
 * action creators
 */
export function addTodo(text) {
    return { 
        type: ADD_TODO,
        id: nextTodoId++, 
        text 
    }
  }

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  } 