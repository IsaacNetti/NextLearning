import { connectDB } from "@/lib/mongodb";
import { Tasks } from "@/models/tasks";
import TaskListItem from './taskListItem'
import { unstable_noStore } from "next/cache";


const TaskList = async () => {
  await connectDB();
  const tasks = await Tasks.find({ done: false }).lean();

  return (
    <div className='grid grid-cols-5'>
      <ul className='list col-start-2 col-span-3 border rounded  '>
        {tasks.map((t:any) =>(
          <TaskListItem key={String(t._id)}id={String(t._id)} title={t.title} details={t.details} dueDate={t.dueDate} important={t.important}/>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
