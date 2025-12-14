'use client'
import { useState } from 'react'
import AddTextDetails from './addTextDetails'
import { addTask } from './actions'

const AddTaskText = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <form action={addTask} className="grid w-full grid-cols-1 gap-3 md:grid-cols-7 md:grid-rows-9 md:gap-0">
          <div className="border-2 border-neutral rounded-full p-4 grid grid-cols-7 col-start-3 col-span-3 row-start-5 ">
            <input name="title" type="text" placeholder="What is there TuDoo?" className="outline-none focus:outline-none col-start-1 col-span-6" onFocus={() => setShowDetails(true)}></input>
            <button type="submit" className="btn btn-primary rounded-full" onClick={() => setShowDetails(false)}>+</button>
          </div>

          {/* Animated div that shows detail on click and hides them on submit*/}
          <div className={[ 
            "col-start-3 row-start-6 col-span-3 mx-10 mb-2.5 md:mx-15",
            "overflow-hidden origin-top",
            "transition-all duration-200 ease-out motion-reduce:transition-none",
            showDetails
              ? "max-h-40 opacity-100 translate-y-0 mb-2.5"
              : "max-h-0 opacity-0 -translate-y-1 mb-0",
            ].join(" ")}>
            <AddTextDetails />
          </div>
      </form>
    </div>
  )
}

export default AddTaskText
