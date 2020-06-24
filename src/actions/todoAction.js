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
 * Action Creators
 * action creators are the functions that creates actions. 
 * So actions are the objects and action creator are functions that return these actions.
 * Actions only tell "what to do"
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

 //Actions are a plain java script object that contatins information.
 //Actions have a type field that tells what kind of action to perform and all other fields contatins information/data.
 
export function addItem(item) {
  return { 
        type:"ADD_ITEM",
        payload:item
  }
}