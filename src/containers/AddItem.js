import { connect } from 'react-redux'
import AddItemComponent from '../components/AddItemComponent'
import { addItem } from '../actions/todoAction'

const mapStateToProps = (state) => {
      //alert(JSON.stringify(state))
      return {
            items: state.items
      }
}

const mapDispatchToProps = dispatch => {
      //alert("dispatch called")
      return {
            // dispatching plain actions
            handleAddItemSubmit: (item) => {/*alert("before dispatch");*/ dispatch(addItem(item))}
      }
}

export default connect(null, mapDispatchToProps)(AddItemComponent)
