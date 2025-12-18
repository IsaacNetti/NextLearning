'use client';
import { useId, useRef } from "react";
import { completeTask } from "./actions"

const TaskListItemModalComplete = ({id}: {id:string}) => {
    const dialogId = useId();
    const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button"className="checkbox checkbox-primary"   
      onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-label="Mark task complete"/>
    
     <dialog id={dialogId} ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg">Mark as completed?</h3>
          <p className="py-2 text-base-content/70">
            This will move it out of your active list.
          </p>

          <div className="modal-action">
            <button type="button" className="btn" onClick={() => dialogRef.current?.close()}>
              Cancel
            </button>

            <form action={completeTask.bind(null, id)}>
              <button type="submit" className="btn btn-success">
                Yes, complete
              </button>
            </form>
          </div>
        </div>

        {/* click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close">close</button>
        </form>
      </dialog>
    </>
  )
}

export default TaskListItemModalComplete
