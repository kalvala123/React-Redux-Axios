/*Actions are payloads of information that send data from your application to your store. 
They are the only source of information for the store. 
You send them to the store using store.dispatch().*/

/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO'

/*
 * action creators
 */
export function todo(text) {
    return { 
        type: ADD_TODO, 
        text 
    }
  }