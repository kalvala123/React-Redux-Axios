/*Reducers specify how the application's state changes in response to actions sent to the store.
 Remember that actions only describe what happened, 
 but don't describe how the application's state changes.*/
 import { ADD_TODO } from '../actions/todoAction'

 const initialState = {
  todos: []
}
 
 export function todoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text
            }
          ]
        })
      default:
        return state
    }
  }