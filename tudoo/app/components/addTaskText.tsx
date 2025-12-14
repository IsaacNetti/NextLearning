'use client'
import React,{ useState } from 'react'
import AddTextDetails from './addTextDetails'


const AddTaskText = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="grid w-full grid-cols-7 grid-rows-9 mb-25">
      <div className="border-2 border-neutral grid grid-cols-7 col-start-3 col-span-3 row-start-5 rounded-full p-4">
        <input type="text" placeholder="What is there TuDoo?" className="outline-none focus:outline-none col-start-1 col-span-6" onFocus={() => setShowDetails(true)}></input>
         
        <button className="btn btn-primary rounded-full" onClick={() => setShowDetails(false)}>+</button>
      </div>
      <div className={[
    "col-start-3 row-start-6 col-span-3 mx-15 mb-2.5 ",
    "overflow-hidden origin-top",
    "transition-all duration-200 ease-out motion-reduce:transition-none",
    showDetails
      ? "max-h-40 opacity-100 translate-y-0 mb-2.5"
      : "max-h-0 opacity-0 -translate-y-1 mb-0",
  ].join(" ")}>
  <AddTextDetails />
</div>
    </div>
  )
}

export default AddTaskText
