import React from 'react'
import { connect } from 'react-redux';
function DisplayItem(props) {

    const items = props.items.map((item) =>
        <li>{item.name + " " + item.id + " " + item.location}</li>);

    return (
        <div>
            <h1>Item Details</h1>
            {items}
        </div>
    )
}

const mapStateToProps = (state) => {
    //alert(JSON.stringify(state.items))
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(DisplayItem)