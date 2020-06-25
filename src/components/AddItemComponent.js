import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { addItem } from '../actions/todoAction'
import { Component } from 'react'

class AddItemComponent extends Component {

    constructor(props) {
        super(props)
        this.state = 
        { name: "", id: "", location: "" }
    }
     listItems = () => this.props.items.map((item) =>
    <li>{item.name +" "+item.id + " "+item.location}</li>);

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    handleIdChange = (event) => {
        this.setState({ id: event.target.value })
    }
    handleLocationChange = (event) => {
        this.setState({ location: event.target.value })
    }

    addItemAction = () => {
        const payload = {
            name: this.state.name,
            id: this.state.id,
            location: this.state.location
        }
        this.props.handleAddItemSubmit(payload)
    }

    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.addItemAction}>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                    <input type="text" name="id" placeholder="id" value={this.state.id} onChange={this.handleIdChange} />
                    <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleLocationChange} />
                    <button type="submit">Submit</button>
                </form>
                </div>
                <div>
                    <h1>Item Details</h1>
                    {this.listItems}
                </div>
            </div>
        )
    }
};

export default reduxForm({
    form: 'addItemForm'

})(AddItemComponent)