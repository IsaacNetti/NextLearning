import TaskListItemModal from "./taskListItemModal"
import TaskListItemModalComplete from "./taskListItemModalComplete"

type Props = {
    id: string,
    title: string;
     details: { type: String, default: "", trim: true },
    dueDate: { type: Date, default: null },
    important: { type: Boolean, default: false },
}
const TaskListItem = ({id, title,details,dueDate,important}:Props) => {
  return (
    <li className='list-row'>
        <TaskListItemModalComplete id={id}/>
        <h1 className={important ? "font-bold" : ""}>{title}</h1>
        <TaskListItemModal id={id}/>
    </li>
  )
}

export default TaskListItem
