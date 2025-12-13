import Image from "next/image";
import React from 'react'
import AddTaskText from "./components/addTaskText";
import TaskList from "./components/taskList";


const TaskPage = () => {
  return (
    <div>
      <AddTaskText/>
      <TaskList/>
    </div>
  )
}

export default TaskPage
