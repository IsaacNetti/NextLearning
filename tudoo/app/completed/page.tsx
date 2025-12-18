import { connectDB } from "@/lib/mongodb";
import { Tasks } from "@/models/tasks";
import TaskListItem from '@/app/components/taskListItem'

const CompletedPage = async () => {
  await connectDB();
    const completeTasks = await Tasks.find({ done: true }).lean();

  return (
    <div className="flex flex-col">

      <h1 className="text-4xl self-center mt-12 md:mt-25">Completed Tasks:</h1>
      <h1 className="text-4xl self-center mb-12 text-primary"> {completeTasks.length}!</h1>

      <div className='min-w-fit grid md:grid-cols-5 '>
        <ul className='list md:col-start-2 col-span-3 border rounded  '>
          {completeTasks.map((t:any) =>(
            <TaskListItem key={String(t._id)}id={String(t._id)} title={t.title} details={t.details} dueDate={t.dueDate} important={t.important} show={false}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CompletedPage
