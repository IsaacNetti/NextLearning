'use client';
import { useId, useRef } from "react";
import { deleteTask } from "./actions"

const TaskListItemModal = ({id}: {id:string}) => {
    const dialogId = useId();
 const dialogRef = useRef<HTMLDialogElement>(null);
    return (
    <>
      <button type="button" className='btn btn-soft hover:btn-error' 
       onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        aria-controls={dialogId}>X</button>

        <dialog id={dialogId} ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg">Delete task?</h3>
          <p className="py-2 text-base-content/70">
            This can’t be undone.
          </p>

          <div className="modal-action">
            {/* Cancel */}
            <button
              type="button"
              className="btn"
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </button>

            {/* Confirm delete */}
            <form action={deleteTask.bind(null, id)}>
              <button type="submit" className="btn btn-error">
                Delete
              </button>
            </form>
          </div>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close">close</button>
        </form>
      </dialog>
    </>

    
  )
}

export default TaskListItemModal
