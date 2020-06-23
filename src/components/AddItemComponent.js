import React from 'react'
import {addItem} from '../actions/todoAction'
import {dispatch} from 'react-redux'

const AddItemComponent = () => {
    return (<div>
        <form>
            <tr>
                <td>
                    name:
            </td>
                <td>
                    <input type="text" name="name"></input><br />
                </td>
            </tr>
            <tr>
                <td>
                    id:
            </td>
                <td>
                    <input type="text" name="id"></input><br />
                </td>
            </tr>
            <tr>
                <td>
                    location:
            </td>
                <td>
                    <input type="text" name="location"></input><br />
                </td>
            </tr>
            <button type="submit" name="submit" onClick={ handleSubmit }>click to submit</button>
        </form>
    </div>)
}

function handleSubmit(event) {
    alert("Submit clicked"+event)
    dispatch(addItem)
    
}
export default AddItemComponent