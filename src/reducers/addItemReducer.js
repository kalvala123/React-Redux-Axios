/*
* Reducers are pure functions that take previous state and action and return new state
* and tells the store "how to do"
*/
let initialState = {
    items:[]
}
const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return state.items.concat(action.payload)
        default:
            return state
    }
}
export default addItemReducer