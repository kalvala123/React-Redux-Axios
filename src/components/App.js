import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddItem from '../containers/AddItem'
import DisplayItems from '../containers/DisplayItems'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer /><br/>
    <AddItem/><br/>
    <DisplayItems/>
  </div>
)

export default App