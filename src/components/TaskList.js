import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import Task from './Task'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)
  const activeTasks = tasks.filter((task) => {
    return task.todoStatus === 'todo'
  })
  const progressTasks = tasks.filter((task) => {
    return task.todoStatus === 'progress'
  })
  // console.log()
  const doneTasks = tasks.filter((task) => {
    return task.todoStatus === 'done'
  })
  return (
    <>
      <div className="div-1">
        <p className="btns-todo">Active</p>
        {tasks.length ? (
          <div className="list">
            {activeTasks.map((task) => {
              return <Task task={task} key={task.id} />
            })}
          </div>
        ) : (
          <div className="list-2">
            <p>No Todos</p>
          </div>
        )}
      </div>
      <div className="div-2">
        <p className="btns-progress">In Progress</p>
        {tasks.length ? (
          <div className="list">
            {progressTasks.map((task) => {
              return <Task task={task} key={task.id} />
            })}
          </div>
        ) : (
          <div className="list-2">
            <p>No Todos</p>
          </div>
        )}
      </div>
      <div className="div-3">
        <p className="btns-done">Done</p>
        {tasks.length ? (
          <div className="list">
            {doneTasks.map((task) => {
              return <Task task={task} key={task.id} />
            })}
          </div>
        ) : (
          <div className="list-2">
            <p>No Todos</p>
          </div>
        )}
      </div>
    </>
  )
}

export default TaskList
