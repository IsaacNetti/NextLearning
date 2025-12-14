import React from 'react'

const TaskListItem = () => {
  return (
    <li className='list-row'>
        <input type="checkbox" name="" id="" className="checkbox checkbox-success"/>
        <h1>Item</h1>
        <button className='btn btn-soft hover:btn-error'>X</button>
    </li>
  )
}

export default TaskListItem
