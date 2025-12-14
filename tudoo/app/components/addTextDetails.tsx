import React from 'react'

const AddTextDetails = () => {
  return (
    <div className='border-x border-b border-neutral grid grid-cols-3'>
      <input type="text" name="details" placeholder='Details' className=' pl-3 md:pl-15 my-3.5 focus:outline-none'/> 
      <div className='self-center'>
        <label htmlFor="due-date" className="">Due date: </label>
        <input type="date" name="dueDate" id="due-date" className='text-base-content/50'/>
      </div>
      <div className='self-center justify-self-end'>
        <input type="checkbox" name="important" id="important" className='mr-1 checkbox checkbox-primary'/>
        <label htmlFor="important" className='px-2 md:pr-15'>Important</label>
      </div>
    </div>
  )
}

export default AddTextDetails
