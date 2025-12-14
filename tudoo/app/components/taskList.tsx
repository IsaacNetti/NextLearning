import React from 'react'
import TaskListItem
 from './taskListItem'
const TaskList = () => {
  return (
    <div className='grid grid-cols-5'>
      <ul className='list col-start-2 col-span-3 border rounded  '>
        <TaskListItem/>
      </ul>
    </div>
  )
}

export default TaskList
