import { render } from "react-dom"
import React from 'react'
import { connect } from 'react-redux'
import DisplayItemsComponent from '../components/DisplayItemsComponent'

const mapStateToProps = (state) => {
    return {
        items: state
    }
}

export default connect(mapStateToProps,null)(DisplayItemsComponent)