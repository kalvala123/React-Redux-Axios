import React, { useState, useEffect } from 'react'
//import PropTypes from 'prop-types'
//import { reduxForm, Field, getFormValues } from 'redux-form'
//import { addItem } from '../actions/todoAction'
import { Component } from 'react'
//import { connect } from 'react-redux'

class AddItemComponent extends Component {

    constructor(props) {
        //alert(JSON.stringify(props))
        super(props)
        this.state =
            { name: "", id: "", location: "" }
    }

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
        //alert(JSON.stringify(payload))
        this.props.handleAddItemSubmit(payload)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                    <input type="text" name="id" placeholder="id" value={this.state.id} onChange={this.handleIdChange} />
                    <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleLocationChange} />
                    <button type="submit" onClick={this.addItemAction}>Submit</button>
                </div>
            </div>
        )
    }
};

export default AddItemComponent