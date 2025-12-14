import React from 'react'
import AddTaskButton from './addTaskButton'
import AddTextDetails from './addTextDetails'


const AddTaskText = () => {
  return (
    <div className="grid w-full grid-cols-7 grid-rows-8 mb-25">
      <div className="border-2 border-neutral grid grid-cols-7 col-start-3 col-span-3 row-start-6 rounded-full p-4">
        <input type="text" placeholder="What is there TuDoo?" className="outline-none focus:outline-none col-start-1 col-span-6"></input>
        <AddTaskButton/>
      </div>
      <AddTextDetails/>
    </div>
  )
}

export default AddTaskText
