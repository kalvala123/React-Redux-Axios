/*
* Reducers are pure functions that take previous state and action and return new state
* and tells the store "how to do"
*/
let initialState = []
const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state.push(action.payload)
            return state
        default:
            return state
    }
}
export default addItemReducer