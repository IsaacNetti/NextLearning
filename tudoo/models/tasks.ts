import { Schema, model, models } from "mongoose";

const TasksSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    details: { type: String, default: "", trim: true },
    dueDate: { type: Date, default: null },
    important: { type: Boolean, default: false },
    done: { type: Boolean, default: false },
    listId: { type: String, default: "inbox", index: true },
  },
  { timestamps: true }
);

// Next hot reload can re-register models; use models.Task if it exists
export const Tasks = models.Tasks || model("Tasks", TasksSchema);
