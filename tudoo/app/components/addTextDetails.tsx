import React from 'react'

const AddTextDetails = () => {
  return (
    <div className='border-x-1 border-b-1 border-neutral col-start-3 row-start-7 col-span-3 mx-10 mb-2.5 grid grid-cols-3'>
      <input type="text" name="" id="" placeholder='Details' className='pl-15 my-3.5 focus:outline-none'/> 
      <div className='self-center'>
        <label htmlFor="due-date" className="">Due date: </label>
        <input type="date" name="" id="due-date" className='text-base-content/50'/>
      </div>
      <div className='self-center justify-self-end'>
        <input type="checkbox" name="" id="important" className='mr-1 checkbox checkbox-primary'/>
        <label htmlFor="important" className='pr-15'>Important</label>
      </div>
    </div>
  )
}

export default AddTextDetails
