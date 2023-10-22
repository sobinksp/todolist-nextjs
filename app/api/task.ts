import { ITask } from "@/types/TaskInterface";

const jsonServerUrl = "http://localhost:3004";

export default async function getTasks(): Promise<ITask[]> {
  const response = await fetch(`${jsonServerUrl}/tasks`);
  const tasks = await response.json();
  return tasks;
}
// export const getTasks = async (): Promise<ITask[]> => {
//   const response = await fetch(`${jsonServerUrl}/tasks`);
//   const tasks = await response.json();
//   return tasks;
// };
