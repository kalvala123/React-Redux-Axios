import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddItem from '../containers/AddItem'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer /><br/>
    <AddItem/><br/>
  </div>
)

export default App