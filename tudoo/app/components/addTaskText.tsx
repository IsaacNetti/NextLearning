import React from 'react'
import AddTaskButton from './addTaskButton'


const AddTaskText = () => {
  return (
    <div className="grid w-full grid-cols-6 grid-rows-5">
      <textarea placeholder="What is there TuDoo" className="textarea textarea-primary col-start-3 row-start-5"></textarea>
        <AddTaskButton/>
    </div>
  )
}

export default AddTaskText
