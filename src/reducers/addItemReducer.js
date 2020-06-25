/*
* Reducers are pure functions that take previous state and action and return new state
* and tells the store "how to do"
*/
const initialState = {
    items:[]
}
const addItemReducer = (state = initialState, action) => {
    alert(state.items.length)
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items:state.items.concat(action.payload)
            }
        default:
            return state
    }
}
export default addItemReducer