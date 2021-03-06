import React from 'react'
import TaskListContextProvider from '../contexts/TaskListContext'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

import '../App.css'
import Header from './Header'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
          </div>
        </div>
        <div className="todo-block">
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App
