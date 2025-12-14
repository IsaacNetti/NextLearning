"use server";

import { connectDB } from "@/lib/mongodb";
import { Tasks } from "@/models/tasks";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return;

  await connectDB();
  await Tasks.create({ title, done: false, important: false });

  // makes the page fetch fresh tasks again
  revalidatePath("/");
}

export async function deleteTask(taskId: string) {
  await connectDB();
  
  await Tasks.findByIdAndDelete(taskId);

  // refresh the page that shows the list
  revalidatePath("/");
}