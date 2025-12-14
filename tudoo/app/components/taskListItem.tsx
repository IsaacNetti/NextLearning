type Props = {
    title: string;
     details: { type: String, default: "", trim: true },
    dueDate: { type: Date, default: null },
    important: { type: Boolean, default: false },
}
const TaskListItem = ({title,details,dueDate,important}:Props) => {
  return (
    <li className='list-row'>
        <input type="checkbox" name="" id="" className="checkbox checkbox-success"/>
        <h1 className={important ? "font-bold" : ""}>{title}</h1>
        <button className='btn btn-soft hover:btn-error'>X</button>
    </li>
  )
}

export default TaskListItem
