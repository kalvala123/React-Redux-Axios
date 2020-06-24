import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { addItem } from '../actions/todoAction'

const AddItemComponent = ({ dispatch }) => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value.trim());
    };

    const handleIdChange = (event) => {
        setId(event.target.value.trim());
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value.trim());
    };

    AddItemComponent.propTypes = {
        item: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }
    

    return (<div>
        <form onSubmit={dispatch(addItem({ name: name, id: id, location: location }))}>
            <tr>
                <td>
                    name:
            </td>
                <td>
                    <input type="text" name="name" value={name} onChange={handleNameChange}></input><br />
                </td>
            </tr>
            <tr>
                <td>
                    id:
            </td>
                <td>
                    <input type="text" name="id" value={id} onChange={handleIdChange}></input><br />
                </td>
            </tr>
            <tr>
                <td>
                    location:
            </td>
                <td>
                    <input type="text" name="location" value={location} onChange={handleLocationChange}></input><br />
                </td>
            </tr>
            <button type="submit" name="submit">click to submit</button>
        </form>
    </div>);

}
export default AddItemComponent