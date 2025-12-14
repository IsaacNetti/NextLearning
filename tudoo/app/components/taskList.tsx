import React from 'react'

const TaskList = () => {
  return (
    <div className='grid grid-cols-5'>
      <ul className='list col-start-2 col-span-3 border-4'>
        <li className='list-row'>1</li>
        <li className='list-row'>2</li>
        <li className='list-row'>3</li>
        <li className='list-row'>4</li>
        <li className='list-row'>5</li>
      </ul>
    </div>
  )
}

export default TaskList
