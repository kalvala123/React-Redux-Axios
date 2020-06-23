import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todoAction'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions/todoAction'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

/*
connect accepts four different parameters, all optional. By convention, they are called:
mapStateToProps?: Function
mapDispatchToProps?: Function | Object
mergeProps?: Function
options?: Object
*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)