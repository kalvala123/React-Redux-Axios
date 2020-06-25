/*
* Reducers are pure functions that take previous state and action and return new state
* and tells the store "how to do"
*/
const initialState = {
    items:[]
}
const addItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
        var arr =[]
        arr.push(action.payload)   
        return {
                ...state,
                items:state.items.concat(arr)
            }
        default:
            return state
    }
}
export default addItemReducer