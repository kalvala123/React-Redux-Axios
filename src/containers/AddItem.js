import { connect } from 'react-redux'
import AddItemComponent from '../components/AddItemComponent'
import {addItem} from '../actions/todoAction'

/*const mapStateToProps = (state) => {
  return {
        items: state
    }
}*/

const mapDispatchToProps = (dispatch) => {
  return {
      // dispatching plain actions
      // handleAddItemSubmit: (item) => { alert(item.name+" "+ item.id +" "+ item.location); dispatch(addItem(item)) }
    }
  }
export default connect(null,null)(AddItemComponent)
