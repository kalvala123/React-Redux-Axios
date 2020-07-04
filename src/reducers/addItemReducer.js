/*
* Reducers are pure functions that take previous state and action and return new state
* and tells the store "how to do"
*/
const initialState = []
const items = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            let array = state
            let newArray = array.slice()
            newArray.splice(action.index, 0, action.payload)
            return newArray
        default:
            return state
    }
}
export default items