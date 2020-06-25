import { connect } from 'react-redux'
import AddItemComponent from '../components/AddItemComponent'
import {addItem} from '../actions/todoAction'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
      //alert(JSON.stringify(state))
      return {
          items:state.addItemReducer.items
      }
}

const mapDispatchToProps = dispatch => ({
      // dispatching plain actions
      handleAddItemSubmit: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddItemComponent)
