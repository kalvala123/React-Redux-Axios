import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddItem from '../containers/AddItem'
import DisplayItem from '../containers/DisplayItem'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer /><br/>
    <AddItem/><br/>
    <DisplayItem/>
  </div>
)

export default App