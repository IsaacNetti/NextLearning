import TaskListItemModal from "./taskListItemModal"
import TaskListItemModalComplete from "./taskListItemModalComplete"

type Props = {
    id: string;
    title: string;
    details: String;
    dueDate:  Date;
    important: Boolean;
}
const TaskListItem = ({id, title,details,dueDate,important}:Props) => {
  return (
    <li className='list-row grid grid-cols-[auto_1fr_auto] items-start gap-3'>
        <div className="flex flex-col gap-1 pt-1">
        <TaskListItemModalComplete id={id}/>
        {dueDate ? (<span className="text-xs text-base-content/60 whitespace-nowrap">{new Date(dueDate).toLocaleDateString()}</span> ) : <span className="text-xs text-base-content/60 whitespace-nowrap"> No due date</span>}
        </div>

        <div className="min-w-0 flex flex-col">
        <h1 className={important ? "font-bold" : ""}>{title}</h1>
        <p className="text-sm text-base-content/70 wrap-break-word">
            {details}
          </p>
        </div>

        <TaskListItemModal id={id}/>
    </li>
  )
}

export default TaskListItem
