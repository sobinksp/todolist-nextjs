import { ITask } from "@/types/TaskInterface";

const jsonServerUrl = "http://localhost:3004";

export async function getTasks(): Promise<ITask[]> {
  const res = await fetch(`${jsonServerUrl}/tasks`, { cache: "no-store" });
  const tasks = await res.json();
  return tasks;
}

export async function addNewTask(task: ITask): Promise<ITask[]> {
  const res = await fetch(`${jsonServerUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await res.json();
  return newTask;
}

export async function editTask(task: ITask): Promise<ITask[]> {
  const res = await fetch(`${jsonServerUrl}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const editedTask = await res.json();
  return editedTask;
}

export async function delTask(id: string): Promise<void> {
  await fetch(`${jsonServerUrl}/tasks/${id}`, {
    method: "DELETE",
  });
}
